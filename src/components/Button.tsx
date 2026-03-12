import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-block px-6 py-3 rounded-md font-medium text-sm transition-all duration-200'

  const variants = {
    primary: 'bg-scas-green text-white hover:bg-scas-green-dark shadow-sm hover:shadow-md',
    secondary: 'bg-white text-scas-dark border border-gray-200 hover:border-scas-green hover:text-scas-green',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-scas-dark',
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
