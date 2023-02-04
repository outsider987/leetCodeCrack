class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.bricks = [];
    this.createBricks();
    this.score = 0;
    this.lives = 3;
  }

  createBricks() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 9; j++) {
        this.bricks.push(new Brick(this, j * 60 + 30, i * 20 + 30));
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.paddle.draw();
    this.ball.draw();
    this.bricks.forEach((brick) => brick.draw());
    this.drawScore();
    this.drawLives();
  }

  update() {
    this.ball.update();
    this.paddle.update();
    this.checkCollision();
    this.checkWin();
  }

  checkCollision() {
    this.bricks.forEach((brick) => {
      if (this.ball.collide(brick)) {
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
    if (this.score === this.bricks.length) {
      alert('You win!');
      document.location.reload();
    }
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
}
