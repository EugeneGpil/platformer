import getCollisionWithGround from "src/app/functions/collisions/detectCollisions/getCollisionWithGround";
import stopGoingUp from "src/app/functions/collisions/handleColliding/stopGoingUp";
import stopGoingDown from "src/app/functions/collisions/handleColliding/stopGoingDown";

export default ({ object }) => {
  const collidingGround = getCollisionWithGround({ object });

  return (
    stopGoingDown({ object, collidingObject: collidingGround }) ||
    stopGoingUp({ object, collidingObject: collidingGround })
  );
};
