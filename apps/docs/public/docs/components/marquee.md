# Marquee

Scrolling text and content display with customizable speed and direction.

## Import

```tsx
import { Marquee } from '@e412/titanium';
```

## Usage

```tsx
<Marquee>
  <span className="mx-4">Breaking News</span>
  <span className="mx-4">Important Update</span>
  <span className="mx-4">Latest Headlines</span>
</Marquee>
```

## With images

```tsx
<Marquee>
  {logos.map((logo) => (
    <img key={logo.id} src={logo.src} alt={logo.name} className="h-12 mx-8" />
  ))}
</Marquee>
```

## Reverse direction

```tsx
<Marquee reverse>
  <span>Scrolling right to left (reversed)</span>
</Marquee>
```

## Pause on hover

```tsx
<Marquee pauseOnHover>
  <span>Hover to pause scrolling</span>
</Marquee>
```

## Custom speed

```tsx
// Slower
<Marquee speed={20}>
  <span>Slow scrolling</span>
</Marquee>

// Faster
<Marquee speed={100}>
  <span>Fast scrolling</span>
</Marquee>
```

## Vertical marquee

```tsx
<Marquee vertical className="h-[200px]">
  {items.map((item) => (
    <div key={item.id} className="py-2">{item.text}</div>
  ))}
</Marquee>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| reverse | `boolean` | `false` | Reverse scroll direction |
| pauseOnHover | `boolean` | `false` | Pause on mouse hover |
| speed | `number` | `40` | Animation speed (pixels/second) |
| vertical | `boolean` | `false` | Vertical scrolling |
| repeat | `number` | `4` | Number of content repetitions |
