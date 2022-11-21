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

  let y = 100;

  const animate = () => {
    window.requestAnimationFrame(animate);

    c.fillStyle = "#555";
    c.fillRect(0, 0, canvas.value.width, canvas.value.height);

    c.fillStyle = "red";
    c.fillRect(200, y++, 100, 100);
  };

  animate();
});
</script>
