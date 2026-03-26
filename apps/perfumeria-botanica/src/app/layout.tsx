import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Calculadora Perfumería Botánica | Formula Perfumes con Aceites Esenciales',
  description: 'Calcula las proporciones exactas de aceites esenciales y alcohol para formular perfumes EDP, EDT, EDC o aceite puro. División de notas tope, corazón y base.',
  keywords: 'calculadora perfumería, aceites esenciales gotas, formula perfume EDP EDT, perfumería botánica España, notas base corazón tope',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
