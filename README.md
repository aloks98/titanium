# Titanium UI

A modern, themeable React component library built with Tailwind CSS and Radix UI primitives.

## Features

- 🎨 **6 Built-in Themes** - Default, Amber, Doom, Mono, Starry Night, and Vintage
- 🌓 **Dark/Light Mode** - Automatic system detection with manual override
- 🎯 **Fully Typed** - Built with TypeScript for excellent developer experience
- 🧩 **Modular** - Import only what you need
- 🎪 **Accessible** - Built on Radix UI primitives
- 🚀 **Modern** - React 19, Tailwind CSS v4, latest patterns
- 🎨 **Customizable** - CSS variables with OKLch color space

## Installation

```bash
npm install @e412/titanium
# or
yarn add @e412/titanium
# or
pnpm add @e412/titanium
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom @radix-ui/react-* tailwindcss
```

<details>
<summary>View complete peer dependencies list</summary>

```json
{
  "@hookform/resolvers": "^5.0.1",
  "@radix-ui/react-accordion": "^1.2.3",
  "@radix-ui/react-alert-dialog": "^1.1.6",
  "@radix-ui/react-aspect-ratio": "^1.1.2",
  "@radix-ui/react-avatar": "^1.1.3",
  "@radix-ui/react-checkbox": "^1.1.4",
  "@radix-ui/react-collapsible": "^1.1.3",
  "@radix-ui/react-context-menu": "^2.2.6",
  "@radix-ui/react-dialog": "^1.1.6",
  "@radix-ui/react-dropdown-menu": "^2.1.6",
  "@radix-ui/react-hover-card": "^1.1.6",
  "@radix-ui/react-label": "^2.1.2",
  "@radix-ui/react-menubar": "^1.1.6",
  "@radix-ui/react-navigation-menu": "^1.2.5",
  "@radix-ui/react-popover": "^1.1.6",
  "@radix-ui/react-progress": "^1.1.2",
  "@radix-ui/react-radio-group": "^1.2.3",
  "@radix-ui/react-scroll-area": "^1.2.3",
  "@radix-ui/react-select": "^2.1.6",
  "@radix-ui/react-separator": "^1.1.2",
  "@radix-ui/react-slider": "^1.2.3",
  "@radix-ui/react-slot": "^1.1.2",
  "@radix-ui/react-switch": "^1.1.3",
  "@radix-ui/react-tabs": "^1.1.3",
  "@radix-ui/react-toggle": "^1.1.2",
  "@radix-ui/react-toggle-group": "^1.1.2",
  "@radix-ui/react-tooltip": "^1.1.8",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "cmdk": "^1.1.1",
  "date-fns": "^4.1.0",
  "embla-carousel-react": "^8.6.0",
  "input-otp": "^1.4.2",
  "lucide-react": "^0.487.0",
  "next-themes": "^0.4.6",
  "react": ">=16.9.0",
  "react-day-picker": "8.10.1",
  "react-dom": ">=16.9.0",
  "react-hook-form": "^7.55.0",
  "react-resizable-panels": "^2.1.7",
  "recharts": "^2.15.2",
  "sonner": "^2.0.3",
  "tailwind-merge": "^3.2.0",
  "tw-animate-css": "^1.2.5",
  "vaul": "^1.1.2",
  "zod": "^3.24.2"
}
```

</details>

## Quick Start

### 1. Configure CSS (Tailwind v4)

Create or update your `styles.css` with the following:

```css
/* Font imports must come first */
@import url("https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap");

@import "tailwindcss";
@import "tw-animate-css";
@import "@e412/titanium/themes/default.css";
@source "../node_modules/@e412/titanium";

@custom-variant dark (&:is(.dark *));

@theme inline {
    --font-sans: var(--text-sans);
    --font-serif: var(--text-serif);
    --font-mono: var(--text-mono);

    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);
    /* ... map other color variables as needed */
}

@layer base {
    body {
        @apply bg-background text-foreground font-sans;
    }
}
```

### 2. Setup Theme Provider

Wrap your app with the ThemeProvider:

```jsx
import { ThemeProvider, Toaster } from '@e412/titanium'
import './styles.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="my-app-theme">
      <YourApp />
      <Toaster richColors />
    </ThemeProvider>
  )
}
```

### 3. Use Components

```jsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@e412/titanium'

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## Themes

Titanium provides theme CSS files that you import in your styles:

| Theme | Import Path |
|-------|-------------|
| **Default** | `@e412/titanium/themes/default.css` |
| **Amber** | `@e412/titanium/themes/amber.css` |
| **Doom** | `@e412/titanium/themes/doom.css` |
| **Mono** | `@e412/titanium/themes/mono.css` |
| **Starry Night** | `@e412/titanium/themes/starry-night.css` |
| **Vintage** | `@e412/titanium/themes/vintage.css` |

### Light/Dark Mode Switching

```jsx
import { useTheme } from '@e412/titanium'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  )
}
```

## Components

Titanium includes 40+ components built on Radix UI primitives:

### Layout
- `Card` - Flexible content containers
- `Separator` - Visual dividers
- `Aspect Ratio` - Maintain aspect ratios
- `Resizable` - Resizable panels

### Navigation
- `Button` - Various button styles
- `Navigation Menu` - Complex navigation
- `Breadcrumb` - Navigation breadcrumbs
- `Pagination` - Page navigation

### Form Controls
- `Input` - Text inputs
- `Textarea` - Multi-line text
- `Select` - Dropdown selections
- `Checkbox` - Toggle options
- `Radio Group` - Single selection
- `Switch` - On/off toggle
- `Slider` - Range inputs
- `Form` - Form handling with validation

### Data Display
- `Table` - Data tables
- `Badge` - Status indicators
- `Avatar` - User pictures
- `Progress` - Progress indicators
- `Skeleton` - Loading placeholders

### Feedback
- `Alert` - Important messages
- `Toast` - Notifications (via Sonner)
- `Tooltip` - Contextual information

### Overlay
- `Dialog` - Modal dialogs
- `Alert Dialog` - Confirmation dialogs
- `Sheet` - Side panels
- `Popover` - Floating content
- `Hover Card` - Hover details
- `Context Menu` - Right-click menus
- `Dropdown Menu` - Action menus

### Advanced
- `Command` - Command palette
- `Calendar` - Date picker
- `Carousel` - Image/content carousels
- `Data Table` - Advanced data tables
- `Sidebar` - Application sidebars

## Customization

### Custom Themes

You can create custom themes by creating a CSS file following the theme structure:

```css
.my-theme {
  --text-sans: "Your Font", sans-serif;
  --text-serif: Georgia, serif;
  --text-mono: monospace;
  --background: oklch(0.98 0.002 180);
  --foreground: oklch(0.15 0.02 180);
  --primary: oklch(0.5 0.15 180);
  --primary-foreground: oklch(1 0 0);
  /* ... other color variables */
  --radius: 0.5rem;
}

.my-theme.dark {
  --background: oklch(0.15 0.02 180);
  --foreground: oklch(0.98 0.002 180);
  /* ... dark mode overrides */
}
```

### CSS Variables

All themes define these CSS custom properties:

| Variable | Description |
|----------|-------------|
| `--text-sans` | Sans-serif font stack |
| `--text-serif` | Serif font stack |
| `--text-mono` | Monospace font stack |
| `--background` | Background color |
| `--foreground` | Text color |
| `--primary` | Primary accent color |
| `--secondary` | Secondary color |
| `--muted` | Muted/subtle color |
| `--accent` | Accent color |
| `--destructive` | Error/danger color |
| `--border` | Border color |
| `--ring` | Focus ring color |
| `--radius` | Border radius |

## Build Integration

### Vite

```js
// vite.config.js
export default {
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

### Next.js

```js
// next.config.js
module.exports = {
  experimental: {
    css: true,
  },
}
```

### Webpack

Add CSS loader configuration for processing Tailwind imports.

## TypeScript

Titanium is built with TypeScript and includes full type definitions. No additional setup required!

```tsx
import type { ButtonProps } from '@e412/titanium'
import { Button } from '@e412/titanium'

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />
}
```

## Development

```bash
# Clone the repository
git clone https://github.com/your-org/titanium.git
cd titanium

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build the library
pnpm build

# Run tests
pnpm test
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Your Name](https://github.com/your-username)

## Credits

- Built with [Radix UI](https://radix-ui.com/) primitives
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)

---

<div align="center">
  <strong>Built with ❤️ using modern web technologies</strong>
</div>