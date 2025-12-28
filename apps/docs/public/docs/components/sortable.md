# Sortable

Drag-and-drop sortable lists built on DnD Kit.

## Import

```tsx
import {
  Sortable,
  SortableItem,
  SortableItemDragHandle,
  SortableOverlay
} from '@e412/titanium';
```

## Usage

```tsx
const [items, setItems] = useState([
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
]);

<Sortable
  value={items}
  onValueChange={setItems}
  getItemValue={(item) => item.id}
>
  {items.map((item) => (
    <SortableItem key={item.id} value={item.id}>
      <SortableItemDragHandle />
      <span>{item.name}</span>
    </SortableItem>
  ))}
  <SortableOverlay />
</Sortable>
```

## Custom item rendering

```tsx
<SortableItem value={item.id} className="flex items-center gap-3 p-3 bg-card rounded-lg border">
  <SortableItemDragHandle className="cursor-grab active:cursor-grabbing" />
  <div className="flex-1">
    <h4 className="font-medium">{item.title}</h4>
    <p className="text-sm text-muted-foreground">{item.description}</p>
  </div>
</SortableItem>
```

## Horizontal list

```tsx
<Sortable
  value={items}
  onValueChange={setItems}
  getItemValue={(item) => item.id}
  strategy="horizontal"
>
  <div className="flex gap-2">
    {items.map((item) => (
      <SortableItem key={item.id} value={item.id} className="p-4 border rounded">
        {item.name}
      </SortableItem>
    ))}
  </div>
  <SortableOverlay />
</Sortable>
```

## Grid layout

```tsx
<Sortable
  value={items}
  onValueChange={setItems}
  getItemValue={(item) => item.id}
  strategy="grid"
>
  <div className="grid grid-cols-3 gap-4">
    {items.map((item) => (
      <SortableItem key={item.id} value={item.id}>
        <Card className="p-4">{item.name}</Card>
      </SortableItem>
    ))}
  </div>
  <SortableOverlay />
</Sortable>
```

## Props

### Sortable

| Prop | Type | Description |
|------|------|-------------|
| value | `T[]` | Array of items |
| onValueChange | `(value: T[]) => void` | Reorder callback |
| getItemValue | `(item: T) => string` | Get unique item ID |
| strategy | `'vertical' \| 'horizontal' \| 'grid'` | Sorting strategy |

### SortableItem

| Prop | Type | Description |
|------|------|-------------|
| value | `string` | Item ID (must match getItemValue) |
| asChild | `boolean` | Render as child element |

## Features

- Keyboard accessible
- Touch support
- Custom drag handles
- Smooth animations
