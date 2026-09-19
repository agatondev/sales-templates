import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — TemplateHub',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="text-zinc-400 leading-relaxed space-y-3 text-sm">{children}</div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">← Home</Link>
        <h1 className="text-4xl font-extrabold text-white mt-4 mb-2">Terms of Service</h1>
        <p className="text-zinc-500 text-sm">Last updated: January 1, 2025</p>
      </div>

      <div className="prose-dark">
        <Section title="1. Acceptance of Terms">
          <p>By purchasing, downloading, or using any template from TemplateHub, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our products.</p>
        </Section>

        <Section title="2. License Grant">
          <p>Upon purchase, TemplateHub grants you a non-exclusive, non-transferable license to use the template for:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Unlimited personal projects</li>
            <li>Unlimited client projects (one end product per purchase)</li>
            <li>Modifying the template to suit your needs</li>
          </ul>
          <p className="mt-3">You may <strong className="text-white">not</strong>:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Redistribute, resell, or sublicense the template as-is</li>
            <li>Create derivative template products for sale</li>
            <li>Share the purchased files with others</li>
          </ul>
        </Section>

        <Section title="3. Payment & Pricing">
          <p>All prices are in USD. Purchases are processed by our payment partners. TemplateHub does not store payment information.</p>
        </Section>

        <Section title="4. Refund Policy">
          <p>We offer a 14-day refund policy if the template materially differs from its description. Due to the digital nature of our products, refunds are evaluated case-by-case. To request a refund, contact our support team within 14 days of purchase.</p>
        </Section>

        <Section title="5. Support">
          <p>All templates include 6 months of email support. Support covers installation issues, bug fixes in the template code, and clarification questions. Support does not cover custom development or third-party integrations.</p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>TemplateHub retains intellectual property rights to all templates. The license granted does not transfer ownership of the template code.</p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>TemplateHub provides templates "as is" without warranty of any kind. TemplateHub shall not be liable for any damages arising from the use or inability to use our templates.</p>
        </Section>

        <Section title="8. Changes to Terms">
          <p>We reserve the right to update these terms at any time. Continued use of our products after changes constitutes acceptance of the new terms.</p>
        </Section>

        <Section title="9. Contact">
          <p>For questions about these terms, please contact us through the support link on our website.</p>
        </Section>
      </div>
    </div>
  )
}
