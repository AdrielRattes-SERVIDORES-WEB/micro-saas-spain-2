import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Guía de Riego Bonsái España | Frecuencia por Especie y Provincia',
  description: 'Calcula la frecuencia de riego exacta para tu bonsái según la especie, provincia española y estación del año. Cronograma de abonado incluido.',
  keywords: 'riego bonsái España, frecuencia riego bonsái, cuidado bonsái provincia, bonsái clima España, abonado bonsái',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
