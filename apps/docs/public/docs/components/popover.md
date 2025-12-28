# Popover

Floating content panels triggered by user interaction.

## Import

```tsx
import { Popover, PopoverContent, PopoverTrigger } from '@e412/titanium';
```

## Usage

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <h4 className="font-medium">Dimensions</h4>
      <div className="grid gap-2">
        <Input placeholder="Width" />
        <Input placeholder="Height" />
      </div>
    </div>
  </PopoverContent>
</Popover>
```

## Controlled state

```tsx
const [open, setOpen] = useState(false);

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </PopoverContent>
</Popover>
```

## Custom positioning

```tsx
<PopoverContent side="right" align="start" sideOffset={8}>
  Content on the right, aligned to start
</PopoverContent>
```

## With form

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>Edit Settings</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <form className="grid gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="John" />
      </div>
      <Button type="submit">Save</Button>
    </form>
  </PopoverContent>
</Popover>
```

## Props

### Popover

| Prop | Type | Description |
|------|------|-------------|
| open | `boolean` | Controlled open state |
| onOpenChange | `(open: boolean) => void` | Open state callback |
| defaultOpen | `boolean` | Initial open state |

### PopoverContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred side |
| align | `'start' \| 'center' \| 'end'` | `'center'` | Alignment |
| sideOffset | `number` | `4` | Distance from trigger |

## Accessibility

- Focus trapped within popover
- Escape key closes popover
- Click outside closes popover
