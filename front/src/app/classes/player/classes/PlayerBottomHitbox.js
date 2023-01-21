export default class {
  constructor({ object }) {
    this.width = object.hitboxes.body.width;
    this.height = 1;
    this.update({ object });
  }

  update({ object }) {
    this.height = object.velocity.y;

    this.position = {
      x: object.hitboxes.body.position.x,
      y:
        object.hitboxes.body.position.y +
        object.hitboxes.body.height +
        this.height,
    };
  }
}
