import { MetadataRoute } from 'next'

const BASE_URL = 'https://saas-lastro-buceo-268k70br2.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
