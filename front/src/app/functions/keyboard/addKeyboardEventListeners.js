import addKeydownEventListener from "src/app/functions/keyboard/EventListeners/addKeydownEventListener";
import addKeyupEventListener from "src/app/functions/keyboard/EventListeners/addKeyupEventListener";

export default () => {
  addKeydownEventListener(window);
  addKeyupEventListener(window);
}
