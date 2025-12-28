# Themes

Titanium UI includes 6 pre-built themes, each with light and dark mode variants.

## Available themes

### Default
The default theme with a blue primary color and clean, modern aesthetic.
```css
@import '@e412/titanium/themes/default.css';
```

### Amber
Warm amber and orange tones for a friendly, energetic feel.
```css
@import '@e412/titanium/themes/amber.css';
```

### Doom
Dark, high-contrast theme with intense colors.
```css
@import '@e412/titanium/themes/doom.css';
```

### Mono
Monochromatic grayscale for a minimal, professional look.
```css
@import '@e412/titanium/themes/mono.css';
```

### Starry Night
Deep blues and purples inspired by Van Gogh's masterpiece.
```css
@import '@e412/titanium/themes/starry-night.css';
```

### Vintage
Warm, muted colors with a retro aesthetic.
```css
@import '@e412/titanium/themes/vintage.css';
```

## Using a theme

1. Import the theme CSS in your main stylesheet:

```css
@import 'tailwindcss';
@import '@e412/titanium/themes/amber.css';
```

2. Apply the theme class to your HTML root element:

```html
<html class="amber">
```

Or dynamically with React:

```tsx
useEffect(() => {
  document.documentElement.classList.add('amber');
}, []);
```

## Theme class names

Each theme uses its filename (without extension) as the CSS class:

| Theme File | CSS Class |
|------------|-----------|
| `default.css` | `.default` |
| `amber.css` | `.amber` |
| `doom.css` | `.doom` |
| `mono.css` | `.mono` |
| `starry-night.css` | `.starry-night` |
| `vintage.css` | `.vintage` |

## Switching themes at runtime

```tsx
function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState('default');

  const themes = ['default', 'amber', 'doom', 'mono', 'starry-night', 'vintage'];

  const switchTheme = (newTheme: string) => {
    const root = document.documentElement;
    themes.forEach(t => root.classList.remove(t));
    root.classList.add(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <select value={currentTheme} onChange={(e) => switchTheme(e.target.value)}>
      {themes.map(theme => (
        <option key={theme} value={theme}>{theme}</option>
      ))}
    </select>
  );
}
```

## Combining themes with dark mode

Themes work seamlessly with dark mode. The theme class and dark mode class are applied together:

```html
<!-- Light mode with amber theme -->
<html class="amber light">

<!-- Dark mode with amber theme -->
<html class="amber dark">
```

The ThemeProvider handles this automatically when you use `setTheme()`.
