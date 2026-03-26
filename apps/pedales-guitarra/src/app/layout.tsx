import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Calculadora Fuente Pedales Guitarra | Evita Sobrecargas en Directo',
  description: 'Calcula el consumo total en mA de todos tus pedales y la fuente de alimentación mínima necesaria. Detecta pedales con polaridad invertida.',
  keywords: 'calculadora pedales guitarra, fuente alimentación pedales, mA pedales, pedalboard España, sobrecargar fuente pedales',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
