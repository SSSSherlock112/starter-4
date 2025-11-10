<template>
  <h1>Messages Board</h1>
  <div class="container">
    <UChatMessages
      :assistant="{
        side: 'left',
        variant: 'outline',
        avatar: {
          icon: 'i-lucide-user'
        },
      }"
      :messages="formattedMessages"
      :loading="loading"
    />
  </div>
  <div>
    <UTextarea 
      size="xl" 
      v-model="messageText" 
      class="board" 
      placeholder="写下你的留言让我们变得更好！"
      :disabled="loading"
    />
  </div>
  <div class="send">
    <UButton 
      size="lg" 
      color="primary" 
      @click="sendMessage"
      :disabled="!messageText.trim() || loading"
      :loading="loading"
    >
      {{ loading ? '发送中...' : '发送留言' }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
import type { UIMessage } from 'ai'
import { ref, onMounted, computed } from 'vue'
import { getMsg, createMsg } from './lib/supabase'

const messageText = ref('')
const messages = ref<any[]>([])
const loading = ref(false)

// 获取留言列表
const fetchMessages = async () => {
  try {
    loading.value = true
    const data = await getMsg()
    messages.value = data
  } catch (error) {
    console.error('获取留言失败:', error)
  } finally {
    loading.value = false
  }
}

// 发送留言
const sendMessage = async () => {
  if (!messageText.value.trim()) return

  try {
    loading.value = true
    
    // 创建新留言
    const newMessage = await createMsg(messageText.value.trim())
    
    if (newMessage) {
      // 清空输入框
      messageText.value = ''
      
      // 重新获取留言列表
      await fetchMessages()
    }
  } catch (error) {
    console.error('发送留言失败:', error)
  } finally {
    loading.value = false
  }
}

const formattedMessages = computed((): UIMessage[] => {
  return messages.value.map(msg => ({
    id: String(Math.random()),
    role: 'assistant',
    parts: [
      {
        type: 'text' as const,
        text: msg.text
      }
    ],
    createdAt: msg.created_at ? new Date(msg.created_at) : new Date()
  }))
})

// 页面加载时获取留言
onMounted(() => {
  fetchMessages()
})
</script>

<style scoped>
h1 {
  top: 10%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: oklch(72.3% 0.219 149.579);
}

.board {
  top: 70%;
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
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  width: 1000px;
  height: 400px;
  overflow-y: auto;
  padding: 10px;
  background-color: white;
}

/* 滚动条样式 */
.container::-webkit-scrollbar {
  width: 6px;
}

.container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.container::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>