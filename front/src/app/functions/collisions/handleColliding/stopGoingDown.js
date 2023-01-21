export default ({ object, collidingObject }) => {
  if (collidingObject === undefined) {
    return false;
  }

  if (object.velocity <= 0) {
    return false;
  }

  object.velocity.y = 0;
  object.position.y =
    collidingObject.position.y -
    object.hitbox.offset.y -
    object.hitbox.height -
    0.01;

  return true;
};
