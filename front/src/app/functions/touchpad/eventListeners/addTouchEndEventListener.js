import touchHelper from "src/app/functions/touchpad/eventListeners/touchHelper";
import globals from "src/app/objects/globals";

const touchController = globals.touch_controller;

const onTouchEnd = (e) =>
  touchHelper.runIfFirstTouch(e, (e) => {
    touchController.is_just_unpressed = true;
    touchController.is_pressing = false;

    touchController.unpressed_callback = setTimeout(() => {
      touchController.reset();
    }, 500);
  });

export default () => {
  document.addEventListener("touchend", onTouchEnd);
  document.addEventListener("touchcancel", onTouchEnd);
};
