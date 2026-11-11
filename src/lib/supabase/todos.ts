import { supabase } from './supabaseClient'

export async function getTodos() {
  const { data, error } = await supabase.from('todos').select('*')

  if (error) throw error
  return data ?? []
}