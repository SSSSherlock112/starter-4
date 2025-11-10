<template>
  <h1 >Messages Board</h1>
  <div class="container">
 <UChatMessages
    :assistant="{
      side: 'left',
      variant: 'outline',
      avatar: {
        icon: 'i-lucide-user'
      },
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

<script setup lang="ts">
import type { UIMessage } from 'ai'
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lsmozmusmhjvchthjjyw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbW96bXVzbWhqdmNodGhqanl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE4NTgsImV4cCI6MjA3ODM0Nzg1OH0.CdfJmR_2IsclluBd8U_0Iv0FK1Nxxo8Z9m-Y0HjPy1M'
const supabase = createClient(supabaseUrl, supabaseKey)
await supabase.auth.signUp({
  email: '3047758773@qq.com',
  password: '1234567890'
})
const fetchMsg = async () => {
  const messages = await getMsg();
  console.log(messages)
}
const value = ref('')
const messages: UIMessage[] = [
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: 'Hello, how are you?'
      }
    ]
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: 'I am doing well, thank you for asking! How can I assist you today?'
      }
    ]
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: 'What is the current weather in Tokyo?'
      }
    ]
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies."
      }
    ]
  }
]
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
  top: 38%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border: 1px solid ;
  border-radius: 5px;
  width: 1000px;
  height: 400px;
  overflow-y: auto;
  padding: 10px;
}
</style>