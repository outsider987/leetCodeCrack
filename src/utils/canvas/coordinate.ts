export function getTransformedPoint(e, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
  const originalPoint = new DOMPoint(offsetX, offsetY);

  return ctx.getTransform().invertSelf().transformPoint(originalPoint);
}

export function getTransformedPaintPoint(e, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, scale = 1) {
  const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
  const rect = canvas.getBoundingClientRect();

  console.log(ctx.getTransform());

  const originalPoint = new DOMPoint(offsetX - rect.left, offsetY, rect.top);
  return ctx.getTransform().invertSelf().transformPoint(originalPoint);
}

export function getTransformedPoints(e, canvas: HTMLCanvasElement, ctx) {
  const { pageX, pageY } = e.touches ? e.touches[0] : e;
  const rect = canvas.getBoundingClientRect();
  const originalPoint = new DOMPoint(pageX - rect.left, pageY - rect.top);
  const point = ctx.getTransform().invertSelf().transformPoint(originalPoint);

  const x = point.x;
  const y = point.y;
  return { x: x, y: y };
}
