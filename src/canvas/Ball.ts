import DrawObject from './DrawObject';

class Ball extends DrawObject {
  protected radius: number;
  protected dx: number;
  protected dy: number;

  constructor(x: number, y: number, radius, color, dx, dy) {
    super();
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
