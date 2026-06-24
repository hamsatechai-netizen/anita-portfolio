# Anita Portfolio

Modern personal portfolio website for Anita Ayyagari.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- React Router
- Markdown CMS for blog, projects, and publications
- Cloudflare Pages-ready build

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist`.

## Content CMS

Markdown content lives in:

- `content/blogs`
- `content/projects`
- `content/publications`

Each markdown file supports frontmatter:

```yaml
---
title: Article Title
description: Short summary
date: 2026-06-01
category: AI
tags:
  - Responsible AI
---
```

Blog URLs follow:

```text
/blog/article-slug
```

## Cloudflare Pages

Use these settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

Set these environment variables when ready:

```text
VITE_SITE_URL=https://your-domain.com
VITE_CONTACT_EMAIL=your-email@example.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
VITE_GITHUB_URL=https://github.com/your-profile
VITE_MEDIUM_URL=https://medium.com/@your-profile
VITE_ANALYTICS_ID=
```

## Replace Before Publishing

- `public/images/anita-placeholder.svg`
- `public/resume/Anita-Ayyagari-Resume.pdf`
- Social links in `.env`
- `public/sitemap.xml` domain
- `public/robots.txt` domain
