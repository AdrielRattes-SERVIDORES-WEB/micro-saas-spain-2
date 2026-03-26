import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { appSlug } = await req.json()
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

    const orderRes = await fetch('https://api-m.paypal.com/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: { currency_code: 'EUR', value: '4.99' },
          description: `Acceso calculadora — ${appSlug}`,
        }],
      }),
    })
    const order = await orderRes.json()
    return NextResponse.json({ orderID: order.id })
  } catch (e) {
    return NextResponse.json({ error: 'Error al crear orden' }, { status: 500 })
  }
}
