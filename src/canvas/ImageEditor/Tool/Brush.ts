import { getTransformedPaintPoint, getTransformedPoints } from '~/utils/canvas/coordinate';
import Point from '../Point';
import Views from '../Canvas/Canvas';
import BaseTool from './BaselTool';
import StateController from '../StateController/StateController';
import RasterViews from '../Canvas/RasterCanvas';

class BrushTool extends BaseTool {
  color: string;
  lastPoint: Point;
  private isDrawStart: boolean = false;

  size: number;
  constructor(views: Views, stateController: StateController, rasterViews: RasterViews) {
    super(views, stateController, rasterViews);
    this.lastPoint = new Point(0, 0);
    this.setColor('black');
    this.size = 5;
  }
  draw(e) {
    const { bufferCtx, canvas, ctx } = this;

    const currentTransformedCursor = getTransformedPoints(e, canvas, ctx);

    bufferCtx.beginPath();
    bufferCtx.moveTo(this.lastPoint.x, this.lastPoint.y);
    bufferCtx.lineTo(currentTransformedCursor.x, currentTransformedCursor.y);
    bufferCtx.strokeStyle = this.color;
    bufferCtx.lineWidth = this.size;
    bufferCtx.lineCap = 'round';
    bufferCtx.stroke();
    bufferCtx.closePath();

    this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
    super.draw(e);
  }

  setColor = (color) => {
    this.color = color;
  };
  setSize = (size) => {
    this.size = size;
  };

  mouseDown = (e) => {
    e.preventDefault();
    this.isDrawStart = true;
    const { canvas, ctx } = this;

    const currentTransformedCursor = getTransformedPoints(e, canvas, ctx);
    this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
    this.draw(e);
  };

  mouseMove = (e) => {
    if (!this.isDrawStart) return;

    this.draw(e);
  };

  mouseUp = (e) => {
    this.isDrawStart = false;
    this.draw(e);

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
export default BrushTool;
