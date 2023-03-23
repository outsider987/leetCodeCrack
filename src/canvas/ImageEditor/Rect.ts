class Rect {
  left;
  top;
  right;
  bottom;
  constructor(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
  setRect(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  getWidth() {
    return this.right - this.left;
  }
  getHeight() {
    return this.bottom - this.top;
  }
}
export default Rect;
