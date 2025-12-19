import {
  Badge,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
} from '@e412/titanium';
import { GripVertical, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import type { ComponentDocumentation } from '../types';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}

const initialColumns: Record<string, Task[]> = {
  todo: [
    {
      id: '1',
      title: 'Research',
      description: 'Research new technologies',
      priority: 'high',
    },
    {
      id: '2',
      title: 'Design',
      description: 'Create wireframes',
      priority: 'medium',
    },
  ],
  'in-progress': [
    {
      id: '3',
      title: 'Development',
      description: 'Build the feature',
      priority: 'high',
    },
  ],
  done: [
    {
      id: '4',
      title: 'Testing',
      description: 'Write unit tests',
      priority: 'low',
    },
  ],
};

const columnLabels: Record<string, string> = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  done: 'Done',
};

const KanbanDemo = () => {
  const [columns, setColumns] = useState(initialColumns);

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard>
        {Object.keys(columns).map((columnId) => (
          <KanbanColumn key={columnId} value={columnId}>
            <div className="rounded-lg bg-muted/50 p-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <KanbanColumnHandle>
                    <GripVertical className="size-4 text-muted-foreground" />
                  </KanbanColumnHandle>
                  <h3 className="text-sm font-semibold">
                    {columnLabels[columnId]}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {columns[columnId].length}
                  </Badge>
                </div>
                <MoreHorizontal className="size-4 text-muted-foreground" />
              </div>
              <KanbanColumnContent value={columnId}>
                {columns[columnId].map((task) => (
                  <KanbanItem key={task.id} value={task.id}>
                    <Card>
                      <CardHeader className="p-3">
                        <div className="flex items-start gap-2">
                          <KanbanItemHandle>
                            <GripVertical className="size-4 text-muted-foreground mt-0.5" />
                          </KanbanItemHandle>
                          <div className="flex-1 space-y-1">
                            <CardTitle className="text-sm">
                              {task.title}
                            </CardTitle>
                            <CardDescription className="text-xs">
                              {task.description}
                            </CardDescription>
                            <Badge
                              variant={
                                task.priority === 'high'
                                  ? 'destructive'
                                  : task.priority === 'medium'
                                    ? 'default'
                                    : 'secondary'
                              }
                              className="text-xs"
                            >
                              {task.priority}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </KanbanItem>
                ))}
              </KanbanColumnContent>
            </div>
          </KanbanColumn>
        ))}
      </KanbanBoard>
    </Kanban>
  );
};

export const kanbanDocumentation: ComponentDocumentation = {
  id: 'kanban',
  name: 'Kanban',
  description: 'A drag-and-drop kanban board component built on @dnd-kit.',
  category: 'data-display',
  simpleExample: {
    example: <KanbanDemo />,
    code: `import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
  KanbanColumnContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Badge,
} from '@e412/titanium';
import { GripVertical, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}

const initialColumns: Record<string, Task[]> = {
  todo: [
    { id: '1', title: 'Research', description: 'Research new technologies', priority: 'high' },
    { id: '2', title: 'Design', description: 'Create wireframes', priority: 'medium' },
  ],
  'in-progress': [
    { id: '3', title: 'Development', description: 'Build the feature', priority: 'high' },
  ],
  done: [
    { id: '4', title: 'Testing', description: 'Write unit tests', priority: 'low' },
  ],
};

export function KanbanDemo() {
  const [columns, setColumns] = useState(initialColumns);

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard>
        {Object.keys(columns).map((columnId) => (
          <KanbanColumn key={columnId} value={columnId}>
            <div className="rounded-lg bg-muted/50 p-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <KanbanColumnHandle>
                    <GripVertical className="size-4 text-muted-foreground" />
                  </KanbanColumnHandle>
                  <h3 className="text-sm font-semibold">{columnId}</h3>
                  <Badge variant="secondary">{columns[columnId].length}</Badge>
                </div>
              </div>
              <KanbanColumnContent value={columnId}>
                {columns[columnId].map((task) => (
                  <KanbanItem key={task.id} value={task.id}>
                    <Card>
                      <CardHeader className="p-3">
                        <div className="flex items-start gap-2">
                          <KanbanItemHandle>
                            <GripVertical className="size-4 text-muted-foreground" />
                          </KanbanItemHandle>
                          <div className="flex-1">
                            <CardTitle className="text-sm">{task.title}</CardTitle>
                            <CardDescription className="text-xs">
                              {task.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </KanbanItem>
                ))}
              </KanbanColumnContent>
            </div>
          </KanbanColumn>
        ))}
      </KanbanBoard>
    </Kanban>
  );
}`,
  },
  examples: [
    {
      id: 'minimal',
      title: 'Minimal Kanban',
      description: 'A simple kanban board with minimal styling.',
      example: (() => {
        const MinimalDemo = () => {
          const [columns, setColumns] = useState<
            Record<string, { id: string; text: string }[]>
          >({
            backlog: [
              { id: 'a', text: 'Task A' },
              { id: 'b', text: 'Task B' },
            ],
            active: [{ id: 'c', text: 'Task C' }],
            completed: [{ id: 'd', text: 'Task D' }],
          });

          return (
            <Kanban
              value={columns}
              onValueChange={setColumns}
              getItemValue={(item) => item.id}
            >
              <KanbanBoard className="grid-cols-3">
                {Object.keys(columns).map((columnId) => (
                  <KanbanColumn key={columnId} value={columnId}>
                    <div className="rounded-lg border p-2">
                      <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">
                        {columnId}
                      </h4>
                      <KanbanColumnContent value={columnId}>
                        {columns[columnId].map((item) => (
                          <KanbanItem key={item.id} value={item.id}>
                            <div className="rounded border bg-background p-2 text-sm">
                              {item.text}
                            </div>
                          </KanbanItem>
                        ))}
                      </KanbanColumnContent>
                    </div>
                  </KanbanColumn>
                ))}
              </KanbanBoard>
            </Kanban>
          );
        };
        return <MinimalDemo />;
      })(),
      code: `import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanItem,
  KanbanColumnContent,
} from '@e412/titanium';
import { useState } from 'react';

export function MinimalKanbanDemo() {
  const [columns, setColumns] = useState({
    backlog: [
      { id: 'a', text: 'Task A' },
      { id: 'b', text: 'Task B' },
    ],
    active: [{ id: 'c', text: 'Task C' }],
    completed: [{ id: 'd', text: 'Task D' }],
  });

  return (
    <Kanban
      value={columns}
      onValueChange={setColumns}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard className="grid-cols-3">
        {Object.keys(columns).map((columnId) => (
          <KanbanColumn key={columnId} value={columnId}>
            <div className="rounded-lg border p-2">
              <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">
                {columnId}
              </h4>
              <KanbanColumnContent value={columnId}>
                {columns[columnId].map((item) => (
                  <KanbanItem key={item.id} value={item.id}>
                    <div className="rounded border bg-background p-2 text-sm">
                      {item.text}
                    </div>
                  </KanbanItem>
                ))}
              </KanbanColumnContent>
            </div>
          </KanbanColumn>
        ))}
      </KanbanBoard>
    </Kanban>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Kanban',
      description: 'Root container for the kanban board.',
      props: [
        {
          name: 'value',
          type: 'Record<string, T[]>',
          description: 'Object mapping column IDs to arrays of items',
          required: true,
        },
        {
          name: 'onValueChange',
          type: '(value: Record<string, T[]>) => void',
          description: 'Callback when items are moved',
          required: true,
        },
        {
          name: 'getItemValue',
          type: '(item: T) => string',
          description: 'Function to get unique ID from item',
          required: true,
        },
        {
          name: 'onMove',
          type: '(event: KanbanMoveEvent) => void',
          description: 'Custom move handler for full control',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'KanbanBoard',
      description: 'Container for kanban columns.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'KanbanColumn',
      description: 'A kanban column.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'Unique column identifier',
          required: true,
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disable column reordering',
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
      component: 'KanbanColumnHandle',
      description: 'Drag handle for column reordering.',
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
    {
      component: 'KanbanColumnContent',
      description: 'Container for items within a column.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'Column ID this content belongs to',
          required: true,
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'KanbanItem',
      description: 'A draggable kanban item.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'Unique item identifier',
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
          description: 'Disable item dragging',
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
      component: 'KanbanItemHandle',
      description: 'Drag handle for item.',
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
    {
      component: 'KanbanOverlay',
      description: 'Overlay shown during drag operations.',
      props: [
        {
          name: 'children',
          type: 'ReactNode | ((params) => ReactNode)',
          description: 'Content or render function for overlay',
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
