import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Calculadora Fondeo Veleros | Escopo Exacto para no Garrar',
  description: 'Calcula los metros exactos de cadena o orinque para fondear con seguridad. Considera profundidad, viento en nudos y tipo de fondo.',
  keywords: 'calculadora fondeo velero, escopo ancla, metros cadena fondeo, garrar ancla, fondear Mediterráneo España',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
