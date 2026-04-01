import type { Metadata } from 'next'
import { BlogPostTemplate } from '@saas/ui/src/templates/BlogPostTemplate'
import { appConfig, articles } from '../../content'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

function getExcerpt(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

  const BASE_URL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}`
  const description = article.excerpt || getExcerpt(article.content)
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

export default function BlogPostPage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return <div>Artículo no encontrado</div>

  const BASE_URL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}`
  const description = article.excerpt || getExcerpt(article.content)
  const url = `${BASE_URL}/blog/${article.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description,
    url,
    inLanguage: 'es',
    author: { '@type': 'Organization', name: appConfig.title },
    publisher: { '@type': 'Organization', name: appConfig.title },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostTemplate
        {...appConfig}
        article={article}
        allArticles={articles}
      />
    </>
  )
}
