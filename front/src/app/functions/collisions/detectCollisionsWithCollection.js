import detectCollisions from "./detectCollisions";

export default ({ object, objectsCollection }) => {
  for (let obj2 of objectsCollection) {
    if (detectCollisions({ obj1: object, obj2 })) {
      return obj2;
    }
  }
};
