import Ball from './Ball';
import Brick from './Brick';
import Paddle from './Paddle';

class Game {
  protected ctx: CanvasRenderingContext2D;
  protected ball: Ball;
  protected paddle: Paddle;
  protected bricks: Brick[];
  protected score: number;
  public lives: number;
  protected canvas: HTMLCanvasElement;

  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.ctx = ctx;
    this.score = 0;
    this.canvas = canvas;
    let cw = (canvas.width = canvas.clientWidth);
    let ch = (canvas.height = canvas.clientHeight);

    this.ball = new Ball(ctx, canvas.width / 2, canvas.height - 30, 10, 'white', canvas);
    this.paddle = new Paddle(ctx, canvas.width / 2 - 50, canvas.height - 10, 100, 10, 'red');
    this.bricks = [];

    this.createBricks();
    this.registerEvent(canvas, this.ball, this.paddle);
    this.score = 0;
    this.lives = 3;
  }

  createBricks() {
    let width = this.canvas.width / 15;
    let paddingLeft = width;

    let height = this.canvas.height / 20;
    let paddingTop = height;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 9; j++) {
        this.bricks.push(
          new Brick(this.ctx, j * width + (paddingLeft * (j + 1)) / 2, paddingTop * (i + 1), width, height, 'yellow'),
        );
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.paddle.draw();
    this.ball.draw();
    this.bricks.forEach((brick) => !brick.destroyed && brick.draw());
    this.drawScore();
    this.drawLives();
  }

  update() {
    this.ball.update();
    this.checkCollision();
    this.ball.checkNeedSpeedUp(this.score, this.bricks.length);
    this.checkeFail();
    this.checkWin();
  }

  checkCollision() {
    this.bricks.forEach((brick) => {
      if (this.ball.collide(brick) && !brick.destroyed) {
        this.score++;
        this.ball.dy = -this.ball.dy;
        brick.destroyed = true;
      }
    });

    if (this.ball.collide(this.paddle)) {
      this.ball.dy = -this.ball.dy;
    }
  }

  checkWin() {
    return this.score === this.bricks.length;
  }

  drawScore() {
    this.ctx.font = '16px Arial';
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fillText('Score: ' + this.score, 8, 20);
  }

  drawLives() {
    this.ctx.font = '16px Arial';
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fillText('Lives: ' + this.lives, this.canvas.width - 65, 20);
  }
  checkeFail() {
    if (this.ball.y + this.ball.radius > this.canvas.height) {
      this.ball.reset();
      this.lives -= 1;

      return true;
    }
  }

  registerEvent(canvas: HTMLCanvasElement, ball: Ball, paddle: Paddle) {
    canvas.addEventListener('mousemove', function (e) {
      let mouseX = e.offsetX;

      paddle.update(mouseX);
    });
    document.addEventListener('keydown', function (e) {
      console.log(e);
      let val = 0;
      if (e.key === 'd') val = paddle.x + 1;
      else if (e.key === 'a') val = paddle.x - 1;
      if (e.code == 'Space') {
        ball.start();
      }
      paddle.update(val);
    });
  }
}

export default Game;
