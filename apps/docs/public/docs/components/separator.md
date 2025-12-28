# Separator

Visual dividers for content separation.

## Import

```tsx
import { Separator } from '@e412/titanium';
```

## Usage

```tsx
<div>
  <p>Content above</p>
  <Separator className="my-4" />
  <p>Content below</p>
</div>
```

## Horizontal (default)

```tsx
<div className="space-y-4">
  <h2>Section 1</h2>
  <Separator />
  <h2>Section 2</h2>
</div>
```

## Vertical

```tsx
<div className="flex items-center gap-4 h-6">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
  <Separator orientation="vertical" />
  <span>Item 3</span>
</div>
```

## With text

```tsx
<div className="flex items-center gap-4">
  <Separator className="flex-1" />
  <span className="text-sm text-muted-foreground">OR</span>
  <Separator className="flex-1" />
</div>
```

## In a card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Account</CardTitle>
  </CardHeader>
  <Separator />
  <CardContent className="pt-4">
    <p>Account settings and preferences.</p>
  </CardContent>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider direction |
| decorative | `boolean` | `true` | If true, hidden from screen readers |

## Accessibility

- Uses `role="separator"` when not decorative
- Proper `aria-orientation` attribute
