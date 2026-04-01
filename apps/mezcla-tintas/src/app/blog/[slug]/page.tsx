import type { Metadata } from 'next'
import { BlogPostTemplate } from '@saas/ui/src/templates/BlogPostTemplate'
import { appConfig, articles } from '../../content'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

  const BASE_URL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'}`
  const excerpt = article.excerpt || article.content.replace(/<[^>]+>/g, ' ').replace(/s+/g, ' ').trim().slice(0, 160)
  const url = `${BASE_URL}/blog/${article.slug}`

  return {
    title: article.title,
    description: excerpt,
    openGraph: {
      title: article.title,
      description: excerpt,
      url,
      type: 'article',
      locale: 'es_ES',
      siteName: appConfig.title,
    },
    alternates: { canonical: url },
  }
}

export default function BlogPostPage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return <div>Artículo no encontrado</div>
  return (
    <BlogPostTemplate
      {...appConfig}
      article={article}
      allArticles={articles}
    />
  )
}
