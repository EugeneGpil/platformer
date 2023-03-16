export default class TouchController {
  constructor() {
    this.was_touch_detected = false;
    this.reset();
  }

  reset() {
    this.is_pressing = false;
    this.is_just_unpressed = false;
    this.position = { x: 0, y: 0 };
    this.moving_position = { x: 0, y: 0 };
    this.unpressed_callback = null;
  }
}
