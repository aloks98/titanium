import { describe, expect, it } from 'vitest';
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from '@/lib/base/typography';
import { render, screen } from '../test-utils';

describe('TypographyH1', () => {
  it('renders correctly', () => {
    render(<TypographyH1>Main Heading</TypographyH1>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Main Heading');
  });

  it('has correct styling', () => {
    render(<TypographyH1>Test</TypographyH1>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass(
      'scroll-m-20',
      'text-center',
      'text-4xl',
      'font-extrabold',
      'tracking-tight',
      'text-balance',
    );
  });
});

describe('TypographyH2', () => {
  it('renders correctly', () => {
    render(<TypographyH2>Section Heading</TypographyH2>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Section Heading');
  });

  it('has correct styling', () => {
    render(<TypographyH2>Test</TypographyH2>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass(
      'scroll-m-20',
      'border-b',
      'pb-2',
      'text-3xl',
      'font-semibold',
      'tracking-tight',
      'first:mt-0',
    );
  });
});

describe('TypographyH3', () => {
  it('renders correctly', () => {
    render(<TypographyH3>Subsection Heading</TypographyH3>);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Subsection Heading');
  });

  it('has correct styling', () => {
    render(<TypographyH3>Test</TypographyH3>);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveClass(
      'scroll-m-20',
      'text-2xl',
      'font-semibold',
      'tracking-tight',
    );
  });
});

describe('TypographyH4', () => {
  it('renders correctly', () => {
    render(<TypographyH4>Small Heading</TypographyH4>);
    const heading = screen.getByRole('heading', { level: 4 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Small Heading');
  });

  it('has correct styling', () => {
    render(<TypographyH4>Test</TypographyH4>);
    const heading = screen.getByRole('heading', { level: 4 });
    expect(heading).toHaveClass(
      'scroll-m-20',
      'text-xl',
      'font-semibold',
      'tracking-tight',
    );
  });
});

describe('TypographyP', () => {
  it('renders correctly', () => {
    render(<TypographyP>This is a paragraph.</TypographyP>);
    const paragraph = screen.getByText('This is a paragraph.');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
  });

  it('has correct styling', () => {
    render(<TypographyP>Test paragraph</TypographyP>);
    const paragraph = screen.getByText('Test paragraph');
    expect(paragraph).toHaveClass('leading-7', '[&:not(:first-child)]:mt-6');
  });
});

describe('TypographyBlockquote', () => {
  it('renders correctly', () => {
    render(<TypographyBlockquote>This is a quote.</TypographyBlockquote>);
    const blockquote = screen.getByText('This is a quote.');
    expect(blockquote).toBeInTheDocument();
    expect(blockquote.tagName).toBe('BLOCKQUOTE');
  });

  it('has correct styling', () => {
    render(<TypographyBlockquote>Test quote</TypographyBlockquote>);
    const blockquote = screen.getByText('Test quote');
    expect(blockquote).toHaveClass('mt-6', 'border-l-2', 'pl-6', 'italic');
  });
});

describe('TypographyList', () => {
  it('renders correctly', () => {
    render(
      <TypographyList>
        <li>Item 1</li>
        <li>Item 2</li>
      </TypographyList>,
    );
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('has correct styling', () => {
    render(
      <TypographyList data-testid="list">
        <li>Item</li>
      </TypographyList>,
    );
    const list = screen.getByTestId('list');
    expect(list).toHaveClass('my-6', 'ml-6', 'list-disc', '[&>li]:mt-2');
  });
});

describe('TypographyInlineCode', () => {
  it('renders correctly', () => {
    render(<TypographyInlineCode>const code = true</TypographyInlineCode>);
    const code = screen.getByText('const code = true');
    expect(code).toBeInTheDocument();
    expect(code.tagName).toBe('CODE');
  });

  it('has correct styling', () => {
    render(<TypographyInlineCode>test</TypographyInlineCode>);
    const code = screen.getByText('test');
    expect(code).toHaveClass(
      'bg-muted',
      'relative',
      'rounded',
      'px-[0.3rem]',
      'py-[0.2rem]',
      'font-mono',
      'text-sm',
      'font-semibold',
    );
  });
});

describe('TypographyLead', () => {
  it('renders correctly', () => {
    render(<TypographyLead>This is a lead paragraph.</TypographyLead>);
    const lead = screen.getByText('This is a lead paragraph.');
    expect(lead).toBeInTheDocument();
    expect(lead.tagName).toBe('P');
  });

  it('has correct styling', () => {
    render(<TypographyLead>Test lead</TypographyLead>);
    const lead = screen.getByText('Test lead');
    expect(lead).toHaveClass('text-muted-foreground', 'text-xl');
  });
});

describe('TypographyLarge', () => {
  it('renders correctly', () => {
    render(<TypographyLarge>Large text</TypographyLarge>);
    const large = screen.getByText('Large text');
    expect(large).toBeInTheDocument();
    expect(large.tagName).toBe('DIV');
  });

  it('has correct styling', () => {
    render(<TypographyLarge>Test large</TypographyLarge>);
    const large = screen.getByText('Test large');
    expect(large).toHaveClass('text-lg', 'font-semibold');
  });
});

describe('TypographySmall', () => {
  it('renders correctly', () => {
    render(<TypographySmall>Small text</TypographySmall>);
    const small = screen.getByText('Small text');
    expect(small).toBeInTheDocument();
    expect(small.tagName).toBe('SMALL');
  });

  it('has correct styling', () => {
    render(<TypographySmall>Test small</TypographySmall>);
    const small = screen.getByText('Test small');
    expect(small).toHaveClass('text-sm', 'leading-none', 'font-medium');
  });
});

describe('TypographyMuted', () => {
  it('renders correctly', () => {
    render(<TypographyMuted>Muted text</TypographyMuted>);
    const muted = screen.getByText('Muted text');
    expect(muted).toBeInTheDocument();
    expect(muted.tagName).toBe('P');
  });

  it('has correct styling', () => {
    render(<TypographyMuted>Test muted</TypographyMuted>);
    const muted = screen.getByText('Test muted');
    expect(muted).toHaveClass('text-muted-foreground', 'text-sm');
  });
});

describe('Typography Integration', () => {
  it('renders multiple typography components together', () => {
    render(
      <div>
        <TypographyH1>Main Title</TypographyH1>
        <TypographyLead>This is a lead paragraph.</TypographyLead>
        <TypographyP>
          This is a regular paragraph with{' '}
          <TypographyInlineCode>inline code</TypographyInlineCode>.
        </TypographyP>
        <TypographyH2>Section Title</TypographyH2>
        <TypographyList>
          <li>First item</li>
          <li>Second item</li>
        </TypographyList>
        <TypographyBlockquote>This is a blockquote.</TypographyBlockquote>
        <TypographyMuted>This is muted text.</TypographyMuted>
      </div>,
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Main Title',
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Section Title',
    );
    expect(screen.getByText('This is a lead paragraph.')).toBeInTheDocument();
    expect(screen.getByText('inline code')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('This is a blockquote.')).toBeInTheDocument();
    expect(screen.getByText('This is muted text.')).toBeInTheDocument();
  });
});
