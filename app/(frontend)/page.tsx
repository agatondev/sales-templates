import type { Metadata } from 'next'
import { HomepageClient } from '@/components/sections/HomepageClient'

export const metadata: Metadata = {
  title: 'Agaton Dev — Premium Next.js & React Templates for Modern Developers',
  description: 'Download free & premium Next.js dashboards, landing page templates, and full-stack UI components from Agaton Dev. Ready-to-use Next.js 16 templates for modern applications.',
}

export default function HomePage() {
  return <HomepageClient />
}
