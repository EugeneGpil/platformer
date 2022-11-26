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
};
