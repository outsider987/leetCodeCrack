export function getClientOffset(e, canvas: HTMLCanvasElement, scale = 1) {
  const { pageX, pageY } = e.touches ? e.touches[0] : e;
  const rect = canvas.getBoundingClientRect();
  const x = (pageX - rect.left) / scale;
  const y = (pageY - rect.top) / scale;

  return {
    x,
    y,
  };
}
