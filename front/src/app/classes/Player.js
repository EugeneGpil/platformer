import globals from "src/app/objects/globals";
import allCollisions from "src/app/arrays/collisions/allCollisions";
import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisionsWithCollection";
import isObjectStanding from "src/app/functions/collisions/withGravity/isObjectStanding";

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
    this.checkForHorizontalCollisions();
    this.applyGravity();
    this.checkForVerticalCollisions();
  }

  applyGravity() {
    this.position.y += this.velocity.y;
    this.velocity.y += globals.gravity;
  }

  checkForHorizontalCollisions() {
    const collisionBlock = detectCollisionsWithCollection({
      object: this,
      objectsCollection: allCollisions,
    });

    if (collisionBlock) {
      if (this.velocity.x > 0) {
        this.velocity.x = 0;
        this.position.x = collisionBlock.position.x - this.width - 0.01;
        return;
      }

      if (this.velocity.x < 0) {
        this.velocity.x = 0;
        this.position.x =
          collisionBlock.position.x + collisionBlock.width + 0.01;
      }
    }
  }

  checkForVerticalCollisions() {
    const collisionBlock = detectCollisionsWithCollection({
      object: this,
      objectsCollection: allCollisions,
    });

    if (collisionBlock) {
      if (this.velocity.y > 0) {
        this.velocity.y = 0;
        this.position.y = collisionBlock.position.y - this.height - 0.01;
        return;
      }

      if (this.velocity.y < 0) {
        this.velocity.y = 0;
        this.position.y =
          collisionBlock.position.y + collisionBlock.height + 0.01;
      }
    }
  }

  jump() {
    const isStanding = isObjectStanding({ object: this });

    if (isStanding) {
      this.velocity.y = -4;
    }
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

  copy() {
    return new Player({
      position: {
        x: this.position.x,
        y: this.position.y,
      },
    });
  }
}
