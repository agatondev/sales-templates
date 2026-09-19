import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TemplateDetailClient } from '@/components/sections/TemplateDetailClient'
import { sanityFetch } from '@/sanity/lib/client'

export const revalidate = 60

async function getTemplate(slug: string) {
  const query = `*[_type == "template" && slug.current == $slug][0]{
    _id,
    title,
    "name": title,
    "slug": slug.current,
    "shortDescription": description,
    description,
    price,
    category,
    previewUrl,
    badge,
    features,
    "thumbnailUrl": thumbnail.asset->url
  }`
  return await sanityFetch<any>({ query, params: { slug }, fallback: null })
}

async function getRelated(category: string, currentSlug: string) {
  const query = `*[_type == "template" && category == $category && slug.current != $currentSlug][0..2]{
    _id,
    title,
    "name": title,
    "slug": slug.current,
    "shortDescription": description,
    price,
    category,
    "thumbnailUrl": thumbnail.asset->url
  }`
  return await sanityFetch<any[]>({ query, params: { category, currentSlug }, fallback: [] })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const template = await getTemplate(slug)
  if (!template) return { title: 'Template Not Found' }

  return {
    title: `${template.name || template.title} — Agaton Dev`,
    description: template.shortDescription || template.description,
    openGraph: {
      title: template.name || template.title,
      description: template.shortDescription || template.description,
      images: template.thumbnailUrl ? [{ url: template.thumbnailUrl }] : [],
    },
  }
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = await getTemplate(slug)
  if (!template) notFound()

  const related = await getRelated(template.category || '', template.slug || '')

  return <TemplateDetailClient template={template} related={related} />
}
