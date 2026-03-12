import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@/lib/sanity'

interface RichTextBlockProps {
  content: PortableTextBlock[]
}

const components = {
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="font-serif text-3xl font-bold text-scas-dark mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-serif text-2xl font-bold text-scas-dark mt-6 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-serif text-xl font-bold text-scas-dark mt-4 mb-2">
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-scas-green pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children?: React.ReactNode
      value?: { href?: string }
    }) => (
      <a
        href={value?.href}
        className="text-scas-green hover:text-scas-green-dark underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1 text-gray-700">
        {children}
      </ol>
    ),
  },
}

export default function RichTextBlock({ content }: RichTextBlockProps) {
  if (!content) return null

  return (
    <div className="prose max-w-none">
      <PortableText value={content} components={components} />
    </div>
  )
}
