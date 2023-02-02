import globals from "src/app/objects/globals";
import animateVars from "src/app/objects/animateVars";

export default () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  globals.canvas.value.width = width;
  globals.canvas.value.height = height;

  globals.playScreen.value.style.width = globals.canvas.value.width;
  globals.playScreen.value.style.height = globals.canvas.value.height;

  animateVars.scaledCanvas = {
    width: globals.canvas.value.width / animateVars.scale,
    height: globals.canvas.value.height / animateVars.scale,
  };
}
