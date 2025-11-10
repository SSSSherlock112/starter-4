<template>
  <h1 >Chat Messages</h1>
  <div class="container">
  <UChatMessage
    side="left"
    variant="soft"
    icon="i-lucide-user"
    :parts="[
      {
        type: 'text',
        text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
      },
      {
        type: 'text',
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
h1{
  top: 10%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: oklch(72.3% 0.219 149.579);
}
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
  border: 1px solid ;
  border-radius: 5px;
}
</style>