import globals from "src/app/objects/globals";

export default class CollisionBlock {
  constructor({ position, width, height }) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.visualise = !!import.meta.env.VITE_VISUALISE_COLLISION_BLOCKS;

    this.fillStyle = "rgba(255, 0, 0, 0.2)";
  }

  draw() {
    if (!this.visualise) {
      return;
    }
    globals.c.fillStyle = this.fillStyle;
    globals.c.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();
  }
}
