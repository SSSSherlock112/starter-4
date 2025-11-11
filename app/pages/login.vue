<template>
  <h1>{{ mode === 'login' ? '留言板 · 登录' : '留言板 · 注册' }}</h1>
  <div class="login-page">
    <form @submit.prevent="onSubmit" class="card" novalidate>
      <div class="field">
        <label for="email">邮箱</label>
        <input id="email" type="email" v-model="email" placeholder="you@example.com" autocomplete="email" required />
      </div>

      <div class="field">
        <label for="password">密码</label>
        <input id="password" type="password" v-model="password" placeholder="至少 6 位" minlength="6" autocomplete="current-password" required />
      </div>

      <div class="actions">
        <button v-if="mode === 'login'" class="primary" type="submit" :disabled="loading">{{ loading ? '登录中...' : '登录' }}</button>
        <button v-else class="secondary" type="submit" :disabled="loading">{{ loading ? '注册中...' : '注册' }}</button>
      </div>

      <div class="spacer-line" aria-hidden="true"><hr /></div>

      <div class="footer">
        <button type="button" class="link" @click="toggleMode" :disabled="loading">
          {{ mode === 'login' ? '还没有账号？去注册' : '已有账号？去登录' }}
        </button>
      </div>

      <p class="help" v-if="message">{{ message }}</p>
      <p class="error" v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from '#app'
import { supabase } from '~/lib/supabase'

const router = useRouter()

const email = ref('')
const password = ref('')
const mode = ref<'login' | 'register'>('login')
const loading = ref(false)
const error = ref('')
const message = ref('')

const validate = () => {
  error.value = ''
  if (!email.value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    error.value = '请输入有效邮箱'
    return false
  }
  if (!password.value || password.value.length < 6) {
    error.value = '密码长度至少 6 位'
    return false
  }
  return true
}

const onSubmit = async () => {
  if (mode.value === 'login') {
    await onLogin()
  } else {
    await onRegister()
  }
}

const formatAuthError = (err: any) => {
  if (!err) return '发生未知错误'
  const msg = (err.message || String(err)).toLowerCase()
  const status = err.status || err.code || ''

  if (/invalid login credentials|invalid_credentials|invalid login|invalid password/i.test(msg)) {
    return '邮箱或密码不正确'
  }

  return (err.message && String(err.message)) || String(err)
}

 const onLogin = async () => {
  if (!validate()) return
  
  loading.value = true
  error.value = ''
  
  try {
    const { data, error: supError } = await supabase.auth.signInWithPassword({
      email: email.value.trim(),
      password: password.value
    })

    if (supError) {
      error.value = supError.message || '登录失败'
      return
    }

    await new Promise(resolve => setTimeout(resolve, 100))
    
    const { data: sessionData } = await supabase.auth.getSession()
    
    if (sessionData.session) {
      console.log('跳转到看板页面')
      await router.push('/board')
      console.log('跳转完成')
    } else {
      console.error('登录成功但无会话')
      error.value = '登录状态异常，请重试'
    }
    
  } catch (e: any) {
    console.error('登录异常:', e)
    error.value = e?.message || '网络错误'
  } finally {
    loading.value = false
  }
}

const onRegister = async () => {
  if (!validate()) return
  loading.value = true
  message.value = ''
  error.value = ''
  try {
    const { data, error: supError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })

    if (supError) {
      error.value = formatAuthError(supError)
    } else {
      if (data && (data as any).session) {
        await router.push('/board')
      } else {
        message.value = '注册成功，请检查你的邮箱完成确认。'
      }
    }
  } catch (e: any) {
    error.value = e?.message ? `网络错误：${e.message}` : '网络错误，请稍后重试'
  } finally {
    loading.value = false
  }
}

useHead({
  title: 'Login / Register - Messages Board',
})

const toggleMode = () => {
  mode.value = mode.value === 'login' ? 'register' : 'login'
  error.value = ''
  message.value = ''
}
</script>

<style scoped>
.login-page {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
}
.card {
  width: 400px;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  top:30px;
  gap: 12px;
}
h1 { 
  font-size: 24px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 15%;
  left: 50%;
  font-weight: bold;
  color: oklch(72.3% 0.219 149.579);
}
.field { 
  display:flex; 
  flex-direction:column; gap:6px; 
}
.field label { 
  font-size: 13px; 
  color: #334155; 
}
.field input { 
  padding: 10px 12px; 
  border: 1px solid #e2e8f0; 
  border-radius:6px; 
  font-size: 14px
 }
.actions { 
  display:flex;
  justify-content:center;
  align-items:center;
}
.actions .primary {
  padding: 10px 14px;
  border-radius:6px;
  border:none;
  background:oklch(72.3% 0.219 149.579);
  color:white;
  cursor:pointer;
}
.actions .secondary {
  padding: 10px 14px;
  border-radius:6px;
  border: 1px solid #c7d2fe;
  background: white;
  color: oklch(72.3% 0.219 149.579);
  cursor: pointer;
}
.footer {
  display:flex;
  justify-content:flex-end;
  align-items:center;
}
.link {
  background:transparent;
  color:oklch(72.3% 0.219 149.579);
  text-decoration:underline;
  padding:0;
  border:none;
  cursor:pointer;
}
.spacer-line hr {
  border: none;
  border-top: 1px solid #eef2f7;
  margin: 6px 0 0 0;
}
.help { 
  color: #065f46;
   font-size: 13px 
}
.error { 
  color: #b91c1c;
   font-size: 13px 
  }
</style>