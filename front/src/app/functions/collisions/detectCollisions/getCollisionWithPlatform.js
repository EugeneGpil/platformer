import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisions/base/detectCollisionsWithCollection";
import platformArray from "src/app/arrays/collisions/types/platformArray";

export default ({ object }) => {
  return detectCollisionsWithCollection({
    object: object.hitboxes.bottom,
    objectsCollection: platformArray,
  });
};
