# Command

Command palette for keyboard-driven navigation and search.

## Import

```tsx
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@e412/titanium';
```

## Usage

```tsx
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

## As dialog

```tsx
const [open, setOpen] = useState(false);

// Open with keyboard shortcut
useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen((open) => !open);
    }
  };
  document.addEventListener('keydown', down);
  return () => document.removeEventListener('keydown', down);
}, []);

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>
        New File
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
      <CommandItem>
        Open Settings
        <CommandShortcut>⌘,</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>
```

## With icons

```tsx
import { Settings, User, Mail } from 'lucide-react';

<CommandItem>
  <Settings className="mr-2 size-4" />
  Settings
</CommandItem>
<CommandItem>
  <User className="mr-2 size-4" />
  Profile
</CommandItem>
```

## Props

### Command

Based on cmdk library with full filtering and selection support.

### CommandDialog

| Prop | Type | Description |
|------|------|-------------|
| open | `boolean` | Dialog open state |
| onOpenChange | `(open: boolean) => void` | Open state callback |

## Accessibility

- Full keyboard navigation (Arrow keys, Enter, Escape)
- Search filtering
- Screen reader announcements
