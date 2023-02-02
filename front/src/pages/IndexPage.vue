<template>
  <q-page class="flex flex-center bg-grey-10">
    <div class="play-screen" ref="playScreen">
      <canvas class="background" ref="canvas" />
      <div class="buttons-container">
        <q-btn dense flat icon="minimize" @click="minimize" />
        <q-btn dense flat icon="crop_square" @click="toggleMaximize" />
        <q-btn dense flat icon="close" @click="closeApp" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import globals from "src/app/objects/globals";
import init from "src/app/functions/init";
import unfocus from "src/app/functions/helpers/unfocus";

const canvas = ref(null);
globals.canvas = canvas;

const playScreen = ref(null);
globals.playScreen = playScreen;

const minimize = () => {
  if (process.env.MODE === "electron") {
    window.myWindowAPI.minimize();
    unfocus();
  }
};

const toggleMaximize = () => {
  if (process.env.MODE === "electron") {
    window.myWindowAPI.toggleMaximize();
    unfocus();
  }
};

const closeApp = () => {
  if (process.env.MODE === "electron") {
    window.myWindowAPI.close();
    unfocus();
  }
};

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
