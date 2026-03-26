// Shared PayPal checkout logic
export interface CreateOrderRequest {
  appSlug: string
  email: string
}

export interface CaptureOrderRequest {
  orderID: string
  appSlug: string
  email: string
}

export async function createPayPalOrder(
  clientId: string,
  secret: string,
  amount: string = '4.99',
  currency: string = 'EUR'
): Promise<{ orderID: string }> {
  // Get access token
  const authRes = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  })
  const authData = await authRes.json()
  const accessToken = authData.access_token

  // Create order
  const orderRes = await fetch('https://api-m.paypal.com/v2/checkout/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount,
          },
          description: 'Acceso a calculadora profesional',
        },
      ],
    }),
  })
  const order = await orderRes.json()
  return { orderID: order.id }
}

export async function capturePayPalOrder(
  clientId: string,
  secret: string,
  orderID: string
): Promise<{ transactionId: string; payerEmail: string }> {
  const authRes = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  })
  const authData = await authRes.json()
  const accessToken = authData.access_token

  const captureRes = await fetch(
    `https://api-m.paypal.com/v2/checkout/orders/${orderID}/capture`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
  const capture = await captureRes.json()
  const unit = capture.purchase_units?.[0]?.payments?.captures?.[0]
  return {
    transactionId: unit?.id || orderID,
    payerEmail: capture.payer?.email_address || '',
  }
}
