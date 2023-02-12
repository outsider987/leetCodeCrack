import { getClientOffset } from '~/utils/canvas/coordinate';
import Point from './../Point';

class LineTool {
  ctx: CanvasRenderingContext2D;
  color: string;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.ctx = ctx;
    this.lastPoint = new Point(0, 0);
    this.setColor('white');
    this.canvas = canvas;
    this.registerEvent(canvas);
    console.log('line');
  }
  draw(e) {
    const { canvas, ctx } = this;
    const clientPoint = getClientOffset(e, canvas);
    ctx.beginPath();

    ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
    ctx.lineTo(clientPoint.x, clientPoint.y);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.stroke();

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
  setColor = (color) => {
    this.color = color;
  };

  mouseDown = (e) => {
    e.preventDefault();
    this.isDrawStart = true;
    const clientPoint = getClientOffset(e, this.canvas);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
  };

  mouseMove = (e) => {
    e.preventDefault();
    if (!this.isDrawStart) return;

    this.draw(e);
    this.clearCanvas();
  };

  mouseUp = (e) => {
    e.preventDefault();

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
export default LineTool;
