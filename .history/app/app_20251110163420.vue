<template>
  <div>
    <UTextarea v-model="value" class="borad" placeholder="写下你的留言让我们变得"/>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>

<style scoped>
.borad {
  top:70%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 500px;
  height: 300px;
}
</style>