import globals from "src/app/objects/globals";

export default class Sprite {
  constructor({
                position,
                imageSrc,
                framesCount = 1,
                frameBuffer = 3,
                scale = 1,
  }) {
    this.position = position;
    this.scale = scale;
    this.image = new Image();
    this.image.onload = () => {
      this.width = (this.image.width / framesCount) * this.scale;
      this.height = this.image.height * this.scale;
    };
    this.initImageSrc = imageSrc;
    this.image.src = imageSrc;
    this.framesCount = framesCount;
    this.currentFrame = 0;
    this.frameBuffer = frameBuffer;
    this.elapsedFrames = 0;
  }

  draw() {
    if (!this.image) {
      return;
    }

    const cropbox = {
      position: {
        x: this.currentFrame * (this.image.width / this.framesCount),
        y: 0,
      },
      width: this.image.width / this.framesCount,
      height: this.image.height,
    };

    globals.c.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();
    this.updateFrames();
  }

  updateFrames() {
    this.elapsedFrames++

    if (this.elapsedFrames % this.frameBuffer !== 0) {
      return
    }

    const nextFrame = this.currentFrame + 1;
    if (nextFrame >= this.framesCount) {
      return (this.currentFrame = 0);
    }
    this.currentFrame = nextFrame;
  }
}
