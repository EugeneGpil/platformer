import allCollisions from "src/app/arrays/collisions/allCollisions";
import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisionsWithCollection";

export default ({object}) => {
  const objectCopy = object.copy();

  objectCopy.applyGravity();

  return !!detectCollisionsWithCollection({
    object: objectCopy.hitbox,
    objectsCollection: allCollisions,
  });
};
