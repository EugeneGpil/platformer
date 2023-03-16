import addTouchStartEventListener from "src/app/functions/touchpad/eventListeners/addTouchStartEventListener";
import addTouchMoveEventListener from "src/app/functions/touchpad/eventListeners/addTouchMoveEventListener";
import addTouchEndEventListener from "src/app/functions/touchpad/eventListeners/addTouchEndEventListener";

export default () => {
  addTouchStartEventListener()
  addTouchMoveEventListener()
  addTouchEndEventListener()
};
