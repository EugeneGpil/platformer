<template>
  <q-page class="flex flex-center bg-grey-10 q-electron-drag">
    <div class="play-screen" ref="playScreen">
      <canvas class="background" ref="canvas" />
      <div class="buttons-container">
        <q-btn
          class="electron-only"
          dense
          flat
          icon="minimize"
          @click="windowActions.minimize"
        />
        <q-btn
          class="desktop-only"
          dense
          flat
          icon="crop_square"
          @click="windowActions.toggleMaximize"
        />
        <q-btn
          class="electron-only"
          dense
          flat
          icon="close"
          @click="windowActions.closeApp"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
if (typeof AndroidFullScreen !== "undefined") {
  AndroidFullScreen.immersiveMode();
}

import { ref, onMounted } from "vue";
import globals from "src/app/objects/globals";
import init from "src/app/functions/init";
import { useWindowActions } from "src/composables/useWindowActions";

const canvas = ref(null);
globals.canvas = canvas;

const playScreen = ref(null);
globals.playScreen = playScreen;

const windowActions = useWindowActions();

onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.buttons-container {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 200;
  display: flex;
}

.background {
  width: 100%;
  height: 100%;
}
</style>
