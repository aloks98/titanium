# Checkbox

Accessible checkbox input with indeterminate state support.

## Import

```tsx
import { Checkbox } from '@e412/titanium';
```

## Usage

```tsx
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">Accept terms and conditions</label>
</div>
```

## With Label component

```tsx
import { Checkbox, Label } from '@e412/titanium';

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>
```

## Controlled

```tsx
const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>
```

## Indeterminate state

```tsx
<Checkbox checked="indeterminate" />
```

## Disabled

```tsx
<Checkbox disabled />
<Checkbox checked disabled />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | `boolean \| 'indeterminate'` | `false` | Checked state |
| onCheckedChange | `(checked: boolean) => void` | - | Change callback |
| disabled | `boolean` | `false` | Disable the checkbox |
| required | `boolean` | `false` | Mark as required |
| name | `string` | - | Form field name |
| value | `string` | - | Form field value |

## Accessibility

- Keyboard accessible (Space to toggle)
- Proper ARIA attributes
- Works with form labels
