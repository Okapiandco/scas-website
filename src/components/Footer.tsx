import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SITE_NAME, SITE_EMAIL } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-scas-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <Image
              src="/SCAS%20Logo%20.png"
              alt={SITE_NAME}
              width={240}
              height={96}
              className="h-24 w-auto mb-4"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Celebrating farming heritage and community in Surrey since 1829.
              Promoting agriculture, countryside, and rural life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_EMAIL}
                </a>
              </li>
              <li>Stoke Park, Guildford, Surrey</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
