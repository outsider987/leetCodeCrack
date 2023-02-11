export function getClientOffset(e, canvas: HTMLCanvasElement) {
  const { pageX, pageY } = e.touches ? e.touches[0] : e;
  const rect = canvas.getBoundingClientRect();
  const x = pageX - rect.left;
  const y = pageY - rect.top;

  return {
    x,
    y,
  };
}
