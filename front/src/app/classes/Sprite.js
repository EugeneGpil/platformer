import globals from "src/app/objects/globals";

export default class Sprite {
  constructor({ position, imageSrc, framesCount = 1 }) {
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.width = this.image.width / framesCount;
      this.height = this.image.height;
    };
    this.initImageSrc = imageSrc;
    this.image.src = imageSrc;
    this.framesCount = framesCount;
    this.currentFrame = 0;
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

    // globals.c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
    this.updateFrames();
  }

  updateFrames() {
    const nextFrame = this.currentFrame + 1;
    if (nextFrame >= this.framesCount) {
      return (this.currentFrame = 0);
    }
    this.currentFrame = nextFrame;
  }
}
