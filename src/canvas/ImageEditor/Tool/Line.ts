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
    console.log(this);
    const { canvas, ctx } = this;
    const { pageX, pageY } = e.touches ? e.touches[0] : e;
    const clientPint = getClientOffset(e, canvas);

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
    ctx.lineTo(clientPint.x, clientPint.y);
    ctx.stroke();
    const clientPoint = getClientOffset(e, canvas);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
    const lastImageData2 = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(lastImageData2);
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
    const clientPoint = getClientOffset(e, this.canvas);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);

    this.isDrawStart = true;
  };

  mouseMove = (e) => {
    e.preventDefault();
    if (!this.isDrawStart) return;

    this.draw(e);
    // this.lineCoordinates = this.getClientOffset(event);
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
