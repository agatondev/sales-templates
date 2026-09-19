import Link from 'next/link'
import Image from 'next/image'

type Category = 'dashboard' | 'landing' | 'ecommerce' | 'saas'

const categoryConfig: Record<Category, { label: string; color: string }> = {
  dashboard: { label: 'Dashboard', color: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
  landing: { label: 'Landing Page', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
  ecommerce: { label: 'E-Commerce', color: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
  saas: { label: 'SaaS', color: 'bg-pink-500/10 text-pink-300 border-pink-500/20' },
}

interface TemplateCardProps {
  name: string
  slug: string
  shortDescription: string
  price: number
  priceFullStack?: number
  category: Category
  isFree?: boolean
  isPremium?: boolean
  thumbnailUrl?: string
  thumbnailAlt?: string
}

export function TemplateCard({
  name,
  slug,
  shortDescription,
  price,
  priceFullStack,
  category,
  isFree,
  isPremium,
  thumbnailUrl,
  thumbnailAlt,
}: TemplateCardProps) {
  const cat = categoryConfig[category] || categoryConfig.dashboard

  return (
    <Link
      href={`/templates/${slug}`}
      className="group relative flex flex-col glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-zinc-900 overflow-hidden">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={thumbnailAlt || name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
          </div>
        )}
        {/* Glow overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* View details CTA on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium">
            View Details →
          </span>
        </div>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isFree && (
            <span className="badge bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Free
            </span>
          )}
          {isPremium && !isFree && (
            <span className="badge bg-amber-500/10 text-amber-300 border border-amber-500/20">
              ✦ Premium
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Category badge */}
        <span className={`badge border ${cat.color} self-start`}>
          {cat.label}
        </span>

        <div className="flex-1">
          <h3 className="font-semibold text-zinc-100 text-base mb-1 group-hover:text-white transition-colors line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60">
          <div className="flex items-baseline gap-2">
            {isFree ? (
              <span className="text-emerald-400 font-bold text-lg">Free</span>
            ) : (
              <>
                <span className="text-white font-bold text-lg">${price}</span>
                {priceFullStack && (
                  <span className="text-zinc-500 text-sm">/ ${priceFullStack} full</span>
                )}
              </>
            )}
          </div>
          <span className="text-xs text-zinc-500 group-hover:text-violet-400 transition-colors font-medium">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  )
}
