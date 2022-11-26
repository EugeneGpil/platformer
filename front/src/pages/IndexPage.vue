<template>
  <q-page class="flex flex-center bg-grey-10">
    <canvas ref="canvas" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Sprite from "src/classes/Sprite";
import Player from "src/classes/Player";
import globals from "src/classes/consts/globals";

const canvas = ref(null);
globals.canvas = canvas;

onMounted(() => {
  canvas.value.width = 1024;
  canvas.value.height = 576;

  const scaledCanvas = {
    width: canvas.value.width / 4,
    height: canvas.value.height / 4,
  };

  const c = canvas.value.getContext("2d");
  globals.c = c;

  const player = new Player({ position: { x: 100, y: 150 } });
  const player2 = new Player({ position: { x: 200, y: 200 } });

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
