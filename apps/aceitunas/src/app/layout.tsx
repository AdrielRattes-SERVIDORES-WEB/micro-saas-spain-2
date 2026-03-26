import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calculadora Cura de Aceitunas | Elimina el Amargor Perfectamente',
  description: 'Calcula las cantidades exactas de sosa cáustica y sal para curar aceitunas en casa. Método tradicional español para aceitunas aliñadas perfectas.',
  keywords: 'curar aceitunas, aceitunas aliñadas, sosa cáustica aceitunas, salmuera aceitunas, charcutería España, aceitunas caseras',
  openGraph: {
    title: 'Calculadora Cura de Aceitunas',
    description: 'Elimina el amargor con las proporciones exactas de sosa y sal',
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
