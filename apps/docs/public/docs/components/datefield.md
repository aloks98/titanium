# Datefield

Date input field with formatting and validation.

## Import

```tsx
import { Datefield } from '@e412/titanium';
```

## Usage

```tsx
const [date, setDate] = useState<Date | undefined>();

<Datefield
  value={date}
  onChange={setDate}
/>
```

## With placeholder

```tsx
<Datefield
  value={date}
  onChange={setDate}
  placeholder="Select a date"
/>
```

## Date range restrictions

```tsx
<Datefield
  value={date}
  onChange={setDate}
  minDate={new Date(2024, 0, 1)}
  maxDate={new Date(2024, 11, 31)}
/>
```

## Disabled state

```tsx
<Datefield
  value={date}
  onChange={setDate}
  disabled
/>
```

## With error state

```tsx
<Datefield
  value={date}
  onChange={setDate}
  aria-invalid={!!error}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `Date \| undefined` | - | Current date value |
| onChange | `(date: Date \| undefined) => void` | - | Change callback |
| placeholder | `string` | - | Placeholder text |
| minDate | `Date` | - | Minimum selectable date |
| maxDate | `Date` | - | Maximum selectable date |
| disabled | `boolean` | `false` | Disable the input |
| format | `string` | - | Date format string |
