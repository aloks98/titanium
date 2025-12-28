# Hover Card

Preview content on hover with smooth animations.

## Import

```tsx
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@e412/titanium';
```

## Usage

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@johndoe</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex space-x-4">
      <Avatar>
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="text-sm font-semibold">John Doe</h4>
        <p className="text-sm text-muted-foreground">
          Software Engineer at Acme Inc.
        </p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

## Custom positioning

```tsx
<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent side="right" align="start">
    Content appears on the right
  </HoverCardContent>
</HoverCard>
```

## With delay

```tsx
<HoverCard openDelay={300} closeDelay={200}>
  <HoverCardTrigger>Delayed hover</HoverCardTrigger>
  <HoverCardContent>
    Opens after 300ms, closes after 200ms
  </HoverCardContent>
</HoverCard>
```

## Props

### HoverCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| openDelay | `number` | `700` | Delay before opening (ms) |
| closeDelay | `number` | `300` | Delay before closing (ms) |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `(open: boolean) => void` | - | Open state callback |

### HoverCardContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred side |
| align | `'start' \| 'center' \| 'end'` | `'center'` | Alignment |
| sideOffset | `number` | `4` | Offset from trigger |
