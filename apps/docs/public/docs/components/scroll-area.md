# Scroll Area

Custom scrollbars with cross-browser consistency.

## Import

```tsx
import { ScrollArea, ScrollBar } from '@e412/titanium';
```

## Usage

```tsx
<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  <div>
    {/* Long content that overflows */}
    {Array.from({ length: 50 }).map((_, i) => (
      <div key={i} className="py-2">Item {i + 1}</div>
    ))}
  </div>
</ScrollArea>
```

## Horizontal scroll

```tsx
<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {images.map((image) => (
      <img
        key={image.id}
        src={image.src}
        alt={image.alt}
        className="h-[200px] w-[300px] object-cover"
      />
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

## Both directions

```tsx
<ScrollArea className="h-[300px] w-[400px] rounded-md border">
  <div className="w-[600px] p-4">
    {/* Wide and tall content */}
  </div>
  <ScrollBar orientation="horizontal" />
  <ScrollBar orientation="vertical" />
</ScrollArea>
```

## Props

### ScrollArea

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'auto' \| 'always' \| 'scroll' \| 'hover'` | `'hover'` | Scrollbar visibility |

### ScrollBar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | `'horizontal' \| 'vertical'` | `'vertical'` | Scrollbar direction |

## Features

- Custom styled scrollbars
- Consistent appearance across browsers
- Touch scrolling on mobile
- Keyboard navigation support
