import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Calculadora Salmuera de Quesos | Tiempos y Sal para Queso Artesanal',
  description: 'Calcula la concentración exacta de salmuera y el tiempo de salado según el tipo y peso de tu queso artesanal. Fresco, tierno, semicurado, curado y madurado.',
  keywords: 'salmuera quesos artesanal, tiempo salado queso, calculadora quesería, queso casero España, concentración sal queso',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
