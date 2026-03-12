import HeroSection from '@/components/HeroSection'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title={SITE_NAME}
        subtitle={SITE_TAGLINE}
        backgroundImage="/Homepage%20Hero.jpg"
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

      {/* Signpost Cards */}
      <section className="bg-white py-16">
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
