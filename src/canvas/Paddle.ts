import DrawObject from './DrawObject';

class Paddle extends DrawObject {
  public width: number;
  public height: number;
  constructor(ctx: CanvasRenderingContext2D, x, y, width, height, color) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(dx) {
    this.x = dx - this.width / 2;
  }
}

export default Paddle;
