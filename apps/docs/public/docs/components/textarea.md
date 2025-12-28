# Textarea

Multi-line text input with auto-resize support.

## Import

```tsx
import { Textarea } from '@e412/titanium';
```

## Usage

```tsx
<Textarea placeholder="Type your message here." />
```

## With label

```tsx
<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message here." />
</div>
```

## Controlled

```tsx
const [value, setValue] = useState('');

<Textarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text..."
/>
```

## With character count

```tsx
const [value, setValue] = useState('');
const maxLength = 280;

<div className="space-y-2">
  <Textarea
    value={value}
    onChange={(e) => setValue(e.target.value)}
    maxLength={maxLength}
  />
  <p className="text-sm text-muted-foreground text-right">
    {value.length}/{maxLength}
  </p>
</div>
```

## Disabled

```tsx
<Textarea disabled placeholder="Disabled textarea" />
```

## With error state

```tsx
<Textarea aria-invalid={true} placeholder="Invalid input" />
```

## Custom rows

```tsx
<Textarea rows={6} placeholder="Larger textarea..." />
```

## Resize options

```tsx
// Vertical resize only (default)
<Textarea className="resize-y" />

// No resize
<Textarea className="resize-none" />

// Both directions
<Textarea className="resize" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | `string` | - | Placeholder text |
| rows | `number` | - | Number of visible rows |
| disabled | `boolean` | `false` | Disable the textarea |
| maxLength | `number` | - | Maximum character length |
| aria-invalid | `boolean` | - | Error state |

All standard HTML textarea attributes are supported.
