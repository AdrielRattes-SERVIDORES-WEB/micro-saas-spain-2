import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Calculadora Impresión 3D | Precio con Coste de Luz España',
  description: 'Calcula el precio real de tus piezas 3D incluyendo el coste eléctrico según los tramos PVPC de España. Material, electricidad y amortización incluidos.',
  keywords: 'calculadora impresión 3D, coste electricidad España, precio piezas 3D, PVPC tramos luz, PLA PETG precio',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
