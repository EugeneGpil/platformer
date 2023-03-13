import globals from "src/app/objects/globals";
import Player from "src/app/classes/player/Player";
import Sprite from "src/app/classes/Sprite";
import animate from "src/app/functions/animate";
import animateVars from "src/app/objects/animateVars";
import addKeyboardEventListeners from "src/app/functions/keyboard/addKeyboardEventListeners";
import addTouchEventListeners from "src/app/functions/touchpad/addTouchEventListeners";
import addWindowSizeChangedEventListener from "src/app/functions/window/addWindowSizeChangedEventListener";
import setSizes from "src/app/functions/window/setSizes";

export default () => {
  setSizes();

  globals.c = globals.canvas.value.getContext("2d");

  globals.player = new Player({
    position: {
      x: 30,
      y: 280,
    },
  });

  animateVars.background = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: "img/background.png",
  });

  animateVars.cameraPos.x = 0;
  animateVars.cameraPos.y =
    -animateVars.background.image.height + animateVars.scaledCanvas.height;

  animate();

  addKeyboardEventListeners();
  addWindowSizeChangedEventListener();
  addTouchEventListeners();
};
