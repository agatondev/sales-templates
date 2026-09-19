import type { Metadata } from 'next'
import { TemplatesClient } from '@/components/sections/TemplatesClient'
import { sanityFetch } from '@/sanity/lib/client'

export const metadata: Metadata = {
  title: 'Templates — Browse All Next.js Templates',
  description: 'Browse our collection of premium Next.js dashboards, landing page templates, and e-commerce templates. Filter by category, price, and more.',
}

export const dynamic = 'force-dynamic'
export const revalidate = 60

async function getTemplates() {
  const query = `*[_type == "template"]{
    _id,
    title,
    "slug": slug.current,
    description,
    price,
    category,
    previewUrl,
    badge,
    isFeatured,
    "thumbnailUrl": thumbnail.asset->url
  }`
  return await sanityFetch<any[]>({ query, fallback: [] })
}

export default async function TemplatesPage() {
  const templates = await getTemplates()

  const normalized = templates.map((t: any) => ({
    id: String(t._id),
    name: t.title || t.name,
    slug: t.slug,
    shortDescription: t.description || '',
    price: t.price ?? 0,
    priceFullStack: undefined,
    category: t.category || 'saas',
    isFree: t.price === 0,
    isPremium: (t.price ?? 0) > 0,
    thumbnailUrl: t.thumbnailUrl,
    thumbnailAlt: t.title || 'Template Thumbnail',
  }))

  return <TemplatesClient templates={normalized} />
}
