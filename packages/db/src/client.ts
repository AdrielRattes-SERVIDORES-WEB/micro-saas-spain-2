import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return createClient<Database>(supabaseUrl, supabaseAnonKey)
}

export function createServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false }
  })
}

// Lazy singleton for client-side usage
let _supabase: ReturnType<typeof getSupabaseClient> | null = null
export function getClient() {
  if (!_supabase) _supabase = getSupabaseClient()
  return _supabase
}
