import allCollisions from "src/app/arrays/collisions/allCollisions";
import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisionsWithCollection";
import groundArray from "src/app/arrays/collisions/types/groundArray";

export default ({ object }) => {
  const objectCopy = object.copy();

  objectCopy.applyGravity();

  return !!detectCollisionsWithCollection({
    object: objectCopy,
    objectsCollection: groundArray, //allCollisions,
  });
};
