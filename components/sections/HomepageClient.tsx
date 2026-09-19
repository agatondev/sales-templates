'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { WaterRippleBackground } from '@/components/ui/WaterRippleBackground'
import { HeroSection } from '@/components/sections/HeroSection'

interface StatItem {
  value: number
  suffix: string
  label: string
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          let start = 0
          const duration = 1800
          const step = (value / duration) * 16
          const timer = setInterval(() => {
            start += step
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, started])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats: StatItem[] = [
  { value: 50, suffix: '+', label: 'Premium Next.js Templates' },
  { value: 12500, suffix: '+', label: 'Active Developers Worldwide' },
  { value: 99.8, suffix: '%', label: 'Lighthouse Performance Score' },
  { value: 24, suffix: '/7', label: 'Priority Support & Updates' },
]

const showcaseTemplates = [
  {
    name: 'Velra Real Estate',
    category: 'Real Estate',
    price: '$179',
    badge: 'Full-Stack + AI Staging',
    desc: 'Public website for buying/renting, agency dashboard, NestJS API, AI virtual staging & RTL Arabic/English.',
    slug: 'velocity-dashboard',
    gradient: 'from-violet-600/20 via-indigo-600/10 to-transparent',
    icon: '🏠',
    tags: ['Next.js 16', 'NestJS', 'AI Staging', 'RTL'],
  },
  {
    name: 'Kinora Fitness Coaching',
    category: 'Health & Fitness',
    price: '$179',
    badge: 'AI Assistant',
    desc: 'Fitness coaching platform with NestJS backend, workout logger, client roster, AI meal planner & RTL support.',
    slug: 'kinora-fitness',
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    icon: '⚡',
    tags: ['Next.js 16', 'PostgreSQL', 'Prisma', 'RTL'],
  },
  {
    name: 'Learnio LMS & E-Learning',
    category: 'Education',
    price: '$179',
    badge: 'Live Classes + Stripe',
    desc: 'LMS template with live classes, AI quiz generator, Stripe checkout, certificates & full NestJS API.',
    slug: 'saas-starter-kit',
    gradient: 'from-cyan-600/20 via-blue-600/10 to-transparent',
    icon: '🎓',
    tags: ['Stripe', 'Live Video', 'Certificates', 'NestJS'],
  },
  {
    name: 'NexShop E-Commerce',
    category: 'E-Commerce',
    price: '$179',
    badge: 'Admin Dashboard + AI Try-On',
    desc: 'Next.js 16 e-commerce storefront with guest checkout, JWT auth, AI try-on, admin dashboard & NestJS API.',
    slug: 'nexshop-ecommerce',
    gradient: 'from-pink-600/20 via-rose-600/10 to-transparent',
    icon: '🛒',
    tags: ['Storefront', 'Cart State', 'Admin Panel', 'Stripe'],
  },
]

const bentoFeatures = [
  {
    title: 'Full-Stack Architecture',
    subtitle: 'Auth, DB & NestJS APIs',
    description: 'Every template comes with optional full-stack capabilities including NestJS APIs, PostgreSQL with Prisma ORM, and JWT/NextAuth authentication.',
    icon: '⚡',
    tag: 'Production Ready',
    colSpan: 'lg:col-span-2',
    accentColor: 'border-violet-500/30 bg-violet-500/5',
  },
  {
    title: 'RTL & Global i18n',
    subtitle: 'English & Arabic Built-In',
    description: 'Out of the box support for Right-To-Left layouts and internationalization translations for global markets.',
    icon: '🌐',
    tag: 'Global Ready',
    colSpan: 'lg:col-span-1',
    accentColor: 'border-cyan-500/30 bg-cyan-500/5',
  },
  {
    title: '100 Core Web Vitals',
    subtitle: 'Performance Driven',
    description: 'Zero bloat architecture optimized for instant page loads, minimal JavaScript bundles, and 100/100 Lighthouse scores.',
    icon: '🚀',
    tag: 'Speed Standard',
    colSpan: 'lg:col-span-1',
    accentColor: 'border-emerald-500/30 bg-emerald-500/5',
  },
  {
    title: 'Modern UI & Animations',
    subtitle: 'Framer Motion + Tailwind CSS',
    description: 'Rich dark-mode designs with interactive micro-animations, glassmorphism, responsive navigation, and accessible ARIA markup.',
    icon: '🎨',
    tag: 'Pixel Perfect',
    colSpan: 'lg:col-span-2',
    accentColor: 'border-pink-500/30 bg-pink-500/5',
  },
]

const faqs = [
  {
    q: 'What is included with each Next.js template purchase?',
    a: 'Each purchase includes full Next.js 16 source code, TypeScript types, Tailwind CSS styles, complete documentation, free updates, and optional NestJS backend API codebases.',
  },
  {
    q: 'Can I use these templates for client projects and commercial SaaS?',
    a: 'Yes! Our standard license allows unlimited usage for personal and client projects. For multi-tenant SaaS products, you can easily customize the full-stack codebase.',
  },
  {
    q: 'Are the templates compatible with Right-to-Left (RTL) languages like Arabic?',
    a: 'Absolutely! Our templates feature first-class RTL layout support with seamless language switching between English and Arabic.',
  },
  {
    q: 'How do I access the Payload CMS admin panel for content management?',
    a: 'Payload CMS is built directly into the Next.js application at /admin. You can manage templates, blog posts, media assets, and site settings visually.',
  },
  {
    q: 'Do you offer technical support for integration?',
    a: 'Yes, we provide technical guidance and support for setting up your environment, deploying to Vercel/Railway, and configuring database connections.',
  },
]

export function HomepageClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [previewTab, setPreviewTab] = useState<'desktop' | 'mobile' | 'code'>('desktop')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const headlinePhrases = ['Real Estate & LMS', 'Analytics Dashboards', 'SaaS Landing Pages', 'E-Commerce Storefronts']
  const [phraseIdx, setPhraseIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % headlinePhrases.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [headlinePhrases.length])

  const filteredTemplates = selectedCategory === 'all'
    ? showcaseTemplates
    : showcaseTemplates.filter((t) => t.category.toLowerCase().includes(selectedCategory))

  return (
    <div className="relative bg-[#08080a] text-zinc-100 overflow-hidden">
      {/* Interactive Water Droplets & Ripples Canvas */}
      <WaterRippleBackground />

      {/* ===== HERO SECTION REPLICATING ANIQ-UI LAYOUT ===== */}
      <HeroSection />

      {/* ===== INTERACTIVE PLATFORM PREVIEW SHOWCASE ===== */}
      <section className="relative -mt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/70 backdrop-blur-xl shadow-2xl overflow-hidden p-2 sm:p-4"
        >
          {/* Header toolbar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs text-zinc-500 font-mono hidden sm:inline">templatehub.dev/preview/velra-realestate</span>
            </div>

            {/* View Switcher */}
            <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
              <button
                onClick={() => setPreviewTab('desktop')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  previewTab === 'desktop' ? 'bg-violet-600 text-white shadow' : 'text-zinc-400 hover:text-white'
                }`}
              >
                💻 Desktop
              </button>
              <button
                onClick={() => setPreviewTab('mobile')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  previewTab === 'mobile' ? 'bg-violet-600 text-white shadow' : 'text-zinc-400 hover:text-white'
                }`}
              >
                📱 Mobile
              </button>
              <button
                onClick={() => setPreviewTab('code')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  previewTab === 'code' ? 'bg-violet-600 text-white shadow' : 'text-zinc-400 hover:text-white'
                }`}
              >
                ⚡ Architecture
              </button>
            </div>
          </div>

          {/* Preview Container */}
          <div className="relative aspect-[16/9] min-h-[380px] sm:min-h-[500px] bg-gradient-to-br from-[#0c0c10] via-[#12121a] to-[#08080c] rounded-xl overflow-hidden flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <AnimatePresence mode="wait">
              {previewTab === 'desktop' && (
                <motion.div
                  key="desktop"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col justify-between relative z-10"
                >
                  {/* Top Bar Mockup */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center font-bold text-white text-sm">V</div>
                      <div>
                        <div className="text-sm font-semibold text-white">Velra Real Estate & Dashboard</div>
                        <div className="text-xs text-zinc-400">Next.js 16 + NestJS API + AI Virtual Staging</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                        ● Live Demo Ready
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
                        RTL (العربية / English)
                      </span>
                    </div>
                  </div>

                  {/* Grid Mockup Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <div className="text-xs text-zinc-500 mb-1">Total Properties</div>
                      <div className="text-2xl font-bold text-white">1,482 Listings</div>
                      <div className="mt-2 text-xs text-emerald-400">↑ 14.2% growth this month</div>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <div className="text-xs text-zinc-500 mb-1">AI Staging Renders</div>
                      <div className="text-2xl font-bold text-white">8,920 Created</div>
                      <div className="mt-2 text-xs text-violet-400">Powered by Stable Diffusion API</div>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <div className="text-xs text-zinc-500 mb-1">Backend API</div>
                      <div className="text-2xl font-bold text-white">NestJS + Postgres</div>
                      <div className="mt-2 text-xs text-cyan-400">JWT Auth & Prisma ORM</div>
                    </div>
                  </div>

                  {/* Bottom Activity Bar */}
                  <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                    <div className="text-xs text-zinc-400">
                      Looking to customize this template? Access source code & docs instantly upon download.
                    </div>
                    <Link href="/templates/velocity-dashboard" className="text-xs font-semibold text-violet-400 hover:text-violet-300">
                      View Template Details →
                    </Link>
                  </div>
                </motion.div>
              )}

              {previewTab === 'mobile' && (
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-sm h-full mx-auto rounded-2xl border border-zinc-700 bg-zinc-950 p-4 shadow-2xl flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <span className="font-bold text-sm text-white">Velra Mobile</span>
                    <span className="text-xs text-violet-400">RTL Enabled</span>
                  </div>
                  <div className="space-y-3 my-4">
                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                      <div className="text-xs font-medium text-white mb-1">Property Search & AI Filters</div>
                      <div className="h-2 rounded bg-violet-600/40 w-3/4 mb-1" />
                      <div className="h-2 rounded bg-zinc-800 w-1/2" />
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                      <div className="text-xs font-medium text-emerald-400 mb-1">Agency Dashboard</div>
                      <div className="text-lg font-bold text-white">$142,500 Revenue</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-violet-600 text-center text-xs font-semibold text-white">
                    Touch-Optimized Mobile View
                  </div>
                </motion.div>
              )}

              {previewTab === 'code' && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full font-mono text-xs text-zinc-300 p-4 rounded-xl bg-zinc-950 border border-zinc-800 overflow-x-auto"
                >
                  <pre>{`// Template Architecture Overview
export default async function VelraRealEstate() {
  const payload = await getPayload({ config })
  const properties = await payload.find({ collection: 'properties' })

  return (
    <FullStackLayout
      framework="Next.js 16 App Router"
      backend="NestJS REST & GraphQL API"
      database="PostgreSQL + Prisma ORM"
      i18n={{ defaultLocale: 'en', locales: ['en', 'ar'], rtl: true }}
      cms="Payload CMS 3 Integration"
    />
  )
}`}</pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* ===== STATS COUNTER BAR ===== */}
      <section className="relative border-y border-zinc-800/80 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEMPLATES SHOWCASE SECTION ===== */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">Premium Marketplace</p>
              <h2 className="text-3xl sm:text-5xl font-bold text-white">
                Featured <span className="text-gradient">Next.js Templates</span>
              </h2>
              <p className="text-zinc-400 mt-3 max-w-xl text-sm sm:text-base">
                Explore landing pages, dashboards, and full-stack applications with frontend-only and complete packages available.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800">
              {['all', 'real estate', 'fitness', 'education', 'e-commerce'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all ${
                    selectedCategory === cat
                      ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Template Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTemplates.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative glass-card rounded-2xl overflow-hidden glass-card-hover border border-zinc-800 hover:border-violet-500/40 p-6 flex flex-col justify-between"
              >
                {/* Background Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{t.icon}</span>
                      <div>
                        <span className="text-xs text-violet-400 font-semibold uppercase tracking-wider">{t.category}</span>
                        <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">{t.name}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-white">{t.price}</div>
                      <div className="text-[10px] text-zinc-500">Full License</div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {t.desc}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {t.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-medium text-zinc-300 bg-zinc-900/90 border border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-zinc-800/80">
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {t.badge}
                  </span>

                  <Link
                    href={`/templates/${t.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-violet-400 transition-colors"
                  >
                    View Details & Live Demo →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-500 text-sm font-semibold text-white transition-all shadow-lg"
            >
              Browse All Templates Catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BENTO GRID FEATURES SECTION ===== */}
      <section className="py-28 bg-zinc-950/50 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">Built for Modern Developers</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Designed for Speed, Scale & <span className="text-gradient-cyan">Flexibility</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
              Professionally designed, fully responsive templates to kickstart your web projects with zero technical debt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {bentoFeatures.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative rounded-2xl border p-8 glass-card hover:border-zinc-600 transition-all ${b.colSpan} ${b.accentColor}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl">
                    {b.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-zinc-300 bg-zinc-900 border border-zinc-800">
                    {b.tag}
                  </span>
                </div>
                <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">{b.subtitle}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{b.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOM WEB DEVELOPMENT SERVICES BANNER ===== */}
      <section className="py-24 relative bg-gradient-to-b from-zinc-950 via-[#0a0a10] to-zinc-950 border-t border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-violet-500/30 bg-gradient-to-r from-violet-950/40 via-zinc-900/90 to-cyan-950/40 p-8 sm:p-14 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-6">
                  <span>💧</span> Custom Engineering & Web Agency
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                  Need a Custom Web App or <span className="text-gradient">Tailored Platform?</span>
                </h2>
                <p className="text-zinc-300 text-base leading-relaxed mb-8">
                  Beyond templates, <strong>Agaton Dev</strong> designs and engineers bespoke full-stack applications, SaaS platforms, AI integrations, and enterprise dashboards built for high performance and scale.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    'Custom Next.js 16 Web Apps',
                    'NestJS REST & GraphQL APIs',
                    'AI Assistants & Microservices',
                    'High-Converting UI/UX Design',
                  ].map((service) => (
                    <div key={service} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200 font-medium">
                      <span className="w-4 h-4 rounded-full bg-violet-500/20 border border-violet-400/40 flex items-center justify-center text-violet-300 text-[10px]">✓</span>
                      {service}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="mailto:contact@agaton.dev"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-zinc-950 bg-white hover:bg-zinc-100 shadow-xl transition-all text-center"
                  >
                    Hire Agaton Dev for Your Project →
                  </a>
                  <Link
                    href="/about"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors text-center"
                  >
                    Learn About Our Team
                  </Link>
                </div>
              </div>

              {/* Interactive Agency Live Metric Preview */}
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Agaton Dev Client Status</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">Status: Booking Q4 Projects</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                      <span>Full-Stack Web Dev Capacity</span>
                      <span className="text-emerald-400 font-bold">100% Available</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 w-full" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-zinc-400">Average Turnaround</div>
                      <div className="text-lg font-bold text-white">2 - 4 Weeks</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-zinc-400">Code Guarantee</div>
                      <div className="text-xs font-bold text-violet-400">Zero Technical Debt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ACCORDION SECTION ===== */}
      <section className="py-28 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">Questions & Answers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Find answers to common questions about our Next.js templates, licensing, and support.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-zinc-800/80 rounded-2xl bg-zinc-900/40 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/30 transition-colors"
                >
                  <span className="font-semibold text-white text-base pr-4">{faq.q}</span>
                  <span className={`text-zinc-400 text-xl transition-transform duration-200 ${activeFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-12 sm:p-20 border border-violet-500/30 bg-gradient-to-br from-violet-950/40 via-zinc-950 to-zinc-950 shadow-2xl"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold text-violet-300 bg-violet-500/10 border border-violet-500/20 mb-6 inline-block">
                ⚡ Instant Download & Lifetime Access
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
                Start Building Your Next Big Idea <span className="text-gradient">Today</span>
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of developers worldwide who trust TemplateHub for production-ready Next.js templates.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/templates"
                  className="px-8 py-4 rounded-xl text-base font-bold text-white bg-violet-600 hover:bg-violet-500 shadow-xl shadow-violet-600/30 transition-all hover:scale-[1.02]"
                >
                  Browse All Templates →
                </Link>
                <Link
                  href="/templates?filter=free"
                  className="px-8 py-4 rounded-xl text-base font-semibold text-zinc-300 border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 hover:text-white transition-all"
                >
                  View Free Templates
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
