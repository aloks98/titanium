# Sheet

Slide-out panels from any screen edge.

## Import

```tsx
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@e412/titanium';
```

## Usage

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <Input placeholder="Name" />
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## From different sides

```tsx
// Right (default)
<SheetContent>Right side content</SheetContent>

// Left
<SheetContent side="left">Left side content</SheetContent>

// Top
<SheetContent side="top">Top side content</SheetContent>

// Bottom
<SheetContent side="bottom">Bottom side content</SheetContent>
```

## Controlled state

```tsx
const [open, setOpen] = useState(false);

<Sheet open={open} onOpenChange={setOpen}>
  <SheetContent>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </SheetContent>
</Sheet>
```

## With scroll area

```tsx
<SheetContent className="w-[400px] sm:w-[540px]">
  <SheetHeader>
    <SheetTitle>Long Content</SheetTitle>
  </SheetHeader>
  <ScrollArea className="h-[calc(100vh-200px)] pr-4">
    {/* Long scrollable content */}
  </ScrollArea>
</SheetContent>
```

## Props

### Sheet

| Prop | Type | Description |
|------|------|-------------|
| open | `boolean` | Controlled open state |
| onOpenChange | `(open: boolean) => void` | Open state callback |

### SheetContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | Slide direction |

## Accessibility

- Focus trapped within sheet
- Escape key closes sheet
- Background content hidden from screen readers
