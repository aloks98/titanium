# Dark Mode

Titanium UI provides built-in dark mode support with automatic system preference detection.

## How it works

The ThemeProvider manages theme state and applies the appropriate CSS class to the document root:

- `light` - Forces light mode
- `dark` - Forces dark mode
- `system` - Follows system preference

## Setting up dark mode

### 1. Wrap your app with ThemeProvider

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

### 2. Ensure your theme CSS includes dark mode styles

Each theme file includes both light and dark variants:

```css
.default {
  /* Light mode variables */
  --background: oklch(1 0 0);
  --foreground: oklch(0.1413 0.0052 285.82);
}

.default.dark {
  /* Dark mode variables */
  --background: oklch(0.1413 0.0052 285.82);
  --foreground: oklch(0.9846 0.0017 247.84);
}
```

## Creating a theme toggle

Use the `useTheme` hook to create a theme switcher:

```tsx
import { useTheme, Button } from '@e412/titanium';
import { Moon, Sun, Monitor } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <Button
        variant={theme === 'light' ? 'primary' : 'outline'}
        mode="icon"
        onClick={() => setTheme('light')}
      >
        <Sun />
      </Button>
      <Button
        variant={theme === 'dark' ? 'primary' : 'outline'}
        mode="icon"
        onClick={() => setTheme('dark')}
      >
        <Moon />
      </Button>
      <Button
        variant={theme === 'system' ? 'primary' : 'outline'}
        mode="icon"
        onClick={() => setTheme('system')}
      >
        <Monitor />
      </Button>
    </div>
  );
}
```

## ThemeProvider options

```tsx
<ThemeProvider
  defaultTheme="system"           // Initial theme: 'light' | 'dark' | 'system'
  storageKey="ui-theme"           // localStorage key for theme preference
>
```

## Using the useTheme hook

```tsx
import { useTheme } from '@e412/titanium';

function MyComponent() {
  const { theme, setTheme } = useTheme();

  // theme: current theme value ('light' | 'dark' | 'system')
  // setTheme: function to change the theme

  return (
    <div>
      Current theme: {theme}
    </div>
  );
}
```

## Preventing flash on load

To prevent a flash of incorrect theme colors on initial load, add this script to your HTML head:

```html
<script>
  (function() {
    const theme = localStorage.getItem('ui-theme') || 'system';
    const root = document.documentElement;

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  })();
</script>
```

## Styling for dark mode

Tailwind CSS provides dark mode utilities:

```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content adapts to theme
</div>
```

Titanium UI components automatically adapt to dark mode through CSS variables, so you typically don't need manual dark mode classes.
