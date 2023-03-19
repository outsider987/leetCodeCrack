import { getTransformedPoint } from '~/utils/canvas/coordinate';
import FileLayer from '../Layer/FileLayer';
import Point from './../Point';
import BackgroundLayer from '../Layer/BackgroundLayer';
import { getCurrentZoom, redrawBoundBackGround } from '~/utils/canvas/mainCanvas';
import { onload2promise } from '~/utils/image';
import { getNewSize } from '~/utils/canvas/rect';
import StateController from '../StateController/StateController';

class Views {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  bufferCanvas: HTMLCanvasElement;
  bufferCtx: CanvasRenderingContext2D;
  backgroundLayer: BackgroundLayer;

  zoomLevel = 1;
  lastView = null;
  layerArray: FileLayer[] = [];
  cameraOffsetX: number = 0;
  cameraOffsetY: number = 0;
  width: number;
  height: number;

  constructor() {}

  initializeCanvas(canvas: HTMLCanvasElement) {
    // initialize canvas
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.bufferCanvas = document.createElement('canvas');
    this.bufferCtx = this.bufferCanvas.getContext('2d');
    this.zoomLevel = 0;
    this.cameraOffsetX = 0;
    this.cameraOffsetY = 0;

    this.registerEvent(this.canvas);
  }

  async loadFile(file: File) {
    const { bufferCanvas, bufferCtx, canvas, ctx } = this;
    const layer = new FileLayer(bufferCanvas);
    this.layerArray.push(layer);
    const image = new Image();
    image.src = URL.createObjectURL(file);
    await onload2promise(image);

    const newSize = getNewSize(canvas, image);

    bufferCanvas.width = newSize.newWidth;
    bufferCanvas.height = newSize.newHeight;

    bufferCtx.clearRect(0, 0, canvas.width, canvas.height);
    bufferCtx.fillStyle = 'black';
    bufferCtx.fillRect(0, 0, canvas.width, canvas.height);

    let ratio = Math.min(bufferCanvas.width / image.width, bufferCanvas.height / image.height);
    let x = (bufferCanvas.width - image.width * ratio) / 2;
    let y = (bufferCanvas.height - image.height * ratio) / 2;

    bufferCtx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(0.5, 0.5);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.transform(1, 0, 0, 1, (canvas.width - bufferCanvas.width) / 2, (canvas.height - bufferCanvas.height) / 2);

    this.backgroundLayer = await new BackgroundLayer(this.bufferCanvas);
    this.draw();
  }

  draw() {
    const { ctx, bufferCanvas, canvas, bufferCtx } = this;

    redrawBoundBackGround(this.canvas);

    ctx.drawImage(this.backgroundLayer.getLayerCanvas(), 0, 0);

    ctx.drawImage(bufferCanvas, 0, 0);
  }

  zoom(e) {
    const { canvas, ctx, bufferCanvas } = this;
    const currentTransformedCursor = getTransformedPoint(e, canvas, this.ctx);

    const zoom = e.deltaY < 0 ? 1.1 : 0.9;
    const maxZoom = 15; // maximum zoom level
    const minZoom = 0.1; // minimum zoom level
    const currentZoom = getCurrentZoom(ctx); // helper function to get current zoom level

    // Calculate the new zoom level, making sure it stays within the maximum and minimum bounds
    const newZoom = Math.min(Math.max(currentZoom * zoom, minZoom), maxZoom);

    // Calculate the difference in zoom level between the new and old zoom levels
    const zoomDiff = newZoom / currentZoom;

    if (newZoom < 0.11) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(newZoom, newZoom);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
      ctx.transform(1, 0, 0, 1, (canvas.width - bufferCanvas.width) / 2, (canvas.height - bufferCanvas.height) / 2);
    } else {
      ctx.translate(currentTransformedCursor.x, currentTransformedCursor.y);
      ctx.scale(zoomDiff, zoomDiff);
      ctx.translate(-currentTransformedCursor.x, -currentTransformedCursor.y);
    }

    this.backgroundLayer.zoom(e, newZoom);

    this.draw();
  }

  mouseDown = (e) => {};

  mouseMove = (e) => {};

  mouseUp = (e) => {};

  cleanCanvas() {
    const { canvas, ctx, bufferCanvas, bufferCtx } = this;
    // debugger;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  registerEvent(canvas) {
    // canvas.addEventListener('mousedown', this.mouseDown);
    // canvas.addEventListener('mousemove', this.mouseMove);
    // canvas.addEventListener('mouseup', this.mouseUp);
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp);
    canvas.addEventListener('wheel', this.zoom.bind(this));
  }
  unRegisterEvent(canvas) {
    // canvas.removeEventListener('mousedown', this.mouseDown(this));
    // canvas.removeEventListener('mousemove', this.mouseMove(this));
    // canvas.removeEventListener('mouseup', this.mouseUp(this));
    canvas.removeEventListener('touchstart', this.mouseDown(this));
    canvas.removeEventListener('touchmove', this.mouseMove(this));
    canvas.removeEventListener('touchend', this.mouseUp(this));
    canvas.removeEventListener('wheel', this.zoom(this));
  }
}
export default Views;
