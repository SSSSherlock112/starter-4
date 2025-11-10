<template>
  <h1 >Messages Board</h1>

  <UChatMessages
    :auto-scroll="{
      color: 'neutral',
      variant: 'outline'
    }"
    :should-scroll-to-bottom="false"
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
const value = ref('')
const messages: UIMessage[] = [
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
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
    role: 'user',
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
        text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies. The forecast for the rest of the week shows a slight chance of rain on Thursday, with temperatures gradually rising to 28°C by the weekend. Humidity levels are moderate at around 65%, and wind speeds are light at 8 km/h from the southeast. Air quality is good with an index of 42. The UV index is high at 7, so it's recommended to wear sunscreen if you're planning to spend time outdoors. Sunrise was at 5:24 AM and sunset will be at 6:48 PM, giving Tokyo approximately 13 hours and 24 minutes of daylight today. The moon is currently in its waxing gibbous phase."
      }
    ]
  },
  {
    id: 'c3e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'user',
    parts: [
      {
        type: 'text',
        text: 'Can you recommend some popular tourist attractions in Kyoto?'
      }
    ]
  },
  {
    id: 'd4f5g8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: 'Kyoto is known for its beautiful temples, traditional tea houses, and gardens. Some popular attractions include Kinkaku-ji (Golden Pavilion) with its stunning gold leaf exterior reflecting in the mirror pond, Fushimi Inari Shrine with its thousands of vermilion torii gates winding up the mountainside, Arashiyama Bamboo Grove where towering stalks create an otherworldly atmosphere, Kiyomizu-dera Temple perched on a hillside offering panoramic views of the city, and the historic Gion district where you might spot geisha hurrying to evening appointments through narrow stone-paved streets lined with traditional wooden machiya houses.'
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
  top: 40%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border: 1px solid ;
  border-radius: 5px;
  width: 1000px;
  height: 400px;
}
</style>