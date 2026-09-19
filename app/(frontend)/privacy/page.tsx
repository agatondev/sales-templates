import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — TemplateHub',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="text-zinc-400 leading-relaxed space-y-3 text-sm">{children}</div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">← Home</Link>
        <h1 className="text-4xl font-extrabold text-white mt-4 mb-2">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm">Last updated: January 1, 2025</p>
      </div>

      <div className="prose-dark">
        <Section title="1. Information We Collect">
          <p>We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Email address (for purchase receipts and support)</li>
            <li>Payment information (processed by our payment partners — we never see your full card number)</li>
            <li>Name and contact details for billing purposes</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information collected to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Process your purchase and deliver digital products</li>
            <li>Send purchase receipts and license keys</li>
            <li>Provide customer support</li>
            <li>Send optional product updates and newsletter (you may unsubscribe at any time)</li>
          </ul>
        </Section>

        <Section title="3. Information Sharing">
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website and processing payments, under strict confidentiality agreements.</p>
        </Section>

        <Section title="4. Cookies">
          <p>We use essential cookies to maintain your session and preferences. We may use analytics cookies (e.g., Google Analytics) to understand how visitors use our site. You can disable cookies in your browser settings, though this may affect site functionality.</p>
        </Section>

        <Section title="5. Data Security">
          <p>We implement industry-standard security measures to protect your information. However, no method of transmission over the Internet is 100% secure. We encourage you to use a strong, unique password for any accounts.</p>
        </Section>

        <Section title="6. Data Retention">
          <p>We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data by contacting our support team.</p>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us through our support channels.</p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by email or by posting a notice on our website.</p>
        </Section>

        <Section title="9. Contact Us">
          <p>If you have questions about this Privacy Policy, please contact us through the support link on our website.</p>
        </Section>
      </div>
    </div>
  )
}
