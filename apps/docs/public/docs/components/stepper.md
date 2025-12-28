# Stepper

Multi-step form wizard with progress indication.

## Import

```tsx
import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperContent,
  StepperSeparator
} from '@e412/titanium';
```

## Usage

```tsx
const [step, setStep] = useState(0);

<Stepper value={step} onValueChange={setStep}>
  <div className="flex items-center gap-2">
    <StepperItem value={0}>
      <StepperTrigger>Account</StepperTrigger>
    </StepperItem>
    <StepperSeparator />
    <StepperItem value={1}>
      <StepperTrigger>Profile</StepperTrigger>
    </StepperItem>
    <StepperSeparator />
    <StepperItem value={2}>
      <StepperTrigger>Review</StepperTrigger>
    </StepperItem>
  </div>

  <StepperContent value={0}>
    <div className="p-4">Account details form</div>
  </StepperContent>
  <StepperContent value={1}>
    <div className="p-4">Profile information form</div>
  </StepperContent>
  <StepperContent value={2}>
    <div className="p-4">Review and submit</div>
  </StepperContent>
</Stepper>
```

## Vertical stepper

```tsx
<Stepper value={step} onValueChange={setStep} orientation="vertical">
  <div className="flex flex-col gap-4">
    <StepperItem value={0}>
      <StepperTrigger>Step 1</StepperTrigger>
      <StepperContent value={0}>
        <div className="p-4">Content for step 1</div>
      </StepperContent>
    </StepperItem>
    <StepperItem value={1}>
      <StepperTrigger>Step 2</StepperTrigger>
      <StepperContent value={1}>
        <div className="p-4">Content for step 2</div>
      </StepperContent>
    </StepperItem>
  </div>
</Stepper>
```

## With navigation buttons

```tsx
<div className="space-y-4">
  <Stepper value={step} onValueChange={setStep}>
    {/* Steps... */}
  </Stepper>

  <div className="flex justify-between">
    <Button
      variant="outline"
      onClick={() => setStep(s => s - 1)}
      disabled={step === 0}
    >
      Previous
    </Button>
    <Button
      onClick={() => setStep(s => s + 1)}
      disabled={step === 2}
    >
      {step === 2 ? 'Submit' : 'Next'}
    </Button>
  </div>
</div>
```

## Props

### Stepper

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `number` | - | Current step (0-indexed) |
| onValueChange | `(value: number) => void` | - | Step change callback |
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |

### StepperItem

| Prop | Type | Description |
|------|------|-------------|
| value | `number` | Step index |
| completed | `boolean` | Mark as completed |
| disabled | `boolean` | Disable step |

## Features

- Visual progress indication
- Click to navigate (if allowed)
- Completed step indicators
- Accessible keyboard navigation
