import { describe, expect, it, vi } from 'vitest';
import { Avatar, AvatarFallback, AvatarImage } from '@/lib/base/avatar';
import { render, screen } from '../test-utils';

describe('Avatar Components', () => {
  describe('Avatar', () => {
    it('renders correctly', () => {
      render(<Avatar data-testid="avatar" />);
      const avatar = screen.getByTestId('avatar');
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveClass(
        'relative',
        'flex',
        'h-10',
        'w-10',
        'shrink-0',
        'overflow-hidden',
        'rounded-full',
      );
    });

    it('accepts custom className', () => {
      render(<Avatar className="custom-avatar" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toHaveClass('custom-avatar');
    });

    it('forwards ref correctly', () => {
      const ref = vi.fn();
      render(<Avatar ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });
  });

  describe('AvatarImage', () => {
    it('renders correctly with src', () => {
      render(<AvatarImage src="/test-image.jpg" alt="Test Avatar" />);
      const image = screen.getByAltText('Test Avatar');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/test-image.jpg');
      expect(image).toHaveClass('aspect-square', 'h-full', 'w-full');
    });

    it('accepts custom className', () => {
      render(
        <AvatarImage src="/test.jpg" alt="Test" className="custom-image" />,
      );
      expect(screen.getByAltText('Test')).toHaveClass('custom-image');
    });
  });

  describe('AvatarFallback', () => {
    it('renders correctly', () => {
      render(<AvatarFallback>JD</AvatarFallback>);
      const fallback = screen.getByText('JD');
      expect(fallback).toBeInTheDocument();
      expect(fallback).toHaveClass(
        'flex',
        'h-full',
        'w-full',
        'items-center',
        'justify-center',
        'rounded-full',
        'bg-muted',
      );
    });

    it('accepts custom className', () => {
      render(<AvatarFallback className="custom-fallback">AB</AvatarFallback>);
      expect(screen.getByText('AB')).toHaveClass('custom-fallback');
    });
  });

  describe('Complete Avatar', () => {
    it('renders avatar with image and fallback', () => {
      render(
        <Avatar data-testid="complete-avatar">
          <AvatarImage src="/avatar.jpg" alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>,
      );

      expect(screen.getByTestId('complete-avatar')).toBeInTheDocument();
      expect(screen.getByAltText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('shows fallback when image fails to load', () => {
      render(
        <Avatar>
          <AvatarImage src="/nonexistent.jpg" alt="Failed" />
          <AvatarFallback>FB</AvatarFallback>
        </Avatar>,
      );

      // The fallback should be present in the DOM
      expect(screen.getByText('FB')).toBeInTheDocument();
    });

    it('renders only fallback when no image provided', () => {
      render(
        <Avatar>
          <AvatarFallback>NO</AvatarFallback>
        </Avatar>,
      );

      expect(screen.getByText('NO')).toBeInTheDocument();
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });
  });
});
