import globals from "src/app/objects/globals";

export default (window) => {
  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "KeyD":
        globals.keys.press("d");
        break;
      case "KeyA":
        globals.keys.press("a");
        break;
      case "Space":
        globals.player.jump();
        break;
    }
  });
};
