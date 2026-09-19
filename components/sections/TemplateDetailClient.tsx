'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { RichTextRenderer } from '@/components/ui/RichTextRenderer'
import { TemplateCard } from '@/components/ui/TemplateCard'

const categoryConfig: Record<string, { label: string; color: string }> = {
  dashboard: { label: 'Dashboard', color: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
  landing: { label: 'Landing Page', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
  ecommerce: { label: 'E-Commerce', color: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
  saas: { label: 'SaaS', color: 'bg-pink-500/10 text-pink-300 border-pink-500/20' },
}

const techColors: Record<string, string> = {
  'Next.js': 'bg-zinc-700 text-zinc-200',
  'TypeScript': 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'Tailwind CSS': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  'Framer Motion': 'bg-pink-500/10 text-pink-300 border-pink-500/20',
  'NestJS': 'bg-red-500/10 text-red-300 border-red-500/20',
  'PostgreSQL': 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  'Prisma': 'bg-teal-500/10 text-teal-300 border-teal-500/20',
}

export function TemplateDetailClient({ template, related }: { template: any; related: any[] }) {
  const [activeImage, setActiveImage] = useState(0)
  const cat = categoryConfig[template.category] || categoryConfig.dashboard
  const allImages = [template.thumbnail, ...(template.gallery || []).map((g: any) => g.image)].filter(Boolean)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <a href="/" className="hover:text-zinc-300 transition-colors">Home</a>
          <span>/</span>
          <a href="/templates" className="hover:text-zinc-300 transition-colors">Templates</a>
          <span>/</span>
          <span className="text-zinc-400">{template.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {allImages[activeImage]?.url ? (
                    <Image
                      src={allImages[activeImage].url}
                      alt={allImages[activeImage].alt || template.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                      <div className="text-6xl opacity-30">🖥️</div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
                {allImages.map((img: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative flex-shrink-0 w-20 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === i ? 'border-violet-500 shadow-lg shadow-violet-500/20' : 'border-zinc-800 hover:border-zinc-600'
                    }`}
                  >
                    {img?.url ? (
                      <Image src={img.url} alt={img.alt || ''} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-zinc-800" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className={`badge border ${cat.color}`}>{cat.label}</span>
              {template.isFree && <span className="badge border bg-emerald-500/10 text-emerald-300 border-emerald-500/20">Free</span>}
              {template.isPremium && !template.isFree && <span className="badge border bg-amber-500/10 text-amber-300 border-amber-500/20">✦ Premium</span>}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{template.name}</h1>
            <p className="text-zinc-400 leading-relaxed">{template.shortDescription}</p>

            {/* Pricing */}
            <div className="glass-card rounded-xl p-5 space-y-3">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Pricing</p>
              {template.isFree ? (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-400 font-bold text-2xl">Free</p>
                    <p className="text-xs text-zinc-600 mt-0.5">Frontend package</p>
                  </div>
                  <a
                    href={template.purchaseUrl || '#'}
                    id="get-free-btn"
                    className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors"
                  >
                    Get Free →
                  </a>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {/* Frontend tier */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
                    <div>
                      <p className="text-white font-semibold text-lg">${template.price}</p>
                      <p className="text-xs text-zinc-500">Frontend only</p>
                    </div>
                    <a
                      href={template.purchaseUrl || '#'}
                      id="buy-frontend-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-violet-500/40 text-violet-300 text-sm font-medium hover:bg-violet-500/10 transition-colors"
                    >
                      Buy Now
                    </a>
                  </div>
                  {/* Full-stack tier */}
                  {template.priceFullStack && (
                    <div className="flex items-center justify-between p-3 rounded-lg bg-violet-500/5 border border-violet-500/30">
                      <div>
                        <p className="text-white font-semibold text-lg">${template.priceFullStack}</p>
                        <p className="text-xs text-zinc-500">Full-stack (with API)</p>
                      </div>
                      <a
                        href={template.purchaseUrl || '#'}
                        id="buy-fullstack-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white overflow-hidden group"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-500 group-hover:from-violet-500 group-hover:to-cyan-500 transition-all duration-300" />
                        <span className="relative">Buy Now</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Live Preview */}
            {template.livePreviewUrl && (
              <a
                href={template.livePreviewUrl}
                id="live-preview-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-zinc-700 text-sm font-medium text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Preview
              </a>
            )}

            {/* Tech stack */}
            {template.techStack?.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {template.techStack.map((t: any) => (
                    <span
                      key={t.tech}
                      className={`badge border ${techColors[t.tech] || 'bg-zinc-800 text-zinc-400 border-zinc-700'}`}
                    >
                      {t.tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Description + Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-6 pb-4 border-b border-zinc-800">About this template</h2>
            <RichTextRenderer content={template.description} />
          </div>

          {/* Features sidebar */}
          {template.features?.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6 pb-4 border-b border-zinc-800">What&apos;s included</h2>
              <ul className="space-y-3">
                {template.features.map((f: any, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 text-xs flex-shrink-0">✓</span>
                    {f.feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related templates */}
      {related.length > 0 && (
        <div className="border-t border-zinc-800/50 bg-zinc-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-8">Related Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((t: any) => (
                <TemplateCard
                  key={t.id}
                  name={t.name}
                  slug={t.slug}
                  shortDescription={t.shortDescription}
                  price={t.price}
                  priceFullStack={t.priceFullStack}
                  category={t.category}
                  isFree={t.isFree}
                  isPremium={t.isPremium}
                  thumbnailUrl={t.thumbnail?.url}
                  thumbnailAlt={t.thumbnail?.alt}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
