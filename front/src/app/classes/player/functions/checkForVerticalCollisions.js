import handlerGroundCollisions from "src/app/classes/player/functions/handleGroundCollisions";
import handlePlatformCollisions from "src/app/classes/player/functions/handlePlatformCollisions";

export default ({ object }) => {
  return (
    handlerGroundCollisions({ object }) || handlePlatformCollisions({ object })
  );
};
