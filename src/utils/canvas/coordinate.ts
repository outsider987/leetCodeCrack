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
