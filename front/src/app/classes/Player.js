import globals from "src/app/objects/globals";

export default class Player {
  constructor({ position }) {
    this.position = position;
    this.velocity = { x: 0, y: 1 };

    this.height = 100;
    this.width = 100;
  }

  draw() {
    globals.c.fillStyle = "red";
    globals.c.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;

    if (
      this.position.y + this.height + this.velocity.y <
      globals.canvas.value.height
    ) {
      this.position.y += this.velocity.y;
      this.velocity.y += globals.gravity;
    } else {
      this.velocity.y = 0;
      this.position.y = globals.canvas.value.height - this.height;
    }
  }

  jump() {
    this.velocity.y = -10;
  }
}
