import DrawObject from './DrawObject';

class Paddle extends DrawObject {
  protected width: number;
  protected height: number;
  constructor(x, y, width, height, color) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(dx) {
    this.x += dx;
  }
}
