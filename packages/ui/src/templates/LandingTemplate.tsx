'use client'
import React from 'react'
import { Footer } from '../components/Footer'

interface Article {
  title: string
  content: string
  slug: string
}

interface LandingTemplateProps {
  appSlug: string
  title: string
  emoji: string
  tagline: string
  description: string
  heroText: string
  accentColor: string
  articles: Article[]
  price?: string
}

export function LandingTemplate({
  appSlug,
  title,
  emoji,
  tagline,
  description,
  heroText,
  accentColor,
  articles,
  price = '4,99€',
}: LandingTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <header style={{ backgroundColor: accentColor }} className="text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-7xl mb-6">{emoji}</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{title}</h1>
          <p className="text-xl sm:text-2xl font-light opacity-90 mb-8">{tagline}</p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">{heroText}</p>
          <a
            href="#articulos"
            className="mt-10 inline-block bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            Leer Guías Gratuitas →
          </a>
        </div>
      </header>

      {/* Articles */}
      <main id="articulos" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Guías Técnicas Gratuitas
        </h2>
        <p className="text-center text-gray-600 mb-12">{description}</p>

        <div className="space-y-16">
          {articles.map((article, index) => (
            <article key={article.slug} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div style={{ backgroundColor: accentColor }} className="h-2" />
              <div className="p-8">
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Artículo {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h3>
                <div
                  className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* CTA after article */}
                <div className="mt-10 p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🔒</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      ¿Quieres hacer el cálculo exacto para tu proyecto?
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Accede a la calculadora profesional por un único pago de{' '}
                      <span className="font-bold text-green-600 text-xl">{price}</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <a
                        href="/checkout"
                        style={{ backgroundColor: accentColor }}
                        className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-md text-lg"
                      >
                        💳 Comprar Acceso por {price}
                      </a>
                      <span className="text-sm text-gray-500">Pago único · Sin suscripción · Acceso de por vida</span>
                    </div>
                    <div className="flex justify-center gap-6 mt-4 text-sm text-gray-500">
                      <span>✅ Pago seguro vía PayPal</span>
                      <span>✅ Acceso inmediato</span>
                      <span>✅ Sin límite de cálculos</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer title={title} tagline={tagline} />
    </div>
  )
}
