# Dropdown Menu

Dropdown menus with keyboard navigation and submenus.

## Import

```tsx
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@e412/titanium';
```

## Usage

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## With shortcuts

```tsx
<DropdownMenuItem>
  New Tab
  <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
</DropdownMenuItem>
```

## With submenu

```tsx
<DropdownMenuSub>
  <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent>
      <DropdownMenuItem>Option 1</DropdownMenuItem>
      <DropdownMenuItem>Option 2</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
```

## Checkbox items

```tsx
const [showStatus, setShowStatus] = useState(true);

<DropdownMenuCheckboxItem
  checked={showStatus}
  onCheckedChange={setShowStatus}
>
  Show Status Bar
</DropdownMenuCheckboxItem>
```

## Radio items

```tsx
const [theme, setTheme] = useState('light');

<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
  <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>
```

## Props

### DropdownMenu

| Prop | Type | Description |
|------|------|-------------|
| open | `boolean` | Controlled open state |
| onOpenChange | `(open: boolean) => void` | Open state callback |

### DropdownMenuItem

| Prop | Type | Description |
|------|------|-------------|
| disabled | `boolean` | Disable the item |
| onSelect | `() => void` | Selection callback |

## Accessibility

- Full keyboard navigation
- Arrow keys navigate items
- Enter/Space selects
- Escape closes menu
