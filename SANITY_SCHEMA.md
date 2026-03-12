# Sanity CMS Schema Definitions

Copy these schema types into your Sanity Studio project.

## siteSettings.ts

```typescript
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site Title', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'email', title: 'Contact Email', type: 'string' },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'address', title: 'Address', type: 'text' },
  ],
}
```

## page.ts

```typescript
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
  ],
}
```

## trustee.ts

```typescript
export default {
  name: 'trustee',
  title: 'Trustee',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'position', title: 'Position', type: 'string' },
    { name: 'bio', title: 'Biography', type: 'text' },
    { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'active', title: 'Active', type: 'boolean', initialValue: true },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
}
```

## patron.ts

```typescript
export default {
  name: 'patron',
  title: 'Patron',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'title', title: 'Title/Honorific', type: 'string' },
    { name: 'year', title: 'Year', type: 'number' },
    { name: 'description', title: 'Description', type: 'text' },
  ],
  orderings: [{ title: 'Year', name: 'yearAsc', by: [{ field: 'year', direction: 'asc' }] }],
}
```

## mainRingAttraction.ts

```typescript
export default {
  name: 'mainRingAttraction',
  title: 'Main Ring Attraction',
  type: 'document',
  fields: [
    { name: 'year', title: 'Year', type: 'number' },
    {
      name: 'attractions',
      title: 'Attractions',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  orderings: [{ title: 'Year', name: 'yearAsc', by: [{ field: 'year', direction: 'asc' }] }],
}
```

## contactInfo.ts

```typescript
export default {
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'address', title: 'Address', type: 'text' },
    { name: 'mapUrl', title: 'Map URL', type: 'url' },
  ],
}
```

## index.ts (Schema Index)

```typescript
import siteSettings from './siteSettings'
import page from './page'
import trustee from './trustee'
import patron from './patron'
import mainRingAttraction from './mainRingAttraction'
import contactInfo from './contactInfo'

export const schemaTypes = [
  siteSettings,
  page,
  trustee,
  patron,
  mainRingAttraction,
  contactInfo,
]
```
