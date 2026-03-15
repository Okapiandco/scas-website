import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Our History',
  description:
    'Discover the rich history of the Surrey County Agricultural Society, from its founding societies in 1829 to the present day.',
  openGraph: {
    title: 'Our History | Surrey County Agricultural Society',
    description: 'A journey spanning nearly two centuries of agricultural heritage in Surrey, from 1829 to the present day.',
  },
}

const patrons = [
  { year: 1961, name: 'Field Marshall Viscount Montgomery of Alamein' },
  { year: 1962, name: 'The Rt Hon The Viscount Hampden' },
  { year: 1963, name: 'The Rt Hon The Lord Rank' },
  { year: 1964, name: 'Sir Richard Glyn Bt' },
  { year: 1965, name: 'Sir Wavell Wakefield Bt (later Lord Wakefield)' },
  { year: 1966, name: 'Major J. S. Courtauld' },
  { year: 1967, name: 'Sir Roland Nugent Bt' },
  { year: 1968, name: 'Sir Arthur Howard' },
  { year: 1969, name: 'The Earl of Derby' },
  { year: 1970, name: 'Lord Barnby' },
  { year: 1971, name: 'Major S. E. Courage' },
  { year: 1972, name: 'The Lord Vestey' },
  { year: 1973, name: 'Sir Randle Feilden' },
  { year: 1974, name: 'Col Sir John Miller' },
  { year: 1975, name: 'H.R.H. The Duke of Edinburgh' },
  { year: 1976, name: 'R. S. J. Harvey Esq' },
  { year: 1977, name: 'Her Majesty The Queen (Silver Jubilee Year)' },
  { year: 1978, name: 'Captain J. A. MacDonald-Buchanan' },
  { year: 1979, name: 'H.R.H. The Duke of Gloucester' },
  { year: 1980, name: 'The Lord Plummer of St Marylebone' },
  { year: 1981, name: 'Air Chief Marshal Sir Denis Crowley-Milling' },
  { year: 1982, name: 'Sir William Barlow' },
  { year: 1983, name: 'The Rt Hon Margaret Thatcher, Prime Minister' },
]


export default function HistoryPage() {
  return (
    <>
      <HeroSection
        title="Our History"
        subtitle="A journey spanning nearly two centuries of agricultural heritage in Surrey"
        backgroundImage="/1040.jpg"
      />

      {/* Early Foundation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-scas-green pl-6 mb-12">
            <span className="text-scas-green font-bold text-sm uppercase tracking-wider">
              1829 &ndash; 1862
            </span>
            <h2 className="font-serif text-3xl font-bold text-scas-dark mt-2 mb-4">
              Early Foundation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The roots of our Society stretch back to 1829, when the Surrey
              Agricultural Association was established to promote farming
              excellence across the county. Over three decades later, in 1862,
              the Redhill Agricultural Society was founded to serve the
              agricultural community in the southern part of Surrey.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Both organisations played vital roles in supporting local farmers,
              hosting shows, and fostering the exchange of agricultural knowledge
              throughout the Victorian era and beyond.
            </p>
          </div>

          {/* Amalgamation */}
          <div className="border-l-4 border-scas-green pl-6 mb-12">
            <span className="text-scas-green font-bold text-sm uppercase tracking-wider">
              1953 &ndash; 1955
            </span>
            <h2 className="font-serif text-3xl font-bold text-scas-dark mt-2 mb-4">
              The Amalgamation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By the early 1950s, both societies were struggling financially in
              the aftermath of the Second World War. The Surrey Agricultural
              Association had funds of just &pound;39 13s 4d, making the
              prospect of continuing independently increasingly difficult.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Forward-thinking leadership recognised that combining forces would
              be the best path forward. In 1955, the two societies formally
              amalgamated to create the Surrey County Agricultural Society,
              uniting their resources, expertise, and passion for Surrey&apos;s
              agricultural community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This bold decision would prove transformative, creating a stronger
              organisation with a wider reach and greater ambitions than either
              society could have achieved alone.
            </p>
          </div>

          {/* Growth */}
          <div className="border-l-4 border-scas-green pl-6 mb-12">
            <span className="text-scas-green font-bold text-sm uppercase tracking-wider">
              1956 &ndash; 1960
            </span>
            <h2 className="font-serif text-3xl font-bold text-scas-dark mt-2 mb-4">
              Growth &amp; Establishment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The newly formed Society wasted no time in establishing itself.
              Shows were held at various venues across the county as the
              organisation found its feet and built its reputation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These early years were characterised by enthusiasm, growing
              membership, and an expanding programme of events that brought
              together farmers, rural businesses, and the wider community.
            </p>
          </div>

          {/* Historic Images */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/0794.jpg" alt="Green crop field in the Surrey countryside" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/4135.jpg" alt="Aberdeen Angus herd grazing beside a traditional Surrey farmhouse" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/Raddery-Endeavour-S191-0856.jpg" alt="Raddery Endeavour pedigree cattle" fill className="object-cover" />
            </div>
          </div>

          {/* Guildford */}
          <div className="border-l-4 border-scas-green pl-6 mb-12">
            <span className="text-scas-green font-bold text-sm uppercase tracking-wider">
              1961 &ndash; Present
            </span>
            <h2 className="font-serif text-3xl font-bold text-scas-dark mt-2 mb-4">
              Move to Guildford
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The pivotal decision in 1961 to relocate the show to Stoke Park,
              Guildford, held on the Spring Bank Holiday, transformed the
              Society&apos;s fortunes. The move proved a masterstroke, providing a
              magnificent setting that attracted ever-larger crowds.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Substantial investment was made in infrastructure and facilities,
              and the show grew to become one of the largest and most prestigious
              one-day agricultural shows in the country.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Society also secured the patronage of some of the most
              distinguished figures in the land, reflecting its growing stature
              and importance.
            </p>
          </div>
        </div>
      </section>

      {/* Royal Patrons */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-scas-dark text-center mb-12">
            Patrons of the Society
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {patrons.map((patron) => (
                <div
                  key={patron.year}
                  className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0"
                >
                  <span className="text-scas-green font-bold text-lg min-w-[4rem]">
                    {patron.year}
                  </span>
                  <span className="text-gray-700">{patron.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
