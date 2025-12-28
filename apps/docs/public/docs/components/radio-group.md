# Radio Group

Radio button groups with keyboard navigation.

## Import

```tsx
import { RadioGroup, RadioGroupItem } from '@e412/titanium';
```

## Usage

```tsx
<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">Option 2</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-3" id="r3" />
    <Label htmlFor="r3">Option 3</Label>
  </div>
</RadioGroup>
```

## Controlled

```tsx
const [value, setValue] = useState('option-1');

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">Option 2</Label>
  </div>
</RadioGroup>

<p>Selected: {value}</p>
```

## Horizontal layout

```tsx
<RadioGroup defaultValue="small" className="flex gap-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="small" id="small" />
    <Label htmlFor="small">Small</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="medium" id="medium" />
    <Label htmlFor="medium">Medium</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="large" id="large" />
    <Label htmlFor="large">Large</Label>
  </div>
</RadioGroup>
```

## Disabled option

```tsx
<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Enabled</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="r2" disabled />
    <Label htmlFor="r2" className="text-muted-foreground">Disabled</Label>
  </div>
</RadioGroup>
```

## Props

### RadioGroup

| Prop | Type | Description |
|------|------|-------------|
| value | `string` | Controlled value |
| onValueChange | `(value: string) => void` | Value change callback |
| defaultValue | `string` | Initial value |
| disabled | `boolean` | Disable all items |
| name | `string` | Form field name |

### RadioGroupItem

| Prop | Type | Description |
|------|------|-------------|
| value | `string` | Item value |
| disabled | `boolean` | Disable this item |

## Accessibility

- Full keyboard navigation (Arrow keys)
- Proper ARIA roles and states
- Works with form labels
