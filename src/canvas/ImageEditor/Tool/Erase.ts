import { getClientOffset } from '~/utils/canvas/coordinate';
import Point from '../Point';
import Views from '../Canvas/Canvas';

class EraseTool {
  ctx: CanvasRenderingContext2D;
  size: number;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  views: Views;
  constructor(views: Views) {
    this.canvas = views.bufferCanvas;
    this.ctx = views.bufferCtx;
    this.lastPoint = new Point(0, 0);
    this.views = views;
    this.registerEvent(views.canvas);
  }
  erase(point: Point) {
    const { ctx, views } = this;

    ctx.globalCompositeOperation = 'destination-out';

    ctx.beginPath();

    ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
    ctx.lineTo(point.x, point.y);
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();
    this.lastPoint.setPoint(point.x, point.y);
    views.draw();
  }

  mouseDown = (e) => {
    e.preventDefault();
    this.isDrawStart = true;
    const { canvas, views } = this;
    const clientPoint = getClientOffset(e, views.canvas, views.zoomLevel);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
  };

  mouseMove = (e) => {
    const { canvas, ctx, views } = this;
    e.preventDefault();
    if (!this.isDrawStart) return;
    const clientPoint = getClientOffset(e, views.canvas, views.zoomLevel);
    const point = new Point(clientPoint.x, clientPoint.y);

    this.erase(point);
  };

  mouseUp = (e) => {
    e.preventDefault();
    const { ctx, views } = this;
    ctx.globalCompositeOperation = 'source-over';
    views.draw();
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
