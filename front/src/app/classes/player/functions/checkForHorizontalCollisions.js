import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisions/base/detectCollisionsWithCollection";
import groundArray from "src/app/arrays/collisions/types/groundArray";

export default ({ object }) => {
  const collisionBlock = detectCollisionsWithCollection({
    object: object.hitbox,
    objectsCollection: groundArray,
  });

  if (collisionBlock) {
    if (object.velocity.x > 0) {
      object.velocity.x = 0;
      object.position.x =
        collisionBlock.position.x -
        (object.hitbox.offset.x + object.hitbox.width) -
        0.01;
      return;
    }

    if (object.velocity.x < 0) {
      object.velocity.x = 0;
      object.position.x =
        collisionBlock.position.x +
        collisionBlock.width -
        object.hitbox.offset.x +
        0.01;
    }
  }
};
