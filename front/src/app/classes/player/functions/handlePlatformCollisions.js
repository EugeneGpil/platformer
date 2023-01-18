import getCollisionWithPlatform from "src/app/functions/collisions/detectCollisions/getCollisionWithPlatform";
import stopGoingDown from "src/app/functions/collisions/handleColliding/stopGoingDown";

export default ({ object }) => {
  if (object.velocity.y < 0) {
    return false;
  }

  const collidingPlatform = getCollisionWithPlatform({ object });

  return stopGoingDown({ object, collidingObject: collidingPlatform });
};
