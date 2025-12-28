# Theme Provider

Context provider for theme management and dark mode.

## Import

```tsx
import { ThemeProvider, useTheme } from '@e412/titanium';
```

## Setup

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

## Using the hook

```tsx
import { useTheme } from '@e412/titanium';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Current: {theme}
    </button>
  );
}
```

## Theme values

The theme can be one of three values:

- `'light'` - Force light mode
- `'dark'` - Force dark mode
- `'system'` - Follow system preference

## Props

### ThemeProvider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultTheme | `'light' \| 'dark' \| 'system'` | `'system'` | Initial theme |
| storageKey | `string` | `'ui-theme'` | localStorage key |
| defaultThemeColorScheme | `string` | `'default'` | Color scheme class |
| colorSchemeStorageKey | `string` | `'ui-theme-color-scheme'` | Color scheme storage key |

### useTheme return value

| Property | Type | Description |
|----------|------|-------------|
| theme | `'light' \| 'dark' \| 'system'` | Current theme |
| setTheme | `(theme) => void` | Set the theme |
| themeColorScheme | `string` | Current color scheme |
| setThemeColorScheme | `(scheme) => void` | Set color scheme |

## How it works

1. ThemeProvider reads the saved theme from localStorage (if any)
2. Falls back to `defaultTheme` if no saved preference
3. Applies appropriate class (`light` or `dark`) to document root
4. For `system`, listens to `prefers-color-scheme` media query
5. Persists changes to localStorage

## With SSR

For SSR frameworks, add a script to prevent flash:

```html
<script>
  const theme = localStorage.getItem('ui-theme') || 'system';
  const root = document.documentElement;
  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light';
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }
</script>
```
