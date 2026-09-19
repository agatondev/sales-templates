'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TemplateCard } from '@/components/ui/TemplateCard'

type Category = 'dashboard' | 'landing' | 'ecommerce' | 'saas'

interface Template {
  id: string
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

interface TemplatesClientProps {
  templates: Template[]
}

const filterTabs = [
  { label: 'All', value: 'all' },
  { label: 'Dashboards', value: 'dashboard' },
  { label: 'Landing Pages', value: 'landing' },
  { label: 'E-Commerce', value: 'ecommerce' },
  { label: 'SaaS', value: 'saas' },
  { label: 'Free', value: 'free' },
  { label: 'Premium', value: 'premium' },
]

export function TemplatesClient({ templates }: TemplatesClientProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const matchesSearch =
        !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.shortDescription.toLowerCase().includes(search.toLowerCase())

      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'free' && t.isFree) ||
        (activeFilter === 'premium' && t.isPremium && !t.isFree) ||
        t.category === activeFilter

      return matchesSearch && matchesFilter
    })
  }, [templates, activeFilter, search])

  return (
    <div>
      {/* Header */}
      <div className="relative bg-zinc-900/30 border-b border-zinc-800/50 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-violet-600/10 blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">Templates</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Browse all templates
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl">
              Professionally designed, production-ready Next.js templates for every use case.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters + Search */}
      <div className="sticky top-16 z-20 bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Filter tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 flex-1 min-w-0">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  id={`filter-${tab.value}`}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`relative shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeFilter === tab.value
                      ? 'text-white'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {activeFilter === tab.value && (
                    <motion.span
                      layoutId="filter-active"
                      className="absolute inset-0 bg-zinc-800 rounded-lg"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative shrink-0 w-full sm:w-64">
              <input
                id="templates-search"
                type="search"
                placeholder="Search templates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-colors"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-zinc-500">
            {filtered.length} {filtered.length === 1 ? 'template' : 'templates'} found
          </p>
        </div>

        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((template, i) => (
                <motion.div
                  key={template.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                >
                  <TemplateCard
                    name={template.name}
                    slug={template.slug}
                    shortDescription={template.shortDescription}
                    price={template.price}
                    priceFullStack={template.priceFullStack}
                    category={template.category}
                    isFree={template.isFree}
                    isPremium={template.isPremium}
                    thumbnailUrl={template.thumbnailUrl}
                    thumbnailAlt={template.thumbnailAlt}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-3xl mb-4">
                🔍
              </div>
              <h3 className="text-zinc-300 font-semibold mb-2">No templates found</h3>
              <p className="text-zinc-600 text-sm">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => { setSearch(''); setActiveFilter('all') }}
                className="mt-6 px-4 py-2 text-sm text-violet-400 hover:text-violet-300 border border-violet-500/30 rounded-lg hover:bg-violet-500/5 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
