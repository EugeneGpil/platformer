<template>
  <q-page class="flex flex-center bg-grey-10">
    <canvas ref="canvas" />
    <button @click="toggleFullScreen.toggle">FULLSCREEN</button>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import globals from "src/app/objects/globals";
import init from "src/app/functions/init";

const canvas = ref(null);
globals.canvas = canvas;

import { useToggleFullScreen } from "src/composables/useToggleFullScreen";
const toggleFullScreen = useToggleFullScreen();

onMounted(() => {
  init();
});
</script>
