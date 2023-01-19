import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisions/base/detectCollisionsWithCollection";
import platformArray from "src/app/arrays/collisions/types/platformArray";

export default ({ object }) => {
  const objHitbox = object.hitbox;

  const bottomHitbox = {
    position: {
      x: objHitbox.position.x,
      y: objHitbox.position.y + objHitbox.height - 1,
    },
    width: objHitbox.width,
    height: 1,
  };

  return detectCollisionsWithCollection({
    object: bottomHitbox,
    objectsCollection: platformArray,
  });
};
