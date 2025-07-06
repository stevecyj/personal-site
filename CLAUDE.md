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
- `src/styles/shortcuts/`: Modular shortcuts organization
  - `components.ts`: Component-related shortcuts (buttons, cards, inputs)
  - `layout.ts`: Layout shortcuts (containers, flex, grid)
  - `typography.ts`: Typography shortcuts (headings, paragraphs, links)
  - `index.ts`: Main shortcuts export
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
- **Google Fonts Integration**: Inter font via `@unocss/preset-web-fonts`
- **Custom Brand Colors**: Complete color palette with brand-specific colors
- **Modular Shortcuts**: Organized in `src/styles/shortcuts/` by category
  - Components: buttons, cards, inputs with hover states
  - Layout: containers, flex/grid utilities
  - Typography: headings, paragraphs, links
- **Integrated with Astro**: via `@unocss/astro` package
- **Configuration**: `uno.config.ts` with proper content scanning

## Development Notes

- Astro uses file-based routing (pages map to URLs)
- TypeScript is configured with strict mode
- No testing framework currently set up
- **UnoCSS** framework configured as CSS solution with:
  - Google Fonts (Inter) integration
  - Modular shortcuts organization
  - Custom brand theme
- Build outputs to `dist/` directory for static hosting

## CSS Architecture

The project uses a modular CSS architecture with UnoCSS:
- **Base Configuration**: `uno.config.ts` with theme and presets
- **Shortcuts Organization**: `src/styles/shortcuts/` directory
  - Separate files for components, layout, and typography
  - TypeScript support for better IDE experience
  - Centralized export via `index.ts`
