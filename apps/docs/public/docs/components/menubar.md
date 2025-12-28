# Menubar

Horizontal menu bar for application navigation.

## Import

```tsx
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from '@e412/titanium';
```

## Usage

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        New Window <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
      <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

## With submenu

```tsx
<MenubarSub>
  <MenubarSubTrigger>Share</MenubarSubTrigger>
  <MenubarSubContent>
    <MenubarItem>Email</MenubarItem>
    <MenubarItem>Messages</MenubarItem>
    <MenubarItem>Notes</MenubarItem>
  </MenubarSubContent>
</MenubarSub>
```

## With checkbox and radio items

```tsx
const [showBookmarks, setShowBookmarks] = useState(true);
const [zoom, setZoom] = useState('100');

<MenubarMenu>
  <MenubarTrigger>View</MenubarTrigger>
  <MenubarContent>
    <MenubarCheckboxItem
      checked={showBookmarks}
      onCheckedChange={setShowBookmarks}
    >
      Show Bookmarks
    </MenubarCheckboxItem>
    <MenubarSeparator />
    <MenubarLabel>Zoom</MenubarLabel>
    <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
      <MenubarRadioItem value="50">50%</MenubarRadioItem>
      <MenubarRadioItem value="100">100%</MenubarRadioItem>
      <MenubarRadioItem value="150">150%</MenubarRadioItem>
    </MenubarRadioGroup>
  </MenubarContent>
</MenubarMenu>
```

## Accessibility

- Full keyboard navigation
- Arrow keys navigate between menus
- Enter/Space opens menus
- Escape closes menus
