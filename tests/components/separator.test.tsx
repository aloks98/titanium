import { describe, expect, it, vi } from 'vitest';
import { Separator } from '@/base/separator';
import { render, screen } from '../test-utils';

describe('Separator', () => {
  it('renders correctly', () => {
    render(<Separator data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toBeInTheDocument();
  });

  it('has correct default styling for horizontal orientation', () => {
    render(<Separator data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveClass('shrink-0', 'bg-border', 'h-[1px]', 'w-full');
  });

  it('renders vertical orientation correctly', () => {
    render(<Separator orientation="vertical" data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveClass('h-full', 'w-[1px]');
  });

  it('accepts custom className', () => {
    render(<Separator className="custom-separator" data-testid="separator" />);
    expect(screen.getByTestId('separator')).toHaveClass('custom-separator');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Separator ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('has correct accessibility attributes', () => {
    render(<Separator data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('role', 'separator');
  });

  it('supports decorative separators', () => {
    render(<Separator decorative data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('role', 'none');
  });

  it('renders as div element by default', () => {
    render(<Separator data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator.tagName).toBe('DIV');
  });

  it('can be used in layouts', () => {
    render(
      <div data-testid="layout">
        <div>Content 1</div>
        <Separator />
        <div>Content 2</div>
      </div>,
    );

    const layout = screen.getByTestId('layout');
    expect(layout).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();

    const separator = layout.querySelector('[role="separator"]');
    expect(separator).toBeInTheDocument();
  });
});
