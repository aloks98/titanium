# Data Grid

Powerful data table built on TanStack Table with sorting, filtering, pagination, and drag-and-drop row reordering.

## Import

```tsx
import {
  DataGrid,
  DataGridColumnFilter,
  DataGridColumnHeader,
  DataGridColumnVisibility,
  DataGridPagination,
  DataGridTable,
  DataGridTableDnd,
  DataGridTableDndRows
} from '@e412/titanium';
```

## Basic usage

```tsx
import { ColumnDef } from '@tanstack/react-table';

interface User {
  id: string;
  name: string;
  email: string;
}

const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
];

<DataGrid data={users} columns={columns}>
  <DataGridTable />
</DataGrid>
```

## With sorting and filtering

```tsx
<DataGrid data={users} columns={columns}>
  <div className="flex items-center gap-4 py-4">
    <DataGridColumnFilter column="email" placeholder="Filter emails..." />
    <DataGridColumnVisibility />
  </div>
  <DataGridTable />
  <DataGridPagination />
</DataGrid>
```

## Sortable column header

```tsx
const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataGridColumnHeader column={column} title="Name" />
    ),
  },
];
```

## Drag and drop rows

```tsx
<DataGrid data={users} columns={columns}>
  <DataGridTableDnd>
    <DataGridTableDndRows onReorder={handleReorder} />
  </DataGridTableDnd>
</DataGrid>
```

## Row selection

```tsx
const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  // ... other columns
];
```

## Props

### DataGrid

| Prop | Type | Description |
|------|------|-------------|
| data | `TData[]` | Data array |
| columns | `ColumnDef<TData>[]` | Column definitions |
| pageSize | `number` | Rows per page (default: 10) |

### DataGridPagination

| Prop | Type | Description |
|------|------|-------------|
| pageSizeOptions | `number[]` | Available page sizes |

## Features

- Column sorting (single and multi)
- Column filtering
- Column visibility toggle
- Row selection
- Pagination
- Drag-and-drop row reordering
- Responsive design
