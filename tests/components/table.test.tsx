import { describe, expect, it } from 'vitest';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/base/table';
import { render, screen } from '../test-utils';

describe('Table', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell content</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(table).toHaveAttribute('data-slot', 'table');
  });

  it('has correct default styling', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const table = screen.getByRole('table');
    expect(table).toHaveClass('w-full', 'caption-bottom', 'text-sm');
  });

  it('renders with container wrapper', () => {
    render(
      <Table data-testid="table">
        <TableBody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const table = screen.getByTestId('table');
    const container = table.parentElement;
    expect(container).toHaveAttribute('data-slot', 'table-container');
    expect(container).toHaveClass('relative', 'w-full', 'overflow-x-auto');
  });

  it('accepts custom className', () => {
    render(
      <Table className="custom-table">
        <TableBody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const table = screen.getByRole('table');
    expect(table).toHaveClass('custom-table');
  });
});

describe('TableHeader', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableHeader data-testid="table-header">
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    const header = screen.getByTestId('table-header');
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe('THEAD');
    expect(header).toHaveAttribute('data-slot', 'table-header');
  });

  it('has correct default styling', () => {
    render(
      <Table>
        <TableHeader data-testid="table-header">
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    const header = screen.getByTestId('table-header');
    expect(header).toHaveClass('[&_tr]:border-b');
  });

  it('accepts custom className', () => {
    render(
      <Table>
        <TableHeader className="custom-header" data-testid="table-header">
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    expect(screen.getByTestId('table-header')).toHaveClass('custom-header');
  });
});

describe('TableBody', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableBody data-testid="table-body">
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const body = screen.getByTestId('table-body');
    expect(body).toBeInTheDocument();
    expect(body.tagName).toBe('TBODY');
    expect(body).toHaveAttribute('data-slot', 'table-body');
  });

  it('has correct default styling', () => {
    render(
      <Table>
        <TableBody data-testid="table-body">
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const body = screen.getByTestId('table-body');
    expect(body).toHaveClass('[&_tr:last-child]:border-0');
  });

  it('accepts custom className', () => {
    render(
      <Table>
        <TableBody className="custom-body" data-testid="table-body">
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getByTestId('table-body')).toHaveClass('custom-body');
  });
});

describe('TableFooter', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableFooter data-testid="table-footer">
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );

    const footer = screen.getByTestId('table-footer');
    expect(footer).toBeInTheDocument();
    expect(footer.tagName).toBe('TFOOT');
    expect(footer).toHaveAttribute('data-slot', 'table-footer');
  });

  it('has correct default styling', () => {
    render(
      <Table>
        <TableFooter data-testid="table-footer">
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );

    const footer = screen.getByTestId('table-footer');
    expect(footer).toHaveClass(
      'bg-muted/50',
      'border-t',
      'font-medium',
      '[&>tr]:last:border-b-0',
    );
  });

  it('accepts custom className', () => {
    render(
      <Table>
        <TableFooter className="custom-footer" data-testid="table-footer">
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );

    expect(screen.getByTestId('table-footer')).toHaveClass('custom-footer');
  });
});

describe('TableRow', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="table-row">
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const row = screen.getByTestId('table-row');
    expect(row).toBeInTheDocument();
    expect(row.tagName).toBe('TR');
    expect(row).toHaveAttribute('data-slot', 'table-row');
  });

  it('has correct default styling', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="table-row">
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const row = screen.getByTestId('table-row');
    expect(row).toHaveClass(
      'hover:bg-muted/50',
      'data-[state=selected]:bg-muted',
      'border-b',
      'transition-colors',
    );
  });

  it('accepts custom className', () => {
    render(
      <Table>
        <TableBody>
          <TableRow className="custom-row" data-testid="table-row">
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getByTestId('table-row')).toHaveClass('custom-row');
  });
});

describe('TableHead', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead data-testid="table-head">Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    const head = screen.getByTestId('table-head');
    expect(head).toBeInTheDocument();
    expect(head.tagName).toBe('TH');
    expect(head).toHaveAttribute('data-slot', 'table-head');
  });

  it('has correct default styling', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead data-testid="table-head">Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    const head = screen.getByTestId('table-head');
    expect(head).toHaveClass(
      'text-foreground',
      'h-10',
      'px-2',
      'text-left',
      'align-middle',
      'font-medium',
      'whitespace-nowrap',
      '[&:has([role=checkbox])]:pr-0',
      '[&>[role=checkbox]]:translate-y-[2px]',
    );
  });

  it('accepts custom className', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="custom-head" data-testid="table-head">
              Header
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    expect(screen.getByTestId('table-head')).toHaveClass('custom-head');
  });
});

describe('TableCell', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="table-cell">Cell content</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const cell = screen.getByTestId('table-cell');
    expect(cell).toBeInTheDocument();
    expect(cell.tagName).toBe('TD');
    expect(cell).toHaveAttribute('data-slot', 'table-cell');
  });

  it('has correct default styling', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="table-cell">Cell content</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const cell = screen.getByTestId('table-cell');
    expect(cell).toHaveClass(
      'p-2',
      'align-middle',
      'whitespace-nowrap',
      '[&:has([role=checkbox])]:pr-0',
      '[&>[role=checkbox]]:translate-y-[2px]',
    );
  });

  it('accepts custom className', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="custom-cell" data-testid="table-cell">
              Cell content
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getByTestId('table-cell')).toHaveClass('custom-cell');
  });
});

describe('TableCaption', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableCaption data-testid="table-caption">Table caption</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const caption = screen.getByTestId('table-caption');
    expect(caption).toBeInTheDocument();
    expect(caption.tagName).toBe('CAPTION');
    expect(caption).toHaveAttribute('data-slot', 'table-caption');
  });

  it('has correct default styling', () => {
    render(
      <Table>
        <TableCaption data-testid="table-caption">Table caption</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const caption = screen.getByTestId('table-caption');
    expect(caption).toHaveClass('text-muted-foreground', 'mt-4', 'text-sm');
  });

  it('accepts custom className', () => {
    render(
      <Table>
        <TableCaption className="custom-caption" data-testid="table-caption">
          Table caption
        </TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getByTestId('table-caption')).toHaveClass('custom-caption');
  });
});

describe('Table Composition', () => {
  it('renders complete table with all components', () => {
    render(
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell>$150.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell>$400.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(
      screen.getByText('A list of your recent invoices.'),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('columnheader', { name: 'Invoice' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: 'Status' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: 'Method' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: 'Amount' }),
    ).toBeInTheDocument();

    expect(screen.getByText('INV001')).toBeInTheDocument();
    expect(screen.getByText('Paid')).toBeInTheDocument();
    expect(screen.getByText('Credit Card')).toBeInTheDocument();
    expect(screen.getByText('$250.00')).toBeInTheDocument();

    expect(screen.getByText('INV002')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByText('PayPal')).toBeInTheDocument();
    expect(screen.getByText('$150.00')).toBeInTheDocument();

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('$400.00')).toBeInTheDocument();
  });

  it('renders table with selected rows', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-state="selected">
            <TableCell>Selected Row</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Normal Row</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getByText('Selected Row')).toBeInTheDocument();
    expect(screen.getByText('Normal Row')).toBeInTheDocument();
  });
});
