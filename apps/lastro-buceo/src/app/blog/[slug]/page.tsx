import type { Metadata } from 'next'
import { BlogPostTemplate } from '@saas/ui/src/templates/BlogPostTemplate'
import { appConfig, articles } from '../../content'

const BASE_URL = 'https://saas-lastro-buceo-268k70br2.vercel.app'

interface Props {
  params: { slug: string }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

  const plainText = stripHtml(article.content)
  const description = plainText.length > 155 ? plainText.slice(0, 152) + '...' : plainText
  const url = `${BASE_URL}/blog/${article.slug}`

  return {
    title: article.title,
    description,
    openGraph: {
      title: article.title,
      description,
      url,
      type: 'article',
      locale: 'es_ES',
      siteName: appConfig.title,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
    },
    alternates: { canonical: url },
  }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default function BlogPostPage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return <div>Artículo no encontrado</div>

  const plainText = stripHtml(article.content)
  const description = plainText.length > 155 ? plainText.slice(0, 152) + '...' : plainText
  const url = `${BASE_URL}/blog/${article.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description,
    url,
    inLanguage: 'es',
    author: { '@type': 'Organization', name: appConfig.title, url: BASE_URL },
    publisher: { '@type': 'Organization', name: appConfig.title, url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: BASE_URL },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostTemplate {...appConfig} article={article} allArticles={articles} />
    </>
  )
}
