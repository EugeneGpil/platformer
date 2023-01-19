import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisions/base/detectCollisionsWithCollection";
import platformArray from "src/app/arrays/collisions/types/platformArray";
import globals from "src/app/objects/globals";

const debugGravity = (bottomHitbox) => {
  if (!import.meta.env.VITE_VISUALISE_PLAYER_PLATFORM_HITBOX) {
    return;
  }

  globals.c.fillStyle = "rgba(0, 255, 0, 0.5)";
  globals.c.fillRect(
    bottomHitbox.position.x,
    bottomHitbox.position.y,
    bottomHitbox.width,
    bottomHitbox.height
  );
};

export default ({ object }) => {
  const objHitbox = object.hitbox;

  const bottomHitbox = {
    position: {
      x: objHitbox.position.x,
      y: objHitbox.position.y + objHitbox.height + object.velocity.y,
    },
    width: objHitbox.width,
    height: object.velocity.y,
  };

  debugGravity(bottomHitbox);

  return detectCollisionsWithCollection({
    object: bottomHitbox,
    objectsCollection: platformArray,
  });
};
