# Input

Text input with validation states, icons, and addons.

## Import

```tsx
import { Input } from '@e412/titanium';
```

## Usage

```tsx
<Input type="text" placeholder="Enter your name" />
```

## Types

```tsx
<Input type="text" placeholder="Text" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />
<Input type="search" placeholder="Search..." />
<Input type="url" placeholder="https://example.com" />
```

## With label

```tsx
import { Label } from '@e412/titanium';

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>
```

## Disabled state

```tsx
<Input disabled placeholder="Disabled input" />
```

## With error state

```tsx
<Input aria-invalid={true} placeholder="Invalid input" />
```

## With icons

```tsx
import { Search, Mail } from 'lucide-react';

// Leading icon
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-10" placeholder="Search..." />
</div>

// Trailing icon
<div className="relative">
  <Input className="pr-10" type="email" placeholder="Email" />
  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
</div>
```

## File input

```tsx
<Input type="file" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `string` | `'text'` | Input type |
| placeholder | `string` | - | Placeholder text |
| disabled | `boolean` | `false` | Disable the input |
| aria-invalid | `boolean` | - | Error state |

All standard HTML input attributes are supported.
