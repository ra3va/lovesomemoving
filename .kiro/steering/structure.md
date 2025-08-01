# Project Structure

## Directory Organization

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── submit-quote/  # Quote submission endpoint
│   ├── quiz/              # Quiz page route
│   │   └── page.tsx       # Interactive moving quiz
│   ├── favicon.ico        # Site favicon
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage component
├── components/            # Reusable React components
│   ├── FloatingHearts.tsx # Animated background effect
│   ├── Footer.tsx         # Site footer
│   └── Header.tsx         # Site header/navigation
```

## File Naming Conventions
- **Pages**: `page.tsx` (App Router convention)
- **Layouts**: `layout.tsx` (App Router convention)
- **Components**: PascalCase (e.g., `FloatingHearts.tsx`)
- **Styles**: `globals.css` for global styles

## Component Architecture
- **Client Components**: Use `"use client"` directive for interactive components
- **Server Components**: Default for static content
- **Shared Components**: Located in `src/components/`
- **Page Components**: Located in respective `app/` route folders

## Styling Patterns
- **Tailwind Classes**: Utility-first approach
- **Inline Styles**: Used for brand colors (`style={{backgroundColor: '#C75B9B'}}`)
- **CSS Modules**: Custom animations in `globals.css`
- **Responsive Design**: Mobile-first with `lg:` breakpoints

## State Management
- **React useState**: For component-level state
- **Form Handling**: Native form elements with controlled inputs
- **Quiz Logic**: Multi-step form with progress tracking

## Asset Organization
```
public/
├── images/               # Static images
│   ├── hero.png         # Hero section background
│   ├── lovesometran.png # Main logo (transparent)
│   ├── crew.jpg         # Team photo
│   └── mockup.png       # Product mockups
└── icons/               # SVG icons
    ├── file.svg
    ├── globe.svg
    └── window.svg
```

## Configuration Files
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `eslint.config.mjs` - ESLint rules
- `postcss.config.mjs` - PostCSS configuration
- `package.json` - Dependencies and scripts