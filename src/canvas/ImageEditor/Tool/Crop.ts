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

  zoom(e) {
    const { ctx, rasterCanvas, canvas, rasterCtx: rasterCtx, bufferCanvas, originalRect, focusRect } = this;

    const zoom = e.deltaY < 0 ? 1.1 : 0.9;
    const maxZoom = 15; // maximum zoom level
    const minZoom = 0.1; // minimum zoom level
    const currentZoom = getCurrentZoom(ctx); // helper function to get current zoom level

    // Calculate the new zoom level, making sure it stays within the maximum and minimum bounds
    const newZoom = Math.min(Math.max(currentZoom * zoom, minZoom), maxZoom);

    const transform = ctx.getTransform();
    this.originalRect.setRect(
      transform.e,
      transform.f,
      transform.e + bufferCanvas.width * currentZoom,
      transform.f + bufferCanvas.height * currentZoom,
    );
    const originalWidth = originalRect.right - originalRect.left;
    const originalHeight = originalRect.bottom - originalRect.top;

    const dx = originalRect.left - focusRect.left;
    const dy = originalRect.top - focusRect.top;

    const scaleX = (originalRect.right - originalRect.left) / (originalRect.right - originalRect.left - dx);
    const scaleY = (originalRect.bottom - originalRect.top) / (originalRect.bottom - originalRect.top - dy);

    const scaleFactor = Math.min(scaleX, scaleY);

    const newWidth = (focusRect.right - focusRect.left) * scaleFactor;
    const newHeight = (focusRect.bottom - focusRect.top) * scaleFactor;

    this.focusRect.setRect(
      transform.e,
      transform.f,
      transform.e + bufferCanvas.width * currentZoom,
      transform.f + bufferCanvas.height * currentZoom,
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
    const { canvas, ctx, originalRect, focusRect } = this;
    const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
    const point = { x: offsetX, y: offsetY };

    e.preventDefault();
    if (!this.isDrag) {
      cropCursorChange(canvas, point, focusRect);
      return;
    }

    if (this.currentCusorPoint === CursorPoint.move) {
      const dx = offsetX - this.lastPoint.x;
      const dy = offsetY - this.lastPoint.y;
      //   if (
      //     focusRect.left + dx < originalRect.left ||
      //     focusRect.right + dx > originalRect.right ||
      //     focusRect.top + dy < originalRect.top ||
      //     focusRect.bottom + dy > originalRect.bottom
      //   )
      //     return;
      if (focusRect.left + dx > originalRect.left || focusRect.right + dx < originalRect.right) {
        this.focusRect.left = Math.max(focusRect.left + dx, originalRect.left);
        this.focusRect.right = Math.min(focusRect.right + dx, originalRect.right);
      }

      this.focusRect.top += dy;
      this.focusRect.bottom += dy;
      this.lastPoint.setPoint(offsetX, offsetY);
    }

    if (this.currentCusorPoint === CursorPoint.left) {
      this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), originalRect.right);
    }
    if (this.currentCusorPoint === CursorPoint.top) {
      this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), originalRect.bottom);
    }

    if (this.currentCusorPoint === CursorPoint.right) {
      this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), originalRect.left);
    }
    if (this.currentCusorPoint === CursorPoint.bottom) {
      this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), originalRect.top);
    }
    if (this.currentCusorPoint === CursorPoint.topLeft) {
      this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), originalRect.right);
      this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), originalRect.bottom);
    }
    if (this.currentCusorPoint === CursorPoint.topRight) {
      this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), originalRect.left);
      this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), originalRect.bottom);
    }
    if (this.currentCusorPoint === CursorPoint.bottomLeft) {
      this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), originalRect.right);
      this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), originalRect.top);
    }
    if (this.currentCusorPoint === CursorPoint.bottomRight) {
      this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), originalRect.left);
      this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), originalRect.top);
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