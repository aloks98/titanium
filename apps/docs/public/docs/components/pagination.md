# Pagination

Page navigation with customizable page size options.

## Import

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@e412/titanium';
```

## Usage

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## With click handlers

```tsx
const [page, setPage] = useState(1);

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious
        onClick={() => setPage(p => Math.max(1, p - 1))}
        aria-disabled={page === 1}
      />
    </PaginationItem>
    {[1, 2, 3, 4, 5].map((p) => (
      <PaginationItem key={p}>
        <PaginationLink
          onClick={() => setPage(p)}
          isActive={page === p}
        >
          {p}
        </PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem>
      <PaginationNext
        onClick={() => setPage(p => p + 1)}
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Props

### PaginationLink

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isActive | `boolean` | `false` | Current page indicator |
| href | `string` | - | Link URL |
| onClick | `() => void` | - | Click handler |

### PaginationPrevious / PaginationNext

| Prop | Type | Description |
|------|------|-------------|
| href | `string` | Link URL |
| onClick | `() => void` | Click handler |
| aria-disabled | `boolean` | Disable state |

## Accessibility

- Uses nav element with aria-label
- Current page marked with aria-current
- Proper focus management
