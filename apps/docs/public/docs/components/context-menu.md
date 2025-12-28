# Context Menu

Right-click context menus with nested submenus.

## Import

```tsx
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from '@e412/titanium';
```

## Usage

```tsx
<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      Back
      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Forward
      <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Reload</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## With submenu

```tsx
<ContextMenuSub>
  <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
  <ContextMenuSubContent>
    <ContextMenuItem>Save Page As...</ContextMenuItem>
    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
  </ContextMenuSubContent>
</ContextMenuSub>
```

## With checkbox items

```tsx
const [showBookmarks, setShowBookmarks] = useState(true);

<ContextMenuCheckboxItem
  checked={showBookmarks}
  onCheckedChange={setShowBookmarks}
>
  Show Bookmarks
</ContextMenuCheckboxItem>
```

## With radio items

```tsx
const [view, setView] = useState('grid');

<ContextMenuRadioGroup value={view} onValueChange={setView}>
  <ContextMenuRadioItem value="list">List View</ContextMenuRadioItem>
  <ContextMenuRadioItem value="grid">Grid View</ContextMenuRadioItem>
</ContextMenuRadioGroup>
```

## Accessibility

- Keyboard navigation
- Proper ARIA roles
- Focus management
