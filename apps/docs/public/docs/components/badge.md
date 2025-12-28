# Badge

Small status indicators and labels with multiple variants.

## Import

```tsx
import { Badge } from '@e412/titanium';
```

## Usage

```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Primary color background |
| `secondary` | Secondary/muted background |
| `destructive` | Error/danger state |
| `outline` | Border only, no fill |

## With icon

```tsx
import { Check } from 'lucide-react';

<Badge>
  <Check className="mr-1 size-3" />
  Verified
</Badge>
```

## As link

```tsx
<Badge asChild>
  <a href="/status">View Status</a>
</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` | Visual style |
| asChild | `boolean` | `false` | Render as child element |
