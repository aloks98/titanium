# Slider

Range slider with single or dual handles.

## Import

```tsx
import { Slider } from '@e412/titanium';
```

## Usage

```tsx
<Slider defaultValue={[50]} max={100} step={1} />
```

## Controlled

```tsx
const [value, setValue] = useState([33]);

<Slider value={value} onValueChange={setValue} />
<span>Value: {value[0]}</span>
```

## With labels

```tsx
const [value, setValue] = useState([50]);

<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Volume</span>
    <span>{value[0]}%</span>
  </div>
  <Slider value={value} onValueChange={setValue} max={100} />
</div>
```

## Range slider (dual handles)

```tsx
const [range, setRange] = useState([25, 75]);

<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Price Range</span>
    <span>${range[0]} - ${range[1]}</span>
  </div>
  <Slider value={range} onValueChange={setRange} min={0} max={100} step={5} />
</div>
```

## With step

```tsx
<Slider defaultValue={[50]} max={100} step={10} />
```

## Disabled

```tsx
<Slider defaultValue={[50]} disabled />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `number[]` | - | Controlled value(s) |
| onValueChange | `(value: number[]) => void` | - | Value change callback |
| defaultValue | `number[]` | `[0]` | Initial value(s) |
| min | `number` | `0` | Minimum value |
| max | `number` | `100` | Maximum value |
| step | `number` | `1` | Step increment |
| disabled | `boolean` | `false` | Disable the slider |
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Slider direction |

## Accessibility

- Full keyboard navigation
- Arrow keys adjust value
- Page Up/Down for larger steps
- Home/End for min/max
