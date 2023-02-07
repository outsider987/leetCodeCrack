import DrawObject from './DrawObject';

class Brick extends DrawObject {
  public status: number;
  public destroyed: boolean;
  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, width, height, color) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.status = 1;
    this.ctx = ctx;
    this.destroyed = false;
  }

  draw() {
    if (this.status === 1) {
      this.ctx.beginPath();
      this.ctx.rect(this.x, this.y, this.width, this.height);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
    }
  }
  reset() {
    this.destroyed = false;
  }
}

export default Brick;
