import { describe, expect, it, vi } from 'vitest';
import { Skeleton } from '@/lib/base/skeleton';
import { render, screen } from '../test-utils';

describe('Skeleton', () => {
  it('renders correctly', () => {
    render(<Skeleton data-testid="skeleton" />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });

  it('has correct default styling', () => {
    render(<Skeleton data-testid="skeleton" />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('animate-pulse', 'rounded-md', 'bg-muted');
  });

  it('accepts custom className', () => {
    render(<Skeleton className="custom-skeleton" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('custom-skeleton');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Skeleton ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('can be used with custom dimensions', () => {
    render(<Skeleton className="h-4 w-32" data-testid="skeleton" />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('h-4', 'w-32');
  });

  it('renders multiple skeletons for loading states', () => {
    render(
      <div data-testid="loading-card">
        <Skeleton className="h-4 w-48 mb-2" />
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-8 w-24" />
      </div>,
    );

    const container = screen.getByTestId('loading-card');
    expect(container).toBeInTheDocument();

    const skeletons = container.querySelectorAll('[class*="animate-pulse"]');
    expect(skeletons).toHaveLength(3);
  });

  it('renders as div element by default', () => {
    render(<Skeleton data-testid="skeleton" />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton.tagName).toBe('DIV');
  });

  it('supports accessibility attributes', () => {
    render(
      <Skeleton
        data-testid="skeleton"
        role="status"
        aria-label="Loading content"
      />,
    );
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveAttribute('role', 'status');
    expect(skeleton).toHaveAttribute('aria-label', 'Loading content');
  });
});
