# Sonner (Toast)

Toast notifications with rich content support.

## Import

```tsx
import { Toaster, toast } from '@e412/titanium';
```

## Setup

Add the Toaster component to your app root:

```tsx
function App() {
  return (
    <>
      <YourApp />
      <Toaster />
    </>
  );
}
```

## Usage

```tsx
import { toast } from '@e412/titanium';

// Simple toast
toast('Event has been created');

// Success toast
toast.success('Successfully saved!');

// Error toast
toast.error('Something went wrong');

// Info toast
toast.info('New update available');

// Warning toast
toast.warning('Please review your changes');
```

## With description

```tsx
toast('Event Created', {
  description: 'Your event has been scheduled for Monday at 10:00 AM.',
});
```

## With action

```tsx
toast('File deleted', {
  action: {
    label: 'Undo',
    onClick: () => restoreFile(),
  },
});
```

## Promise toast

```tsx
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Data saved successfully!',
  error: 'Failed to save data',
});
```

## Custom duration

```tsx
toast('This will stay longer', {
  duration: 10000, // 10 seconds
});

toast('This will stay until dismissed', {
  duration: Infinity,
});
```

## Custom position

```tsx
<Toaster position="top-center" />
// Options: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
```

## Dismiss toast

```tsx
const toastId = toast('Loading...');

// Later
toast.dismiss(toastId);

// Dismiss all
toast.dismiss();
```

## Props

### Toaster

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| position | `string` | `'bottom-right'` | Toast position |
| richColors | `boolean` | `false` | Use colored backgrounds |
| expand | `boolean` | `false` | Expand toasts on hover |
| closeButton | `boolean` | `false` | Show close button |
