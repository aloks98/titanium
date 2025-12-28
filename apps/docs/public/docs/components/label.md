# Label

Accessible form labels with required indicator support.

## Import

```tsx
import { Label } from '@e412/titanium';
```

## Usage

```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

## With required indicator

```tsx
<Label htmlFor="name">
  Name <span className="text-destructive">*</span>
</Label>
<Input id="name" required />
```

## With description

```tsx
<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea id="bio" />
  <p className="text-sm text-muted-foreground">
    Write a short bio about yourself.
  </p>
</div>
```

## Disabled appearance

```tsx
<Label htmlFor="disabled-input" className="text-muted-foreground">
  Disabled Field
</Label>
<Input id="disabled-input" disabled />
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| htmlFor | `string` | ID of the associated form element |

All standard HTML label attributes are supported.

## Accessibility

- Uses native `<label>` element
- Clicking the label focuses the associated input
- Screen readers announce the label with the input
