import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Agaton Dev — Premium Next.js Templates',
    template: '%s | Agaton Dev',
  },
  description: 'Download free & premium Next.js dashboards, landing page templates and UI components from Agaton Dev. Built with TypeScript and Tailwind CSS.',
  keywords: ['Next.js templates', 'React templates', 'dashboard templates', 'landing page templates', 'TypeScript', 'Tailwind CSS', 'Agaton Dev'],
  authors: [{ name: 'Agaton Dev' }],
  creator: 'Agaton Dev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
    siteName: 'Agaton Dev',
    title: 'Agaton Dev — Premium Next.js Templates',
    description: 'Download premium Next.js dashboards, landing page templates and UI components for modern web development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agaton Dev — Premium Next.js Templates',
    description: 'Download premium Next.js dashboards, landing page templates and UI components for modern web development.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-[#08080a] text-zinc-100 antialiased selection:bg-violet-500/30">
        {children}
      </body>
    </html>
  )
}
