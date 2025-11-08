import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../test-utils'
import { Alert, AlertTitle, AlertDescription } from '@/base/alert'

describe('Alert', () => {
  it('renders correctly', () => {
    render(<Alert data-testid="alert">Alert content</Alert>)
    const alert = screen.getByTestId('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveAttribute('role', 'alert')
  })

  it('has correct default styling', () => {
    render(<Alert data-testid="alert">Content</Alert>)
    const alert = screen.getByTestId('alert')
    expect(alert).toHaveClass(
      'relative',
      'w-full',
      'rounded-lg',
      'border',
      'px-4',
      'py-3',
      'text-sm',
      'bg-card',
      'text-card-foreground'
    )
  })

  it('applies destructive variant styling', () => {
    render(<Alert variant="destructive" data-testid="alert">Error alert</Alert>)
    const alert = screen.getByTestId('alert')
    expect(alert).toHaveClass('text-destructive', 'bg-card')
  })

  it('accepts custom className', () => {
    render(<Alert className="custom-alert" data-testid="alert">Content</Alert>)
    expect(screen.getByTestId('alert')).toHaveClass('custom-alert')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Alert ref={ref}>Content</Alert>)
    expect(ref).toHaveBeenCalled()
  })

  it('renders with icon', () => {
    render(
      <Alert data-testid="alert">
        <svg data-testid="alert-icon">
          <circle cx="12" cy="12" r="10" />
        </svg>
        Alert with icon
      </Alert>
    )
    
    expect(screen.getByTestId('alert-icon')).toBeInTheDocument()
    expect(screen.getByText('Alert with icon')).toBeInTheDocument()
  })
})

describe('AlertTitle', () => {
  it('renders correctly', () => {
    render(<AlertTitle data-testid="alert-title">Alert Title</AlertTitle>)
    const title = screen.getByTestId('alert-title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Alert Title')
  })

  it('has correct default styling', () => {
    render(<AlertTitle data-testid="alert-title">Title</AlertTitle>)
    const title = screen.getByTestId('alert-title')
    expect(title).toHaveClass(
      'col-start-2',
      'line-clamp-1',
      'min-h-4',
      'font-medium',
      'tracking-tight'
    )
  })

  it('accepts custom className', () => {
    render(<AlertTitle className="custom-title" data-testid="alert-title">Title</AlertTitle>)
    expect(screen.getByTestId('alert-title')).toHaveClass('custom-title')
  })

  it('has correct data slot attribute', () => {
    render(<AlertTitle data-testid="alert-title">Title</AlertTitle>)
    expect(screen.getByTestId('alert-title')).toHaveAttribute('data-slot', 'alert-title')
  })
})

describe('AlertDescription', () => {
  it('renders correctly', () => {
    render(<AlertDescription data-testid="alert-description">Alert description</AlertDescription>)
    const description = screen.getByTestId('alert-description')
    expect(description).toBeInTheDocument()
    expect(description).toHaveTextContent('Alert description')
  })

  it('has correct default styling', () => {
    render(<AlertDescription data-testid="alert-description">Description</AlertDescription>)
    const description = screen.getByTestId('alert-description')
    expect(description).toHaveClass(
      'text-muted-foreground',
      'col-start-2',
      'grid',
      'justify-items-start',
      'gap-1',
      'text-sm'
    )
  })

  it('accepts custom className', () => {
    render(<AlertDescription className="custom-description" data-testid="alert-description">Description</AlertDescription>)
    expect(screen.getByTestId('alert-description')).toHaveClass('custom-description')
  })

  it('has correct data slot attribute', () => {
    render(<AlertDescription data-testid="alert-description">Description</AlertDescription>)
    expect(screen.getByTestId('alert-description')).toHaveAttribute('data-slot', 'alert-description')
  })
})

describe('Alert Composition', () => {
  it('renders complete alert with all components', () => {
    render(
      <Alert data-testid="complete-alert">
        <svg data-testid="alert-icon">
          <circle cx="12" cy="12" r="10" />
        </svg>
        <AlertTitle data-testid="alert-title">Heads up!</AlertTitle>
        <AlertDescription data-testid="alert-description">
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    )

    expect(screen.getByTestId('complete-alert')).toBeInTheDocument()
    expect(screen.getByTestId('alert-icon')).toBeInTheDocument()
    expect(screen.getByTestId('alert-title')).toHaveTextContent('Heads up!')
    expect(screen.getByTestId('alert-description')).toHaveTextContent('You can add components to your app using the cli.')
  })

  it('renders destructive alert with all components', () => {
    render(
      <Alert variant="destructive" data-testid="destructive-alert">
        <svg data-testid="error-icon">
          <circle cx="12" cy="12" r="10" />
        </svg>
        <AlertTitle data-testid="alert-title">Error</AlertTitle>
        <AlertDescription data-testid="alert-description">
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    )

    const alert = screen.getByTestId('destructive-alert')
    expect(alert).toHaveClass('text-destructive')
    expect(screen.getByTestId('error-icon')).toBeInTheDocument()
    expect(screen.getByTestId('alert-title')).toHaveTextContent('Error')
    expect(screen.getByTestId('alert-description')).toHaveTextContent('Your session has expired. Please log in again.')
  })

  it('renders alert without icon', () => {
    render(
      <Alert data-testid="no-icon-alert">
        <AlertTitle data-testid="alert-title">Simple Alert</AlertTitle>
        <AlertDescription data-testid="alert-description">
          This is a simple alert without an icon.
        </AlertDescription>
      </Alert>
    )

    expect(screen.getByTestId('no-icon-alert')).toBeInTheDocument()
    expect(screen.getByTestId('alert-title')).toHaveTextContent('Simple Alert')
    expect(screen.getByTestId('alert-description')).toHaveTextContent('This is a simple alert without an icon.')
  })
})