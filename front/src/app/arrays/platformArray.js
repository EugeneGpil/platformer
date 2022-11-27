import data from "../../assets/tiled/theMap.json";
import PlatformCollisionBlock from "src/app/classes/collisions/PlatformCollisionBlock";

const platformArray = data.layers
  .find((layer) => layer.name === "platforms")
  .objects.map(
    (object) =>
      new PlatformCollisionBlock({
        position: {
          x: object.x,
          y: object.y,
        },
        width: object.width,
        height: object.height,
      })
  );

export default platformArray;
