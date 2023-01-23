import data from "src/assets/tiled/theMap.json";
import createCollisionClassesMap from "src/app/objects/collisions/createCollisionClassesMap";

export default ({ layerName, className }) => data.layers
  .find(layer => layer.name === layerName)
  .objects.map(object => createCollisionClassesMap[`create${className}`]({
    position: {
      x: object.x,
      y: object.y,
    },
    width: object.width,
    height: object.height,
  }));
