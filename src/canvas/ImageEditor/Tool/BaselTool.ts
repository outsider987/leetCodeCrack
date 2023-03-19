import Views from '../Canvas/Canvas';
import StateController from '../StateController/StateController';

class BaseTool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  bufferCanvas: HTMLCanvasElement;
  bufferCtx: CanvasRenderingContext2D;
  stateController: StateController;
  private views: Views;
  constructor(views: Views, stateController: StateController) {
    this.views = views;
    this.canvas = views.canvas;
    this.bufferCanvas = views.bufferCanvas;
    this.bufferCtx = views.bufferCtx;
    this.ctx = views.ctx;
    this.stateController = stateController;
  }

  draw(e) {
    const { views } = this;
    views.draw();
  }
  mouseDown = (e) => {};

  mouseMove = (e) => {};

  mouseUp = (e) => {};

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
  }
  unRegisterEvent(canvas) {
    canvas.removeEventListener('mousedown', this.mouseDown);
    canvas.removeEventListener('mousemove', this.mouseMove);
    canvas.removeEventListener('mouseup', this.mouseUp);
    canvas.removeEventListener('touchstart', this.mouseDown);
    canvas.removeEventListener('touchmove', this.mouseMove);
    canvas.removeEventListener('touchend', this.mouseUp);
  }
}
export default BaseTool;
