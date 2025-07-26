# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15.3.4** project for "Lovesome Moving Services" - a moving company website built with:
- **React 19** with TypeScript
- **TailwindCSS 4** for styling (with PostCSS)
- **App Router** architecture (src/app directory)
- **ESLint** for code linting

## Development Commands

```bash
# Development server
npm run dev              # Starts Next.js dev server on localhost:3000

# Build and deployment  
npm run build           # Creates production build
npm run start           # Starts production server

# Code quality
npm run lint            # Runs ESLint to check code quality
```

## Architecture

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts and global styles
  - `page.tsx` - Homepage with moving company content
  - `globals.css` - Global CSS styles
- `public/` - Static assets
- Configuration files in root (next.config.ts, tsconfig.json, etc.)

### Key Features
- **Single-page marketing site** for moving services
- **Responsive design** with mobile-first approach
- **Contact forms** for quote requests (not yet functional)
- **Custom color scheme**: Primary purple (#B85A9B), secondary (#7A4B6B), accent pink (#E91E63)
- **TypeScript** with strict mode enabled
- **Path aliases**: `@/*` maps to `./src/*`

### Styling Approach
- Uses **inline styles** for brand colors instead of CSS custom properties
- **TailwindCSS classes** for layout, spacing, and common utilities
- **Custom styled components** with style props for brand-specific colors

### Accessibility Guidelines
- **NEVER use grey text on white backgrounds** - always use high contrast text colors
- Use `text-gray-900` (dark) or `text-gray-800` (medium dark) for main text on white backgrounds
- Use `font-bold` or `font-semibold` to ensure text is easily readable
- Brand theme: "Moved with Love" - focus on care, family, and emotional connection
- Avoid using personal names in copy - keep messaging company-focused

### Image Generation
- **Always use model**: `fal-ai/imagen4/preview/fast` for image generation
- **Hero images**: Use `"aspect_ratio": "16:9"` for proper website hero sections
- **Available aspect ratios**: 1:1, 16:9, 9:16, 3:4, 4:3
- **Composition**: Ensure full faces/bodies visible, no cropped faces
- Generate images that align with "moved with love" theme

## Important Notes

- The project uses **src/ directory structure** (not root app/ directory)
- Forms are currently **static HTML** - no backend integration yet
- **Image import** is unused in page.tsx (TypeScript warning exists)
- Uses **Next.js font optimization** with Geist font family
- Brand messaging centers around love, care, and family values

Always check if the npm development server is running before starting a new one in any folder; if a server is already running and you need to start a new one, kill the existing instance first using Ctrl+C or by finding and killing the process.