import globals from "src/app/objects/globals";
import groundArray from "src/app/arrays/groundArray";
import platformArray from "src/app/arrays/platformArray";
import reactOnKeyboard from "src/app/functions/keyboard/reactOnKeyboard";

const animate = () => {
  window.requestAnimationFrame(animate);

  globals.c.fillStyle = "#555";
  globals.c.fillRect(0, 0, globals.canvas.value.width, globals.canvas.value.height);

  globals.c.save();

  globals.c.scale(4, 4);
  globals.c.translate(0, -globals.background.image.height + globals.scaledCanvas.height);

  globals.background.update();
  groundArray.forEach((groundObj) => groundObj.update());
  platformArray.forEach((platformArray) => platformArray.update());

  globals.c.restore();

  globals.player.update();

  reactOnKeyboard();
}

export default animate
