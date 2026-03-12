import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
})

// Types
export interface SiteSettings {
  title: string
  tagline: string
  email: string
  phone?: string
  address?: string
}

export interface Page {
  _id: string
  title: string
  slug: { current: string }
  subtitle?: string
  heroImage?: SanityImage
  content?: PortableTextBlock[]
}

export interface Trustee {
  _id: string
  name: string
  position: string
  bio: string
  image?: SanityImage
  order: number
  active: boolean
}

export interface Patron {
  _id: string
  name: string
  title: string
  year: number
  description?: string
}

export interface MainRingAttraction {
  _id: string
  year: number
  attractions: string[]
}

export interface ContactInfo {
  _id: string
  email: string
  phone?: string
  address?: string
  mapUrl?: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export type PortableTextBlock = {
  _type: string
  _key: string
  children?: { _type: string; text: string; marks?: string[] }[]
  style?: string
  markDefs?: { _key: string; _type: string; href?: string }[]
}

// GROQ Queries
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(`*[_type == "siteSettings"][0]{
    title,
    tagline,
    email,
    phone,
    address
  }`)
}

export async function getPage(slug: string): Promise<Page | null> {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      subtitle,
      heroImage,
      content
    }`,
    { slug }
  )
}

export async function getTrustees(): Promise<Trustee[]> {
  return client.fetch(`*[_type == "trustee" && active == true] | order(order asc){
    _id,
    name,
    position,
    bio,
    image,
    order,
    active
  }`)
}

export async function getPatrons(): Promise<Patron[]> {
  return client.fetch(`*[_type == "patron"] | order(year asc){
    _id,
    name,
    title,
    year,
    description
  }`)
}

export async function getAttractions(): Promise<MainRingAttraction[]> {
  return client.fetch(`*[_type == "mainRingAttraction"] | order(year asc){
    _id,
    year,
    attractions
  }`)
}

export async function getContactInfo(): Promise<ContactInfo | null> {
  return client.fetch(`*[_type == "contactInfo"][0]{
    _id,
    email,
    phone,
    address,
    mapUrl
  }`)
}
