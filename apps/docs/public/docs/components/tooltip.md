# Tooltip

Informational tooltips with customizable placement.

## Import

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@e412/titanium';
```

## Setup

Wrap your app (or relevant section) with TooltipProvider:

```tsx
<TooltipProvider>
  <App />
</TooltipProvider>
```

## Usage

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" mode="icon">
      <HelpCircle className="size-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Click for help</p>
  </TooltipContent>
</Tooltip>
```

## Positioning

```tsx
<TooltipContent side="top">Top tooltip</TooltipContent>
<TooltipContent side="right">Right tooltip</TooltipContent>
<TooltipContent side="bottom">Bottom tooltip</TooltipContent>
<TooltipContent side="left">Left tooltip</TooltipContent>
```

## With alignment

```tsx
<TooltipContent side="top" align="start">Aligned to start</TooltipContent>
<TooltipContent side="top" align="center">Centered</TooltipContent>
<TooltipContent side="top" align="end">Aligned to end</TooltipContent>
```

## Custom delay

```tsx
<TooltipProvider delayDuration={200}>
  <Tooltip>
    <TooltipTrigger>Hover me (fast)</TooltipTrigger>
    <TooltipContent>Quick tooltip!</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Multiline content

```tsx
<TooltipContent className="max-w-xs">
  <p className="font-medium">Tooltip Title</p>
  <p className="text-sm text-muted-foreground">
    This is a longer tooltip with multiple lines of content.
  </p>
</TooltipContent>
```

## Props

### TooltipProvider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| delayDuration | `number` | `400` | Delay before showing (ms) |
| skipDelayDuration | `number` | `300` | Skip delay when moving between tooltips |

### TooltipContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Preferred side |
| align | `'start' \| 'center' \| 'end'` | `'center'` | Alignment |
| sideOffset | `number` | `4` | Distance from trigger |

## Accessibility

- Uses `role="tooltip"`
- Properly associated with trigger via `aria-describedby`
- Shows on focus for keyboard users
