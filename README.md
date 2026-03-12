# Surrey County Agricultural Society Website

A modern, responsive website built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy the example file and fill in your Sanity credentials:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Dataset name (usually `production`)
- `NEXT_PUBLIC_SANITY_API_VERSION` - API version (e.g. `2024-01-01`)
- `SANITY_API_TOKEN` - Your Sanity API token with Editor permissions

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx            # Home
│   ├── about/page.tsx      # About Us
│   ├── history/page.tsx    # History & Timeline
│   ├── trustees/page.tsx   # Trustee Profiles
│   ├── contact/page.tsx    # Contact & Get Involved
│   ├── layout.tsx          # Root Layout
│   ├── globals.css         # Global Styles
│   └── not-found.tsx       # 404 Page
├── components/             # Reusable Components
│   ├── Header.tsx          # Navigation
│   ├── Footer.tsx          # Footer
│   ├── Button.tsx          # CTA Buttons
│   ├── Card.tsx            # Signpost Cards
│   ├── HeroSection.tsx     # Hero Banners
│   └── RichTextBlock.tsx   # Sanity Text Renderer
└── lib/                    # Utilities
    ├── sanity.ts           # Sanity Client & Queries
    ├── imageUrl.ts         # Image URL Builder
    └── constants.ts        # Site Constants
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, welcome, signpost cards, CTA |
| About | `/about` | Mission, purpose, key facts |
| History | `/history` | Timeline 1829-present, patrons, attractions |
| Trustees | `/trustees` | Trustee profiles with bios |
| Contact | `/contact` | Contact info, ways to get involved |

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Sanity** - Headless CMS
- **Vercel** - Deployment (recommended)

## Brand

- Primary colour: `#93b5a4` (green)
- Headings: Georgia serif
- Body: System sans-serif
