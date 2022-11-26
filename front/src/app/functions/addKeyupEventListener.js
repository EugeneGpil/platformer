import globals from "src/app/objects/globals";

export default (window) => {
  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "KeyD":
        globals.keys.unPress("d");
        break;
      case "KeyA":
        globals.keys.unPress("a");
        break;
    }
  });
};
