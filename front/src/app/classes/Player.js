import globals from "src/app/objects/globals";
import allCollisions from "src/app/arrays/collisions/allCollisions";
import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisionsWithCollection";
import isObjectStanding from "src/app/functions/collisions/withGravity/isObjectStanding";
import Sprite from "src/app/classes/Sprite";

export default class Player extends Sprite {
  constructor({
                position,
                imageSrc,
                framesCount = 1,
                frameBuffer = 3,
                scale = 0.5,
              }) {
    super({position, imageSrc, framesCount, frameBuffer, scale});

    this.velocity = {x: 0, y: 1};

    this.hitboxOffset = {x: 36, y: 26};

    this.updateHitbox();
  }

  update() {
    this.updateFrames();
    this.drawImage();
    this.drawHitbox();
    this.draw();
    this.applyXVelocity()
    this.checkForHorizontalCollisions();
    this.applyGravity();
    this.checkForVerticalCollisions();
  }

  drawImage() {
    globals.c.fillStyle = "rgba(0, 0, 255, 0.1)";
    globals.c.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  drawHitbox() {
    globals.c.fillStyle = "rgba(255, 0, 0, 0.1)";
    globals.c.fillRect(
      this.hitbox.position.x,
      this.hitbox.position.y,
      this.hitbox.width,
      this.hitbox.height,
    );
  }

  applyGravity() {
    this.position.y += this.velocity.y;
    this.velocity.y += globals.gravity;
    this.updateHitbox()
  }

  updateHitbox() {
    this.hitbox = {
      position: {
        x: this.position.x + this.hitboxOffset.x,
        y: this.position.y + this.hitboxOffset.y,
      },
      width: 12,
      height: 27,
    };
  }

  applyXVelocity() {
    this.position.x += this.velocity.x;
    this.updateHitbox();
  }

  checkForHorizontalCollisions() {
    const collisionBlock = detectCollisionsWithCollection({
      object: this.hitbox,
      objectsCollection: allCollisions,
    });

    if (collisionBlock) {
      if (this.velocity.x > 0) {
        this.velocity.x = 0;
        this.position.x = collisionBlock.position.x - (this.hitboxOffset.x + this.hitbox.width) - 0.01;
        return;
      }

      if (this.velocity.x < 0) {
        this.velocity.x = 0;
        this.position.x =
          collisionBlock.position.x + collisionBlock.width - this.hitboxOffset.x + 0.01;
      }
    }
  }

  checkForVerticalCollisions() {
    const collisionBlock = detectCollisionsWithCollection({
      object: this.hitbox,
      objectsCollection: allCollisions,
    });

    if (collisionBlock) {
      if (this.velocity.y > 0) {
        this.velocity.y = 0;
        this.position.y = collisionBlock.position.y - this.hitboxOffset.y - this.hitbox.height - 0.01;
        return;
      }

      if (this.velocity.y < 0) {
        this.velocity.y = 0;
        this.position.y = collisionBlock.position.y + collisionBlock.height - this.hitboxOffset.y + 0.01;
      }
    }
  }

  jump() {
    const isStanding = isObjectStanding({object: this});

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
    const newPlayer = new Player({
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      imageSrc: this.initImageSrc,
      framesCount: this.framesCount,
    });
    newPlayer.width = this.width;
    newPlayer.height = this.height;
    return newPlayer;
  }
}
