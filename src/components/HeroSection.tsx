interface HeroSectionProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  backgroundClass?: string
  backgroundImage?: string
  backgroundPosition?: string
  tall?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  children,
  backgroundClass = 'bg-scas-dark',
  backgroundImage,
  backgroundPosition,
  tall = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative ${backgroundClass} text-white`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: backgroundPosition || 'center',
            }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-black/10" />
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          tall ? 'py-36 md:py-48 lg:py-56' : 'py-24 md:py-32'
        }`}
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
