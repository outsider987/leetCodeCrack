import Brick from './Brick';
import DrawObject from './DrawObject';
import Paddle from './Paddle';

class Ball extends DrawObject {
  public radius: number;
  public dx: number;
  public dy: number;
  public resetX: number;
  public resetY: number;
  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string, canvas) {
    super();
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.ctx = ctx;
    this.dx = 0;
    this.dy = 0;
    this.canvas = canvas;
    this.resetX = x;
    this.resetY = y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    this.move();
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x + this.radius * 2 > this.canvas.width || this.x - this.radius * 2 < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
  }
  checkNeedSpeedUp(count: number, brickLegth: number) {
    if (count > brickLegth / 5) {
      let speed = 8;
      if (this.dx > 0) this.dx = speed;
      else this.dx = -speed;

      if (this.dy > 0) this.dy = speed;
      else this.dy = -speed;
    }
    if (count > brickLegth / 2) {
      let speed = 11;
      if (this.dx > 0) this.dx = speed;
      else this.dx = -speed;

      if (this.dy > 0) this.dy = speed;
      else this.dy = -speed;
    }
  }
  reset() {
    this.x = this.resetX;
    this.y = this.resetY;
    this.dx = 0;
    this.dy = 0;
  }

  start() {
    this.dx = 5;
    this.dy = -5;
  }

  collide(object: Paddle | Brick) {
    let xMin = object.x;
    let xMax = object.x + object.width;
    let yMin = object.y;
    let yMax = object.y + object.height;

    if (
      this.x + this.radius >= xMin &&
      this.x - this.radius <= xMax &&
      this.y + this.radius >= yMin &&
      this.y - this.radius <= yMax
    ) {
      return true;
    }

    return false;
  }
}

export default Ball;
