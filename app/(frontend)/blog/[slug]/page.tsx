import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RichTextRenderer } from '@/components/ui/RichTextRenderer'
import { sanityFetch } from '@/sanity/lib/client'

export const revalidate = 120

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    content,
    "featuredImageUrl": coverImage.asset->url
  }`
  return await sanityFetch<any>({ query, params: { slug }, fallback: null })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} — Agaton Dev Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImageUrl ? [{ url: post.featuredImageUrl }] : [],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <article>
      {/* Hero */}
      <div className="relative border-b border-zinc-800/50">
        {post.featuredImageUrl && (
          <div className="relative aspect-[21/9] max-h-[480px] overflow-hidden">
            <Image
              src={post.featuredImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
          </div>
        )}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 mb-6 transition-colors">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span className="text-zinc-400 font-medium">Agaton Dev</span>
            {post.publishedAt && (
              <>
                <span>·</span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <RichTextRenderer content={post.content} />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex items-center justify-between">
          <Link href="/blog" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to Blog
          </Link>
          <Link href="/templates" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
            Browse Templates →
          </Link>
        </div>
      </div>
    </article>
  )
}
