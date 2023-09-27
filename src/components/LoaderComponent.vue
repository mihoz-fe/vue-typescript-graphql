<script setup lang="ts">
</script>

<template>
  <div class="loader"></div>
</template>

<style scoped lang="scss">
.loader {
  height: 20px;
  width: 20px;
  border: 10px solid #41b883;
  background-color: #34495e;
  box-sizing: content-box;
  margin: 40px auto;
  animation: rotation 1s infinite ease-in-out;
}
@keyframes rotation {
  0% {
    transform: rotate(0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: rotate(360deg) scale(1.5);
    opacity: 1;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 0.3;
  }
}
</style>