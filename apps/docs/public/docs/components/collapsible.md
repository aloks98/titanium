# Collapsible

Expandable content sections with animation support.

## Import

```tsx
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@e412/titanium';
```

## Usage

```tsx
const [isOpen, setIsOpen] = useState(false);

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger asChild>
    <Button variant="outline">
      Toggle Content
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="p-4">
      This content can be expanded and collapsed.
    </div>
  </CollapsibleContent>
</Collapsible>
```

## With animation indicator

```tsx
import { ChevronDown } from 'lucide-react';

<Collapsible>
  <CollapsibleTrigger className="flex items-center gap-2">
    Settings
    <ChevronDown className="size-4 transition-transform [[data-state=open]_&]:rotate-180" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="pt-2">Settings content here.</div>
  </CollapsibleContent>
</Collapsible>
```

## Props

### Collapsible

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | - | Controlled open state |
| onOpenChange | `(open: boolean) => void` | - | Open state callback |
| defaultOpen | `boolean` | `false` | Initial open state |
| disabled | `boolean` | `false` | Disable interaction |

## Accessibility

- Toggle with Enter or Space key
- Proper ARIA expanded state
