import { getTransformedPoints } from '~/utils/canvas/coordinate';
import Point from '../Point';
import Views from '../Canvas/Canvas';
import { IsInRect, IsOverBoundRect } from '~/utils/canvas/rect';
import BaseTool from './BaselTool';
import StateController from '../StateController/StateController';
import RasterViews from '../Canvas/RasterCanvas';
import { getCurrentZoom } from '~/utils/canvas/mainCanvas';
import { cropCursorChange, drawCropFiled, redrawRasterBoundBackGround } from '~/utils/canvas/rasterCanvas';
import Rect from '../Rect';

class CropTool extends BaseTool {
  size: number;
  lastPoint: Point;
  private isStart: boolean = false;
  zoomBindObject;
  focusRect: Rect;
  originalRect: Rect;

  constructor(views: Views, stateController: StateController, rasterViews: RasterViews) {
    super(views, stateController, rasterViews);
    const { ctx, bufferCanvas } = this;
    this.lastPoint = new Point(0, 0);
    this.zoomBindObject = this.zoom.bind(this, views.canvas);

    const transform = ctx.getTransform();
    const currentZoom = getCurrentZoom(ctx);
    this.originalRect = new Rect(
      transform.e,
      transform.f,
      transform.e + bufferCanvas.width * currentZoom,
      transform.f + bufferCanvas.height * currentZoom,
    );
    this.focusRect = new Rect(
      transform.e,
      transform.f,
      transform.e + bufferCanvas.width * currentZoom,
      transform.f + bufferCanvas.height * currentZoom,
    );
  }
  draw(e?) {
    const { ctx, rasterCanvas, canvas, rasterCtx, bufferCanvas, isStart, focusRect } = this;

    drawCropFiled(ctx, bufferCanvas, rasterCtx, rasterCanvas, isStart, focusRect);
    const transform = ctx.getTransform();
    const currentZoom = getCurrentZoom(ctx);
    this.originalRect.setRect(
      transform.e,
      transform.f,
      transform.e + bufferCanvas.width * currentZoom,
      transform.f + bufferCanvas.height * currentZoom,
    );
  }
  resetRect() {
    const { ctx, bufferCanvas } = this;
    const transform = ctx.getTransform();
    const currentZoom = getCurrentZoom(ctx);
    this.originalRect.setRect(
      transform.e,
      transform.f,
      transform.e + bufferCanvas.width * currentZoom,
      transform.f + bufferCanvas.height * currentZoom,
    );
    this.focusRect.setRect(
      transform.e,
      transform.f,
      transform.e + bufferCanvas.width * currentZoom,
      transform.f + bufferCanvas.height * currentZoom,
    );
  }

  zoom(e) {
    const { ctx, rasterCanvas, canvas, rasterCtx: rasterCtx, bufferCanvas } = this;

    this.draw(e);
  }

  mouseDown = (e) => {
    e.preventDefault();
    this.isStart = true;
    const { canvas, ctx } = this;
    const currentTransformedCursor = getTransformedPoints(e, canvas, ctx);

    this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
  };
  cleanCanvas() {
    this.rasterCtx.clearRect(0, 0, this.rasterCanvas.width, this.rasterCanvas.height);
  }

  mouseMove = (e) => {
    const { canvas, ctx, originalRect } = this;
    const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
    const point = { x: offsetX, y: offsetY };
    cropCursorChange(canvas, point, originalRect);

    e.preventDefault();
    if (!this.isStart) return;
    const isOutside = !IsInRect(
      point.x,
      point.y,
      originalRect.left,
      originalRect.top,
      originalRect.right,
      originalRect.bottom,
    );
    if (isOutside) {
      const isleft = point.x < originalRect.left;
      const isTop = point.y < originalRect.top;
      const isRight = point.x > originalRect.right;
      const isBottom = point.y > originalRect.bottom;

      if (isTop && isRight) {
      }
      if (isBottom && isRight) {
      }

      if (isleft && isTop) {
      }
      if (isRight && isBottom) {
      }
      if (isTop) {
        this.focusRect.top = offsetY;
      }
      if (isBottom) {
        this.focusRect.bottom = offsetY;
      }
      if (isleft) {
        this.focusRect.left = offsetX;
      }
      if (isRight) {
        this.focusRect.right = offsetX;
      }
    }

    this.draw(e);
  };

  mouseUp = (e) => {
    e.preventDefault();
    const { ctx } = this;

    this.isStart = false;
    this.draw(e);
  };

  registerEvent() {
    const { canvas } = this;

    canvas.addEventListener('mousedown', this.mouseDown);
    canvas.addEventListener('mousemove', this.mouseMove);
    canvas.addEventListener('mouseup', this.mouseUp);
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp);
    canvas.addEventListener('wheel', this.zoomBindObject);
    canvas.addEventListener('resize', this.zoomBindObject);
  }
  unRegisterEvent() {
    const { canvas } = this;

    canvas.removeEventListener('mousedown', this.mouseDown);
    canvas.removeEventListener('mousemove', this.mouseMove);
    canvas.removeEventListener('mouseup', this.mouseUp);
    canvas.removeEventListener('touchstart', this.mouseDown);
    canvas.removeEventListener('touchmove', this.mouseMove);
    canvas.removeEventListener('touchend', this.mouseUp);
    canvas.removeEventListener('wheel', this.zoomBindObject);
    canvas.removeEventListener('resize', this.zoomBindObject);
    this.cleanCanvas();
    this.canvas.style.cursor = 'default';
  }
}
export default CropTool;
