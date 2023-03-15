import { getTransformedPoints } from '~/utils/canvas/coordinate';
import Point from '../Point';
import Views from '../Canvas/Canvas';
import { IsOverBoundRect } from '~/utils/canvas/rect';

class PanTool {
  ctx: CanvasRenderingContext2D;
  size: number;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isPanStart: boolean = false;
  views: Views;

  constructor(views: Views) {
    this.canvas = views.canvas;
    this.ctx = views.ctx;
    this.lastPoint = new Point(0, 0);
    this.views = views;
    this.registerEvent(views.canvas);
  }
  paning(point: Point) {
    const { ctx, views, canvas } = this;

    const OutsideRect = canvas.getBoundingClientRect();

    ctx.translate(point.x - this.lastPoint.x, point.y - this.lastPoint.y);
    const materix = ctx.getTransform();
    // if (
    //   IsOverBoundRect(
    //     materix.e,
    //     materix.f,
    //     materix.e + canvas.width * materix.a,
    //     materix.f + canvas.height * materix.d,
    //     0,
    //     0,
    //     canvas.width,
    //     canvas.height,
    //   ) &&
    //   getCurrentZoom(ctx) < 1
    // ) {
    //   return;
    // }
    views.draw();
  }

  mouseDown = (e) => {
    e.preventDefault();

    this.isPanStart = true;
    const { canvas, views } = this;
    const currentTransformedCursor = getTransformedPoints(e, views.canvas, views.ctx);

    this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
  };

  mouseMove = (e) => {
    const { canvas, ctx, views } = this;
    e.preventDefault();
    if (!this.isPanStart) return;

    const currentTransformedCursor = getTransformedPoints(e, views.canvas, views.ctx);
    const point = new Point(currentTransformedCursor.x, currentTransformedCursor.y);

    this.paning(point);
  };

  mouseUp = (e) => {
    e.preventDefault();
    const { ctx, views } = this;

    this.isPanStart = false;
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
export default PanTool;
