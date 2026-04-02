import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}
import { CheckoutTemplate } from '@saas/ui/src/templates/CheckoutTemplate'
export default function CheckoutPage() {
  return <CheckoutTemplate title="Calculadora Eléctrica Camper" emoji="⚡" tagline="Dimensiona tu instalación 12V sin riesgo de incendio" accentColor="#E6A817" appSlug="camper-electrica" paypalClientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'PAYPAL_CLIENT_ID'} />
}
