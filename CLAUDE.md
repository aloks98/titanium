# Titanium UI - Claude Code Overview

## Project Summary

Titanium UI is a **modern, themeable React component library** built on Radix UI primitives with Tailwind CSS styling. It provides 50+ production-ready, accessible components with 6 built-in color themes and light/dark mode support.

**Based on:** [ReUI](https://reui.io) (`@reui/components`) - See [reui.io/llms.txt](https://reui.io/llms.txt) for upstream documentation

**Package name:** `@e412/titanium`
**Version:** 0.1.0

## ReUI Foundation

This library is built on top of ReUI, inheriting its core architecture:

- **Radix UI Components** (current) - Accessible primitives with ARIA support
- **Base UI Components** (future) - Planning to migrate as the library matures
- **Custom Components** - Specialized purpose-built elements
- **Animated Components** - Motion-enhanced elements via Framer Motion

> **Migration Note:** Currently most components use Radix UI primitives. Future versions will transition to Base UI for more flexibility and lighter bundle size.

ReUI patterns used:
- CSS variables + Tailwind for theming
- next-themes compatible dark mode
- TanStack Table for data grids
- Recharts for visualizations
- DnD Kit for drag-and-drop (kanban, sortable lists)

## Repository Structure

```
titanium/
├── packages/
│   └── titanium-ui/          # Main component library
│       ├── lib/              # Source code
│       │   ├── base/         # 60+ component files
│       │   ├── hooks/        # React hooks
│       │   ├── utils/        # Utility functions
│       │   └── themes/       # Theme CSS files
│       └── rslib.config.ts   # Library build config
├── apps/
│   └── docs/                 # Documentation website
│       ├── docs/             # Component examples & registry
│       └── rsbuild.config.ts # Docs build config
├── tests/
│   └── components/           # Component test files
├── .storybook/               # Storybook configuration
└── .github/workflows/        # CI/CD pipelines
```

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Core | React 19, TypeScript 5.8, Tailwind CSS 4 |
| Components | Radix UI, TanStack Table, Framer Motion |
| Forms | React Hook Form, Zod |
| Build | RSLib, RsBuild, pnpm workspaces |
| Testing | Vitest, Testing Library |
| Linting | Biome |
| Docs | Storybook, Custom docs app |

## Key Commands

```bash
# Development
pnpm dev                  # Start docs dev server (port 3002)
pnpm storybook           # Start Storybook
pnpm watch               # Watch library for changes

# Building
pnpm build               # Build all workspaces
pnpm build:lib           # Build library only
pnpm build:docs          # Build docs only

# Testing
pnpm test                # Run all tests (vitest run)

# Code Quality
pnpm check               # Lint with Biome (auto-fix)
pnpm check:fix           # Lint with unsafe fixes
pnpm format              # Format code with Biome
```

## Architecture

### Component Organization

Components are in `packages/titanium-ui/lib/base/`:

| Category | Components |
|----------|-----------|
| **Layout** | Card, Separator, AspectRatio, Resizable, Sidebar, ScrollArea |
| **Form** | Input, Textarea, Select, Checkbox, RadioGroup, Switch, Slider, Form, Label |
| **Navigation** | Button, Breadcrumb, Pagination, NavigationMenu, Menubar, DropdownMenu |
| **Data Display** | Table, DataGrid, Badge, Avatar, Progress, Skeleton, Carousel |
| **Feedback** | Alert, Toast (Sonner), Tooltip |
| **Overlays** | Dialog, AlertDialog, Sheet, Popover, HoverCard, Drawer |
| **Advanced** | Command, Calendar, Kanban, Sortable, Tree, Stepper |

### Key Patterns

**1. Theme System** (`lib/base/theme-provider.tsx` + `lib/themes/*.css`)
- Light/dark mode toggle with system detection
- Persists to localStorage
- Uses CSS variables with OKLch color space
- Theme CSS files exported separately (e.g., `@e412/titanium/themes/default.css`)
- Font variables: `--text-sans`, `--text-serif`, `--text-mono` (mapped to Tailwind in app)

**2. Variant System (CVA)**
- Components use `class-variance-authority` for variant management
- Example: Button has 75+ compound variants for size, mode, appearance, radius

**3. Composite Components**
- Card pattern: Parent provides context, children consume it
- Enables consistent styling across subcomponents

**4. Utility Function** (`lib/utils/utils.ts`)
```typescript
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));  // Prevents Tailwind class conflicts
}
```

### Entry Points

- **Library export:** `packages/titanium-ui/lib/index.ts`
- **ESM output:** `dist/index.js`
- **Types:** `dist/index.d.ts`
- **Themes:** `dist/themes/*.css` (import individually, e.g., `@e412/titanium/themes/default.css`)

### CSS Setup (Tailwind v4)

Apps using Titanium need to:
1. Import fonts from Google Fonts (at top of CSS, before other imports)
2. Import a theme file (e.g., `@e412/titanium/themes/default.css`)
3. Map font variables in `@theme inline` block:
   ```css
   --font-sans: var(--text-sans);
   --font-serif: var(--text-serif);
   --font-mono: var(--text-mono);
   ```
4. Apply `font-sans` class to body

## Testing

Tests are in `tests/components/` using Vitest + Testing Library.

**Test utilities** (`tests/test-utils.tsx`):
- Custom `render()` wraps components with ThemeProvider
- Helpers: `mockConsoleError()`, `mockMatchMedia()`, `mockLocalStorage()`

**Run tests:**
```bash
pnpm test                    # All tests
pnpm vitest run button       # Specific component
```

## Configuration Files

| File | Purpose |
|------|---------|
| `biome.json` | Linting & formatting (spaces, single quotes) |
| `vitest.config.ts` | Test config (jsdom environment) |
| `tsconfig.json` | TypeScript config with `@/*` path alias |
| `components.json` | shadcn/ui-style component config |
| `pnpm-workspace.yaml` | Monorepo workspace definition |

## Important Paths

- **Components:** `packages/titanium-ui/lib/base/*.tsx`
- **DataGrid:** `packages/titanium-ui/lib/base/data-grid/` (8 files)
- **Themes:** `packages/titanium-ui/lib/themes/*.css`
- **Hooks:** `packages/titanium-ui/lib/hooks/`
- **Tests:** `tests/components/*.test.tsx`
- **Docs registry:** `apps/docs/docs/registry/`

## Build Pipeline

1. **Library** (RSLib): `lib/**/*` → ESM + types + CSS
2. **Docs** (RsBuild): React app → Static site (Cloudflare Pages)
3. **Release**: Version bump → npm publish → Deploy docs

## Code Style

- **Formatter:** Biome with space indentation, single quotes
- **TypeScript:** Strict mode enabled
- **CSS:** Tailwind with CSS modules and directives support
- **Disabled rules:** `noNestedComponentDefinitions`
- **Warnings:** `noArrayIndexKey`
