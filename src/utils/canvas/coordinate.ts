export function getClientOffset(e, canvas: HTMLCanvasElement, scale = 1, offsetPoint?: { x: number; y: number }) {
  const { pageX, pageY } = e.touches ? e.touches[0] : e;

  // var offsetX=canvasOffset.left;
  // var offsetY=canvasOffset.top;
  const rect = canvas.getBoundingClientRect();
  // console.log(rect);
  console.log(`pageX: ${pageX}`);
  console.log(`offsetLeft: ${e}`);
  console.log(`scale:${scale}`);

  // const x = pageX - rect.left;
  // const y = pageY - rect.top;
  const x = (pageX - rect.left - canvas.width / 2) / scale + canvas.width / 2;
  const y = (pageY - rect.top - canvas.height / 2) / scale + canvas.height / 2;

  console.log(`final:${x}`);

  return {
    x,
    y,
  };
}

// export function getTransformedPoint(e, ctx: CanvasRenderingContext2D) {
//   const { offsetx: pageX, offsetY: pageY } = e.touches ? e.touches[0] : e;
//   const originalPoint = new DOMPoint(e.offsetx, e.offsetY);
//   return ctx.getTransform().invertSelf().transformPoint(originalPoint);
// }

export function getTransformedPoint(e, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
  const originalPoint = new DOMPoint(offsetX, offsetY);
  // const t = ctx.getTransform();
  // console.log(t);
  return ctx.getTransform().invertSelf().transformPoint(originalPoint);
}

export function getTransformedPaintPoint(e, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, scale = 1) {
  const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
  const rect = canvas.getBoundingClientRect();

  console.log(ctx.getTransform());

  const originalPoint = new DOMPoint(offsetX - rect.left, offsetY, rect.top);
  return ctx.getTransform().invertSelf().transformPoint(originalPoint);
}

export function getTransformedPoints(e, canvas, ctx) {
  const { offsetX, offsetY, pageX, pageY } = e.touches ? e.touches[0] : e;
  const originalPoint = new DOMPoint(offsetX, offsetY);
  const point = ctx.getTransform().invertSelf().transformPoint(originalPoint);
  const t = ctx.getTransform();
  console.log(t);
  const rect = canvas.getBoundingClientRect();
  const x = point.x;
  const y = point.y;
  return { x: x, y: y };
}
