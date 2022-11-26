<template>
  <q-page class="flex flex-center bg-grey-10">
    <canvas ref="canvas" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";

const canvas = ref(null);

onMounted(() => {
  canvas.value.width = 1024;
  canvas.value.height = 576;

  const scaledCanvas = {
    width: canvas.value.width / 4,
    height: canvas.value.height / 4,
  };

  const c = canvas.value.getContext("2d");

  const gravity = 0.15;

  class Sprite {
    constructor({ position, imageSrc }) {
      this.position = position;
      this.image = new Image();
      this.image.src = imageSrc;
    }

    draw() {
      if (!this.image) {
        return;
      }
      c.drawImage(this.image, this.position.x, this.position.y);
    }

    update() {
      this.draw();
    }
  }

  class Player {
    constructor({ x, y }) {
      this.position = { x, y };
      this.velocity = { x: 0, y: 1 };

      this.height = 100;
      this.width = 100;
    }

    draw() {
      c.fillStyle = "red";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
      this.draw();
      this.position.x += this.velocity.x;

      if (
        this.position.y + this.height + this.velocity.y <
        canvas.value.height
      ) {
        this.position.y += this.velocity.y;
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
        this.position.y = canvas.value.height - this.height;
      }
    }
  }

  const player = new Player({ x: 100, y: 150 });
  const player2 = new Player({ x: 200, y: 200 });

  const keys = {
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
  };

  const background = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: "img/background.png",
  });

  const animate = () => {
    window.requestAnimationFrame(animate);

    c.fillStyle = "#555";
    c.fillRect(0, 0, canvas.value.width, canvas.value.height);

    c.save();
    c.scale(4, 4);
    c.translate(0, -background.image.height + scaledCanvas.height);
    background.update();
    c.restore();
    player.update();
    player2.update();

    player.velocity.x = 0;
    if (keys.a.pressed && !keys.d.pressed) {
      player.velocity.x = -5;
    }
    if (!keys.a.pressed && keys.d.pressed) {
      player.velocity.x = 5;
    }
  };

  animate();

  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "KeyD":
        keys.d.pressed = true;
        break;
      case "KeyA":
        keys.a.pressed = true;
        break;
      case "Space":
        player.velocity.y = -10;
        break;
    }
  });

  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "KeyD":
        keys.d.pressed = false;
        break;
      case "KeyA":
        keys.a.pressed = false;
        break;
    }
  });
});
</script>
