import touchHelper from "src/app/functions/touchpad/eventListeners/touchHelper";
import globals from "src/app/objects/globals";

const touchController = globals.touch_controller

export default () => {
    document.addEventListener("touchstart", e => {
        touchController.was_touch_detected = true

        touchHelper.runIfFirstTouch(e, e => {
            if (touchController.is_just_unpressed) {
                touchController.is_just_unpressed = false
                clearTimeout(touchController.unpressed_callback)

                return
            }

            touchController.is_pressing = true
            const touch = e.changedTouches[0]
            touchController.position = {
                x: touch.pageX,
                y: touch.pageY,
            }
            touchController.moving_position = {
                x: touchController.position.x,
                y: touchController.position.y,
            }
            touchController.is_just_unpressed = false
        });
    })
}
