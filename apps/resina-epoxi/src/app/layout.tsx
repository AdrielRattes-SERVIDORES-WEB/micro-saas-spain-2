import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calculadora de Resina Epoxi | Mesa de Río y Proyectos DIY',
  description: 'Calcula exactamente cuánta resina epoxi necesitas para tu mesa de río, encimera o proyecto DIY. Proporciones A:B, volumen y peso calculados al instante.',
  keywords: 'resina epoxi calculadora, mesa de río resina, proporción resina epoxi, tabla de río, epoxi DIY España',
  openGraph: {
    title: 'Calculadora de Resina Epoxi para Mesa de Río',
    description: 'Calcula exactamente cuánta resina necesitas para tu proyecto',
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
