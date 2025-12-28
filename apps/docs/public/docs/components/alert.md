# Alert

Contextual feedback messages with variant styles for success, warning, error, and info states.

## Import

```tsx
import { Alert, AlertTitle, AlertDescription } from '@e412/titanium';
```

## Usage

```tsx
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>
```

## Variants

```tsx
// Default
<Alert variant="default">
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>A default alert message.</AlertDescription>
</Alert>

// Destructive
<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

## With icon

```tsx
import { AlertCircle } from 'lucide-react';

<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired.</AlertDescription>
</Alert>
```

## Props

### Alert

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'destructive'` | `'default'` | Visual style |

## Accessibility

- Uses appropriate ARIA role
- Semantic heading structure with AlertTitle
