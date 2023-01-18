import PlatformCollisionBlock from "src/app/classes/collisions/PlatformCollisionBlock";
import createCollisions from "src/app/functions/collisions/createCollisions";

export default createCollisions({
  layerName: "platforms",
  className: "PlatformCollisionBlock",
});
