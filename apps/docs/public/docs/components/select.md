# Select

Dropdown select with search, multi-select, and groups.

## Import

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@e412/titanium';
```

## Usage

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>
```

## With groups

```tsx
<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Time</SelectItem>
      <SelectItem value="cst">Central Time</SelectItem>
      <SelectItem value="pst">Pacific Time</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">GMT</SelectItem>
      <SelectItem value="cet">Central European</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Controlled

```tsx
const [value, setValue] = useState('');

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

## Disabled

```tsx
// Disabled select
<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
</Select>

// Disabled option
<SelectItem value="unavailable" disabled>
  Unavailable
</SelectItem>
```

## Props

### Select

| Prop | Type | Description |
|------|------|-------------|
| value | `string` | Controlled value |
| onValueChange | `(value: string) => void` | Value change callback |
| defaultValue | `string` | Initial value |
| disabled | `boolean` | Disable the select |
| name | `string` | Form field name |

### SelectItem

| Prop | Type | Description |
|------|------|-------------|
| value | `string` | Item value |
| disabled | `boolean` | Disable this item |

## Accessibility

- Full keyboard navigation
- Type-ahead selection
- Proper ARIA attributes
