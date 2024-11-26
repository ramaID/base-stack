# Welcome

A modern full-stack web development template using ESM Vite and Remix.run / React Router v7. This stack provides a robust foundation for building scalable web applications with built-in support for TypeScript, internationalization, testing, and more.

## Core Features

- **Modern Stack:**
  - TypeScript for type safety
  - TailwindCSS for styling
  - Vite for fast development and building
  - Remix.run with React Router v7
  - Hono server

- **Development Tools:**
  - Vitest for unit testing
  - Biome for linting and formatting
  - Lefthook for git hooks
  - CI checks for quality control
  - React Router DevTools

- **Built-in Functionality:**
  - i18n support (client and server)
  - Icons spritesheet generator
  - Environment variable handling
  - SEO essentials (robots.txt, sitemap)

## Internationalization

The stack includes a comprehensive i18n setup using i18next with:

- Multi-language support
- Type-safe resources
- Lazy-loaded client-side translations
- Built-in language switcher
- Intelligent language detection with fallback

## Server Setup

Built on Hono with `react-router-hono-server` integration, the server comes pre-configured with:

- i18next middleware
- Asset caching middleware
- Extensible global application context
- Environment variable injection

Customize the server by modifying `entry.server.tsx`.

## Environment Variables

The stack includes sophisticated environment variable handling:

- Server-side: Variables are parsed and injected into server context
- Client-side: Variables are exposed via `window.env` through the root loader
- Type-safe access in both environments

Example polymorph env helper:
```ts
// app/utils/env.ts
export const polyEnv = typeof process !== "undefined" ? process.env : window.env;
```

Note: Missing required environment variables will cause server startup failure.

## Getting Started

1. Fork the repository

2. Install dependencies:
```bash
pnpm install
```

3. Review project documentation

4. Start development:
```bash
pnpm run dev
```

## Project Structure

The project follows a clean architecture with:

- `/app` - Core application code
  - `/routes` - Route definitions and handlers
  - `/library` - Reusable components
  - `/localization` - i18n setup and resources
  - `/server` - Server configuration
  - `/utils` - Utility functions
- `/resources` - Static assets and translations
- `/scripts` - Build and development scripts
- `/tests` - Test configuration and helpers
