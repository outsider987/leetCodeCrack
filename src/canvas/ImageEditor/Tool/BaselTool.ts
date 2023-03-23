import Views from '../Canvas/Canvas';
import RasterViews from '../Canvas/RasterCanvas';
import StateController from '../StateController/StateController';

class BaseTool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  bufferCanvas: HTMLCanvasElement;
  bufferCtx: CanvasRenderingContext2D;
  stateController: StateController;
  rasterCanvas: HTMLCanvasElement;
  rasterCtx: CanvasRenderingContext2D;
  private rasterViews: RasterViews;

  private views: Views;
  constructor(views: Views, stateController: StateController, rasterViews: RasterViews) {
    this.views = views;
    this.canvas = views.canvas;
    this.bufferCanvas = views.bufferCanvas;
    this.bufferCtx = views.bufferCtx;
    this.ctx = views.ctx;
    this.stateController = stateController;
    this.rasterCanvas = rasterViews.rasterCanvas;
    this.rasterCtx = rasterViews.rasterCtx;
    this.rasterViews = rasterViews;
  }

  draw(e) {
    const { views } = this;
    views.draw();
  }
  mouseDown = (e) => {};

  mouseMove = (e) => {};

  mouseUp = (e) => {};

  zoom(e) {}

  doCmd() {
    const { stateController } = this;
    stateController.pushUndoStack();
  }

  registerEvent(canvas) {
    canvas.addEventListener('mousedown', this.mouseDown);
    canvas.addEventListener('mousemove', this.mouseMove);
    canvas.addEventListener('mouseup', this.mouseUp);
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp);
    canvas.addEventListener('wheel', this.zoom);
  }
  unRegisterEvent(canvas) {
    canvas.removeEventListener('mousedown', this.mouseDown);
    canvas.removeEventListener('mousemove', this.mouseMove);
    canvas.removeEventListener('mouseup', this.mouseUp);
    canvas.removeEventListener('touchstart', this.mouseDown);
    canvas.removeEventListener('touchmove', this.mouseMove);
    canvas.removeEventListener('touchend', this.mouseUp);
    canvas.removeEventListener('wheel', this.zoom);
  }
}
export default BaseTool;
