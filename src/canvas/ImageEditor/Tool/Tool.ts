import Views from '../Canvas/Canvas';

class BaseTool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  bufferCanvas: HTMLCanvasElement;
  bufferCtx: CanvasRenderingContext2D;
  private views: Views;
  constructor(views: Views) {
    this.views = views;
    this.canvas = views.canvas;
    this.bufferCanvas = views.bufferCanvas;
    this.bufferCtx = views.bufferCtx;
    this.ctx = views.ctx;
  }

  draw(e) {
    const { views } = this;
    views.draw();
  }
  mouseDown = (e) => {};

  mouseMove = (e) => {};

  mouseUp = (e) => {};

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
