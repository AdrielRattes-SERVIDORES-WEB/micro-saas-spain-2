import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Calculadora Astrofotografía NPF | Exposición Máxima sin Rastros de Estrellas',
  description: 'Calcula el tiempo de exposición máximo para fotografía nocturna usando la regla NPF. Evita el trailing de estrellas con tu cámara y objetivo específicos.',
  keywords: 'regla NPF astrofotografía, tiempo exposición estrellas, trailing estrellas, calculadora astrofotografía, fotografía nocturna España',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
