import CollisionBlock from "src/app/classes/collisions/base/CollisionBlock";

export default class PlatformCollisionBlock extends CollisionBlock {
  constructor(params) {
    super(params);

    this.height = 4;

    this.fillStyle = "rgba(0, 255, 0, 0.2)";
  }
}
