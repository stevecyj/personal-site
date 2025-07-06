# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with **Astro v5.11.0** using TypeScript. The project follows Astro's file-based routing system and static site generation approach.

## 回應風格

- Always response in zh-tw

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro` | Run Astro CLI commands |

## Architecture

- **Pages**: Located in `src/pages/` - each `.astro` file becomes a route
- **Static Assets**: Place in `public/` directory (served directly)
- **Components**: Use `src/components/` for reusable Astro components
- **TypeScript**: Strict configuration enabled, extends Astro's base config

## Key Files

- `astro.config.mjs`: Main Astro configuration with UnoCSS integration
- `uno.config.ts`: UnoCSS configuration with custom theme and shortcuts
- `src/pages/index.astro`: Homepage with profile information
- `src/pages/about.astro`: About page
- `tsconfig.json`: TypeScript configuration with strict mode
- `public/favicon.svg`: Site favicon

## Current Implementation

The homepage displays basic personal information with:
- Profile picture from external URL
- Name and title
- Brief professional description
- **UnoCSS** styling framework configured and integrated

## Styling Framework

**UnoCSS** is configured with:
- Custom brand colors and theme
- Pre-built component shortcuts (btn, card, etc.)
- Integrated with Astro via `@unocss/astro`
- Configuration file: `uno.config.ts`

## Development Notes

- Astro uses file-based routing (pages map to URLs)
- TypeScript is configured with strict mode
- No testing framework currently set up
- **UnoCSS** framework configured as CSS solution
- Build outputs to `dist/` directory for static hosting
