import { animationKeys } from "src/app/classes/player/functions/getInitPlayerAnimations";

export default {
  shallUpdateSprite({ object }) {
    if (!object.isStanding && object.velocity.y < 0) {
      this.switchSprite({
        object,
        spriteName: animationKeys[object.direction].jump,
      });

      return;
    }

    if (!object.isStanding && object.velocity.y > 0) {
      this.switchSprite({
        object,
        spriteName: animationKeys[object.direction].fall,
      });

      return;
    }

    if (object.isStanding && object.velocity.x === 0) {
      this.switchSprite({
        object,
        spriteName: animationKeys[object.direction].idle,
      });

      return;
    }

    if (object.isStanding && object.velocity.x !== 0) {
      this.switchSprite({
        object,
        spriteName: animationKeys[object.direction].run,
      });
    }
  },

  switchSprite({ object, spriteName }) {
    if (object.image === object.animations[spriteName].image) {
      return;
    }

    object.image = object.animations[spriteName].image;
    object.currentFrame = 0;
    object.frameBuffer = object.animations[spriteName].frameBuffer;
    object.framesCount = object.animations[spriteName].framesCount;
  },
};
