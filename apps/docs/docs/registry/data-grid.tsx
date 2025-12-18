import { useMemo, useState } from 'react';
import {
  DataGrid,
  DataGridContainer,
  DataGridTable,
  DataGridPagination,
  DataGridColumnHeader,
  Badge,
  Avatar,
  AvatarFallback,
  Skeleton,
} from '@e412/titanium';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import type { ComponentDocumentation } from '../types';

// Sample data type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
}

// Sample data
const users: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'active' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'active' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor', status: 'inactive' },
  { id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'active' },
  { id: '5', name: 'Eve Wilson', email: 'eve@example.com', role: 'User', status: 'pending' },
  { id: '6', name: 'Frank Miller', email: 'frank@example.com', role: 'Editor', status: 'active' },
  { id: '7', name: 'Grace Lee', email: 'grace@example.com', role: 'User', status: 'inactive' },
  { id: '8', name: 'Henry Ford', email: 'henry@example.com', role: 'Admin', status: 'active' },
];

// Basic columns
const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <DataGridColumnHeader column={column} title="Name" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar className="size-8">
          <AvatarFallback>{row.original.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{row.original.name}</span>
      </div>
    ),
    size: 200,
    meta: {
      headerTitle: 'Name',
      skeleton: <Skeleton className="h-8 w-32" />,
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataGridColumnHeader column={column} title="Email" />,
    size: 220,
    meta: {
      headerTitle: 'Email',
      skeleton: <Skeleton className="h-4 w-40" />,
    },
  },
  {
    accessorKey: 'role',
    header: ({ column }) => <DataGridColumnHeader column={column} title="Role" />,
    size: 120,
    meta: {
      headerTitle: 'Role',
      skeleton: <Skeleton className="h-4 w-16" />,
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataGridColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge variant={status === 'active' ? 'default' : status === 'pending' ? 'secondary' : 'outline'}>
          {status}
        </Badge>
      );
    },
    size: 100,
    meta: {
      headerTitle: 'Status',
      skeleton: <Skeleton className="h-5 w-16" />,
    },
  },
];

function BasicDataGridDemo() {
  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: 5 },
    },
  });

  return (
    <DataGrid table={table} recordCount={users.length}>
      <DataGridContainer>
        <DataGridTable />
        <div className="px-4 py-2 border-t">
          <DataGridPagination />
        </div>
      </DataGridContainer>
    </DataGrid>
  );
}

function SortableDataGridDemo() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: { sorting },
    initialState: {
      pagination: { pageSize: 5 },
    },
  });

  return (
    <DataGrid table={table} recordCount={users.length}>
      <DataGridContainer>
        <DataGridTable />
        <div className="px-4 py-2 border-t">
          <DataGridPagination />
        </div>
      </DataGridContainer>
    </DataGrid>
  );
}

function RowSelectionDataGridDemo() {
  const [rowSelection, setRowSelection] = useState({});

  const selectColumns: ColumnDef<User>[] = useMemo(() => [
    {
      id: 'select',
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()}
          onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
          className="rounded border-input"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(e.target.checked)}
          className="rounded border-input"
        />
      ),
      size: 40,
    },
    ...columns,
  ], []);

  const table = useReactTable({
    data: users,
    columns: selectColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    state: { rowSelection },
    initialState: {
      pagination: { pageSize: 5 },
    },
  });

  return (
    <DataGrid table={table} recordCount={users.length}>
      <DataGridContainer>
        <DataGridTable />
        <div className="px-4 py-2 border-t flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {Object.keys(rowSelection).length} of {users.length} row(s) selected
          </div>
          <DataGridPagination />
        </div>
      </DataGridContainer>
    </DataGrid>
  );
}

function StripedDataGridDemo() {
  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: 5 },
    },
  });

  return (
    <DataGrid
      table={table}
      recordCount={users.length}
      tableLayout={{
        stripped: true,
        rowBorder: false,
      }}
    >
      <DataGridContainer>
        <DataGridTable />
        <div className="px-4 py-2 border-t">
          <DataGridPagination />
        </div>
      </DataGridContainer>
    </DataGrid>
  );
}

function DenseDataGridDemo() {
  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: 5 },
    },
  });

  return (
    <DataGrid
      table={table}
      recordCount={users.length}
      tableLayout={{ dense: true }}
    >
      <DataGridContainer>
        <DataGridTable />
        <div className="px-4 py-2 border-t">
          <DataGridPagination />
        </div>
      </DataGridContainer>
    </DataGrid>
  );
}

export const dataGridDocumentation: ComponentDocumentation = {
  id: 'data-grid',
  name: 'Data Grid',
  description: 'A powerful data table component built on TanStack Table with sorting, filtering, pagination, and more.',
  category: 'data-display',
  simpleExample: {
    example: <BasicDataGridDemo />,
    code: `import {
  DataGrid,
  DataGridContainer,
  DataGridTable,
  DataGridPagination,
  DataGridColumnHeader,
} from '@e412/titanium';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  type ColumnDef,
} from '@tanstack/react-table';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
}

const users: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'active' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'active' },
  // ...more data
];

const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <DataGridColumnHeader column={column} title="Name" />,
    size: 200,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataGridColumnHeader column={column} title="Email" />,
    size: 220,
  },
  {
    accessorKey: 'role',
    header: ({ column }) => <DataGridColumnHeader column={column} title="Role" />,
    size: 120,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataGridColumnHeader column={column} title="Status" />,
    size: 100,
  },
];

export function DataGridDemo() {
  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: 5 },
    },
  });

  return (
    <DataGrid table={table} recordCount={users.length}>
      <DataGridContainer>
        <DataGridTable />
        <div className="px-4 py-2 border-t">
          <DataGridPagination />
        </div>
      </DataGridContainer>
    </DataGrid>
  );
}`,
  },
  examples: [
    {
      id: 'sorting',
      title: 'With Sorting',
      description: 'Enable column sorting by clicking on column headers.',
      example: <SortableDataGridDemo />,
      code: `import { useState } from 'react';
import {
  DataGrid,
  DataGridContainer,
  DataGridTable,
  DataGridPagination,
  DataGridColumnHeader,
} from '@e412/titanium';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
} from '@tanstack/react-table';

export function SortableDataGridDemo() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: { sorting },
  });

  return (
    <DataGrid table={table} recordCount={users.length}>
      <DataGridContainer>
        <DataGridTable />
        <div className="px-4 py-2 border-t">
          <DataGridPagination />
        </div>
      </DataGridContainer>
    </DataGrid>
  );
}`,
    },
    {
      id: 'row-selection',
      title: 'Row Selection',
      description: 'Enable row selection with checkboxes.',
      example: <RowSelectionDataGridDemo />,
      code: `import { useState, useMemo } from 'react';
import {
  DataGrid,
  DataGridContainer,
  DataGridTable,
  DataGridPagination,
} from '@e412/titanium';
import { useReactTable, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';

export function RowSelectionDataGridDemo() {
  const [rowSelection, setRowSelection] = useState({});

  const columns = useMemo(() => [
    {
      id: 'select',
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()}
          onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(e.target.checked)}
        />
      ),
      size: 40,
    },
    // ...other columns
  ], []);

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    state: { rowSelection },
  });

  return (
    <DataGrid table={table} recordCount={users.length}>
      <DataGridContainer>
        <DataGridTable />
        <div className="px-4 py-2 border-t">
          <span>{Object.keys(rowSelection).length} selected</span>
          <DataGridPagination />
        </div>
      </DataGridContainer>
    </DataGrid>
  );
}`,
    },
    {
      id: 'striped',
      title: 'Striped Rows',
      description: 'Alternate row colors for better readability.',
      example: <StripedDataGridDemo />,
      code: `<DataGrid
  table={table}
  recordCount={users.length}
  tableLayout={{
    stripped: true,
    rowBorder: false,
  }}
>
  <DataGridContainer>
    <DataGridTable />
    <div className="px-4 py-2 border-t">
      <DataGridPagination />
    </div>
  </DataGridContainer>
</DataGrid>`,
    },
    {
      id: 'dense',
      title: 'Dense Layout',
      description: 'Compact table with reduced padding.',
      example: <DenseDataGridDemo />,
      code: `<DataGrid
  table={table}
  recordCount={users.length}
  tableLayout={{ dense: true }}
>
  <DataGridContainer>
    <DataGridTable />
    <div className="px-4 py-2 border-t">
      <DataGridPagination />
    </div>
  </DataGridContainer>
</DataGrid>`,
    },
  ],
  api: [
    {
      component: 'DataGrid',
      description: 'Main wrapper component that provides context for all child components.',
      props: [
        { name: 'table', type: 'Table<TData>', description: 'TanStack Table instance', required: true },
        { name: 'recordCount', type: 'number', description: 'Total number of records', required: true },
        { name: 'isLoading', type: 'boolean', description: 'Show loading state', defaultValue: 'false' },
        { name: 'loadingMode', type: '"skeleton" | "spinner"', description: 'Loading indicator type', defaultValue: '"skeleton"' },
        { name: 'loadingMessage', type: 'ReactNode', description: 'Custom loading message' },
        { name: 'emptyMessage', type: 'ReactNode', description: 'Message when no data', defaultValue: '"No data available"' },
        { name: 'onRowClick', type: '(row: TData) => void', description: 'Row click handler' },
        { name: 'tableLayout', type: 'object', description: 'Layout configuration options' },
      ],
    },
    {
      component: 'DataGridContainer',
      description: 'Container component with optional border styling.',
      props: [
        { name: 'border', type: 'boolean', description: 'Show border around grid', defaultValue: 'true' },
        { name: 'className', type: 'string', description: 'Additional CSS classes' },
      ],
    },
    {
      component: 'DataGridTable',
      description: 'Renders the table with headers and body.',
      props: [],
    },
    {
      component: 'DataGridPagination',
      description: 'Pagination controls for the data grid.',
      props: [
        { name: 'sizes', type: 'number[]', description: 'Page size options', defaultValue: '[5, 10, 25, 50, 100]' },
        { name: 'info', type: 'string', description: 'Info template with {from}, {to}, {count} placeholders' },
        { name: 'className', type: 'string', description: 'Additional CSS classes' },
      ],
    },
    {
      component: 'DataGridColumnHeader',
      description: 'Column header component with sorting and menu options.',
      props: [
        { name: 'column', type: 'Column<TData, TValue>', description: 'Column instance', required: true },
        { name: 'title', type: 'string', description: 'Column title' },
        { name: 'icon', type: 'ReactNode', description: 'Icon to display before title' },
        { name: 'filter', type: 'ReactNode', description: 'Filter component for dropdown' },
        { name: 'visibility', type: 'boolean', description: 'Show visibility toggle in menu' },
      ],
    },
    {
      component: 'tableLayout',
      description: 'Layout configuration object for DataGrid.',
      props: [
        { name: 'dense', type: 'boolean', description: 'Use compact spacing', defaultValue: 'false' },
        { name: 'cellBorder', type: 'boolean', description: 'Show cell borders', defaultValue: 'false' },
        { name: 'rowBorder', type: 'boolean', description: 'Show row borders', defaultValue: 'true' },
        { name: 'stripped', type: 'boolean', description: 'Alternate row colors', defaultValue: 'false' },
        { name: 'headerSticky', type: 'boolean', description: 'Sticky header', defaultValue: 'false' },
        { name: 'columnsResizable', type: 'boolean', description: 'Enable column resizing', defaultValue: 'false' },
        { name: 'columnsPinnable', type: 'boolean', description: 'Enable column pinning', defaultValue: 'false' },
        { name: 'columnsMovable', type: 'boolean', description: 'Enable column reordering', defaultValue: 'false' },
        { name: 'columnsVisibility', type: 'boolean', description: 'Enable visibility toggle', defaultValue: 'false' },
      ],
    },
  ],
};
