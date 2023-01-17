import globals from "src/app/objects/globals";
import isObjectStanding from "src/app/functions/collisions/withGravity/isObjectStanding";
import Sprite from "src/app/classes/Sprite";
import copy from "src/app/objects/copy";
import getInitPlayerAnimations from "src/app/classes/player/functions/getInitPlayerAnimations";
import { animationKeys } from "src/app/classes/player/functions/getInitPlayerAnimations";
import debugDrawer from "src/app/objects/debugDrawer";
import checkForVerticalCollisions from "src/app/classes/player/functions/checkForVerticalCollisions";
import checkForHorizontalCollisions from "src/app/classes/player/functions/checkForHorizontalCollisions";

export default class Player extends Sprite {
  constructor({ position, scale = 0.5 }) {
    const animations = getInitPlayerAnimations();

    const frameBuffer = animations[animationKeys.right.fall].frameBuffer;
    const framesCount = animations[animationKeys.right.fall].framesCount;
    const imageSrc = animations[animationKeys.right.fall].imageSrc;

    super({ position, imageSrc, framesCount, frameBuffer, scale });

    this.velocity = { x: 0, y: 1 };

    this.hitboxOffset = { x: 34, y: 26 };

    this.animations = animations;

    this.movementVelocity = 3;

    this.direction = "right";

    this.isStanding = false;
  }

  update() {
    this.updateFrames();
    this.draw();
    this.applyXVelocity();
    checkForHorizontalCollisions({ object: this });
    this.applyGravity();
    checkForVerticalCollisions({ object: this });
    this.setDirection();
    this.shallUpdateSprite();
    this.updateIsStanding();
    debugDrawer.drawBackground({ object: this });
    debugDrawer.drawHitbox({ object: this });
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

  jump() {
    if (!this.isStanding) {
      return;
    }

    this.velocity.y = -4;
  }

  stop() {
    this.velocity.x = 0;
  }

  moveLeft() {
    this.velocity.x = -this.movementVelocity;
  }

  moveRight() {
    this.velocity.x = this.movementVelocity;
  }

  setDirection() {
    if (this.velocity.x > 0) {
      this.direction = "right";

      return;
    }

    if (this.velocity.x < 0) {
      this.direction = "left";
    }
  }

  shallUpdateSprite() {
    if (!this.isStanding && this.velocity.y < 0) {
      this.switchSprite(animationKeys[this.direction].jump);

      return;
    }

    if (!this.isStanding && this.velocity.y > 0) {
      this.switchSprite(animationKeys[this.direction].fall);

      return;
    }

    if (this.isStanding && this.velocity.x === 0) {
      this.switchSprite(animationKeys[this.direction].idle);

      return;
    }

    if (this.isStanding && this.velocity.x !== 0) {
      this.switchSprite(animationKeys[this.direction].run);
    }
  }

  switchSprite(spriteName) {
    if (this.image === this.animations[spriteName].image) {
      return;
    }

    this.image = this.animations[spriteName].image;
    this.currentFrame = 0;
    this.frameBuffer = this.animations[spriteName].frameBuffer;
    this.framesCount = this.animations[spriteName].framesCount;
  }

  copy() {
    return copy.player(this);
  }

  getIsStanding() {
    return isObjectStanding({ object: this });
  }

  updateIsStanding() {
    this.isStanding = this.getIsStanding();
  }
}
