import { getClientOffset, getTransformedPoint } from '~/utils/canvas/coordinate';
import Layer from '../Layer/Layer';
import Point from './../Point';

class Views {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  bufferCanvas: HTMLCanvasElement;
  bufferCtx: CanvasRenderingContext2D;
  drawCanvas: HTMLCanvasElement;
  drawCtx: CanvasRenderingContext2D;
  zoomLevel = 1;
  lastView = null;
  layerArray: Layer[] = [];
  cameraOffsetX: number = 0;
  cameraOffsetY: number = 0;

  constructor() {}

  initializeCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    // this.bufferCanvas = document.createElement('canvas');
    // this.bufferCanvas = bufferCanvasRef;

    // this.drawCanvas = document.getElementById('buffer') as HTMLCanvasElement;
    this.bufferCanvas = document.createElement('canvas');
    this.bufferCanvas.width = canvas.width;
    this.bufferCanvas.height = canvas.height;
    this.bufferCtx = this.bufferCanvas.getContext('2d');

    // this.drawCanvas = document.getElementById('paint') as HTMLCanvasElement;
    this.drawCanvas = document.createElement('canvas');
    this.drawCanvas.width = canvas.width;
    this.drawCanvas.height = canvas.height;
    this.drawCtx = this.drawCanvas.getContext('2d');
    this.zoomLevel = 1;
    this.registerEvent(this.canvas);
    this.cameraOffsetX = canvas.width / 2;
    this.cameraOffsetY = canvas.height / 2;
  }

  async loadFile(file: File) {
    const { bufferCanvas, bufferCtx } = this;
    const layer = new Layer(bufferCtx, bufferCanvas);
    this.layerArray.push(layer);
    await layer.loadFile(file);
    this.draw();
  }

  draw() {
    const { ctx, bufferCanvas, drawCanvas, canvas, bufferCtx } = this;
    // bufferCtx.drawImage(drawCanvas, 0, 0);
    ctx.drawImage(bufferCanvas, 0, 0);

    // ctx.drawImage(canvas, 0, 0);
    // ctx.drawImage(drawCanvas, 0, 0);
  }

  zoom(e) {
    // const { canvas, ctx, bufferCanvas, bufferCtx, drawCtx, cameraOffsetX, cameraOffsetY } = this;
    // let MAX_ZOOM = 5;
    // let MIN_ZOOM = 0.1;
    // let SCROLL_SENSITIVITY = 0.0005;

    // const clientPoint = getClientOffset(e, canvas);
    // const zoomAmount = SCROLL_SENSITIVITY * e.deltaY;
    // this.zoomLevel -= zoomAmount;
    // this.zoomLevel = Math.min(this.zoomLevel, MAX_ZOOM);
    // this.zoomLevel = Math.max(this.zoomLevel, MIN_ZOOM);

    // ctx.translate(canvas.width / 2, canvas.height / 2);
    // ctx.scale(this.zoomLevel, this.zoomLevel);
    // ctx.translate(-cameraOffsetX, -cameraOffsetY);
    // this.draw();
    const { canvas, ctx, bufferCanvas, bufferCtx, drawCtx, cameraOffsetX, cameraOffsetY } = this;
    const currentTransformedCursor = getTransformedPoint(e, canvas, this.ctx);

    let MAX_ZOOM = 5;
    let MIN_ZOOM = 0.1;
    let SCROLL_SENSITIVITY = 0.0005;
    const zoomAmount = SCROLL_SENSITIVITY * e.deltaY;
    this.zoomLevel -= zoomAmount;
    this.zoomLevel = Math.min(this.zoomLevel, MAX_ZOOM);
    this.zoomLevel = Math.max(this.zoomLevel, MIN_ZOOM);

    if (this.zoomLevel === MAX_ZOOM || this.zoomLevel === MIN_ZOOM) return;
    const zoom = e.deltaY < 0 ? 1.1 : 0.9;

    // ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.translate(currentTransformedCursor.x, currentTransformedCursor.y);
    ctx.scale(zoom, zoom);
    ctx.translate(-currentTransformedCursor.x, -currentTransformedCursor.y);
    this.draw();
  }

  mouseDown = (e) => {
    // e.preventDefault();
    const clientPoint = getClientOffset(e, this.canvas);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);

    this.isDrawStart = true;
  };

  mouseMove = (e) => {
    const transformedCursorPosition = getTransformedPoint(e, this.canvas, this.ctx);
  };

  mouseUp = (e) => {};

  cleanCanvas() {
    const { canvas, ctx, bufferCanvas, bufferCtx, drawCtx } = this;
    // debugger;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  registerEvent(canvas) {
    // canvas.addEventListener('mousedown', this.mouseDown);
    canvas.addEventListener('mousemove', this.mouseMove);
    canvas.addEventListener('mouseup', this.mouseUp);
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp);
    canvas.addEventListener('wheel', this.zoom.bind(this));
  }
  unRegisterEvent(canvas) {
    // canvas.removeEventListener('mousedown', this.mouseDown(this));
    canvas.removeEventListener('mousemove', this.mouseMove(this));
    canvas.removeEventListener('mouseup', this.mouseUp(this));
    canvas.removeEventListener('touchstart', this.mouseDown(this));
    canvas.removeEventListener('touchmove', this.mouseMove(this));
    canvas.removeEventListener('touchend', this.mouseUp(this));
    canvas.removeEventListener('wheel', this.zoom(this));
  }
}
export default Views;
