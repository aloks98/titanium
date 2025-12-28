# Toggle

Toggle button for binary states.

## Import

```tsx
import { Toggle } from '@e412/titanium';
```

## Usage

```tsx
<Toggle aria-label="Toggle bold">
  <Bold className="size-4" />
</Toggle>
```

## Controlled

```tsx
const [pressed, setPressed] = useState(false);

<Toggle pressed={pressed} onPressedChange={setPressed}>
  <Star className={pressed ? 'fill-current' : ''} />
</Toggle>
```

## With text

```tsx
<Toggle aria-label="Toggle italic">
  <Italic className="size-4" />
  <span className="ml-2">Italic</span>
</Toggle>
```

## Variants

```tsx
<Toggle variant="default">Default</Toggle>
<Toggle variant="outline">Outline</Toggle>
```

## Sizes

```tsx
<Toggle size="sm">Small</Toggle>
<Toggle size="default">Default</Toggle>
<Toggle size="lg">Large</Toggle>
```

## Disabled

```tsx
<Toggle disabled>
  <Ban className="size-4" />
</Toggle>
```

## In toolbar

```tsx
<div className="flex items-center gap-1 rounded-md border p-1">
  <Toggle size="sm" aria-label="Bold">
    <Bold className="size-4" />
  </Toggle>
  <Toggle size="sm" aria-label="Italic">
    <Italic className="size-4" />
  </Toggle>
  <Toggle size="sm" aria-label="Underline">
    <Underline className="size-4" />
  </Toggle>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| pressed | `boolean` | - | Controlled pressed state |
| onPressedChange | `(pressed: boolean) => void` | - | State change callback |
| defaultPressed | `boolean` | `false` | Initial pressed state |
| variant | `'default' \| 'outline'` | `'default'` | Visual style |
| size | `'sm' \| 'default' \| 'lg'` | `'default'` | Button size |
| disabled | `boolean` | `false` | Disable the toggle |

## Accessibility

- Uses button element with `aria-pressed`
- Keyboard accessible (Space/Enter)
- Provide `aria-label` for icon-only toggles
