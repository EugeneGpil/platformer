import globals from "src/app/objects/globals";

const touchController = globals.touch_controller;

const isPressingOrJustUnpressed = (c) => c.is_pressing || c.is_just_unpressed;

const screenWidth = window.innerWidth;
const widthToRun = screenWidth / 15;

export default {
  shouldPlayerStop() {
    return (
      this.shouldPlayerRunLeft() === false &&
      this.shouldPlayerRunRight() === false
    );
  },

  shouldPlayerJump() {
    return (
      touchController.was_touch_detected === true &&
      touchController.is_pressing === false
    );
  },

  shouldPlayerRunLeft: () =>
    touchController.was_touch_detected === true &&
    isPressingOrJustUnpressed(touchController) &&
    touchController.position.x - widthToRun > touchController.moving_position.x,

  shouldPlayerRunRight: () =>
    touchController.was_touch_detected === true &&
    isPressingOrJustUnpressed(touchController) &&
    touchController.position.x + widthToRun < touchController.moving_position.x,
};
