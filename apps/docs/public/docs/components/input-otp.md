# Input OTP

One-time password input with auto-focus and paste support.

## Import

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from '@e412/titanium';
```

## Usage

```tsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

## Controlled

```tsx
const [value, setValue] = useState('');

<InputOTP
  maxLength={6}
  value={value}
  onChange={setValue}
>
  <InputOTPGroup>
    {[0, 1, 2, 3, 4, 5].map((index) => (
      <InputOTPSlot key={index} index={index} />
    ))}
  </InputOTPGroup>
</InputOTP>
```

## Pattern validation

```tsx
// Only allow numbers
<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
  {/* ... */}
</InputOTP>

// Only allow alphanumeric
<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
  {/* ... */}
</InputOTP>
```

## On complete callback

```tsx
<InputOTP
  maxLength={6}
  onComplete={(value) => {
    console.log('OTP entered:', value);
    verifyOTP(value);
  }}
>
  {/* ... */}
</InputOTP>
```

## Props

### InputOTP

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| maxLength | `number` | - | Number of digits |
| value | `string` | - | Controlled value |
| onChange | `(value: string) => void` | - | Change callback |
| onComplete | `(value: string) => void` | - | Called when all slots filled |
| pattern | `RegExp \| string` | - | Input validation pattern |
| disabled | `boolean` | `false` | Disable input |

## Features

- Auto-focus next slot
- Paste support (fills all slots)
- Backspace navigation
- Pattern validation
