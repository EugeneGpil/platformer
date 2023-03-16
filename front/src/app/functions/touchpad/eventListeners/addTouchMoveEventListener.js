import touchHelper from "src/app/functions/touchpad/eventListeners/touchHelper";
import globals from "src/app/objects/globals";

const touchController = globals.touch_controller;

export default () => {
  document.addEventListener("touchmove", (e) =>
    touchHelper.runIfFirstTouch(e, (e) => {
      const touch = e.changedTouches[0];
      touchController.moving_position = {
        x: touch.pageX,
        y: touch.pageY,
      };
    })
  );
};
