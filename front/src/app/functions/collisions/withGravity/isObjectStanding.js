import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisions/base/detectCollisionsWithCollection";
import groundArray from "src/app/arrays/collisions/types/groundArray";
import platformArray from "src/app/arrays/collisions/types/platformArray";

export default ({ object }) => {
  const objectCopy = object.copy();

  objectCopy.applyGravity();

  return (
    isStandingOnGround({ object: objectCopy }) ||
    isStandingOnPlatform({ object, objectCopy })
  );
};

const isStandingOnGround = ({ object }) => {
  return !!detectCollisionsWithCollection({
    object: object.hitbox,
    objectsCollection: groundArray,
  });
};

const isStandingOnPlatform = ({ object, objectCopy }) => {
  if (object.velocity.y < 0) {
    return false;
  }

  return !!detectCollisionsWithCollection({
    object: objectCopy.hitbox,
    objectsCollection: platformArray,
  });
};
