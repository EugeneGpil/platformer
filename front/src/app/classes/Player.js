import globals from "src/app/objects/globals";
import allCollisions from "src/app/arrays/collisions/allCollisions";
import detectCollisions from "src/app/functions/collisions/detectCollisions";

export default class Player {
  constructor({ position }) {
    this.position = position;
    this.velocity = { x: 0, y: 1 };

    this.height = 25;
    this.width = 25;
  }
  draw() {
    globals.c.fillStyle = "red";
    globals.c.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.checkForHorizontalCollisions()
    this.applyGravity();
    this.checkForVerticalCollisions();
  }
  applyGravity() {
    this.position.y += this.velocity.y;
    this.velocity.y += globals.gravity;
  }

  checkForHorizontalCollisions() {
    for (let collisionBlock of allCollisions) {
      if (detectCollisions({ obj1: this, obj2: collisionBlock })) {
        if (this.velocity.x > 0) {
          this.velocity.x = 0;
          this.position.x = collisionBlock.position.x - this.width - 0.01;
          return;
        }

        if (this.velocity.x < 0) {
          this.velocity.x = 0;
          this.position.x =
            collisionBlock.position.x + collisionBlock.width + 0.01;
          return;
        }
      }
    }
  }
  checkForVerticalCollisions() {
    for (let collisionBlock of allCollisions) {
      if (detectCollisions({ obj1: this, obj2: collisionBlock })) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          this.position.y = collisionBlock.position.y - this.height - 0.01;
          return;
        }

        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          this.position.y =
            collisionBlock.position.y + collisionBlock.height + 0.01;
          return;
        }
      }
    }
  }
  jump() {
    this.velocity.y = -10;
  }
  stop() {
    this.velocity.x = 0;
  }
  moveLeft() {
    this.velocity.x = -5;
  }
  moveRight() {
    this.velocity.x = 5;
  }
}
