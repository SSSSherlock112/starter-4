<template>
  <h1 style="font-size: 24px;">Chat Messages</h1>
  <div class="container">
  <UChatMessage
    side="left"
    :parts="[
      {
        type: 'text',
        id: '1',
        text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
      }
    ]"
    role="user"
    id="1"
  />
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
.container {
  top: 20%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
}
</style>