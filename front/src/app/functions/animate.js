import globals from "src/app/objects/globals";
import allCollisions from "src/app/arrays/collisions/allCollisions";
import reactOnKeyboard from "src/app/functions/keyboard/reactOnKeyboard";
import animateVars from "src/app/objects/animateVars";

const animate = () => {
  window.requestAnimationFrame(animate);

  globals.c.fillStyle = "#555";
  globals.c.fillRect(
    0,
    0,
    globals.canvas.value.width,
    globals.canvas.value.height
  );

  globals.c.save();

  globals.c.scale(animateVars.scale, animateVars.scale);
  globals.c.translate(animateVars.cameraPos.x, animateVars.cameraPos.y);

  animateVars.background.update();
  allCollisions.forEach((groundObj) => groundObj.update());

  globals.player.update();

  reactOnKeyboard();

  globals.c.restore();
};

export default animate;
