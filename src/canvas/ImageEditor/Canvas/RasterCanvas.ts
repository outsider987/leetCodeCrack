import FileLayer from '../Layer/FileLayer';
import { getNewSize } from '~/utils/canvas/rect';
import { Tools } from '../Tool';
import CropTool from '../Tool/Crop';

const modeType = {
  crop: Tools.CropTool.name,
};

class RasterViews {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  rasterCanvas: HTMLCanvasElement;
  rasterCtx: CanvasRenderingContext2D;
  bufferCanvas: HTMLCanvasElement;
  bufferCtx: CanvasRenderingContext2D;

  zoomLevel = 1;
  lastView = null;
  layerArray: FileLayer[] = [];
  cameraOffsetX: number = 0;
  cameraOffsetY: number = 0;
  width: number;
  height: number;
  mode: keyof typeof modeType;
  currentInstance: CropTool;

  constructor() {}

  initializeCanvas(canvas: HTMLCanvasElement, rasterCanvas: HTMLCanvasElement, bufferCanvas: HTMLCanvasElement) {
    // initialize canvas
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.rasterCanvas = rasterCanvas;
    const image = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
    const newSize = getNewSize(canvas, image);
    this.rasterCanvas.width = newSize.newWidth;
    this.rasterCanvas.height = newSize.newHeight;

    this.rasterCtx = rasterCanvas.getContext('2d');
    this.bufferCanvas = bufferCanvas;
    this.bufferCtx = bufferCanvas.getContext('2d');

    this.zoomLevel = 0;
    this.cameraOffsetX = 0;
    this.cameraOffsetY = 0;

    // this.registerEvent(this.canvas);
  }

  draw() {
    const { ctx, rasterCanvas, canvas, rasterCtx, bufferCanvas } = this;
    if (this.currentInstance) {
      this.currentInstance.resetRect();
      this.currentInstance.draw();
    }
  }

  zoom(e) {
    // this.draw();
  }
  setInstance(instance) {
    this.currentInstance = instance;
  }

  mouseDown = (e) => {};

  mouseMove = (e) => {};

  mouseUp = (e) => {};

  cleanCanvas() {
    const { canvas, ctx, rasterCanvas, rasterCtx } = this;

    rasterCtx.setTransform(1, 0, 0, 1, 0, 0);
    rasterCtx.clearRect(0, 0, rasterCanvas.width, rasterCanvas.height);
  }

  registerEvent(canvas) {
    canvas.addEventListener('mousedown', this.mouseDown);
    canvas.addEventListener('mousemove', this.mouseMove);
    canvas.addEventListener('mouseup', this.mouseUp);
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp);
    // canvas.addEventListener('wheel', this.zoom.bind(this));
  }
  unRegisterEvent(canvas) {
    canvas.removeEventListener('mousedown', this.mouseDown);
    canvas.removeEventListener('mousemove', this.mouseMove);
    canvas.removeEventListener('mouseup', this.mouseUp);
    canvas.removeEventListener('touchstart', this.mouseDown);
    canvas.removeEventListener('touchmove', this.mouseMove);
    canvas.removeEventListener('touchend', this.mouseUp);
    // canvas.removeEventListener('wheel', this.zoom);
  }
}
export default RasterViews;
