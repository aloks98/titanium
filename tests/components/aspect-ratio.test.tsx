import { describe, expect, it, vi } from 'vitest';
import { AspectRatio } from '@/lib/base/aspect-ratio';
import { render, screen } from '../test-utils';

describe('AspectRatio', () => {
  it('renders correctly', () => {
    render(
      <AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>,
    );
    const aspectRatio = screen.getByTestId('aspect-ratio');
    expect(aspectRatio).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has correct default styling', () => {
    render(
      <AspectRatio ratio={1} data-testid="aspect-ratio">
        <div>Square content</div>
      </AspectRatio>,
    );
    const aspectRatio = screen.getByTestId('aspect-ratio');
    expect(aspectRatio).toHaveClass('relative', 'w-full');
  });

  it('accepts custom className', () => {
    render(
      <AspectRatio
        ratio={4 / 3}
        className="custom-aspect"
        data-testid="aspect-ratio"
      >
        <div>Custom content</div>
      </AspectRatio>,
    );
    expect(screen.getByTestId('aspect-ratio')).toHaveClass('custom-aspect');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(
      <AspectRatio ratio={1} ref={ref}>
        <div>Ref content</div>
      </AspectRatio>,
    );
    expect(ref).toHaveBeenCalled();
  });

  it('works with images', () => {
    render(
      <AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
        <img src="/test-image.jpg" alt="Test image" className="object-cover" />
      </AspectRatio>,
    );

    expect(screen.getByTestId('aspect-ratio')).toBeInTheDocument();
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('works with video content', () => {
    render(
      <AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
        <video controls>
          <source src="/test-video.mp4" type="video/mp4" />
        </video>
      </AspectRatio>,
    );

    expect(screen.getByTestId('aspect-ratio')).toBeInTheDocument();
    expect(screen.getByRole('application')).toBeInTheDocument(); // video element
  });

  it('handles different aspect ratios', () => {
    const { rerender } = render(
      <AspectRatio ratio={1} data-testid="aspect-ratio">
        <div>Square</div>
      </AspectRatio>,
    );
    expect(screen.getByTestId('aspect-ratio')).toBeInTheDocument();

    rerender(
      <AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
        <div>Widescreen</div>
      </AspectRatio>,
    );
    expect(screen.getByText('Widescreen')).toBeInTheDocument();

    rerender(
      <AspectRatio ratio={4 / 3} data-testid="aspect-ratio">
        <div>Standard</div>
      </AspectRatio>,
    );
    expect(screen.getByText('Standard')).toBeInTheDocument();
  });

  it('renders child content correctly', () => {
    render(
      <AspectRatio ratio={1} data-testid="aspect-ratio">
        <div className="bg-gray-200 rounded-lg flex items-center justify-center">
          <span>Centered content</span>
        </div>
      </AspectRatio>,
    );

    expect(screen.getByText('Centered content')).toBeInTheDocument();
  });

  it('maintains aspect ratio with responsive design', () => {
    render(
      <AspectRatio
        ratio={2 / 1}
        className="w-full max-w-md"
        data-testid="aspect-ratio"
      >
        <div className="bg-blue-100 w-full h-full">Responsive content</div>
      </AspectRatio>,
    );

    const aspectRatio = screen.getByTestId('aspect-ratio');
    expect(aspectRatio).toHaveClass('w-full', 'max-w-md');
    expect(screen.getByText('Responsive content')).toBeInTheDocument();
  });
});
