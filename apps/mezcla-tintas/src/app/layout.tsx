import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Mezclador de Tintas Modelismo | Consigue Cualquier Color Exacto',
  description: 'Convierte cualquier código HEX al número exacto de gotas en tintas primárias de modelismo. Compatible con Vallejo, AK Interactive y Citadel.',
  keywords: 'mezcla tintas modelismo, color HEX gotas, Vallejo mezclador, calculadora colores modelismo, CMYK tintas',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
