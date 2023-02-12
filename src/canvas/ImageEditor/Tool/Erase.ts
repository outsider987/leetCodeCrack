import { getClientOffset } from '~/utils/canvas/coordinate';
import Point from '../Point';

class EraseTool {
  ctx: CanvasRenderingContext2D;
  size: number;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.ctx = ctx;
    this.size = 5;
    this.canvas = canvas;
    this.registerEvent(canvas);
    this.lastPoint = new Point(0, 0);
  }
  erase(point: Point) {
    const { ctx } = this;
    ctx.globalCompositeOperation = 'destination-out';

    ctx.beginPath();

    ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
    ctx.lineTo(point.x, point.y);
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();
    this.lastPoint.setPoint(point.x, point.y);
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
    const clientPoint = getClientOffset(e, this.canvas);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
  };

  mouseMove = (e) => {
    e.preventDefault();
    if (!this.isDrawStart) return;
    const clientPoint = this.getClientOffset(e);
    const point = new Point(clientPoint.x, clientPoint.y);

    this.erase(point);
  };

  mouseUp = (e) => {
    e.preventDefault();
    const { ctx } = this;
    ctx.globalCompositeOperation = 'source-over';

    this.isDrawStart = false;
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
