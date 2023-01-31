<template>
  <q-page class="flex flex-center bg-grey-10">
    <div class="play-screen" ref="playScreen">
      <canvas class="background" ref="canvas" />
      <q-btn
        class="fullscreen-button"
        color="secondary"
        :icon="fullScreen.isActive() ? 'fullscreen_exit' : 'fullscreen'"
        @click="toggleFullScreen"
      >
      </q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import globals from "src/app/objects/globals";
import init from "src/app/functions/init";

const canvas = ref(null);
globals.canvas = canvas;

const playScreen = ref(null);
globals.playScreen = playScreen;

import { useFullScreen } from "src/composables/useFullScreen";
const fullScreen = useFullScreen();
const toggleFullScreen = () => fullScreen.toggle(playScreen);

onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.fullscreen-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 200;
}
.background {
  width: 100%;
  height: 100%;
}
</style>
