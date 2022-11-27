import data from "../../assets/tiled/theMap.json";
import GroundCollisionBlock from "src/app/classes/collisions/GroundCollisionBlock";

const groundArray = data.layers
  .find((layer) => layer.name === "ground")
  .objects.map(
    (object) =>
      new GroundCollisionBlock({
        position: {
          x: object.x,
          y: object.y,
        },
        width: object.width,
        height: object.height,
      })
  );

export default groundArray;
