export default {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  press(key) {
    this[key].pressed = true;
  },
  unPress(key) {
    this[key].pressed = false;
  },
  isPressed(key) {
    return this[key].pressed;
  },
};
