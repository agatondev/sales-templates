import Link from 'next/link'

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Templates', href: '/templates' },
      { label: 'Dashboards', href: '/templates?category=dashboard' },
      { label: 'Landing Pages', href: '/templates?category=landing' },
      { label: 'E-Commerce', href: '/templates?category=ecommerce' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Admin Panel', href: '/admin' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white group-hover:scale-105 transition-transform"
              >
                <path d="M16 3L3 28H10.5L16 16.5L21.5 28H29L16 3Z" fill="currentColor" />
                <path d="M16 10L21 21H11L16 10Z" fill="#a78bfa" className="opacity-80" />
              </svg>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Agaton<span className="text-zinc-400 font-medium">Dev</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Premium Next.js 16 templates for modern web development. Designed for speed, accessible markup, NestJS backends, and Payload CMS.
            </p>
          </div>

          {/* Nav columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Agaton Dev. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-zinc-600">
            <span>Built with Next.js 16 & Payload CMS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
