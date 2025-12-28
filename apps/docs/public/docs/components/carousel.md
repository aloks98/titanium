# Carousel

Image and content carousel with navigation controls and autoplay support.

## Import

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@e412/titanium';
```

## Usage

```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

## Multiple items visible

```tsx
<Carousel>
  <CarouselContent className="-ml-4">
    {items.map((item, index) => (
      <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
        <Card>{item}</Card>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
```

## Vertical orientation

```tsx
<Carousel orientation="vertical">
  <CarouselContent className="-mt-4 h-[200px]">
    {items.map((item, index) => (
      <CarouselItem key={index} className="pt-4 basis-1/3">
        {item}
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
```

## Props

### Carousel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Scroll direction |
| opts | `EmblaOptionsType` | - | Embla carousel options |

### CarouselItem

| Prop | Type | Description |
|------|------|-------------|
| className | `string` | Use `basis-*` for width control |
