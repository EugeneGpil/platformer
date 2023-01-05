import globals from "src/app/objects/globals";
import allCollisions from "src/app/arrays/collisions/allCollisions";
import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisionsWithCollection";
import isObjectStanding from "src/app/functions/collisions/withGravity/isObjectStanding";
import Sprite from "src/app/classes/Sprite";
import copy from "src/app/objects/copy";
import getInitPlayerAnimations from "src/app/classes/player/functions/getInitPlayerAnimations";

export default class Player extends Sprite {
  constructor({ position, scale = 0.5 }) {
    const animationKeys = {
      Idle: "Idle",
      Run: "Run",
    };

    const animations = getInitPlayerAnimations();

    const frameBuffer = animations[animationKeys.Idle].frameBuffer;
    const framesCount = animations[animationKeys.Idle].framesCount;
    const imageSrc = animations[animationKeys.Idle].imageSrc;

    super({ position, imageSrc, framesCount, frameBuffer, scale });

    this.velocity = { x: 0, y: 1 };

    this.hitboxOffset = { x: 36, y: 26 };

    this.animations = animations;

    this.animationKeys = animationKeys;

    this.movementVelocity = 3;
  }

  update() {
    this.updateFrames();
    this.draw();
    this.applyXVelocity();
    this.checkForHorizontalCollisions();
    this.applyGravity();
    this.checkForVerticalCollisions();
    this.drawImage();
    this.drawHitbox();
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
      this.hitbox.height
    );
  }

  applyGravity() {
    this.position.y += this.velocity.y;
    this.velocity.y += globals.gravity;
    this.updateHitbox();
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
        this.position.x =
          collisionBlock.position.x -
          (this.hitboxOffset.x + this.hitbox.width) -
          0.01;
        return;
      }

      if (this.velocity.x < 0) {
        this.velocity.x = 0;
        this.position.x =
          collisionBlock.position.x +
          collisionBlock.width -
          this.hitboxOffset.x +
          0.01;
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
        this.position.y =
          collisionBlock.position.y -
          this.hitboxOffset.y -
          this.hitbox.height -
          0.01;
        return;
      }

      if (this.velocity.y < 0) {
        this.velocity.y = 0;
        this.position.y =
          collisionBlock.position.y +
          collisionBlock.height -
          this.hitboxOffset.y +
          0.01;
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
    this.switchSprite(this.animationKeys.Idle);
  }

  moveLeft() {
    this.velocity.x = -this.movementVelocity;
  }

  moveRight() {
    this.velocity.x = this.movementVelocity;
    this.switchSprite(this.animationKeys.Run);
  }

  switchSprite(spriteName) {
    if (this.image === this.animations[spriteName]) {
      return;
    }

    this.image = this.animations[spriteName].image;
    this.frameBuffer = this.animations[spriteName].frameBuffer;
    this.framesCount = this.animations[spriteName].framesCount;
  }

  copy() {
    return copy.player(this);
  }
}
