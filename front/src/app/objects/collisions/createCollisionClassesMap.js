// noinspection JSUnusedGlobalSymbols

import GroundCollisionBlock from "src/app/classes/collisions/GroundCollisionBlock";
import PlatformCollisionBlock from "src/app/classes/collisions/PlatformCollisionBlock";

export default {
  createGroundCollisionBlock(params) {
    return new GroundCollisionBlock(params);
  },
  createPlatformCollisionBlock(params) {
    return new PlatformCollisionBlock(params);
  },
};
