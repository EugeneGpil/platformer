<template>
  <q-page class="flex flex-center bg-grey-10">
    <canvas ref="canvas" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Sprite from "src/app/classes/Sprite";
import Player from "src/app/classes/Player";
import globals from "src/app/objects/globals";
import keys from "src/app/objects/keys";
import addKeydownEventListener from "src/app/functions/addKeydownEventListener";
import addKeyupEventListener from "src/app/functions/addKeyupEventListener";

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

  globals.player = new Player({ position: { x: 100, y: 150 } });
  const player2 = new Player({ position: { x: 200, y: 200 } });

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
    globals.player.update();
    player2.update();

    globals.player.velocity.x = 0;
    if (keys.a.pressed && !keys.d.pressed) {
      globals.player.velocity.x = -5;
    }
    if (!keys.a.pressed && keys.d.pressed) {
      globals.player.velocity.x = 5;
    }
  };

  animate();

  addKeydownEventListener(window);
  addKeyupEventListener(window);
});
</script>
