import keys from "./keys";
import TouchController from "src/app/classes/touchController/TouchController";

export default {
  gravity: 0.15,
  keys,
  c: null,
  canvas: null,
  player: null,
  touch_controller: new TouchController(),
};
