# Avatar

User profile images with fallback initials and status indicators.

## Import

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@e412/titanium';
```

## Usage

```tsx
<Avatar>
  <AvatarImage src="/user.jpg" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## Sizes

```tsx
// Custom sizes via className
<Avatar className="size-8">
  <AvatarImage src="/user.jpg" />
  <AvatarFallback>SM</AvatarFallback>
</Avatar>

<Avatar className="size-12">
  <AvatarImage src="/user.jpg" />
  <AvatarFallback>MD</AvatarFallback>
</Avatar>

<Avatar className="size-16">
  <AvatarImage src="/user.jpg" />
  <AvatarFallback>LG</AvatarFallback>
</Avatar>
```

## With status indicator

```tsx
<div className="relative">
  <Avatar>
    <AvatarImage src="/user.jpg" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 ring-2 ring-background" />
</div>
```

## Avatar group

```tsx
<div className="flex -space-x-4">
  <Avatar className="ring-2 ring-background">
    <AvatarImage src="/user1.jpg" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar className="ring-2 ring-background">
    <AvatarImage src="/user2.jpg" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar className="ring-2 ring-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>
```

## Props

### AvatarImage

| Prop | Type | Description |
|------|------|-------------|
| src | `string` | Image source URL |
| alt | `string` | Alt text for accessibility |

### AvatarFallback

| Prop | Type | Description |
|------|------|-------------|
| delayMs | `number` | Delay before showing fallback |
