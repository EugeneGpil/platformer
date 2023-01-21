export default ({ object, collidingObject }) => {
  if (collidingObject === undefined) {
    return false;
  }

  if (object.velocity >= 0) {
    return false;
  }

  object.velocity.y = 0;
  object.position.y =
    collidingObject.position.y +
    collidingObject.height -
    object.hitboxes.body.offset.y +
    0.01;

  return true;
};
