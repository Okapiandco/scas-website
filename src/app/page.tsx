import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Surrey County Agricultural Society | Promoting Farming Heritage Since 1829',
  description:
    'The Surrey County Agricultural Society promotes agriculture, countryside, and rural life across Surrey. Founded in 1955 from two historic societies dating back to 1829.',
  openGraph: {
    title: 'Surrey County Agricultural Society',
    description:
      'Promoting farming heritage and community in Surrey since 1829. Membership, sponsorship, and exhibiting opportunities.',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title={SITE_NAME}
        subtitle={SITE_TAGLINE}
        backgroundImage="/0494.jpg"
        tall
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/about">Learn More</Button>
          <Button href="/history" variant="outline">
            Our History
          </Button>
        </div>
      </HeroSection>

      {/* Welcome */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-scas-dark mb-6">
            Welcome to {SITE_NAME}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            The Surrey County Agricultural Society has been at the heart of
            farming and rural life in Surrey for nearly two centuries. Born from
            the amalgamation of the Surrey Agricultural Association (est. 1829)
            and the Redhill Agricultural Society (est. 1862), we continue to
            celebrate and promote the county&apos;s rich agricultural heritage.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/0794.jpg" alt="Lush green crop field in the Surrey countryside" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/8733.jpg" alt="Young handler presenting cattle at a livestock show" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden hidden md:block">
              <Image src="/1040.jpg" alt="Cattle grazing in a Surrey parkland setting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Signpost Cards */}
      <section className="bg-scas-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="About Us"
              description="Learn about our mission to promote agriculture, countryside, and rural life across Surrey."
              href="/about"
            />
            <Card
              title="Our History"
              description="Discover over 70 years of heritage, from our founding societies to one of the largest county shows in England."
              href="/history"
            />
            <Card
              title="Meet the Trustees"
              description="Get to know the dedicated individuals who lead and guide the Society into the future."
              href="/trustees"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-scas-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Get Involved
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            There are many ways to support the Society and be part of our
            community. Whether through membership, volunteering, sponsorship, or
            exhibiting, we&apos;d love to hear from you.
          </p>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
