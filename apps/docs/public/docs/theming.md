# Theming

Titanium UI uses CSS variables with the OKLch color space for precise, perceptually uniform colors.

## Theme structure

Each theme defines CSS variables for colors, typography, spacing, and shadows:

```css
.default {
  /* Typography */
  --text-sans: "Google Sans", ui-sans-serif, system-ui, sans-serif;
  --text-serif: ui-serif, Georgia, Cambria, "Times New Roman", serif;
  --text-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  /* Core colors */
  --background: oklch(1 0 0);
  --foreground: oklch(0.1413 0.0052 285.82);

  /* Component colors */
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.1413 0.0052 285.82);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.1413 0.0052 285.82);

  /* Brand colors */
  --primary: oklch(0.6227 0.2137 259.53);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.9669 0.0035 264.54);
  --secondary-foreground: oklch(0.2086 0.0117 285.76);

  /* Semantic colors */
  --muted: oklch(0.9669 0.0035 264.54);
  --muted-foreground: oklch(0.551 0.0234 264.36);
  --accent: oklch(0.9669 0.0035 264.54);
  --accent-foreground: oklch(0.2086 0.0117 285.76);
  --destructive: oklch(0.5768 0.2111 27.52);
  --destructive-foreground: oklch(1 0 0);

  /* UI elements */
  --border: oklch(0.9276 0.0058 264.53);
  --input: oklch(0.9276 0.0058 264.53);
  --ring: oklch(0.7155 0.0093 264.53);

  /* Layout */
  --radius: 0.5rem;
  --spacing: 0.25rem;

  /* Chart colors */
  --chart-1: oklch(0.6227 0.2137 259.53);
  --chart-2: oklch(0.7231 0.1892 142.5);
  --chart-3: oklch(0.852 0.1802 85.85);
  --chart-4: oklch(0.6368 0.2078 25.33);
  --chart-5: oklch(0.5862 0.2057 302.8);

  /* Shadows */
  --shadow-xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0px 4px 8px -1px hsl(0 0% 0% / 0.1), 0px 1px 2px -2px hsl(0 0% 0% / 0.1);
  --shadow-md: 0px 4px 8px -1px hsl(0 0% 0% / 0.1), 0px 2px 4px -2px hsl(0 0% 0% / 0.1);
  --shadow-lg: 0px 4px 8px -1px hsl(0 0% 0% / 0.1), 0px 4px 6px -2px hsl(0 0% 0% / 0.1);
}
```

## Creating a custom theme

1. Create a new CSS file with your theme class:

```css
/* themes/custom.css */
.custom {
  --background: oklch(0.98 0.01 250);
  --foreground: oklch(0.15 0.02 250);
  --primary: oklch(0.55 0.25 280);
  --primary-foreground: oklch(1 0 0);
  /* ... define all variables */
}

.custom.dark {
  --background: oklch(0.15 0.02 250);
  --foreground: oklch(0.95 0.01 250);
  /* ... dark mode overrides */
}
```

2. Import your theme in your CSS:

```css
@import './themes/custom.css';
```

3. Apply the theme class to your root element:

```html
<html class="custom">
```

## OKLch color format

OKLch provides perceptually uniform colors:

- **L** (Lightness): 0-1, where 0 is black and 1 is white
- **C** (Chroma): 0-0.4+, color intensity/saturation
- **H** (Hue): 0-360, the color wheel position

Common hue values:
- Red: ~25-30
- Orange: ~60-70
- Yellow: ~85-95
- Green: ~140-150
- Cyan: ~190-200
- Blue: ~250-270
- Purple: ~300-310
- Pink: ~340-350

## Using theme variables in custom components

```tsx
function CustomComponent() {
  return (
    <div className="bg-background text-foreground border border-border rounded-[var(--radius)]">
      <button className="bg-primary text-primary-foreground hover:bg-primary/90">
        Click me
      </button>
    </div>
  );
}
```

## Dynamic theme switching

Use the ThemeProvider to switch themes programmatically:

```tsx
import { useTheme } from '@e412/titanium';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  );
}
```
