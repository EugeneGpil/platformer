import detectCollisionsWithCollection from "src/app/functions/collisions/detectCollisions/base/detectCollisionsWithCollection";
import groundArray from "src/app/arrays/collisions/types/groundArray";

export default ({ object }) => {
  return detectCollisionsWithCollection({
    object: object.hitboxes.body,
    objectsCollection: groundArray,
  });
};
