import addKeydownEventListener from "src/app/functions/keyboard/eventListeners/addKeydownEventListener";
import addKeyupEventListener from "src/app/functions/keyboard/eventListeners/addKeyupEventListener";

export default () => {
  addKeydownEventListener();
  addKeyupEventListener();
};
