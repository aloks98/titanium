# Button

Versatile button component with 8 variants, 4 sizes, and multiple modes.

## Import

```tsx
import { Button, ButtonArrow } from '@e412/titanium';
```

## Usage

```tsx
<Button>Click me</Button>
```

## Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="dashed">Dashed</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="dim">Dim</Button>
<Button variant="mono">Mono</Button>
```

## Sizes

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

## Modes

```tsx
// Default button
<Button mode="default">Default Mode</Button>

// Icon button
<Button mode="icon" size="md">
  <Settings />
</Button>

// Link style
<Button mode="link" variant="primary">Link Button</Button>

// Input trigger style
<Button mode="input" variant="outline">
  Select option
  <ButtonArrow />
</Button>
```

## With icons

```tsx
import { Mail, ArrowRight } from 'lucide-react';

<Button>
  <Mail />
  Send Email
</Button>

<Button>
  Continue
  <ArrowRight />
</Button>
```

## As link

```tsx
<Button asChild>
  <a href="/dashboard">Go to Dashboard</a>
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'dashed' \| 'ghost' \| 'dim' \| 'mono'` | `'primary'` | Visual style |
| size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Button size |
| mode | `'default' \| 'icon' \| 'link' \| 'input'` | `'default'` | Behavior mode |
| radius | `'md' \| 'full'` | `'md'` | Border radius |
| appearance | `'default' \| 'ghost'` | `'default'` | Fill style |
| asChild | `boolean` | `false` | Render as child element |
| disabled | `boolean` | `false` | Disable the button |
