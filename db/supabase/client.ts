// db/supabase/client.ts

import {
  createClient as createRealClient,
  type SupabaseClient,
} from "@supabase/supabase-js"

import { createMockClient } from "./mockSupabase"

// Define a type that includes both real and mock clients
type Supabase = SupabaseClient | ReturnType<typeof createMockClient>

export const createClient = (): Supabase => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (supabaseUrl && supabaseAnonKey) {
    return createRealClient(supabaseUrl, supabaseAnonKey)
  } else {
    console.warn("Supabase keys not found. Using mock client.")
    return createMockClient()
  }
}
