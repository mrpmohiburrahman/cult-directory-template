// db/supabase/server.ts

import { cookies } from "next/headers"
import type { SupabaseClient } from "@supabase/supabase-js"

import { createClient } from "./client"
import type { createMockClient } from "./mockSupabase"

export const createServerClient = ():
  | SupabaseClient
  | ReturnType<typeof createMockClient> => {
  const cookieStore = cookies()
  const supabase = createClient()

  if (supabase.auth && supabase.auth.setAuth) {
    // Real Supabase client
    return supabase
  } else {
    // Mock client
    return supabase
  }
}
