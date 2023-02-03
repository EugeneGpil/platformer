import getCollisionWithGround from "src/app/functions/collisions/detectCollisions/getCollisionWithGround";
import animateVars from "src/app/objects/animateVars";

const handleEdgeOfTheMapCollision = ({ object }) => {
  if (object.hitboxes.body.position.x < 0) {
    object.velocity.x = 0;
    object.position.x = -object.hitboxes.body.offset.x;

    return true;
  }

  if (
    object.hitboxes.body.position.x + object.hitboxes.body.width >
      animateVars.background.image.width &&
    animateVars.background.image.width !== 0
  ) {
    object.velocity.x = 0;
    object.position.x =
      animateVars.background.image.width -
      object.hitboxes.body.width -
      object.hitboxes.body.offset.x;

    return true;
  }

  return false;
};

const handleGroundCollision = ({ object }) => {
  const collisionBlock = getCollisionWithGround({ object });

  if (collisionBlock) {
    if (object.velocity.x > 0) {
      object.velocity.x = 0;
      object.position.x =
        collisionBlock.position.x -
        (object.hitboxes.body.offset.x + object.hitboxes.body.width) -
        0.01;
      return true;
    }

    if (object.velocity.x < 0) {
      object.velocity.x = 0;
      object.position.x =
        collisionBlock.position.x +
        collisionBlock.width -
        object.hitboxes.body.offset.x +
        0.01;
      return true;
    }
  }

  return false;
};

export default ({ object }) => {
  return (
    handleEdgeOfTheMapCollision({ object }) || handleGroundCollision({ object })
  );
};
