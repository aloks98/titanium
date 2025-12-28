# Toggle Group

Group of toggle buttons with single or multi-select behavior.

## Import

```tsx
import { ToggleGroup, ToggleGroupItem } from '@e412/titanium';
```

## Usage

```tsx
<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

## Single select (controlled)

```tsx
const [alignment, setAlignment] = useState('left');

<ToggleGroup type="single" value={alignment} onValueChange={setAlignment}>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
```

## Multi-select

```tsx
const [formats, setFormats] = useState<string[]>([]);

<ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Italic className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Underline">
    <Underline className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>
```

## Variants

```tsx
<ToggleGroup type="single" variant="default">
  {/* items */}
</ToggleGroup>

<ToggleGroup type="single" variant="outline">
  {/* items */}
</ToggleGroup>
```

## Sizes

```tsx
<ToggleGroup type="single" size="sm">
  {/* items */}
</ToggleGroup>

<ToggleGroup type="single" size="default">
  {/* items */}
</ToggleGroup>

<ToggleGroup type="single" size="lg">
  {/* items */}
</ToggleGroup>
```

## Props

### ToggleGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'single' \| 'multiple'` | - | Selection mode |
| value | `string \| string[]` | - | Controlled value |
| onValueChange | `(value) => void` | - | Value change callback |
| defaultValue | `string \| string[]` | - | Initial value |
| variant | `'default' \| 'outline'` | `'default'` | Visual style |
| size | `'sm' \| 'default' \| 'lg'` | `'default'` | Button size |

### ToggleGroupItem

| Prop | Type | Description |
|------|------|-------------|
| value | `string` | Item value |
| disabled | `boolean` | Disable this item |

## Accessibility

- Roving focus with arrow keys
- Space/Enter to toggle
- Proper ARIA group semantics
