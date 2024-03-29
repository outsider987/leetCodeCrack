import { getTransformedPoints } from '~/utils/canvas/coordinate';
import Point from '../Point';
import Views from '../Canvas/Canvas';
import { IsInRect, IsOverBoundRect } from '~/utils/canvas/rect';
import BaseTool from './BaselTool';
import StateController from '../StateController/StateController';
import RasterViews from '../Canvas/RasterCanvas';
import { getCurrentZoom } from '~/utils/canvas/mainCanvas';
import {
  cropCursorChange,
  drawCropFiled,
  getCursorPoint,
  redrawRasterBoundBackGround,
} from '~/utils/canvas/rasterCanvas';
import Rect from '../Rect';

export enum CursorPoint {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom',
  topLeft = 'topLeft',
  topRight = 'topRight',
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomRight',
  move = 'move',
}

class CropTool extends BaseTool {
  size: number;
  lastPoint: Point;
  private isDrag: boolean = false;
  zoomBindObject;
  focusRect: Rect;
  originalRect: Rect;
  currentCusorPoint: string;

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
    const { ctx, rasterCanvas, canvas, rasterCtx, bufferCanvas, isDrag: isStart, focusRect } = this;

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
  onConfirm() {
    const { ctx, bufferCanvas, focusRect, bufferCtx, canvas } = this;
    const transform = ctx.getTransform();
    const currentZoom = getCurrentZoom(ctx);
    this.originalRect.setRect(
      transform.e,
      transform.f,
      transform.e + bufferCanvas.width * currentZoom,
      transform.f + bufferCanvas.height * currentZoom,
    );

    const { left, right, top, bottom } = focusRect;

    const dLeft = left - this.originalRect.left;
    const dRight = right - this.originalRect.right;
    const dTop = top - this.originalRect.top;
    const dBottom = bottom - this.originalRect.bottom;

    const widthRatio = bufferCanvas.width / this.originalRect.getWidth();
    const heightRatio = bufferCanvas.height / this.originalRect.getHeight();

    const imageData = bufferCtx.getImageData(
      dLeft * widthRatio,
      dTop * heightRatio,
      this.focusRect.getWidth() * widthRatio,
      this.focusRect.getHeight() * heightRatio,
    );
    this.bufferCanvas.width = imageData.width;
    this.bufferCanvas.height = imageData.height;

    bufferCtx.putImageData(imageData, 0, 0);

    // refine the focusRect and originalRect
    super.draw();
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
    this.draw();

    this.stateController.pushUndoStack();
  }

  zoom(e) {
    const { ctx, rasterCanvas, canvas, rasterCtx, bufferCanvas, originalRect, focusRect } = this;

    const currentZoom = getCurrentZoom(ctx); // helper function to get current zoom level

    const transform = ctx.getTransform();

    const currentOriginalRect = this.originalRect;
    const currentFocusRect = this.focusRect;

    const currentdLeft = currentOriginalRect.left - currentFocusRect.left;
    const currentdRight = currentOriginalRect.right - currentFocusRect.right;
    const currentdTop = currentOriginalRect.top - currentFocusRect.top;
    const currentdBottom = currentOriginalRect.bottom - currentFocusRect.bottom;

    this.originalRect.setRect(
      transform.e,
      transform.f,
      transform.e + bufferCanvas.width * currentZoom,
      transform.f + bufferCanvas.height * currentZoom,
    );

    const widthRatio = currentOriginalRect.getWidth() / currentFocusRect.getWidth();
    const heightRatio = currentOriginalRect.getHeight() / currentFocusRect.getHeight();

    this.focusRect.setRect(
      this.originalRect.left + widthRatio * currentdLeft,
      this.originalRect.top + heightRatio * currentdTop,
      this.originalRect.right + widthRatio * currentdRight,
      this.originalRect.bottom + heightRatio * currentdBottom,
    );

    const currentOriginalRect2 = this.originalRect;
    const currentFocusRect2 = this.focusRect;

    const currentdLeft2 = currentOriginalRect2.left - currentFocusRect2.left;
    const currentdRight2 = currentOriginalRect2.right - currentFocusRect2.right;
    const currentdTop2 = currentOriginalRect2.top - currentFocusRect2.top;
    const currentdBottom2 = currentOriginalRect2.bottom - currentFocusRect2.bottom;

    this.originalRect.setRect(
      transform.e,
      transform.f,
      transform.e + bufferCanvas.width * currentZoom,
      transform.f + bufferCanvas.height * currentZoom,
    );

    const widthRatio2 = currentOriginalRect.getWidth() / currentFocusRect.getWidth();
    const heightRatio2 = currentOriginalRect.getHeight() / currentFocusRect.getHeight();

    this.focusRect.setRect(
      this.originalRect.left + widthRatio2 * currentdLeft2,
      this.originalRect.top + heightRatio2 * currentdTop2,
      this.originalRect.right + widthRatio2 * currentdRight2,
      this.originalRect.bottom + heightRatio2 * currentdBottom2,
    );

    this.draw(e);
  }

  mouseDown = (e) => {
    e.preventDefault();
    this.isDrag = true;
    const { canvas, ctx } = this;
    const currentTransformedCursor = getTransformedPoints(e, canvas, ctx);
    const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
    this.currentCusorPoint = getCursorPoint({ x: offsetX, y: offsetY }, this.focusRect);

    this.lastPoint.setPoint(offsetX, offsetY);
  };
  cleanCanvas() {
    this.rasterCtx.clearRect(0, 0, this.rasterCanvas.width, this.rasterCanvas.height);
  }

  mouseMove = (e) => {
    const { canvas, ctx, bufferCanvas, originalRect, focusRect } = this;

    const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
    const point = { x: offsetX, y: offsetY };
    const currentZoom = getCurrentZoom(ctx);
    const clientWidth = bufferCanvas.width * currentZoom;
    const clientHeight = bufferCanvas.height * currentZoom;
    const MIN_DISTANCE = Math.min(clientWidth, clientHeight) > 50 ? 50 : Math.min(clientWidth, clientHeight);
    console.log(MIN_DISTANCE);
    e.preventDefault();
    if (!this.isDrag) {
      cropCursorChange(canvas, point, focusRect);
      return;
    }

    if (this.currentCusorPoint === CursorPoint.move) {
      let dx = offsetX - this.lastPoint.x;
      let dy = offsetY - this.lastPoint.y;

      // calculate new position
      const newLeft = focusRect.left + dx;
      const newRight = focusRect.right + dx;
      const newTop = focusRect.top + dy;
      const newBottom = focusRect.bottom + dy;

      // check whether new position is within bounds sides
      if (newLeft < originalRect.left) {
        dx = originalRect.left - focusRect.left;
      }
      if (newTop < originalRect.top) {
        dy = originalRect.top - focusRect.top;
      }
      if (newRight > originalRect.right) {
        dx = originalRect.right - focusRect.right;
      }
      if (newBottom > originalRect.bottom) {
        dy = originalRect.bottom - focusRect.bottom;
      }

      // update focusRect with modified dx and dy
      this.focusRect.left += dx;
      this.focusRect.right += dx;
      this.focusRect.top += dy;
      this.focusRect.bottom += dy;
      this.lastPoint.setPoint(offsetX, offsetY);
    }

    if (this.currentCusorPoint === CursorPoint.left) {
      this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), focusRect.right - MIN_DISTANCE);
    }
    if (this.currentCusorPoint === CursorPoint.top) {
      this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), focusRect.bottom - MIN_DISTANCE);
    }
    if (this.currentCusorPoint === CursorPoint.right) {
      this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), focusRect.left + MIN_DISTANCE);
    }
    if (this.currentCusorPoint === CursorPoint.bottom) {
      this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), focusRect.top + MIN_DISTANCE);
    }
    if (this.currentCusorPoint === CursorPoint.topLeft) {
      this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), focusRect.right - MIN_DISTANCE);
      this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), focusRect.bottom - MIN_DISTANCE);
    }
    if (this.currentCusorPoint === CursorPoint.topRight) {
      this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), focusRect.left + MIN_DISTANCE);
      this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), focusRect.bottom - MIN_DISTANCE);
    }
    if (this.currentCusorPoint === CursorPoint.bottomLeft) {
      this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), focusRect.right - MIN_DISTANCE);
      this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), focusRect.top + MIN_DISTANCE);
    }
    if (this.currentCusorPoint === CursorPoint.bottomRight) {
      this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), focusRect.left + MIN_DISTANCE);
      this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), focusRect.top + MIN_DISTANCE);
    }

    this.draw(e);
  };

  mouseUp = (e) => {
    e.preventDefault();
    const { ctx } = this;

    this.isDrag = false;
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

    this.cleanCanvas();
    this.canvas.style.cursor = 'default';
  }
}
export default CropTool;
