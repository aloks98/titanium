# Alert Dialog

Modal dialog for important confirmations requiring user action.

## Import

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@e412/titanium';
```

## Usage

```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## Controlled state

```tsx
const [open, setOpen] = useState(false);

<AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogContent>
    {/* ... */}
  </AlertDialogContent>
</AlertDialog>
```

## Props

### AlertDialog

| Prop | Type | Description |
|------|------|-------------|
| open | `boolean` | Controlled open state |
| onOpenChange | `(open: boolean) => void` | Callback when open changes |
| defaultOpen | `boolean` | Initial open state |

## Accessibility

- Focus is trapped within the dialog
- Pressing Escape closes the dialog
- Background content is hidden from screen readers
- Focus returns to trigger on close
