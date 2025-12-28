# Scrollspy

Navigation component that highlights active sections based on scroll position.

## Import

```tsx
import { Scrollspy } from '@e412/titanium';
```

## Usage

```tsx
<Scrollspy
  items={[
    { id: 'section-1', label: 'Introduction' },
    { id: 'section-2', label: 'Features' },
    { id: 'section-3', label: 'Installation' },
    { id: 'section-4', label: 'Usage' },
  ]}
/>

{/* Content sections */}
<section id="section-1">Introduction content...</section>
<section id="section-2">Features content...</section>
<section id="section-3">Installation content...</section>
<section id="section-4">Usage content...</section>
```

## Vertical navigation

```tsx
<div className="flex gap-8">
  <aside className="w-48 sticky top-4 h-fit">
    <Scrollspy
      items={sections}
      className="flex flex-col gap-2"
    />
  </aside>
  <main className="flex-1">
    {/* Content sections */}
  </main>
</div>
```

## With offset

```tsx
<Scrollspy
  items={sections}
  offset={100} // Account for fixed header
/>
```

## Custom active styles

```tsx
<Scrollspy
  items={sections}
  activeClassName="text-primary font-medium border-l-2 border-primary"
  inactiveClassName="text-muted-foreground hover:text-foreground"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | `{ id: string; label: string }[]` | - | Section definitions |
| offset | `number` | `0` | Scroll offset (for fixed headers) |
| activeClassName | `string` | - | Active item classes |
| inactiveClassName | `string` | - | Inactive item classes |

## Features

- Automatically highlights current section
- Smooth scroll on click
- Configurable scroll offset
- Works with any scroll container
