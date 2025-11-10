<template>
  <h1 >Messages Board</h1>
  <div class="container">
  <UChatMessages
    :assistant="{
      side: 'left',
      variant: 'outline',
      avatar: {
        icon: 'i-lucide-bot'
      },
      actions: [
        {
          label: 'Copy to clipboard',
          icon: 'i-lucide-copy'
        }
      ]
    }"
    :messages="messages"
  />
  </div>
  <div>
    <UTextarea size="xl" v-model="value" class="borad" placeholder="写下你的留言让我们变得更好！"/>
  </div>
  <div class="send">
    <UButton size="lg" color="primary">发送留言</UButton>
  </div>
</template>

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