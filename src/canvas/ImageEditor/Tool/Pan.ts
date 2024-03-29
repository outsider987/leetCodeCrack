import { getTransformedPoints } from '~/utils/canvas/coordinate';
import Point from '../Point';
import Views from '../Canvas/Canvas';
import { IsOverBoundRect } from '~/utils/canvas/rect';
import BaseTool from './BaselTool';
import StateController from '../StateController/StateController';
import RasterViews from '../Canvas/RasterCanvas';

class PanTool extends BaseTool {
  ctx: CanvasRenderingContext2D;
  size: number;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isPanStart: boolean = false;

  constructor(views: Views, stateController: StateController, rasterViews: RasterViews) {
    super(views, stateController, rasterViews);

    this.lastPoint = new Point(0, 0);
  }
  draw(e) {
    const { ctx, canvas } = this;
    const currentTransformedCursor = getTransformedPoints(e, canvas, ctx);
    ctx.translate(currentTransformedCursor.x - this.lastPoint.x, currentTransformedCursor.y - this.lastPoint.y);

    super.draw(e);
  }

  mouseDown = (e) => {
    e.preventDefault();

    this.isPanStart = true;
    const { canvas, ctx } = this;
    const currentTransformedCursor = getTransformedPoints(e, canvas, ctx);

    this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
  };

  mouseMove = (e) => {
    const { canvas, ctx } = this;
    e.preventDefault();
    if (!this.isPanStart) return;

    this.draw(e);
  };

  mouseUp = (e) => {
    e.preventDefault();
    const { ctx } = this;

    this.isPanStart = false;
    super.doCmd();
  };

  registerEvent() {
    const { canvas } = this;
    canvas.addEventListener('mousedown', this.mouseDown);
    canvas.addEventListener('mousemove', this.mouseMove);
    canvas.addEventListener('mouseup', this.mouseUp);
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp);
  }
  unRegisterEvent() {
    const { canvas } = this;
    canvas.removeEventListener('mousedown', this.mouseDown);
    canvas.removeEventListener('mousemove', this.mouseMove);
    canvas.removeEventListener('mouseup', this.mouseUp);
    canvas.removeEventListener('touchstart', this.mouseDown);
    canvas.removeEventListener('touchmove', this.mouseMove);
    canvas.removeEventListener('touchend', this.mouseUp);
  }
}
export default PanTool;
