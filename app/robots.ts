import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    sitemap: `${serverUrl}/sitemap.xml`,
  }
}
