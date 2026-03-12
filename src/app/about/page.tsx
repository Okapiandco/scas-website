import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about the Surrey County Agricultural Society, our mission, and our purpose in promoting agriculture and rural life.',
}

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="Our mission and purpose in promoting agriculture, countryside, and rural life across Surrey"
        backgroundImage="/Surrey%20hills.jpg"
      />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-scas-dark mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Surrey County Agricultural Society exists to promote and
            celebrate agriculture, the countryside, and rural life throughout
            Surrey. We are a charitable organisation dedicated to preserving
            farming heritage while embracing the future of the agricultural
            community.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Formed in 1955 through the amalgamation of the Surrey Agricultural
            Association (established 1829) and the Redhill Agricultural Society
            (founded 1862), our Society has been a cornerstone of the county&apos;s
            rural community for generations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our annual Surrey County Show, held at Stoke Park in Guildford, has
            grown to become one of the largest and most prestigious one-day
            agricultural shows in the country, attracting visitors from across
            the region.
          </p>

          <h2 className="font-serif text-3xl font-bold text-scas-dark mb-6 mt-12">
            Our Purpose
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We aim to educate the public about the importance of agriculture,
            support local farmers and producers, and maintain the strong
            connection between Surrey&apos;s communities and the land that sustains
            them. Through our shows, events, and educational programmes, we
            bring town and country together.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-scas-dark text-center mb-12">
            Key Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '70+', label: 'Years of Heritage' },
              { number: '1955', label: 'Society Founded' },
              { number: '50+', label: 'Trustee Years of Service' },
            ].map((fact) => (
              <div key={fact.label} className="text-center">
                <div className="text-4xl font-bold text-scas-green mb-2">
                  {fact.number}
                </div>
                <div className="text-gray-600 text-sm">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-scas-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-scas-dark mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Explore our rich history or get in touch to find out how you can be
            part of the Society.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/history">Explore Our History</Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
