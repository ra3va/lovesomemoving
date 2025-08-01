# Technology Stack

## Framework & Runtime
- **Next.js 15.3.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety and development experience
- **Node.js** - Runtime environment

## Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Poppins Font** - Google Fonts integration (weights: 400, 500, 600, 700, 800)
- **Custom CSS animations** - Floating hearts effect

## Development Tools
- **ESLint 9** - Code linting with Next.js config
- **TypeScript strict mode** - Enhanced type checking
- **Path aliases** - `@/*` maps to `./src/*`

## External Services
- **Web3Forms** - Form submission handling (access key: fdd30e50-f604-45bc-b32e-b90e1e741be7)
- **Elfsight** - Google Reviews widget integration
- **Google Fonts** - Font delivery

## Common Commands

### Development
```bash
npm run dev          # Start development server on localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Project Setup
```bash
npm install          # Install dependencies
```

## Build Configuration
- **Target**: ES2017
- **Module Resolution**: Bundler
- **JSX**: Preserve (handled by Next.js)
- **Strict Mode**: Enabled
- **Source Maps**: Development only