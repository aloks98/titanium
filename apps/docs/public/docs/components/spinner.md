# Spinner

Loading spinner indicators.

## Import

```tsx
import { Spinner } from '@e412/titanium';
```

## Usage

```tsx
<Spinner />
```

## Sizes

```tsx
<Spinner className="size-4" />
<Spinner className="size-6" />
<Spinner className="size-8" />
<Spinner className="size-12" />
```

## With text

```tsx
<div className="flex items-center gap-2">
  <Spinner className="size-4" />
  <span>Loading...</span>
</div>
```

## In button

```tsx
<Button disabled>
  <Spinner className="size-4" />
  Processing...
</Button>
```

## Centered in container

```tsx
<div className="flex h-[200px] items-center justify-center">
  <Spinner className="size-8" />
</div>
```

## Full page loading

```tsx
<div className="fixed inset-0 flex items-center justify-center bg-background/80">
  <div className="flex flex-col items-center gap-2">
    <Spinner className="size-8" />
    <span className="text-sm text-muted-foreground">Loading...</span>
  </div>
</div>
```

## Props

The Spinner component accepts standard SVG props:

| Prop | Type | Description |
|------|------|-------------|
| className | `string` | Custom classes (use `size-*` for sizing) |

## Accessibility

- Uses `aria-label="Loading"` by default
- Hidden from screen readers when accompanying text is present
