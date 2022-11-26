import globals from "src/app/objects/globals";

export default class Sprite {
  constructor({ position, imageSrc }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
  }

  draw() {
    if (!this.image) {
      return;
    }
    globals.c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
  }
}
