import Point from './Point';

class Line {
  ctx: CanvasRenderingContext2D;
  color: string;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  constructor(ctx: CanvasRenderingContext2D, color: string, canvas: HTMLCanvasElement) {
    this.ctx = ctx;
    this.lastPoint = new Point(0, 0);
    this.color = color;
    this.canvas = canvas;
    this.registerEvent(canvas);
  }
  draw(e) {
    const { canvas, ctx } = this;
    const { pageX, pageY } = e.touches ? e.touches[0] : e;
    const rect = canvas.getBoundingClientRect();

    const x = pageX - rect.left;
    const y = pageY - rect.top;

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    const clientPoint = this.getClientOffset(e);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
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
    const clientPoint = this.getClientOffset(e);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);

    this.isDrawStart = true;
  };

  mouseMove = (e) => {
    if (!this.isDrawStart) return;

    this.draw(e);
    // this.lineCoordinates = this.getClientOffset(event);
    this.clearCanvas();
  };

  mouseUp = (event) => {
    console.log();
    this.isDrawStart = false;
  };

  clearCanvas = () => {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  registerEvent(canvas) {
    canvas.addEventListener('mousedown', this.mouseDown.bind(this));
    canvas.addEventListener('mousemove', this.mouseMove.bind(this));
    canvas.addEventListener('mouseup', this.mouseUp.bind(this));
    canvas.addEventListener('touchstart', this.mouseDown.bind(this));
    canvas.addEventListener('touchmove', this.mouseMove.bind(this));
    canvas.addEventListener('touchend', this.mouseUp.bind(this));
  }
}
export default Line;
