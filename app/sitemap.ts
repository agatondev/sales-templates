import { MetadataRoute } from 'next'
import { sanityFetch } from '@/sanity/lib/client'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${serverUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${serverUrl}/templates`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${serverUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${serverUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${serverUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${serverUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  try {
    const templates = await sanityFetch<{ slug: string; _updatedAt?: string }[]>({
      query: `*[_type == "template"]{ "slug": slug.current, _updatedAt }`,
      fallback: [],
    })

    const templateRoutes: MetadataRoute.Sitemap = templates
      .filter((t) => Boolean(t.slug))
      .map((t) => ({
        url: `${serverUrl}/templates/${t.slug}`,
        lastModified: new Date(t._updatedAt || Date.now()),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))

    const posts = await sanityFetch<{ slug: string; _updatedAt?: string }[]>({
      query: `*[_type == "post"]{ "slug": slug.current, _updatedAt }`,
      fallback: [],
    })

    const postRoutes: MetadataRoute.Sitemap = posts
      .filter((p) => Boolean(p.slug))
      .map((p) => ({
        url: `${serverUrl}/blog/${p.slug}`,
        lastModified: new Date(p._updatedAt || Date.now()),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))

    return [...staticRoutes, ...templateRoutes, ...postRoutes]
  } catch {
    return staticRoutes
  }
}
