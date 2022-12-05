import globals from "src/app/objects/globals";
import Player from "src/app/classes/Player";
import Sprite from "src/app/classes/Sprite";
import addKeydownEventListener from "src/app/functions/keyboard/addKeydownEventListener";
import addKeyupEventListener from "src/app/functions/keyboard/addKeyupEventListener";
import animate from "src/app/functions/animate";
import animateVars from "src/app/objects/animateVars";

export default () => {
  globals.canvas.value.width = 1024;
  globals.canvas.value.height = 576;

  animateVars.scaledCanvas = {
    width: globals.canvas.value.width / 4,
    height: globals.canvas.value.height / 4,
  };

  globals.c = globals.canvas.value.getContext("2d");

  globals.player = new Player({
    position: {
      x: 100,
      y: 150,
    },
  });

  animateVars.background = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: "img/background.png",
  });

  animate();

  addKeydownEventListener(window);
  addKeyupEventListener(window);
};
