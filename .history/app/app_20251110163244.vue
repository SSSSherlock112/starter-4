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
  top:
  width: 500px;
  height: 300px;
}
</style>