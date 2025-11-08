import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '../test-utils'
import { Textarea } from '@/base/textarea'

describe('Textarea', () => {
  it('renders correctly', () => {
    render(<Textarea placeholder="Enter text" />)
    const textarea = screen.getByPlaceholderText('Enter text')
    expect(textarea).toBeInTheDocument()
    expect(textarea.tagName).toBe('TEXTAREA')
  })

  it('has correct default styling', () => {
    render(<Textarea data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveClass(
      'flex',
      'min-h-[80px]',
      'w-full',
      'rounded-md',
      'border',
      'border-input',
      'bg-background'
    )
  })

  it('handles value changes', () => {
    const handleChange = vi.fn()
    render(<Textarea onChange={handleChange} />)
    
    const textarea = screen.getByRole('textbox')
    fireEvent.change(textarea, { target: { value: 'test content' } })
    
    expect(handleChange).toHaveBeenCalled()
    expect(textarea).toHaveValue('test content')
  })

  it('can be disabled', () => {
    render(<Textarea disabled placeholder="Disabled textarea" />)
    const textarea = screen.getByPlaceholderText('Disabled textarea')
    expect(textarea).toBeDisabled()
    expect(textarea).toHaveClass('disabled:cursor-not-allowed')
  })

  it('accepts custom className', () => {
    render(<Textarea className="custom-textarea" data-testid="textarea" />)
    expect(screen.getByTestId('textarea')).toHaveClass('custom-textarea')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Textarea ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  it('handles focus and blur events', () => {
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()
    
    render(<Textarea onFocus={handleFocus} onBlur={handleBlur} />)
    
    const textarea = screen.getByRole('textbox')
    fireEvent.focus(textarea)
    expect(handleFocus).toHaveBeenCalled()
    
    fireEvent.blur(textarea)
    expect(handleBlur).toHaveBeenCalled()
  })

  it('supports controlled component pattern', () => {
    const TestComponent = () => {
      const [value, setValue] = React.useState('')
      return (
        <Textarea 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
          data-testid="controlled-textarea"
        />
      )
    }

    render(<TestComponent />)
    const textarea = screen.getByTestId('controlled-textarea')
    
    fireEvent.change(textarea, { target: { value: 'controlled content' } })
    expect(textarea).toHaveValue('controlled content')
  })

  it('supports rows attribute', () => {
    render(<Textarea rows={5} data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveAttribute('rows', '5')
  })

  it('supports cols attribute', () => {
    render(<Textarea cols={50} data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveAttribute('cols', '50')
  })

  it('supports resize styling', () => {
    render(<Textarea className="resize-none" data-testid="textarea" />)
    expect(screen.getByTestId('textarea')).toHaveClass('resize-none')
  })

  it('handles multiline content', () => {
    const multilineText = 'Line 1\nLine 2\nLine 3'
    render(<Textarea defaultValue={multilineText} data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveValue(multilineText)
  })
})