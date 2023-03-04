export function getCurrentZoom(ctx: CanvasRenderingContext2D) {
  // Extract the current transformation matrix from the context
  const matrix = ctx.getTransform();

  // Calculate the current zoom level as the square root of the determinant of the transformation matrix
  // (see https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix/determinant)
  return Math.sqrt(Math.abs(matrix.a * matrix.d - matrix.b * matrix.c));
}

export function redrawBoundBackGround(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
