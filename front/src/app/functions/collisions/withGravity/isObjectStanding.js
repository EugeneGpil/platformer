import getCollisionWithGround from "src/app/functions/collisions/detectCollisions/getCollisionWithGround";
import getCollisionWithPlatform from "src/app/functions/collisions/detectCollisions/getCollisionWithPlatform";

export default ({ object }) => {
  const objectCopy = object.copy();

  objectCopy.applyGravity();
  objectCopy.applyXVelocity();
  objectCopy.updateHitboxes();

  return (
    getCollisionWithGround({ object: objectCopy }) ||
    getCollisionWithPlatform({ object: objectCopy })
  );
};
