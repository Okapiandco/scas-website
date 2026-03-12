import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-scas-green mb-4">404</h1>
        <h2 className="font-serif text-2xl font-bold text-scas-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been
          moved or no longer exists.
        </p>
        <Button href="/">Return Home</Button>
      </div>
    </div>
  )
}
