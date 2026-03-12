import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  href: string
  icon?: string
}

export default function Card({ title, description, href, icon }: CardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all duration-200 hover:shadow-md hover:border-scas-green"
    >
      {icon && (
        <span className="text-3xl mb-4 block">{icon}</span>
      )}
      <h3 className="font-serif text-xl font-bold text-scas-dark mb-2 group-hover:text-scas-green transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <span className="inline-block mt-4 text-scas-green text-sm font-medium group-hover:translate-x-1 transition-transform">
        Learn more &rarr;
      </span>
    </Link>
  )
}
