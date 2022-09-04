import { detectCollision } from "./collisionDetection.js";

export default class Ball {
  constructor(game) {
    this.img = document.getElementById("imgBall");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;
    this.size = 16;
    this.reset();
  }

  reset() {
    this.position = { x: 10, y: 520 };
    this.speed = { x: 5, y: -6 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //Wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    //Wall on top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    //wall on bottom
    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    //check collision with paddle
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
      if (
        this.position.x <
        this.game.paddle.position.x + this.game.paddle.width / 2 - 50
      ) {
        this.speed.x = this.speed.x - 1.5;
      } else if (
        this.position.x >
        this.game.paddle.position.x + this.game.paddle.width / 2 + 50
      ) {
        this.speed.x = this.speed.x + 1.5;
      }
    }
  }
}
