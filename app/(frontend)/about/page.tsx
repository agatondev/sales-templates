import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'About — TemplateHub',
  description: 'Learn about TemplateHub — our mission, story, and the team behind premium Next.js templates.',
}

const values = [
  {
    icon: '🎨',
    title: 'Design Excellence',
    description: 'Every template is crafted with obsessive attention to detail — from spacing to typography to micro-animations.',
  },
  {
    icon: '⚡',
    title: 'Performance First',
    description: 'We optimize for Core Web Vitals from day one, ensuring your users get the fastest possible experience.',
  },
  {
    icon: '🔒',
    title: 'Code Quality',
    description: 'Full TypeScript coverage, comprehensive documentation, and clean architecture patterns throughout.',
  },
  {
    icon: '🤝',
    title: 'Developer Support',
    description: 'We\'re developers helping developers. Every purchase comes with direct access to our support team.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative border-b border-zinc-800/50 bg-zinc-900/30 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">About</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Building the best{' '}
              <span className="text-gradient">Next.js templates</span>
              {' '}on the web
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mx-auto">
              TemplateHub was founded by developers frustrated with templates that looked great in screenshots but fell apart in production. We set out to change that.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Our story</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                We started as a small team of full-stack developers building products for clients. We noticed we were constantly rebuilding the same things — authentication systems, dashboard layouts, landing pages, admin panels.
              </p>
              <p>
                In 2024, we decided to package our best work into templates that any developer could use to skip months of work and get straight to building what matters.
              </p>
              <p>
                Every template we release is extracted from a real production project. That means it&apos;s battle-tested, accessible, performant, and actually scales.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center glass-card">
              <div className="text-5xl mb-4">🚀</div>
              <div className="text-4xl font-extrabold text-white mb-1">2024</div>
              <p className="text-zinc-500 text-sm">Founded</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-lg bg-zinc-800/50">
                  <div className="text-2xl font-bold text-violet-400">50+</div>
                  <div className="text-xs text-zinc-600 mt-0.5">Templates</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-800/50">
                  <div className="text-2xl font-bold text-cyan-400">10k+</div>
                  <div className="text-xs text-zinc-600 mt-0.5">Developers</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Values */}
      <div className="border-t border-zinc-800/50 bg-zinc-900/20 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">What we stand for</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Principles that guide every decision we make.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 hover:border-violet-500/20 transition-colors">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Mission CTA */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to build something great?
            </h2>
            <p className="text-zinc-400 mb-8">
              Browse our collection of premium templates and skip months of development work.
            </p>
            <a
              href="/templates"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white relative overflow-hidden group"
            >
              <span className="absolute inset-0 animated-gradient" />
              <span className="relative">Browse All Templates →</span>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
