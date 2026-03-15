import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Our Trustees',
  description:
    'Meet the dedicated trustees who lead and guide the Surrey County Agricultural Society.',
  openGraph: {
    title: 'Our Trustees | Surrey County Agricultural Society',
    description: 'Meet the dedicated leaders who guide the Surrey County Agricultural Society.',
  },
}

const trustees = [
  {
    name: 'Angus Stovold',
    position: 'Trustee (Finance)',
    image: '/Angus%20Stovold.jpeg',
    bio: 'Angus brings over 35 years of experience in family farming to the Society. As finance trustee, he oversees the financial stewardship of the organisation while maintaining a deep commitment to conservation efforts. His extensive knowledge of Surrey agriculture and his multiple leadership roles make him an invaluable member of the board.',
  },
  {
    name: 'Paul Ibbot',
    position: 'Trustee',
    image: null,
    bio: 'Paul studied agriculture at Wye College before establishing his livestock operation in West Surrey. He manages a flock of Romneys and Southdowns alongside cattle and hay production. His hands-on farming experience and dedication to traditional agricultural practices bring vital practical insight to the Society\'s work.',
  },
  {
    name: 'Bill Biddell',
    position: 'Trustee',
    image: '/Bill.jpg',
    bio: '',
  },
]

export default function TrusteesPage() {
  return (
    <>
      <HeroSection
        title="Our Trustees"
        subtitle="The dedicated leaders who guide the Surrey County Agricultural Society"
        backgroundImage="/9127.jpg"
        backgroundPosition="center 15%"
      />

      {/* Trustees Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-lg leading-relaxed">
            Our trustees volunteer their time and expertise to ensure the Society
            continues to thrive and serve the agricultural community of Surrey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trustees.map((trustee) => (
            <div
              key={trustee.name}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Photo */}
              {trustee.image ? (
                <div className="relative aspect-[3/4] bg-scas-light">
                  <Image
                    src={trustee.image}
                    alt={trustee.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <div className="bg-scas-light h-72 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-scas-green/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-scas-green text-3xl font-serif font-bold">
                        {trustee.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">Photo coming soon</span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-scas-dark mb-1">
                  {trustee.name}
                </h3>
                <p className="text-scas-green font-medium text-sm mb-4">
                  {trustee.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {trustee.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Future Trustees Note */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="bg-scas-light rounded-lg p-8">
            <h3 className="font-serif text-xl font-bold text-scas-dark mb-2">
              Join Our Board
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are always looking for passionate individuals to help guide the
              Society. If you have experience in agriculture, finance, events, or
              community engagement and would like to contribute, we&apos;d love to
              hear from you.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
