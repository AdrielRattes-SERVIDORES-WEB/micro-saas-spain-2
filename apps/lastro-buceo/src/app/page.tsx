import type { Metadata } from 'next'
import { BlogFeedTemplate } from '@saas/ui/src/templates/BlogFeedTemplate'
import { appConfig, articles } from './content'

const BASE_URL = 'https://saas-lastro-buceo-268k70br2.vercel.app'

export const metadata: Metadata = {
  title: 'Blog de Guías Técnicas sobre Lastrado en Buceo',
  description:
    'Guías técnicas gratuitas: flotabilidad neutra, diferencias agua dulce vs salada, neoprene, tipos de cinturón y protocolo de ajuste fino. Calculadora profesional por 4,99€.',
  openGraph: {
    title: 'Guías Técnicas de Lastrado en Buceo — Blog Gratuito',
    description:
      'Flotabilidad neutra, neoprene, agua dulce vs salada, cinturones de lastre y ajuste fino. Todo lo que necesitas saber antes de meterte al agua.',
    url: BASE_URL,
    type: 'website',
    locale: 'es_ES',
    siteName: 'Calculadora Lastrado Buceo',
  },
  alternates: { canonical: BASE_URL },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Calculadora Lastrado Buceo',
  url: BASE_URL,
  description: appConfig.description,
  inLanguage: 'es',
  potentialAction: {
    '@type': 'ReadAction',
    target: `${BASE_URL}/blog/{slug}`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogFeedTemplate {...appConfig} articles={articles} />
    </>
  )
}
