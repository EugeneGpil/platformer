<template>
  <q-page class="flex flex-center bg-grey-10">
    <canvas ref="canvas" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import globals from "src/app/objects/globals";
import init from "src/app/functions/init";

const canvas = ref(null);
globals.canvas = canvas;

onMounted(() => {
  init();
});
</script>
