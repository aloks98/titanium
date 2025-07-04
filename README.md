# Titanium UI

A modern, themeable React component library built with Tailwind CSS and Radix UI primitives.

## Features

- 🎨 **6 Built-in Themes** - Default, Amber, Doom, Mono, Starry Night, and Vintage
- 🌓 **Dark/Light Mode** - Automatic system detection with manual override
- 🎯 **Fully Typed** - Built with TypeScript for excellent developer experience
- 🧩 **Modular** - Import only what you need
- 🎪 **Accessible** - Built on Radix UI primitives
- 🚀 **Modern** - Uses latest React patterns and best practices
- 📦 **Zero Config** - Works out of the box with any build system

## Installation

```bash
npm install titanium
# or
yarn add titanium
# or
pnpm add titanium
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

### 1. Import Styles

Import the CSS file in your app's entry point:

```js
// In your main.tsx, App.tsx, or _app.tsx
import 'titanium/styles'
// or alternatively
import 'titanium/dist/styles/globals.css'
```

### 2. Setup Theme Provider

Wrap your app with the theme provider:

```jsx
import { ThemeProvider } from 'titanium'

function App() {
  return (
    <ThemeProvider defaultTheme="system" defaultThemeColorScheme="default">
      <YourApp />
    </ThemeProvider>
  )
}
```

### 3. Configure Tailwind CSS

Add Titanium to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/titanium/dist/**/*.js" // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Use Components

```jsx
import { Button, Card, Input } from 'titanium'

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter something..." />
      <Button>Click me</Button>
    </Card>
  )
}
```

## Themes

Titanium comes with 6 beautiful built-in themes:

| Theme | Description |
|-------|-------------|
| **Default** | Clean, minimal design with system fonts |
| **Amber** | Warm amber colors with Inter & Source Serif 4 |
| **Doom** | Dark, gaming-inspired with Oxanium font |
| **Mono** | Minimalist monospace design with Geist Mono |
| **Starry Night** | Elegant night theme with Libre Baskerville |
| **Vintage** | Classic, timeless design with Libre Baskerville & Lora |

### Theme Switching

```jsx
import { useTheme } from 'titanium'

function ThemeSelector() {
  const { setTheme, setThemeColorScheme } = useTheme()

  return (
    <div>
      {/* Light/Dark Mode */}
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>

      {/* Color Schemes */}
      <button onClick={() => setThemeColorScheme('default')}>Default</button>
      <button onClick={() => setThemeColorScheme('amber')}>Amber</button>
      <button onClick={() => setThemeColorScheme('doom')}>Doom</button>
      <button onClick={() => setThemeColorScheme('mono')}>Mono</button>
      <button onClick={() => setThemeColorScheme('starry-night')}>Starry Night</button>
      <button onClick={() => setThemeColorScheme('vintage')}>Vintage</button>
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

You can create custom themes by extending the CSS:

```css
.my-theme {
  --background: oklch(0.98 0.002 180);
  --foreground: oklch(0.15 0.02 180);
  --primary: oklch(0.5 0.15 180);
  /* ... other variables */
  --font-sans: "Your Font", sans-serif;
}
```

### CSS Variables

All themes use CSS custom properties that you can override:

```css
:root {
  --background: /* background color */;
  --foreground: /* text color */;
  --primary: /* primary color */;
  --secondary: /* secondary color */;
  --muted: /* muted color */;
  --accent: /* accent color */;
  --destructive: /* error color */;
  --border: /* border color */;
  --ring: /* focus ring color */;
  --font-sans: /* sans-serif font stack */;
  --font-serif: /* serif font stack */;
  --font-mono: /* monospace font stack */;
  --radius: /* border radius */;
}
```

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
import type { ButtonProps } from 'titanium'

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