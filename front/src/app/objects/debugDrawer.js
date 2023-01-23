import globals from "src/app/objects/globals";

export default {
  drawBackground({ object }) {
    this.drawObj({
      object,
      debugKey: 'VITE_VISUALISE_PLAYER_PIC_CROP',
      color: {
        red: 0,
        green: 0,
        blue: 255,
        alpha: 0.1,
      },
    });
  },

  drawHitbox({ object }) {
    this.drawObj({
      object: object.hitboxes.body,
      debugKey: 'VITE_VISUALISE_PLAYER_BODY_HITBOX',
      color: {
        red: 255,
        green: 0,
        blue: 0,
        alpha: 0.1,
      },
    });
  },

  drawCameraBox({ object }) {
    this.drawObj({
      object: object.cameraBox,
      debugKey: 'VITE_VISUALISE_PLAYER_CAMERA_BOX',
      color: {
        red: 0,
        green: 0,
        blue: 255,
        alpha: 0.2,
      },
    });
  },

  drawPlayerPlatformHitbox({ object }) {
    this.drawObj({
      object: object.hitboxes.bottom,
      debugKey: 'VITE_VISUALISE_PLAYER_PLATFORM_HITBOX',
      color: {
        red: 0,
        green: 255,
        blue: 0,
        alpha: 0.5,
      },
    });
  },

  drawObj({ object, color, debugKey }) {
    if (!this.shouldVisualise(debugKey)) {
      return;
    }

    this.drawForce({ object, color })
  },

  drawForce({ object, color }) {
    globals.c.fillStyle = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    this.drawRect({ object });
  },

  shouldVisualise(key) {
    const visualiseParticular = import.meta.env.VITE_VISUALISE && import.meta.env[key];
    return import.meta.env.VITE_VISUALISE_EVERYTHING || visualiseParticular;
  },

  drawRect({ object }) {
    globals.c.fillRect(
      object.position.x,
      object.position.y,
      object.width,
      object.height
    );
  },
};
