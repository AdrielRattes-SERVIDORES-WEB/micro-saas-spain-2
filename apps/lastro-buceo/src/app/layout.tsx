import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://saas-lastro-buceo-268k70br2.vercel.app'

export const metadata: Metadata = {
  title: {
    default: 'Calculadora Lastrado Buceo | Flotabilidad Neutra Perfecta',
    template: '%s | Calculadora Lastrado Buceo',
  },
  description: 'Calcula los kilos exactos de plomo para flotabilidad neutra en buceo. Considera neoprene, tipo de agua, cilindro y peso corporal.',
  keywords: 'calculadora lastrado buceo, flotabilidad neutra, plomo buceo, cinturón plomos, buceo mediterráneo España, lastrado correcto buceo',
  authors: [{ name: 'Calculadora Lastrado Buceo' }],
  openGraph: {
    siteName: 'Calculadora Lastrado Buceo',
    locale: 'es_ES',
    type: 'website',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lastrobuceo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
