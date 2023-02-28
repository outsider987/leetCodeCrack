import { getClientOffset, getTransformedPoints } from '~/utils/canvas/coordinate';
import Point from '../Point';
import Views from '../Canvas/Canvas';

class EraseTool {
  ctx: CanvasRenderingContext2D;
  size: number;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  views: Views;
  eraserPath: { x: number; y: number }[];
  constructor(views: Views) {
    this.canvas = views.bufferCanvas;
    this.ctx = views.bufferCtx;
    this.lastPoint = new Point(0, 0);
    this.views = views;
    this.registerEvent(views.canvas);
    this.eraserPath = [];
  }
  erase(point: Point) {
    const { ctx, views, eraserPath } = this;

    ctx.beginPath();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
    ctx.lineTo(point.x, point.y);
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.closePath();
    this.lastPoint.setPoint(point.x, point.y);

    eraserPath.push({ x: point.x, y: point.y });

    const testBuifferCanvas = document.getElementById('buffer') as HTMLCanvasElement;
    const ctx2 = testBuifferCanvas.getContext('2d');
    ctx2.putImageData(views.bufferCtx.getImageData(0, 0, views.bufferCanvas.width, views.bufferCanvas.height), 0, 0);
    views.draw();

    // views.bufferCtx.beginPath();
    // views.bufferCtx.moveTo(this.lastPoint.x, this.lastPoint.y);
    // views.bufferCtx.lineTo(point.x, point.y);

    // views.bufferCtx.lineWidth = 5;
    // views.bufferCtx.lineCap = 'round';
    // views.bufferCtx.stroke();
    // views.bufferCtx.closePath();

    // this.lastPoint.setPoint(point.x, point.y);
    // ctx.putImageData(views.bufferCtx.getImageData(0, 0, views.bufferCanvas.width, views.bufferCanvas.height), 0, 0);
    // this.views.draw();
  }

  mouseDown = (e) => {
    e.preventDefault();

    this.isDrawStart = true;
    const { canvas, views, eraserPath } = this;
    const currentTransformedCursor = getTransformedPoints(e, views.canvas, views.ctx);
    eraserPath.push({ x: currentTransformedCursor.x, y: currentTransformedCursor.y });
    this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
  };

  mouseMove = (e) => {
    const { canvas, ctx, views } = this;
    e.preventDefault();
    if (!this.isDrawStart) return;

    const currentTransformedCursor = getTransformedPoints(e, views.canvas, views.ctx);
    const point = new Point(currentTransformedCursor.x, currentTransformedCursor.y);

    this.erase(point);
  };

  mouseUp = (e) => {
    e.preventDefault();
    const { ctx, views } = this;
    views.bufferCtx.globalCompositeOperation = 'source-over';
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
