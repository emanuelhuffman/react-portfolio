import { detectCollision } from "./collisionDetection.js";

export default class Brick {
  constructor(game, position) {
    this.img = document.getElementById("imgBrick");

    this.game = game;

    this.position = position;
    this.width = 80;
    this.height = 24;

    this.markedForDeletion = false;
    this.hasPowerUp = chance(50);
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDeletion = true;
      if (this.hasPowerUp) {
        console.log("yes");
      }
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

function chance(percent) {
  const rand = Math.floor(Math.random() * 100) + 1;
  return percent > rand;
}
