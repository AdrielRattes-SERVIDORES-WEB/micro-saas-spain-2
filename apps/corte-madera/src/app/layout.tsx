import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Optimizador de Corte de Madera | Aprovecha cada Chapa de MDF',
  description: 'Calcula cuántas chapas de MDF necesitas y el mapa de corte óptimo para minimizar desperdicios. Herramienta de bin packing para carpintería y bricolaje.',
  keywords: 'optimizador corte madera, chapas MDF, bin packing madera, calculadora carpintería, desperdicio madera España',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
