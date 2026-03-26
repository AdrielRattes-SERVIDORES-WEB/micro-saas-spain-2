import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calculadora de Marroquinería | Precio Justo para tus Artesanías de Cuero',
  description: 'Calcula el precio correcto para tus artículos de marroquinería artesanal. Coste del cuero, mano de obra, herrajes y margen de beneficio justo en España.',
  keywords: 'marroquinería precio, artesanía cuero precio, calcular precio cuero, bolsos artesanales precio, marroquinería artesanal España',
  openGraph: {
    title: 'Calculadora de Precio para Marroquinería Artesanal',
    description: 'Precio justo para tus artesanías de cuero en España',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
