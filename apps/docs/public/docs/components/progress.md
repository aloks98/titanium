# Progress

Progress indicators with percentage and indeterminate states.

## Import

```tsx
import { Progress } from '@e412/titanium';
```

## Usage

```tsx
<Progress value={60} />
```

## With label

```tsx
const [progress, setProgress] = useState(45);

<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Progress</span>
    <span>{progress}%</span>
  </div>
  <Progress value={progress} />
</div>
```

## Indeterminate state

```tsx
// When value is undefined or not provided
<Progress />
```

## Custom max value

```tsx
<Progress value={3} max={5} />
```

## Animated progress

```tsx
const [progress, setProgress] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setProgress(prev => prev >= 100 ? 0 : prev + 10);
  }, 500);
  return () => clearInterval(timer);
}, []);

<Progress value={progress} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `number` | - | Current progress (0-100) |
| max | `number` | `100` | Maximum value |

## Accessibility

- Uses progressbar role
- Announces value to screen readers
- aria-valuenow, aria-valuemin, aria-valuemax set automatically
