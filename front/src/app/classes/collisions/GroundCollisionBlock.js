import CollisionBlock from "src/app/classes/collisions/base/CollisionBlock";

export default class GroundCollisionBlock extends CollisionBlock {
  constructor(params) {
    super(params);

    this.fillStyle = "rgba(255, 0, 0, 0.2)";
  }
}
