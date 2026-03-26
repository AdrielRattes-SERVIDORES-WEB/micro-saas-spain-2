import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@saas/db'

export async function POST(req: NextRequest) {
  try {
    const { orderID, appSlug, email } = await req.json()
    const clientId = process.env.PAYPAL_CLIENT_ID!
    const secret = process.env.PAYPAL_CLIENT_SECRET!

    const authRes = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString('base64')}`,
      },
      body: 'grant_type=client_credentials',
    })
    const { access_token } = await authRes.json()

    const captureRes = await fetch(
      `https://api-m.paypal.com/v2/checkout/orders/${orderID}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
    const capture = await captureRes.json()
    if (capture.status !== 'COMPLETED') {
      return NextResponse.json({ error: 'Pago no completado' }, { status: 400 })
    }

    const transactionId = capture.purchase_units?.[0]?.payments?.captures?.[0]?.id || orderID
    const db = createServerClient()

    // Create or get user
    const { data: authData } = await db.auth.admin.createUser({
      email: email || capture.payer?.email_address,
      email_confirm: true,
      password: Math.random().toString(36).slice(-12),
    })
    const userId = authData?.user?.id

    if (userId) {
      await db.from('purchases').insert({
        user_id: userId,
        app_slug: appSlug,
        paypal_transaction_id: transactionId,
        amount: 4.99,
        currency: 'EUR',
      })
    }

    // Generate magic link for access
    const { data: linkData } = await db.auth.admin.generateLink({
      type: 'magiclink',
      email: email || capture.payer?.email_address,
    })

    return NextResponse.json({
      success: true,
      accessToken: linkData?.properties?.hashed_token || transactionId,
      message: 'Pago completado. Acceso activado.',
    })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ error: 'Error al procesar pago' }, { status: 500 })
  }
}
