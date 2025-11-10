<template>
  <div>
    <UTextarea size="xl" v-model="value" class="borad" placeholder="写下你的留言让我们变得更好！"/>
    
  </div>
  <div class="send">
    <UButton size="lg" color="primary">发送</UButton>
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
.send {
  top: 8%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

}
</style>