# Deployment Guide

## Local Development

1. Install dependencies: `npm install`
2. Create `.env.local` from `.env.example`
3. Run dev server: `npm run dev`
4. Visit http://localhost:3000

## Sanity CMS Setup

1. Go to [sanity.io](https://sanity.io) and create a new project
2. Name: "Surrey County Agricultural Society"
3. Dataset: `production`
4. Go to Project Settings > API > Tokens
5. Create token with "Editor" permissions
6. Copy Project ID and Token into `.env.local`

## Deploy to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: SCAS website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/scas-website.git
git push -u origin main
```

### Step 2: Connect Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New" > "Project"
3. Select `scas-website` repository
4. Click "Import"

### Step 3: Environment Variables

In Vercel project Settings > Environment Variables, add:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_TOKEN`

### Step 4: Deploy

Click "Deploy" and wait for the build to complete.

## Custom Domain

In Vercel project Settings > Domains:
1. Add your domain
2. Configure DNS records as shown
3. Wait for propagation (up to 48 hours)
4. SSL is automatic

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check `npm run build` locally for errors |
| No content | Verify Sanity credentials in `.env.local` |
| Styles broken | Clear browser cache, restart dev server |
| Deploy fails | Check environment variables in Vercel |
| 404 errors | Check file names match route structure |
