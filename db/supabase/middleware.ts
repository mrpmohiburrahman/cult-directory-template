// db/supabase/middleware.ts

import { NextResponse, type NextRequest } from "next/server"
import { SupabaseClient } from "@supabase/supabase-js"

import { createClient } from "./client"

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })

    const supabase: SupabaseClient | any = createClient()

    // If using the real client, perform authentication checks
    if (supabase.auth && supabase.auth.getUser) {
      await supabase.auth.getUser()
    }

    return response
  } catch (e) {
    console.error("Error updating session:", e)
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}