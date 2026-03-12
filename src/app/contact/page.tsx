import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import { SITE_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Surrey County Agricultural Society. Find out how to get involved through membership, volunteering, sponsorship, or exhibiting.',
  openGraph: {
    title: 'Contact Us | Surrey County Agricultural Society',
    description: 'Get in touch with the Surrey County Agricultural Society. Membership, volunteering, sponsorship, and exhibiting opportunities.',
  },
}

const waysToGetInvolved = [
  {
    title: 'Membership',
    description:
      'Join the Society and become part of our community. Members enjoy exclusive benefits including show privileges and invitations to special events.',
  },
  {
    title: 'Volunteering',
    description:
      'Help make the Surrey County Show a success. We rely on dedicated volunteers to help with everything from stewarding to hospitality.',
  },
  {
    title: 'Sponsorship',
    description:
      'Partner with us to reach thousands of visitors. Sponsorship opportunities are available for businesses of all sizes looking to connect with the rural community.',
  },
  {
    title: 'Exhibiting',
    description:
      'Showcase your livestock, produce, or business at the Surrey County Show. Trade stand and exhibition spaces are available.',
  },
]

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Get Involved"
        subtitle="Connect with the Surrey County Agricultural Society and become part of our story"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-scas-dark mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-scas-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-scas-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-scas-dark mb-1">Email</h3>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="text-scas-green hover:text-scas-green-dark transition-colors"
                  >
                    {SITE_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-scas-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-scas-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-scas-dark mb-1">Show Ground</h3>
                  <p className="text-gray-600">
                    Stoke Park, Guildford, Surrey
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-scas-dark mb-6">
              Ways to Get Involved
            </h2>
            <div className="space-y-6">
              {waysToGetInvolved.map((way) => (
                <div
                  key={way.title}
                  className="bg-white rounded-lg border border-gray-100 p-5 hover:border-scas-green transition-colors"
                >
                  <h3 className="font-serif text-lg font-bold text-scas-dark mb-2">
                    {way.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {way.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-scas-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Connect?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re interested in membership, volunteering, sponsorship,
            or simply want to learn more, we&apos;d love to hear from you.
          </p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="inline-block px-8 py-3 bg-white text-scas-dark font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Send Us an Email
          </a>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-400 text-sm">
          Online contact form coming soon.
        </p>
      </section>
    </>
  )
}
