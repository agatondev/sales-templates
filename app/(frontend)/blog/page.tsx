import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import { sanityFetch } from '@/sanity/lib/client'

export const metadata: Metadata = {
  title: 'Blog — Next.js Development Tips & Tutorials',
  description: 'Insights, tutorials, and tips on Next.js, TypeScript, Tailwind CSS, and modern web development from the Agaton Dev team.',
}

export const revalidate = 120

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "featuredImageUrl": coverImage.asset->url
  }`
  return await sanityFetch<any[]>({ query, fallback: [] })
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div>
      {/* Header */}
      <div className="relative border-b border-zinc-800/50 bg-zinc-900/30 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[200px] rounded-full bg-cyan-500/10 blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Tips, tutorials & insights
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl">
              Thoughts on Next.js, TypeScript, Tailwind CSS, and building great web products.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-zinc-300 mb-2">No posts yet</h2>
            <p className="text-zinc-600">Check back soon for articles and tutorials.</p>
          </div>
        ) : (
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <AnimatedItem key={post._id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col glass-card rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
                >
                  {/* Featured image */}
                  <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                    {post.featuredImageUrl ? (
                      <Image
                        src={post.featuredImageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                        <span className="text-4xl opacity-30">📄</span>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <p className="text-xs text-zinc-600 mb-3">
                      {post.publishedAt ? formatDate(post.publishedAt) : 'Draft'}
                    </p>
                    <h2 className="font-bold text-zinc-100 text-base mb-2 group-hover:text-white transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-zinc-500 line-clamp-3 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                      <span className="text-sm text-zinc-600">Agaton Dev</span>
                      <span className="text-xs text-zinc-600 group-hover:text-cyan-400 transition-colors">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}
