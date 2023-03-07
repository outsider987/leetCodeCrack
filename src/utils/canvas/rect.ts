export function IsInRect(x, y, left, top, right, bottom) {
  return x >= left && x <= right && y >= top && y <= bottom;
}

export function IsOutRect(x, y, left, top, right, bottom) {
  return x < left || x > right || y < top || y > bottom;
}

export function IsOverBoundRect(
  innerLeft,
  innerTop,
  innerRight,
  innerBottom,
  outerLeft,
  outerTop,
  outerRight,
  outerBottom,
) {
  return innerLeft < outerLeft || innerTop < outerTop || innerRight > outerRight || innerBottom > outerBottom;
}

export function getNewSize(canvas, image) {
  const widthRatio = canvas.width / image.width;
  const heightRatio = canvas.height / image.height;

  // Use the smaller ratio to ensure that the image fits inside the canvas
  const scale = Math.min(widthRatio, heightRatio);

  // Calculate the new width and height of the image
  const newWidth = image.width * scale;
  const newHeight = image.height * scale;
  return { newWidth, newHeight };
}
