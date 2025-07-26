# Gemini Project Guidelines

This document provides guidelines for interacting with the `lovesomemoving` project.

## Project Overview

This is a [Next.js](https://nextjs.org/) application built with [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/). It uses [Tailwind CSS](https://tailwindcss.com/) for styling.

## Key Technologies

*   **Framework:** Next.js 15
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Linting:** ESLint
*   **Package Manager:** npm

## Development Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Creates a production build.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the codebase.

## Coding Style and Conventions

*   **Components:** Functional components are preferred.
*   **File Naming:** Use PascalCase for component files (e.g., `MyComponent.tsx`).
*   **Styling:** Use Tailwind CSS utility classes for styling. Avoid inline styles where possible.
*   **Imports:** Use absolute imports for modules within the `src` directory (e.g., `import Header from '@/components/Header';`).
*   **Linting:** Adhere to the ESLint rules defined in `eslint.config.mjs`.

## Project Structure

*   `src/app/`: Contains the application's pages and layouts.
*   `src/components/`: Contains reusable React components.
*   `public/`: Contains static assets like images and fonts.
