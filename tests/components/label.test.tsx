import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../test-utils'
import { Label } from '@/base/label'

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Label text</Label>)
    expect(screen.getByText('Label text')).toBeInTheDocument()
  })

  it('renders as label element by default', () => {
    render(<Label>Form Label</Label>)
    const label = screen.getByText('Form Label')
    expect(label.tagName).toBe('LABEL')
  })

  it('accepts htmlFor attribute', () => {
    render(<Label htmlFor="input-id">Associated Label</Label>)
    const label = screen.getByText('Associated Label')
    expect(label).toHaveAttribute('for', 'input-id')
  })

  it('accepts custom className', () => {
    render(<Label className="custom-label">Custom</Label>)
    expect(screen.getByText('Custom')).toHaveClass('custom-label')
  })

  it('has correct default styling', () => {
    render(<Label>Styled Label</Label>)
    const label = screen.getByText('Styled Label')
    expect(label).toHaveClass(
      'text-sm',
      'font-medium',
      'leading-none'
    )
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Label ref={ref}>Ref Label</Label>)
    expect(ref).toHaveBeenCalled()
  })

  it('supports peer-disabled styling', () => {
    render(<Label className="peer-disabled:cursor-not-allowed">Disabled Label</Label>)
    expect(screen.getByText('Disabled Label')).toHaveClass('peer-disabled:cursor-not-allowed')
  })

  it('works with form controls', () => {
    render(
      <div>
        <Label htmlFor="test-input">Test Input</Label>
        <input id="test-input" type="text" />
      </div>
    )

    const label = screen.getByText('Test Input')
    const input = screen.getByRole('textbox')
    
    expect(label).toHaveAttribute('for', 'test-input')
    expect(input).toHaveAttribute('id', 'test-input')
  })
})