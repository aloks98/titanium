# Installation

Titanium UI is a React component library built with Tailwind CSS 4 and Radix UI primitives.

## Prerequisites

- React 19+
- Tailwind CSS 4+
- A package manager (npm, yarn, or pnpm)

## Install the package

```bash
npm install @e412/titanium
# or
yarn add @e412/titanium
# or
pnpm add @e412/titanium
```

## Install peer dependencies

Titanium UI has the following peer dependencies:

```bash
npm install react react-dom tailwindcss
```

Optional dependencies for specific components:

```bash
# Forms with validation
npm install react-hook-form zod @hookform/resolvers

# Date handling
npm install date-fns

# Charts (for DataGrid)
npm install recharts

# Icons
npm install lucide-react
```

## Configure your CSS

Create or update your main CSS file with the following:

```css
/* Import Google Fonts (must be at the top) */
@import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&display=swap');

/* Import Tailwind */
@import 'tailwindcss';

/* Import a Titanium theme */
@import '@e412/titanium/themes/default.css';

/* Map theme font variables to Tailwind */
@theme inline {
  --font-sans: var(--text-sans);
  --font-serif: var(--text-serif);
  --font-mono: var(--text-mono);
}
```

## Set up the ThemeProvider

Wrap your application with the ThemeProvider:

```tsx
import { ThemeProvider } from '@e412/titanium';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <YourApp />
    </ThemeProvider>
  );
}
```

## Add font class to body

Apply the `font-sans` class to your body element:

```html
<body class="font-sans">
  <!-- Your app -->
</body>
```

## Start using components

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from '@e412/titanium';

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Titanium UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Available themes

Titanium UI comes with 6 pre-built themes:

- `default.css` - Blue primary color, clean modern look
- `amber.css` - Warm amber tones
- `doom.css` - Dark, high-contrast theme
- `mono.css` - Monochromatic grayscale
- `starry-night.css` - Deep blues inspired by Van Gogh
- `vintage.css` - Warm, muted retro colors

Import your preferred theme in your CSS:

```css
@import '@e412/titanium/themes/amber.css';
```
