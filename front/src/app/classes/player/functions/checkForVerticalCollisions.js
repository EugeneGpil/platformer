import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisionsWithCollection";
import allCollisions from "src/app/arrays/collisions/allCollisions";

export default ({ object }) => {
  const collisionBlock = detectCollisionsWithCollection({
    object: object.hitbox,
    objectsCollection: allCollisions,
  });

  if (collisionBlock) {
    if (object.velocity.y > 0) {
      object.velocity.y = 0;
      object.position.y =
        collisionBlock.position.y -
        object.hitboxOffset.y -
        object.hitbox.height -
        0.01;
      return;
    }

    if (object.velocity.y < 0) {
      object.velocity.y = 0;
      object.position.y =
        collisionBlock.position.y +
        collisionBlock.height -
        object.hitboxOffset.y +
        0.01;
    }
  }
};
