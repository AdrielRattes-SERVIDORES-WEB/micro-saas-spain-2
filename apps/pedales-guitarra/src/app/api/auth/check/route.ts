import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@saas/db'

export async function POST(req: NextRequest) {
  try {
    const { token, appSlug } = await req.json()
    if (!token) return NextResponse.json({ hasAccess: false })

    const db = createServerClient()

    // Verify token (magic link hash)
    const { data: { user } } = await db.auth.admin.getUserById(token).catch(() => ({ data: { user: null } }))

    if (!user) {
      // Try as session token
      const { data } = await db.auth.getUser(token)
      if (!data?.user) return NextResponse.json({ hasAccess: false })

      const { data: purchase } = await db
        .from('purchases')
        .select('id')
        .eq('user_id', data.user.id)
        .eq('app_slug', appSlug)
        .single()

      return NextResponse.json({ hasAccess: !!purchase })
    }

    const { data: purchase } = await db
      .from('purchases')
      .select('id')
      .eq('user_id', user.id)
      .eq('app_slug', appSlug)
      .single()

    return NextResponse.json({ hasAccess: !!purchase })
  } catch {
    return NextResponse.json({ hasAccess: false })
  }
}
