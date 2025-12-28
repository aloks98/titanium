# Filters

Filter controls for data filtering with multiple filter types.

## Import

```tsx
import { Filters } from '@e412/titanium';
```

## Usage

```tsx
const [filters, setFilters] = useState({});

<Filters
  value={filters}
  onChange={setFilters}
  options={[
    {
      id: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ],
    },
    {
      id: 'date',
      label: 'Date Range',
      type: 'date-range',
    },
  ]}
/>
```

## Filter types

### Select filter
```tsx
{
  id: 'category',
  label: 'Category',
  type: 'select',
  options: [
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
  ],
}
```

### Multi-select filter
```tsx
{
  id: 'tags',
  label: 'Tags',
  type: 'multi-select',
  options: [
    { value: 'featured', label: 'Featured' },
    { value: 'sale', label: 'On Sale' },
  ],
}
```

### Date range filter
```tsx
{
  id: 'created',
  label: 'Created Date',
  type: 'date-range',
}
```

### Text search filter
```tsx
{
  id: 'search',
  label: 'Search',
  type: 'text',
  placeholder: 'Search...',
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| value | `Record<string, any>` | Current filter values |
| onChange | `(filters: Record<string, any>) => void` | Filter change callback |
| options | `FilterOption[]` | Filter configuration |

## Integration with DataGrid

```tsx
<DataGrid data={filteredData} columns={columns}>
  <Filters value={filters} onChange={setFilters} options={filterOptions} />
  <DataGridTable />
</DataGrid>
```
