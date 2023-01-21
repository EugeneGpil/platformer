import globals from "src/app/objects/globals";

export default {
  drawBackground({ object }) {
    if (!!import.meta.env.VITE_VISUALISE_PLAYER_BLOCKS) {
      globals.c.fillStyle = "rgba(0, 0, 255, 0.1)";
      this.drawRect({object});
    }
  },

  drawHitbox({ object }) {
    if (!!import.meta.env.VITE_VISUALISE_PLAYER_BLOCKS) {
      globals.c.fillStyle = "rgba(255, 0, 0, 0.1)";
      this.drawRect({ object: object.hitbox });
    }
  },

  drawCameraBox({ object }) {
    if (!!import.meta.env.VITE_VISUALISE_PLAYER_CAMERA_BOX) {
      globals.c.fillStyle = "rgba(0, 0, 255, 0.2)"
      this.drawRect({ object: object.cameraBox });
    }
  },

  drawRect({ object }) {
    globals.c.fillRect(
      object.position.x,
      object.position.y,
      object.width,
      object.height
    );
  }
};
