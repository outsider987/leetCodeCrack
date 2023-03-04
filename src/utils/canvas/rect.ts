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
