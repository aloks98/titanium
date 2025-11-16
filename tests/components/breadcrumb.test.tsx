import { describe, expect, it } from 'vitest';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/base/breadcrumb';
import { render, screen } from '../test-utils';

describe('Breadcrumb', () => {
  it('renders correctly', () => {
    render(<Breadcrumb data-testid="breadcrumb">Content</Breadcrumb>);
    const breadcrumb = screen.getByTestId('breadcrumb');
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb.tagName).toBe('NAV');
    expect(breadcrumb).toHaveAttribute('aria-label', 'breadcrumb');
    expect(breadcrumb).toHaveAttribute('data-slot', 'breadcrumb');
  });
});

describe('BreadcrumbList', () => {
  it('renders correctly', () => {
    render(
      <BreadcrumbList data-testid="breadcrumb-list">Content</BreadcrumbList>,
    );
    const list = screen.getByTestId('breadcrumb-list');
    expect(list).toBeInTheDocument();
    expect(list.tagName).toBe('OL');
    expect(list).toHaveAttribute('data-slot', 'breadcrumb-list');
  });

  it('has correct default styling', () => {
    render(
      <BreadcrumbList data-testid="breadcrumb-list">Content</BreadcrumbList>,
    );
    const list = screen.getByTestId('breadcrumb-list');
    expect(list).toHaveClass(
      'text-muted-foreground',
      'flex',
      'flex-wrap',
      'items-center',
      'gap-1.5',
      'text-sm',
      'break-words',
      'sm:gap-2.5',
    );
  });

  it('accepts custom className', () => {
    render(
      <BreadcrumbList className="custom-list" data-testid="breadcrumb-list">
        Content
      </BreadcrumbList>,
    );
    expect(screen.getByTestId('breadcrumb-list')).toHaveClass('custom-list');
  });
});

describe('BreadcrumbItem', () => {
  it('renders correctly', () => {
    render(<BreadcrumbItem data-testid="breadcrumb-item">Item</BreadcrumbItem>);
    const item = screen.getByTestId('breadcrumb-item');
    expect(item).toBeInTheDocument();
    expect(item.tagName).toBe('LI');
    expect(item).toHaveAttribute('data-slot', 'breadcrumb-item');
  });

  it('has correct default styling', () => {
    render(<BreadcrumbItem data-testid="breadcrumb-item">Item</BreadcrumbItem>);
    const item = screen.getByTestId('breadcrumb-item');
    expect(item).toHaveClass('inline-flex', 'items-center', 'gap-1.5');
  });

  it('accepts custom className', () => {
    render(
      <BreadcrumbItem className="custom-item" data-testid="breadcrumb-item">
        Item
      </BreadcrumbItem>,
    );
    expect(screen.getByTestId('breadcrumb-item')).toHaveClass('custom-item');
  });
});

describe('BreadcrumbLink', () => {
  it('renders correctly', () => {
    render(
      <BreadcrumbLink href="/test" data-testid="breadcrumb-link">
        Link
      </BreadcrumbLink>,
    );
    const link = screen.getByTestId('breadcrumb-link');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveAttribute('data-slot', 'breadcrumb-link');
  });

  it('has correct default styling', () => {
    render(
      <BreadcrumbLink href="/test" data-testid="breadcrumb-link">
        Link
      </BreadcrumbLink>,
    );
    const link = screen.getByTestId('breadcrumb-link');
    expect(link).toHaveClass('hover:text-foreground', 'transition-colors');
  });

  it('accepts custom className', () => {
    render(
      <BreadcrumbLink
        className="custom-link"
        href="/test"
        data-testid="breadcrumb-link"
      >
        Link
      </BreadcrumbLink>,
    );
    expect(screen.getByTestId('breadcrumb-link')).toHaveClass('custom-link');
  });

  it('works with asChild prop', () => {
    const CustomLink = ({ href, children, ...props }: any) => (
      <span data-testid="custom-component" {...props}>
        {children} - {href}
      </span>
    );

    render(
      <BreadcrumbLink asChild>
        <CustomLink href="/custom">Custom Link</CustomLink>
      </BreadcrumbLink>,
    );

    expect(screen.getByTestId('custom-component')).toBeInTheDocument();
    expect(screen.getByText('Custom Link - /custom')).toBeInTheDocument();
  });
});

describe('BreadcrumbPage', () => {
  it('renders correctly', () => {
    render(
      <BreadcrumbPage data-testid="breadcrumb-page">
        Current Page
      </BreadcrumbPage>,
    );
    const page = screen.getByTestId('breadcrumb-page');
    expect(page).toBeInTheDocument();
    expect(page.tagName).toBe('SPAN');
    expect(page).toHaveAttribute('data-slot', 'breadcrumb-page');
  });

  it('has correct accessibility attributes', () => {
    render(
      <BreadcrumbPage data-testid="breadcrumb-page">
        Current Page
      </BreadcrumbPage>,
    );
    const page = screen.getByTestId('breadcrumb-page');
    expect(page).toHaveAttribute('role', 'link');
    expect(page).toHaveAttribute('aria-disabled', 'true');
    expect(page).toHaveAttribute('aria-current', 'page');
    expect(page).toHaveAttribute('tabIndex', '0');
  });

  it('has correct default styling', () => {
    render(
      <BreadcrumbPage data-testid="breadcrumb-page">
        Current Page
      </BreadcrumbPage>,
    );
    const page = screen.getByTestId('breadcrumb-page');
    expect(page).toHaveClass('text-foreground', 'font-normal');
  });

  it('accepts custom className', () => {
    render(
      <BreadcrumbPage className="custom-page" data-testid="breadcrumb-page">
        Current Page
      </BreadcrumbPage>,
    );
    expect(screen.getByTestId('breadcrumb-page')).toHaveClass('custom-page');
  });
});

describe('BreadcrumbSeparator', () => {
  it('renders correctly with default separator', () => {
    render(<BreadcrumbSeparator data-testid="breadcrumb-separator" />);
    const separator = screen.getByTestId('breadcrumb-separator');
    expect(separator).toBeInTheDocument();
    expect(separator.tagName).toBe('LI');
    expect(separator).toHaveAttribute('data-slot', 'breadcrumb-separator');
  });

  it('has correct accessibility attributes', () => {
    render(<BreadcrumbSeparator data-testid="breadcrumb-separator" />);
    const separator = screen.getByTestId('breadcrumb-separator');
    expect(separator).toHaveAttribute('role', 'presentation');
    expect(separator).toHaveAttribute('aria-hidden', 'true');
  });

  it('has correct default styling', () => {
    render(<BreadcrumbSeparator data-testid="breadcrumb-separator" />);
    const separator = screen.getByTestId('breadcrumb-separator');
    expect(separator).toHaveClass('[&>svg]:size-3.5');
  });

  it('accepts custom separator', () => {
    render(
      <BreadcrumbSeparator data-testid="breadcrumb-separator">
        <span data-testid="custom-separator">/</span>
      </BreadcrumbSeparator>,
    );
    expect(screen.getByTestId('custom-separator')).toBeInTheDocument();
    expect(screen.getByText('/')).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    render(
      <BreadcrumbSeparator
        className="custom-separator"
        data-testid="breadcrumb-separator"
      />,
    );
    expect(screen.getByTestId('breadcrumb-separator')).toHaveClass(
      'custom-separator',
    );
  });
});

describe('BreadcrumbEllipsis', () => {
  it('renders correctly', () => {
    render(<BreadcrumbEllipsis data-testid="breadcrumb-ellipsis" />);
    const ellipsis = screen.getByTestId('breadcrumb-ellipsis');
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis.tagName).toBe('SPAN');
    expect(ellipsis).toHaveAttribute('data-slot', 'breadcrumb-ellipsis');
  });

  it('has correct accessibility attributes', () => {
    render(<BreadcrumbEllipsis data-testid="breadcrumb-ellipsis" />);
    const ellipsis = screen.getByTestId('breadcrumb-ellipsis');
    expect(ellipsis).toHaveAttribute('role', 'presentation');
    expect(ellipsis).toHaveAttribute('aria-hidden', 'true');
  });

  it('has correct default styling', () => {
    render(<BreadcrumbEllipsis data-testid="breadcrumb-ellipsis" />);
    const ellipsis = screen.getByTestId('breadcrumb-ellipsis');
    expect(ellipsis).toHaveClass(
      'flex',
      'size-9',
      'items-center',
      'justify-center',
    );
  });

  it('contains screen reader text', () => {
    render(<BreadcrumbEllipsis />);
    expect(screen.getByText('More')).toBeInTheDocument();
    expect(screen.getByText('More')).toHaveClass('sr-only');
  });

  it('accepts custom className', () => {
    render(
      <BreadcrumbEllipsis
        className="custom-ellipsis"
        data-testid="breadcrumb-ellipsis"
      />,
    );
    expect(screen.getByTestId('breadcrumb-ellipsis')).toHaveClass(
      'custom-ellipsis',
    );
  });
});

describe('Breadcrumb Composition', () => {
  it('renders complete breadcrumb navigation', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Docs')).toBeInTheDocument();
    expect(screen.getByText('Current Page')).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const docsLink = screen.getByRole('link', { name: 'Docs' });
    expect(homeLink).toHaveAttribute('href', '/');
    expect(docsLink).toHaveAttribute('href', '/docs');
  });

  it('renders breadcrumb with ellipsis', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('More')).toBeInTheDocument();
    expect(screen.getByText('Current Page')).toBeInTheDocument();
  });

  it('renders breadcrumb with custom separator', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span>/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('/')).toBeInTheDocument();
    expect(screen.getByText('Current Page')).toBeInTheDocument();
  });
});
