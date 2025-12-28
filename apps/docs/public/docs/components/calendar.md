# Calendar

Date picker with range selection, keyboard navigation, and localization support.

## Import

```tsx
import { Calendar } from '@e412/titanium';
```

## Usage

```tsx
const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>
```

## Date range

```tsx
import { DateRange } from 'react-day-picker';

const [range, setRange] = useState<DateRange | undefined>();

<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  numberOfMonths={2}
/>
```

## Multiple dates

```tsx
const [dates, setDates] = useState<Date[] | undefined>([]);

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
/>
```

## With min/max dates

```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={{ before: new Date() }} // Disable past dates
/>

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  fromDate={new Date(2024, 0, 1)}
  toDate={new Date(2024, 11, 31)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mode | `'single' \| 'range' \| 'multiple'` | `'single'` | Selection mode |
| selected | `Date \| DateRange \| Date[]` | - | Selected date(s) |
| onSelect | `function` | - | Selection callback |
| numberOfMonths | `number` | `1` | Months to display |
| disabled | `Matcher \| Matcher[]` | - | Disabled dates |
| fromDate | `Date` | - | Earliest selectable date |
| toDate | `Date` | - | Latest selectable date |

## Accessibility

- Full keyboard navigation
- Arrow keys navigate between days
- Page Up/Down for month navigation
- ARIA labels for all controls
