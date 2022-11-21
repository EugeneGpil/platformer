<template>
  <q-page class="flex flex-center bg-grey-10">
    <canvas ref="canvas" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";

const canvas = ref(null);

onMounted(() => {
  const c = canvas.value.getContext("2d");
});
</script>
