import { getTransformedPaintPoint, getTransformedPoint, getTransformedPoints } from '~/utils/canvas/coordinate';
import Point from '../Point';
import Views from '../Canvas/Canvas';

class PaintTool {
  ctx: CanvasRenderingContext2D;
  color: string;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  views: Views;
  constructor(views: Views) {
    this.lastPoint = new Point(0, 0);
    this.setColor('black');

    this.views = views;
    this.registerEvent(views.canvas);
  }
  draw(e) {
    const { canvas, ctx, views } = this;

    const currentTransformedCursor = getTransformedPoints(e, views.canvas, views.ctx);

    views.bufferCtx.beginPath();
    views.bufferCtx.moveTo(this.lastPoint.x, this.lastPoint.y);
    views.bufferCtx.lineTo(currentTransformedCursor.x, currentTransformedCursor.y);
    views.bufferCtx.strokeStyle = this.color;
    views.bufferCtx.lineWidth = 5;
    views.bufferCtx.lineCap = 'round';
    views.bufferCtx.stroke();
    views.bufferCtx.closePath();

    this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
    this.views.draw();
  }

  setColor = (color) => {
    this.color = color;
  };

  mouseDown = (e) => {
    e.preventDefault();
    this.isDrawStart = true;
    const { canvas, views, ctx } = this;

    const currentTransformedCursor = getTransformedPoints(e, views.canvas, views.ctx);
    this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
    this.draw(e);
  };

  mouseMove = (e) => {
    // e.preventDefault();
    if (!this.isDrawStart) return;

    this.draw(e);
  };

  mouseUp = (e) => {
    // e.preventDefault();

    this.isDrawStart = false;
    this.views.draw();
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
export default PaintTool;
