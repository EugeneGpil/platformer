import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisionsWithCollection";
import allCollisions from "src/app/arrays/collisions/allCollisions";

export default ({ object }) => {
  const collisionBlock = detectCollisionsWithCollection({
    object: object.hitbox,
    objectsCollection: allCollisions,
  });

  if (collisionBlock) {
    if (object.velocity.x > 0) {
      object.velocity.x = 0;
      object.position.x =
        collisionBlock.position.x -
        (object.hitboxOffset.x + object.hitbox.width) -
        0.01;
      return;
    }

    if (object.velocity.x < 0) {
      object.velocity.x = 0;
      object.position.x =
        collisionBlock.position.x +
        collisionBlock.width -
        object.hitboxOffset.x +
        0.01;
    }
  }
};
