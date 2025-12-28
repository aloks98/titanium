# Dialog

Modal dialogs with focus trapping and accessibility features.

## Import

```tsx
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@e412/titanium';
```

## Usage

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <Input placeholder="Name" />
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Controlled state

```tsx
const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Controlled Dialog</DialogTitle>
    </DialogHeader>
    <DialogFooter>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Custom close behavior

```tsx
<Dialog>
  <DialogContent onInteractOutside={(e) => e.preventDefault()}>
    {/* Clicking outside won't close */}
  </DialogContent>
</Dialog>
```

## Props

### Dialog

| Prop | Type | Description |
|------|------|-------------|
| open | `boolean` | Controlled open state |
| onOpenChange | `(open: boolean) => void` | Open state callback |
| defaultOpen | `boolean` | Initial open state |

### DialogContent

| Prop | Type | Description |
|------|------|-------------|
| onInteractOutside | `(event) => void` | Outside click handler |
| onEscapeKeyDown | `(event) => void` | Escape key handler |

## Accessibility

- Focus trapped within dialog
- Escape key closes dialog
- Background content hidden from screen readers
- Focus returns to trigger on close
