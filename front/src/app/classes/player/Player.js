import globals from "src/app/objects/globals";
import isObjectStanding from "src/app/functions/collisions/withGravity/isObjectStanding";
import Sprite from "src/app/classes/Sprite";
import copy from "src/app/objects/copy";
import getInitPlayerAnimations from "src/app/classes/player/functions/getInitPlayerAnimations";
import { animationKeys } from "src/app/classes/player/functions/getInitPlayerAnimations";
import debugDrawer from "src/app/objects/debugDrawer";
import checkForVerticalCollisions from "src/app/classes/player/functions/checkForVerticalCollisions";
import checkForHorizontalCollisions from "src/app/classes/player/functions/checkForHorizontalCollisions";
import PlayerBodyHitbox from "src/app/classes/player/classes/PlayerBodyHitbox";
import PlayerCameraBox from "src/app/classes/player/classes/PlayerCameraBox";
import playerSpriteUpdater from "src/app/classes/player/objects/playerSpriteUpdater";
import PlayerBottomHitbox from "src/app/classes/player/classes/PlayerBottomHitbox";

export default class Player extends Sprite {
  constructor({ position, scale = 0.5 }) {
    const animations = getInitPlayerAnimations();
    const frameBuffer = animations[animationKeys.right.fall].frameBuffer;
    const framesCount = animations[animationKeys.right.fall].framesCount;
    const imageSrc = animations[animationKeys.right.fall].imageSrc;

    super({ position, imageSrc, framesCount, frameBuffer, scale });

    this.velocity = { x: 0, y: 1 };
    this.animations = animations;
    this.movementVelocity = 3;
    this.direction = "right";
    this.isStanding = false;
    this.hitboxes = {
      body: new PlayerBodyHitbox({ object: this }),
    };
    this.hitboxes.bottom = new PlayerBottomHitbox({ object: this });
    this.cameraBox = new PlayerCameraBox({ object: this });
  }

  update() {
    debugDrawer.drawBackground({ object: this });
    this.updateFrames();
    this.draw();
    this.applyXVelocity();
    checkForHorizontalCollisions({ object: this });
    this.applyGravity();
    checkForVerticalCollisions({ object: this });
    this.setDirection();
    playerSpriteUpdater.shallUpdateSprite({ object: this });
    this.updateIsStanding();
    this.cameraBox.update({ object: this });
    debugDrawer.drawHitbox({ object: this });
    debugDrawer.drawCameraBox({ object: this });
    debugDrawer.drawPlayerPlatformHitbox({ object: this });

    this.shallJump();
  }

  applyGravity() {
    this.position.y += this.velocity.y;
    this.velocity.y += globals.gravity;
    this.updateHitboxes();
  }

  applyXVelocity() {
    this.position.x += this.velocity.x;
    this.updateHitboxes();
  }

  updateHitboxes() {
    this.hitboxes.body.update({ object: this });
    this.hitboxes.bottom.update({ object: this });
  }

  shallJump() {
    if (false /*should jump*/) {
      this.jump()
    }
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

  copy() {
    return copy.player(this);
  }

  updateIsStanding() {
    this.isStanding = isObjectStanding({ object: this });
  }
}
