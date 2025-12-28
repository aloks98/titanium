# Aspect Ratio

Maintain consistent aspect ratios for images and media content.

## Import

```tsx
import { AspectRatio } from '@e412/titanium';
```

## Usage

```tsx
<AspectRatio ratio={16 / 9}>
  <img
    src="/image.jpg"
    alt="Photo"
    className="h-full w-full rounded-md object-cover"
  />
</AspectRatio>
```

## Common ratios

```tsx
// 16:9 (widescreen video)
<AspectRatio ratio={16 / 9}>
  <video src="/video.mp4" />
</AspectRatio>

// 4:3 (traditional)
<AspectRatio ratio={4 / 3}>
  <img src="/photo.jpg" alt="" />
</AspectRatio>

// 1:1 (square)
<AspectRatio ratio={1}>
  <img src="/avatar.jpg" alt="" />
</AspectRatio>

// 21:9 (ultra-wide)
<AspectRatio ratio={21 / 9}>
  <img src="/banner.jpg" alt="" />
</AspectRatio>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ratio | `number` | `1` | Width divided by height |
