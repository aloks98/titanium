# Drawer

Slide-out panel from screen edges for mobile-friendly navigation.

## Import

```tsx
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@e412/titanium';
```

## Usage

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Settings</DrawerTitle>
      <DrawerDescription>Configure your preferences.</DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
      {/* Drawer content */}
    </div>
    <DrawerFooter>
      <Button>Save</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

## From different directions

```tsx
// Default: from bottom
<Drawer>
  <DrawerContent>Bottom drawer</DrawerContent>
</Drawer>

// From top
<Drawer direction="top">
  <DrawerContent>Top drawer</DrawerContent>
</Drawer>

// From left
<Drawer direction="left">
  <DrawerContent>Left drawer</DrawerContent>
</Drawer>

// From right
<Drawer direction="right">
  <DrawerContent>Right drawer</DrawerContent>
</Drawer>
```

## Controlled state

```tsx
const [open, setOpen] = useState(false);

<Drawer open={open} onOpenChange={setOpen}>
  <DrawerContent>
    {/* ... */}
  </DrawerContent>
</Drawer>
```

## Props

### Drawer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | - | Controlled open state |
| onOpenChange | `(open: boolean) => void` | - | Open state callback |
| direction | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Slide direction |

## Accessibility

- Focus trapped within drawer
- Escape key closes drawer
- Touch/swipe to dismiss on mobile
