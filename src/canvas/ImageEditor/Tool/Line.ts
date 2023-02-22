import { getClientOffset } from '~/utils/canvas/coordinate';
import Point from './../Point';
import Views from '../Canvas/Canvas';

class LineTool {
  ctx: CanvasRenderingContext2D;
  color: string;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  views: Views;
  constructor(views: Views) {
    this.canvas = views.drawCanvas;
    this.ctx = views.drawCtx;
    this.lastPoint = new Point(0, 0);
    this.setColor('white');

    this.views = views;
    this.registerEvent(views.canvas);
  }
  draw(e) {
    const { canvas, ctx, views } = this;

    const clientPoint = getClientOffset(e, views.canvas, views.zoomLevel);
    console.log(clientPoint);
    ctx.beginPath();

    ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
    ctx.lineTo(clientPoint.x, clientPoint.y);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.stroke();

    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
    this.views.draw();
  }

  setColor = (color) => {
    this.color = color;
  };

  mouseDown = (e) => {
    e.preventDefault();
    this.isDrawStart = true;
    const { canvas, views } = this;
    console.log(views.zoomLevel);
    const clientPoint = getClientOffset(e, views.canvas, views.zoomLevel);

    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
  };

  mouseMove = (e) => {
    e.preventDefault();
    if (!this.isDrawStart) return;

    this.draw(e);
  };

  mouseUp = (e) => {
    e.preventDefault();

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
export default LineTool;
