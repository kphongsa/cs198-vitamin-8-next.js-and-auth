import { supabase } from '../../../../lib/supabase'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/dashboard'
    }
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 400 })
  }

  redirect(data.url)
}