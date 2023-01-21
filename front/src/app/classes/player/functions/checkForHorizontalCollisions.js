import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisions/base/detectCollisionsWithCollection";
import groundArray from "src/app/arrays/collisions/types/groundArray";

export default ({ object }) => {
  const collisionBlock = detectCollisionsWithCollection({
    object: object.hitboxes.body,
    objectsCollection: groundArray,
  });

  if (collisionBlock) {
    if (object.velocity.x > 0) {
      object.velocity.x = 0;
      object.position.x =
        collisionBlock.position.x -
        (object.hitboxes.body.offset.x + object.hitboxes.body.width) -
        0.01;
      return;
    }

    if (object.velocity.x < 0) {
      object.velocity.x = 0;
      object.position.x =
        collisionBlock.position.x +
        collisionBlock.width -
        object.hitboxes.body.offset.x +
        0.01;
    }
  }
};
