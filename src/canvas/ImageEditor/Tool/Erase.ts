import Point from '../Point';

class EraseTool {
  ctx: CanvasRenderingContext2D;
  size: number;
  canvas: HTMLCanvasElement;

  private isDrawStart: boolean = false;
  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.ctx = ctx;
    this.size = 5;
    this.canvas = canvas;
    this.registerEvent(canvas);
  }
  erase(point: Point) {
    this.ctx.clearRect(point.x, point.y, this.size, this.size);
  }

  getClientOffset = (e) => {
    const { canvas } = this;
    const { pageX, pageY } = e.touches ? e.touches[0] : e;
    const rect = canvas.getBoundingClientRect();
    const x = pageX - rect.left;
    const y = pageY - rect.top;

    return {
      x,
      y,
    };
  };

  mouseDown = (e) => {
    e.preventDefault();
    this.isDrawStart = true;
  };

  mouseMove = (e) => {
    e.preventDefault();
    if (!this.isDrawStart) return;
    const clientPoint = this.getClientOffset(e);
    const point = new Point(clientPoint.x, clientPoint.y);

    this.erase(point);

    this.clearCanvas();
  };

  mouseUp = (e) => {
    e.preventDefault();
    console.log();
    this.isDrawStart = false;
  };

  clearCanvas = () => {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

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
export default EraseTool;
