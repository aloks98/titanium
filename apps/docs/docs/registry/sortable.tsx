import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Sortable,
  SortableItem,
  SortableItemHandle,
} from '@e412/titanium';
import { GripVertical } from 'lucide-react';
import { useState } from 'react';
import type { ComponentDocumentation } from '../types';

interface Task {
  id: string;
  title: string;
  description: string;
}

const initialTasks: Task[] = [
  { id: '1', title: 'Task 1', description: 'First task description' },
  { id: '2', title: 'Task 2', description: 'Second task description' },
  { id: '3', title: 'Task 3', description: 'Third task description' },
];

const SortableDemo = () => {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <Sortable
      value={tasks}
      onValueChange={setTasks}
      getItemValue={(item) => item.id}
    >
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <SortableItem key={task.id} value={task.id}>
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 p-3 border-0">
                <SortableItemHandle>
                  <GripVertical className="size-4 text-muted-foreground" />
                </SortableItemHandle>
                <div className="flex-1">
                  <CardTitle className="text-sm">{task.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {task.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </SortableItem>
        ))}
      </div>
    </Sortable>
  );
};

export const sortableDocumentation: ComponentDocumentation = {
  id: 'sortable',
  name: 'Sortable',
  description: 'A drag-and-drop sortable list component built on @dnd-kit.',
  category: 'data-display',
  simpleExample: {
    example: <SortableDemo />,
    code: `import {
  Sortable,
  SortableItem,
  SortableItemHandle,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@e412/titanium';
import { GripVertical } from 'lucide-react';
import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
}

const initialTasks: Task[] = [
  { id: '1', title: 'Task 1', description: 'First task description' },
  { id: '2', title: 'Task 2', description: 'Second task description' },
  { id: '3', title: 'Task 3', description: 'Third task description' },
];

export function SortableDemo() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <Sortable
      value={tasks}
      onValueChange={setTasks}
      getItemValue={(item) => item.id}
    >
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <SortableItem key={task.id} value={task.id}>
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 p-3 border-0">
                <SortableItemHandle>
                  <GripVertical className="size-4 text-muted-foreground" />
                </SortableItemHandle>
                <div className="flex-1">
                  <CardTitle className="text-sm">{task.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {task.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </SortableItem>
        ))}
      </div>
    </Sortable>
  );
}`,
  },
  examples: [
    {
      id: 'horizontal',
      title: 'Horizontal Sorting',
      description: 'Items can be sorted horizontally.',
      example: (() => {
        const HorizontalDemo = () => {
          const [items, setItems] = useState([
            { id: 'a', label: 'Item A' },
            { id: 'b', label: 'Item B' },
            { id: 'c', label: 'Item C' },
            { id: 'd', label: 'Item D' },
          ]);
          return (
            <Sortable
              value={items}
              onValueChange={setItems}
              getItemValue={(item) => item.id}
              strategy="horizontal"
            >
              <div className="flex gap-2">
                {items.map((item) => (
                  <SortableItem key={item.id} value={item.id}>
                    <div className="flex items-center gap-2 rounded-lg border bg-background px-4 py-2">
                      <SortableItemHandle>
                        <GripVertical className="size-4 text-muted-foreground" />
                      </SortableItemHandle>
                      <span className="text-sm">{item.label}</span>
                    </div>
                  </SortableItem>
                ))}
              </div>
            </Sortable>
          );
        };
        return <HorizontalDemo />;
      })(),
      code: `import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from '@e412/titanium';
import { GripVertical } from 'lucide-react';
import { useState } from 'react';

export function SortableHorizontalDemo() {
  const [items, setItems] = useState([
    { id: 'a', label: 'Item A' },
    { id: 'b', label: 'Item B' },
    { id: 'c', label: 'Item C' },
    { id: 'd', label: 'Item D' },
  ]);

  return (
    <Sortable
      value={items}
      onValueChange={setItems}
      getItemValue={(item) => item.id}
      strategy="horizontal"
    >
      <div className="flex gap-2">
        {items.map((item) => (
          <SortableItem key={item.id} value={item.id}>
            <div className="flex items-center gap-2 rounded-lg border bg-background px-4 py-2">
              <SortableItemHandle>
                <GripVertical className="size-4 text-muted-foreground" />
              </SortableItemHandle>
              <span className="text-sm">{item.label}</span>
            </div>
          </SortableItem>
        ))}
      </div>
    </Sortable>
  );
}`,
    },
    {
      id: 'grid',
      title: 'Grid Layout',
      description: 'Sortable items in a grid layout.',
      example: (() => {
        const GridDemo = () => {
          const [items, setItems] = useState([
            { id: '1', color: 'bg-red-200' },
            { id: '2', color: 'bg-blue-200' },
            { id: '3', color: 'bg-green-200' },
            { id: '4', color: 'bg-yellow-200' },
            { id: '5', color: 'bg-purple-200' },
            { id: '6', color: 'bg-pink-200' },
          ]);
          return (
            <Sortable
              value={items}
              onValueChange={setItems}
              getItemValue={(item) => item.id}
              strategy="grid"
            >
              <div className="grid grid-cols-3 gap-2">
                {items.map((item) => (
                  <SortableItem key={item.id} value={item.id}>
                    <div
                      className={`flex h-20 items-center justify-center rounded-lg ${item.color}`}
                    >
                      <SortableItemHandle className="flex items-center gap-1">
                        <GripVertical className="size-4" />
                        <span className="text-sm font-medium">
                          Item {item.id}
                        </span>
                      </SortableItemHandle>
                    </div>
                  </SortableItem>
                ))}
              </div>
            </Sortable>
          );
        };
        return <GridDemo />;
      })(),
      code: `import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from '@e412/titanium';
import { GripVertical } from 'lucide-react';
import { useState } from 'react';

export function SortableGridDemo() {
  const [items, setItems] = useState([
    { id: '1', color: 'bg-red-200' },
    { id: '2', color: 'bg-blue-200' },
    { id: '3', color: 'bg-green-200' },
    { id: '4', color: 'bg-yellow-200' },
    { id: '5', color: 'bg-purple-200' },
    { id: '6', color: 'bg-pink-200' },
  ]);

  return (
    <Sortable
      value={items}
      onValueChange={setItems}
      getItemValue={(item) => item.id}
      strategy="grid"
    >
      <div className="grid grid-cols-3 gap-2">
        {items.map((item) => (
          <SortableItem key={item.id} value={item.id}>
            <div
              className={\`flex h-20 items-center justify-center rounded-lg \${item.color}\`}
            >
              <SortableItemHandle className="flex items-center gap-1">
                <GripVertical className="size-4" />
                <span className="text-sm font-medium">Item {item.id}</span>
              </SortableItemHandle>
            </div>
          </SortableItem>
        ))}
      </div>
    </Sortable>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Sortable',
      description: 'Root container for sortable items.',
      props: [
        {
          name: 'value',
          type: 'T[]',
          description: 'The array of items to sort',
          required: true,
        },
        {
          name: 'onValueChange',
          type: '(value: T[]) => void',
          description: 'Callback when items are reordered',
          required: true,
        },
        {
          name: 'getItemValue',
          type: '(item: T) => string',
          description: 'Function to get unique ID from item',
          required: true,
        },
        {
          name: 'strategy',
          type: '"vertical" | "horizontal" | "grid"',
          description: 'The sorting strategy to use',
          defaultValue: '"vertical"',
        },
        {
          name: 'onMove',
          type: '(event: MoveEvent) => void',
          description: 'Custom move handler for full control',
        },
        {
          name: 'onDragStart',
          type: '(event: DragStartEvent) => void',
          description: 'Callback when drag starts',
        },
        {
          name: 'onDragEnd',
          type: '(event: DragEndEvent) => void',
          description: 'Callback when drag ends',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SortableItem',
      description: 'A sortable item container.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'Unique identifier for the item',
          required: true,
        },
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Render as child element',
          defaultValue: 'false',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disable sorting for this item',
          defaultValue: 'false',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SortableItemHandle',
      description: 'Drag handle for a sortable item.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Render as child element',
          defaultValue: 'false',
        },
        {
          name: 'cursor',
          type: 'boolean',
          description: 'Show grab cursor',
          defaultValue: 'true',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
  ],
};
