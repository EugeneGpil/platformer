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

  const c = canvas.value.getContext("2d");

  const gravity = 0.15;

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

  const animate = () => {
    window.requestAnimationFrame(animate);

    c.fillStyle = "#555";
    c.fillRect(0, 0, canvas.value.width, canvas.value.height);

    player.update();
    player2.update();
  };

  animate();
});
</script>
