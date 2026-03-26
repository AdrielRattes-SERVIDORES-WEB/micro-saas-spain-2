import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calculadora de Charcutería | Curar Embutidos en Casa con Precisión',
  description: 'Calcula las cantidades exactas de sal, sal de cura y azúcar para embutidos caseros. Lomo, jamón, chorizo y más. Herramienta profesional para charcutería artesanal en España.',
  keywords: 'charcutería casera, sal de cura, curar embutidos, lomo curado, jamón casero, calculadora charcutería España',
  openGraph: {
    title: 'Calculadora de Charcutería Profesional',
    description: 'Curar embutidos con seguridad y precisión química',
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
