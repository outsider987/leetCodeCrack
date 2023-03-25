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
  scaleRect(level) {
    const width = this.right - this.left;
    const height = this.bottom - this.top;

    // Scale the width and height based on the scaleX and scaleY parameters
    const scaledWidth = width * level;
    const scaledHeight = height * level;

    // Calculate the new coordinates for the scaled rectangle
    const scaledLeft = this.left - (scaledWidth - width) / 2;
    const scaledTop = this.top - (scaledHeight - height) / 2;
    const scaledRight = scaledLeft + scaledWidth;
    const scaledBottom = scaledTop + scaledHeight;

    this.left = scaledLeft;
    this.top = scaledTop;
    this.right = scaledRight;
    this.bottom = scaledBottom;
  }
}
export default Rect;
