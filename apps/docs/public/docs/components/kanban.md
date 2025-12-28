# Kanban

Drag-and-drop kanban board built on DnD Kit for project management workflows.

## Import

```tsx
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnBody,
  KanbanColumnDragHandle,
  KanbanColumnHeader,
  KanbanItem,
  KanbanItemDragHandle,
  KanbanOverlay
} from '@e412/titanium';
```

## Usage

```tsx
interface Task {
  id: string;
  title: string;
}

const [columns, setColumns] = useState<Record<string, Task[]>>({
  todo: [{ id: '1', title: 'Task 1' }],
  inProgress: [{ id: '2', title: 'Task 2' }],
  done: [{ id: '3', title: 'Task 3' }],
});

<Kanban
  value={columns}
  onValueChange={setColumns}
  getItemValue={(item) => item.id}
>
  <KanbanBoard>
    {Object.entries(columns).map(([columnId, items]) => (
      <KanbanColumn key={columnId} value={columnId}>
        <KanbanColumnHeader>
          <KanbanColumnDragHandle />
          <span>{columnId}</span>
        </KanbanColumnHeader>
        <KanbanColumnBody>
          {items.map((item) => (
            <KanbanItem key={item.id} value={item.id}>
              <KanbanItemDragHandle />
              <span>{item.title}</span>
            </KanbanItem>
          ))}
        </KanbanColumnBody>
      </KanbanColumn>
    ))}
  </KanbanBoard>
  <KanbanOverlay />
</Kanban>
```

## With custom item rendering

```tsx
<KanbanItem value={task.id} className="p-4 bg-card rounded-lg">
  <div className="flex items-start gap-3">
    <KanbanItemDragHandle />
    <div>
      <h4 className="font-medium">{task.title}</h4>
      <p className="text-sm text-muted-foreground">{task.description}</p>
    </div>
  </div>
</KanbanItem>
```

## Events

```tsx
<Kanban
  value={columns}
  onValueChange={setColumns}
  getItemValue={(item) => item.id}
  onMove={(event) => {
    // event.activeContainer - source column
    // event.overContainer - destination column
    // event.activeIndex - source index
    // event.overIndex - destination index
    console.log('Item moved:', event);
  }}
>
  {/* ... */}
</Kanban>
```

## Props

### Kanban

| Prop | Type | Description |
|------|------|-------------|
| value | `Record<string, T[]>` | Column data |
| onValueChange | `(value: Record<string, T[]>) => void` | Data change callback |
| getItemValue | `(item: T) => string` | Get unique item ID |
| onMove | `(event: KanbanMoveEvent) => void` | Move event callback |

## Features

- Drag items between columns
- Reorder items within columns
- Reorder columns
- Touch and keyboard support
- Customizable overlay during drag
