# Kbd

Keyboard shortcut display component.

## Import

```tsx
import { Kbd } from '@e412/titanium';
```

## Usage

```tsx
<Kbd>⌘</Kbd>
<Kbd>K</Kbd>
```

## Keyboard shortcuts

```tsx
<div className="flex items-center gap-1">
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</div>

<div className="flex items-center gap-1">
  <Kbd>Ctrl</Kbd>
  <span>+</span>
  <Kbd>Shift</Kbd>
  <span>+</span>
  <Kbd>P</Kbd>
</div>
```

## Common symbols

| Symbol | Key |
|--------|-----|
| `⌘` | Command (Mac) |
| `⌃` | Control |
| `⌥` | Option/Alt |
| `⇧` | Shift |
| `↵` | Enter/Return |
| `⎋` | Escape |
| `⌫` | Backspace |
| `⇥` | Tab |

## In context

```tsx
<p className="text-sm text-muted-foreground">
  Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette
</p>
```

## Props

Standard HTML `<kbd>` element props are supported.
