import globals from "src/app/objects/globals";

export default {
  drawBackground({ object }) {
    globals.c.fillStyle = "rgba(0, 0, 255, 0.1)";
    globals.c.fillRect(
      object.position.x,
      object.position.y,
      object.width,
      object.height
    );
  },

  drawHitbox({ object }) {
    globals.c.fillStyle = "rgba(255, 0, 0, 0.1)";
    globals.c.fillRect(
      object.hitbox.position.x,
      object.hitbox.position.y,
      object.hitbox.width,
      object.hitbox.height
    );
  },
};
