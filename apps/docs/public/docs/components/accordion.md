# Accordion

Collapsible content sections with smooth animations and keyboard navigation.

## Import

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@e412/titanium';
```

## Usage

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      Content for section 1
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>
      Content for section 2
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Props

### Accordion

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'single' \| 'multiple'` | `'single'` | Allow one or multiple items open |
| collapsible | `boolean` | `false` | Allow closing all items (single mode) |
| defaultValue | `string \| string[]` | - | Initially open item(s) |
| value | `string \| string[]` | - | Controlled open item(s) |
| onValueChange | `function` | - | Callback when value changes |

### AccordionItem

| Prop | Type | Description |
|------|------|-------------|
| value | `string` | Unique identifier for the item |
| disabled | `boolean` | Disable the item |

## Accessibility

- Full keyboard navigation (Enter/Space to toggle, Arrow keys to navigate)
- Proper ARIA attributes for expanded/collapsed states
- Focus management between items
