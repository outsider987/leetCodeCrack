class Line {
  x;
  y;
  ctx: CanvasRenderingContext2D;
  color: string;
  canvas: HTMLCanvasElement;
  startPosition = { x: 0, y: 0 };
  lineCoordinates = { x: 0, y: 0 };
  private isDrawStart: boolean = false;
  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, canvas: HTMLCanvasElement) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.color = color;
    this.canvas = canvas;
    this.registerEvent(canvas, this.mouseDownListener, this.mouseMoveListener, this.mouseupListener);
  }
  draw() {
    this.ctx.beginPath();

    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(this.startPosition.x, this.startPosition.y);
    this.ctx.lineTo(this.lineCoordinates.x, this.lineCoordinates.y);
    this.ctx.stroke();
  }

  getClientOffset = (event) => {
    const { pageX, pageY } = event.touches ? event.touches[0] : event;
    const x = pageX - this.canvas.offsetLeft;
    const y = pageY - this.canvas.offsetTop;

    return {
      x,
      y,
    };
  };

  mouseDownListener = (event) => {
    this.startPosition = this.getClientOffset(event);
    this.isDrawStart = true;
  };

  mouseMoveListener = (event) => {
    if (!this.isDrawStart) return;

    this.lineCoordinates = this.getClientOffset(event);
    this.clearCanvas();
    this.draw();
  };

  mouseupListener = (event) => {
    this.isDrawStart = false;
  };

  clearCanvas = () => {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  registerEvent(canvas, mouseDownListener, mouseMoveListener, mouseupListener) {
    canvas.addEventListener('mousedown', mouseDownListener);
    canvas.addEventListener('mousemove', mouseMoveListener);
    canvas.addEventListener('mousemove', mouseupListener);
  }
}
export default Line;
