<template>
  <div>
    <UTextarea v-model="value" class="borad"/>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>

<style scoped>
.borad {
  top:50%l
  width: 500px;
  height: 300px;
}
</style>