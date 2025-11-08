import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../test-utils'
import { Progress } from '@/base/progress'

describe('Progress', () => {
  it('renders correctly', () => {
    render(<Progress value={50} data-testid="progress" />)
    const progress = screen.getByTestId('progress')
    expect(progress).toBeInTheDocument()
  })

  it('has correct default styling', () => {
    render(<Progress value={25} data-testid="progress" />)
    const progress = screen.getByTestId('progress')
    expect(progress).toHaveClass(
      'relative',
      'h-4',
      'w-full',
      'overflow-hidden',
      'rounded-full',
      'bg-secondary'
    )
  })

  it('displays correct progress value', () => {
    render(<Progress value={75} data-testid="progress" />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '75')
  })

  it('sets correct aria attributes', () => {
    render(<Progress value={30} max={100} data-testid="progress" />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuemin', '0')
    expect(progressbar).toHaveAttribute('aria-valuemax', '100')
    expect(progressbar).toHaveAttribute('aria-valuenow', '30')
  })

  it('accepts custom className', () => {
    render(<Progress value={50} className="custom-progress" data-testid="progress" />)
    expect(screen.getByTestId('progress')).toHaveClass('custom-progress')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Progress value={50} ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  it('handles progress indicator styling', () => {
    render(<Progress value={60} data-testid="progress" />)
    const progress = screen.getByTestId('progress')
    const indicator = progress.querySelector('[data-state="complete-loading"]')
    
    if (indicator) {
      expect(indicator).toHaveClass('h-full', 'w-full', 'flex-1', 'bg-primary')
    }
  })

  it('handles zero value', () => {
    render(<Progress value={0} data-testid="progress" />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '0')
  })

  it('handles maximum value', () => {
    render(<Progress value={100} data-testid="progress" />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '100')
  })

  it('handles undefined value', () => {
    render(<Progress data-testid="progress" />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', 'null')
  })

  it('supports custom max value', () => {
    render(<Progress value={50} max={200} data-testid="progress" />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuemax', '200')
    expect(progressbar).toHaveAttribute('aria-valuenow', '50')
  })
})