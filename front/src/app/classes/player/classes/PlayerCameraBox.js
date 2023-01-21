import animateVars from "src/app/objects/animateVars";

export default class PlayerCameraBox {
  constructor({ object }) {
    this.border = {
      left: 75,
      top: 40,
    };

    this.width = this.border.left * 2 + object.hitboxes.body.width;
    this.height = this.border.top * 2 + object.hitboxes.body.height;

    this.update({ object });
  }

  update({ object }) {
    this.position = {
      x: object.hitboxes.body.position.x - this.border.left,
      y: object.hitboxes.body.position.y - this.border.top,
    };

    this.moveCamera();
  }

  moveCamera() {
    if (this.needMoveCameraToLeft()) {
      this.moveCameraToLeft();
    }

    if (this.needMoveCameraToRight()) {
      this.moveCameraToRight();
    }

    if (this.needMoveCameraUp()) {
      this.moveCameraUp();
    }

    if (this.needMoveCameraDown()) {
      this.moveCameraDown();
    }
  }

  needMoveCameraToLeft() {
    return this.position.x <= -animateVars.cameraPos.x;
  }

  moveCameraToLeft() {
    animateVars.cameraPos.x = -this.position.x;
  }

  needMoveCameraToRight() {
    return (
      this.position.x + this.width >=
      -animateVars.cameraPos.x + animateVars.scaledCanvas.width
    );
  }

  moveCameraToRight() {
    animateVars.cameraPos.x =
      -this.position.x - this.width + animateVars.scaledCanvas.width;
  }

  needMoveCameraUp() {
    return this.position.y <= -animateVars.cameraPos.y;
  }

  moveCameraUp() {
    animateVars.cameraPos.y = -this.position.y;
  }

  needMoveCameraDown() {
    return (
      this.position.y + this.height >=
      -animateVars.cameraPos.y + animateVars.scaledCanvas.height
    );
  }

  moveCameraDown() {
    animateVars.cameraPos.y =
      -this.position.y - this.height + animateVars.scaledCanvas.height;
  }
}
