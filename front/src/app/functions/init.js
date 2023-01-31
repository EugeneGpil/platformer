import globals from "src/app/objects/globals";
import Player from "src/app/classes/player/Player";
import Sprite from "src/app/classes/Sprite";
import addKeydownEventListener from "src/app/functions/keyboard/addKeydownEventListener";
import addKeyupEventListener from "src/app/functions/keyboard/addKeyupEventListener";
import animate from "src/app/functions/animate";
import animateVars from "src/app/objects/animateVars";

export default () => {
  globals.canvas.value.width = 1024;
  globals.canvas.value.height = 576;

  globals.playScreen.value.style.width = globals.canvas.value.width;
  globals.playScreen.value.style.height = globals.canvas.value.height;

  animateVars.scaledCanvas = {
    width: globals.canvas.value.width / animateVars.scale,
    height: globals.canvas.value.height / animateVars.scale,
  };

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

  addKeydownEventListener(window);
  addKeyupEventListener(window);
};
