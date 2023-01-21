export default class PlayerBodyHitbox {
  constructor({ object }) {
    this.offset = { x: 34, y: 26 };
    this.width = 12;
    this.height = 27;
    this.update({ object });
  }

  update({ object }) {
    this.position = {
      x: object.position.x + this.offset.x,
      y: object.position.y + this.offset.y,
    };
  }
}
