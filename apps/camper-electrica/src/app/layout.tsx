import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calculadora Eléctrica Camper | Sección de Cable y Fusibles 12V/24V',
  description: 'Calcula la sección correcta de cable y el fusible adecuado para tu instalación eléctrica de camper. Evita incendios con dimensionado profesional 12V/24V.',
  keywords: 'instalación eléctrica camper, sección cable 12v, fusible camper, electricidad furgoneta camper, caída de tensión camper España',
  openGraph: {
    title: 'Calculadora Eléctrica Camper 12V/24V',
    description: 'Dimensiona tu instalación sin riesgo de incendio',
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
