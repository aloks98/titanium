# Tree

Hierarchical tree view for nested data visualization.

## Import

```tsx
import {
  Tree,
  TreeItem,
  TreeItemContent,
  TreeItemTrigger,
  TreeItemChildren
} from '@e412/titanium';
```

## Usage

```tsx
const data = [
  {
    id: '1',
    name: 'Documents',
    children: [
      { id: '1.1', name: 'Work' },
      { id: '1.2', name: 'Personal' },
    ],
  },
  {
    id: '2',
    name: 'Pictures',
    children: [
      { id: '2.1', name: 'Vacation' },
    ],
  },
];

<Tree>
  {data.map((item) => (
    <TreeItem key={item.id} value={item.id}>
      <TreeItemTrigger>
        <TreeItemContent>{item.name}</TreeItemContent>
      </TreeItemTrigger>
      {item.children && (
        <TreeItemChildren>
          {item.children.map((child) => (
            <TreeItem key={child.id} value={child.id}>
              <TreeItemContent>{child.name}</TreeItemContent>
            </TreeItem>
          ))}
        </TreeItemChildren>
      )}
    </TreeItem>
  ))}
</Tree>
```

## With icons

```tsx
import { Folder, File } from 'lucide-react';

<TreeItem value={item.id}>
  <TreeItemTrigger>
    <TreeItemContent>
      {item.children ? (
        <Folder className="size-4 mr-2" />
      ) : (
        <File className="size-4 mr-2" />
      )}
      {item.name}
    </TreeItemContent>
  </TreeItemTrigger>
  {item.children && (
    <TreeItemChildren>
      {/* nested items */}
    </TreeItemChildren>
  )}
</TreeItem>
```

## Controlled expand state

```tsx
const [expanded, setExpanded] = useState<string[]>(['1']);

<Tree expanded={expanded} onExpandedChange={setExpanded}>
  {/* tree items */}
</Tree>
```

## Selection

```tsx
const [selected, setSelected] = useState<string | undefined>();

<Tree
  selectable
  selected={selected}
  onSelectedChange={setSelected}
>
  {/* tree items */}
</Tree>
```

## Props

### Tree

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| expanded | `string[]` | - | Controlled expanded items |
| onExpandedChange | `(expanded: string[]) => void` | - | Expand callback |
| selectable | `boolean` | `false` | Enable selection |
| selected | `string` | - | Selected item |
| onSelectedChange | `(selected: string) => void` | - | Selection callback |

### TreeItem

| Prop | Type | Description |
|------|------|-------------|
| value | `string` | Unique item identifier |
| disabled | `boolean` | Disable the item |

## Accessibility

- Full keyboard navigation
- Arrow keys for expand/collapse and navigation
- Proper ARIA tree roles
