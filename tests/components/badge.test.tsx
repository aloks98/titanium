import { describe, expect, it, vi } from 'vitest';
import { Badge } from '@/lib/base/badge';
import { render, screen } from '../test-utils';

describe('Badge', () => {
  it('renders correctly', () => {
    render(<Badge>Default Badge</Badge>);
    expect(screen.getByText('Default Badge')).toBeInTheDocument();
  });

  it('renders different variants', () => {
    const { rerender } = render(<Badge variant="default">Default</Badge>);
    expect(screen.getByText('Default')).toHaveClass('bg-primary');

    rerender(<Badge variant="secondary">Secondary</Badge>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-secondary');

    rerender(<Badge variant="destructive">Destructive</Badge>);
    expect(screen.getByText('Destructive')).toHaveClass('bg-destructive');

    rerender(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText('Outline')).toHaveClass('border');
  });

  it('accepts custom className', () => {
    render(<Badge className="custom-badge">Custom</Badge>);
    expect(screen.getByText('Custom')).toHaveClass('custom-badge');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Badge ref={ref}>Ref Badge</Badge>);
    expect(ref).toHaveBeenCalled();
  });

  it('renders with different content types', () => {
    render(
      <Badge>
        <span>Complex content</span>
        <span>123</span>
      </Badge>,
    );
    expect(screen.getByText('Complex content')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('has correct default styling', () => {
    render(<Badge>Styled Badge</Badge>);
    const badge = screen.getByText('Styled Badge');
    expect(badge).toHaveClass(
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-md',
      'border',
      'px-2',
      'py-0.5',
      'text-xs',
      'font-medium',
      'border-transparent',
      'bg-primary',
      'text-primary-foreground',
    );
  });
});
