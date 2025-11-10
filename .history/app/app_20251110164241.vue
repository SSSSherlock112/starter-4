<template>
  <div class="container">
  <UChatMessages>
    <UChatMessage
      v-for="(message, index) in messages"
      :key="index"
      v-bind="message"
    />
  </UChatMessages>
  </div>
  <div>
    <UTextarea size="xl" v-model="value" class="borad" placeholder="写下你的留言让我们变得更好！"/>
  </div>
  <div class="send">
    <UButton size="lg" color="primary">发送留言</UButton>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
const messages = ref(["123",
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
  top: 80%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>