import globals from "src/app/objects/globals";

export default (window) => {
  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "KeyD":
        globals.keys.d.pressed = false;
        break;
      case "KeyA":
        globals.keys.a.pressed = false;
        break;
    }
  });
};
