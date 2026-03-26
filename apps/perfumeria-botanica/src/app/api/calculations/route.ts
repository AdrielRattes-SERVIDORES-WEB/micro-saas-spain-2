import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@saas/db'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const appSlug = searchParams.get('appSlug')
  const authHeader = req.headers.get('authorization')
  const token = authHeader?.replace('Bearer ', '') || searchParams.get('token') || ''

  try {
    const db = createServerClient()
    const { data: { user } } = await db.auth.getUser(token)
    if (!user) return NextResponse.json({ calculations: [] })

    const { data } = await db
      .from('calculations')
      .select('*')
      .eq('user_id', user.id)
      .eq('app_slug', appSlug || '')
      .order('created_at', { ascending: false })
      .limit(20)

    return NextResponse.json({ calculations: data || [] })
  } catch {
    return NextResponse.json({ calculations: [] })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { appSlug, name, inputs, outputs } = body
    const authHeader = req.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '') || body.token || ''

    const db = createServerClient()
    const { data: { user } } = await db.auth.getUser(token)
    if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

    const { data, error } = await db.from('calculations').insert({
      user_id: user.id,
      app_slug: appSlug,
      name,
      inputs,
      outputs,
    }).select().single()

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })
    return NextResponse.json({ calculation: data })
  } catch {
    return NextResponse.json({ error: 'Error al guardar' }, { status: 500 })
  }
}
