// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lsmozmusmhjvchthjjyw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbW96bXVzbWhqdmNodGhqanl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE4NTgsImV4cCI6MjA3ODM0Nzg1OH0.CdfJmR_2IsclluBd8U_0Iv0FK1Nxxo8Z9m-Y0HjPy1M'

export const supabase = createClient(supabaseUrl, supabaseKey)

// 获取留言
export const getMsg = async () => {
  try {
    const { data, error } = await supabase
      .from('msg') // 确保表名正确
      .select('*')

    if (error) {
      console.error('Supabase 错误:', error)
      throw error
    }
    
    console.log('获取到的数据:', data)
    return data || []
    
  } catch (error) {
    console.error('获取留言失败:', error)
    return []
  }
}

// 创建留言
export const createMsg = async (text: string) => {
  try {
    const { data, error } = await supabase
      .from('msg')
      .insert([
        {
          id: Math.random().toString(36).substring(2, 15),
          text,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('创建留言错误:', error)
      throw error
    }
    
    console.log('创建的留言:', data)
    return data
    
  } catch (error) {
    console.error('创建留言失败:', error)
    return null
  }
}