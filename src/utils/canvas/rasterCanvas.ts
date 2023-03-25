import Rect from '~/canvas/ImageEditor/Rect';
import { getCurrentZoom } from './mainCanvas';
import { IsInRect } from './rect';
import { CursorPoint } from '~/canvas/ImageEditor/Tool/Crop';

export function redrawRasterBoundBackGround(rasterCanvas: HTMLCanvasElement) {
  const ctx = rasterCanvas.getContext('2d');
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, rasterCanvas.width, rasterCanvas.height);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, rasterCanvas.width, rasterCanvas.height);
  ctx.restore();
}

export function drawCropFiled(
  ctx,
  bufferCanvas,
  rasterCtx: CanvasRenderingContext2D,
  rasterCanvas,
  isDrawOdd: boolean,
  focusRect: Rect,
) {
  const lineWidth = 2;

  redrawRasterBoundBackGround(rasterCanvas);
  const transform = ctx.getTransform();
  const currentZoom = getCurrentZoom(ctx);

  rasterCtx.clearRect(focusRect.left, focusRect.top, focusRect.getWidth(), focusRect.getHeight());
  rasterCtx.strokeStyle = 'white';
  rasterCtx.strokeRect(
    focusRect.left - lineWidth,
    focusRect.top - lineWidth,
    focusRect.getWidth() + lineWidth * 2,
    focusRect.getHeight() + lineWidth * 2,
  );

  // Draw vertical lines
  for (let i = 0; i < 4; i++) {
    if ([0, 3].includes(i) || !isDrawOdd) continue;
    rasterCtx.beginPath();
    rasterCtx.strokeStyle = 'white';
    rasterCtx.lineWidth = lineWidth;
    rasterCtx.moveTo(focusRect.left + (i * focusRect.getWidth()) / 3, focusRect.top);
    rasterCtx.lineTo(focusRect.left + (i * focusRect.getWidth()) / 3, focusRect.top + focusRect.getHeight());
    rasterCtx.stroke();
    rasterCtx.closePath();
  }

  // Draw horizontal lines
  for (let i = 0; i < 4; i++) {
    if ([0, 3].includes(i) || !isDrawOdd) continue;
    rasterCtx.beginPath();
    rasterCtx.strokeStyle = 'white';
    rasterCtx.lineWidth = lineWidth;
    rasterCtx.moveTo(focusRect.left, focusRect.top + (i * focusRect.getHeight()) / 3);
    rasterCtx.lineTo(focusRect.left + focusRect.getWidth(), focusRect.top + (i * focusRect.getHeight()) / 3);
    rasterCtx.stroke();
    rasterCtx.closePath();
  }
}

export function cropCursorChange(canvas: HTMLCanvasElement, point: { x; y }, originalRect: Rect) {
  canvas.style.cursor = 'default';
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

    if (isTop || isBottom) {
      canvas.style.cursor = 'ns-resize';
    }
    if (isleft || isRight) {
      canvas.style.cursor = 'ew-resize';
    }

    if (isleft && isTop) {
      canvas.style.cursor = 'nw-resize';
    }
    if (isleft && isBottom) {
      canvas.style.cursor = 'sw-resize';
    }
    if (isRight && isTop) {
      canvas.style.cursor = 'ne-resize';
    }
    if (isRight && isBottom) {
      canvas.style.cursor = 'se-resize';
    }
  } else {
    canvas.style.cursor = 'move';
  }
}

export function getCursorPoint(point: { x; y }, focusRect: Rect) {
  const isOutside = !IsInRect(point.x, point.y, focusRect.left, focusRect.top, focusRect.right, focusRect.bottom);
  if (isOutside) {
    const isleft = point.x < focusRect.left;
    const isTop = point.y < focusRect.top;
    const isRight = point.x > focusRect.right;
    const isBottom = point.y > focusRect.bottom;

    if (isleft && isTop) {
      return CursorPoint.topLeft;
    }
    if (isleft && isBottom) {
      return CursorPoint.bottomLeft;
    }
    if (isRight && isTop) {
      return CursorPoint.topRight;
    }
    if (isRight && isBottom) {
      return CursorPoint.bottomRight;
    }
    if (isTop) {
      return CursorPoint.top;
    }
    if (isleft) {
      return CursorPoint.left;
    }
    if (isRight) {
      return CursorPoint.right;
    }
    if (isBottom) {
      return CursorPoint.bottom;
    }
  } else {
    return CursorPoint.move;
  }
}
