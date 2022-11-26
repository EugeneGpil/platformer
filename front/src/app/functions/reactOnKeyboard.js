import globals from "src/app/objects/globals";

export default () => {
  globals.player.stop();
  if (globals.keys.isPressed("a") && !globals.keys.isPressed("d")) {
    globals.player.moveLeft();
  }
  if (!globals.keys.isPressed("a") && globals.keys.isPressed("d")) {
    globals.player.moveRight();
  }
};
