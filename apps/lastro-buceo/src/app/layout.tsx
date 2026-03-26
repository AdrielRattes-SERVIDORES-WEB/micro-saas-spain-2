import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Calculadora Lastrado Buceo | Flotabilidad Neutra Perfecta',
  description: 'Calcula los kilos exactos de plomo para flotabilidad neutra en buceo. Considera neoprene, tipo de agua, cilindro y peso corporal.',
  keywords: 'calculadora lastrado buceo, flotabilidad neutra, plomo buceo, cinturón plomos, buceo mediterráneo España',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
