# Utilities

Titanium UI exports utility functions for common tasks.

## cn (className utility)

The `cn` function merges class names intelligently using `clsx` and `tailwind-merge`. It handles conditional classes and prevents Tailwind CSS class conflicts.

### Import

```tsx
import { cn } from '@e412/titanium';
```

### Usage

```tsx
// Basic usage
cn('px-4 py-2', 'bg-blue-500')
// Result: 'px-4 py-2 bg-blue-500'

// Conditional classes
cn('base-class', isActive && 'active-class')
// Result: 'base-class active-class' (if isActive is true)

// Object syntax
cn('base', { 'text-red-500': hasError, 'text-green-500': isSuccess })
// Result depends on hasError and isSuccess values

// Resolving conflicts (tailwind-merge)
cn('px-4', 'px-8')
// Result: 'px-8' (later value wins)

cn('text-red-500', 'text-blue-500')
// Result: 'text-blue-500'
```

### In components

```tsx
function MyButton({ className, variant, ...props }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded font-medium',
        variant === 'primary' && 'bg-primary text-primary-foreground',
        variant === 'secondary' && 'bg-secondary text-secondary-foreground',
        className
      )}
      {...props}
    />
  );
}
```

### Why use cn?

1. **Prevents class conflicts**: Tailwind-merge ensures only one utility from conflicting groups is applied
2. **Clean conditional logic**: Use `&&` or objects for conditional classes
3. **Composable**: Components can accept className props that override defaults

## Implementation

The `cn` function is defined in `lib/utils/utils.ts`:

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
