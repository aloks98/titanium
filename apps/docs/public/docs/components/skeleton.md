# Skeleton

Loading placeholder animations.

## Import

```tsx
import { Skeleton } from '@e412/titanium';
```

## Usage

```tsx
<Skeleton className="h-4 w-[250px]" />
```

## Card skeleton

```tsx
<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
```

## Avatar with text

```tsx
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[150px]" />
    <Skeleton className="h-4 w-[100px]" />
  </div>
</div>
```

## Table skeleton

```tsx
<div className="space-y-2">
  <Skeleton className="h-10 w-full" />
  <Skeleton className="h-10 w-full" />
  <Skeleton className="h-10 w-full" />
  <Skeleton className="h-10 w-full" />
</div>
```

## Form skeleton

```tsx
<div className="space-y-4">
  <div className="space-y-2">
    <Skeleton className="h-4 w-[100px]" />
    <Skeleton className="h-10 w-full" />
  </div>
  <div className="space-y-2">
    <Skeleton className="h-4 w-[80px]" />
    <Skeleton className="h-10 w-full" />
  </div>
  <Skeleton className="h-10 w-[120px]" />
</div>
```

## Props

The Skeleton component accepts all standard HTML div props plus:

| Prop | Type | Description |
|------|------|-------------|
| className | `string` | Custom classes for sizing and shape |

## Features

- Subtle pulse animation
- Customizable via className
- Use `rounded-*` classes for different shapes
