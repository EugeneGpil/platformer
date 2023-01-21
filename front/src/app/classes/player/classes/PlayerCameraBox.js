export default class PlayerCameraBox {
  constructor({ object }) {
    this.border = {
      left: 75,
      top: 40,
    };

    this.width = this.border.left * 2 + object.hitbox.width;
    this.height = this.border.top * 2 + object.hitbox.height;

    this.update({ object });
  }

  update({ object }) {
    this.position = {
      x: object.hitbox.position.x - this.border.left,
      y: object.hitbox.position.y - this.border.top,
    };
  }
}
