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
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const typographyDocumentation: ComponentDocumentation = {
  id: 'typography',
  name: 'Typography',
  description: 'Pre-styled typography components for consistent text styling.',
  category: 'typography',
  simpleExample: {
    example: (
      <div className="space-y-2">
        <TypographyH1>Heading 1</TypographyH1>
        <TypographyP>
          This is a paragraph of text demonstrating the typography system.
        </TypographyP>
      </div>
    ),
    code: `import { TypographyH1, TypographyP } from '@e412/titanium';

export function TypographyDemo() {
  return (
    <div className="space-y-2">
      <TypographyH1>Heading 1</TypographyH1>
      <TypographyP>
        This is a paragraph of text demonstrating the typography system.
      </TypographyP>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'headings',
      title: 'Headings',
      description: 'All heading levels from H1 to H4.',
      example: (
        <div className="space-y-4">
          <TypographyH1>Heading 1</TypographyH1>
          <TypographyH2>Heading 2</TypographyH2>
          <TypographyH3>Heading 3</TypographyH3>
          <TypographyH4>Heading 4</TypographyH4>
        </div>
      ),
      code: `import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
} from '@e412/titanium';

export function TypographyHeadingsDemo() {
  return (
    <div className="space-y-4">
      <TypographyH1>Heading 1</TypographyH1>
      <TypographyH2>Heading 2</TypographyH2>
      <TypographyH3>Heading 3</TypographyH3>
      <TypographyH4>Heading 4</TypographyH4>
    </div>
  );
}`,
    },
    {
      id: 'paragraph-lead',
      title: 'Paragraph & Lead',
      description: 'Standard paragraph and lead text styles.',
      example: (
        <div className="space-y-4">
          <TypographyLead>
            A modal dialog that interrupts the user with important content and
            expects a response.
          </TypographyLead>
          <TypographyP>
            The king, seeing how much happier his subjects were, realized the
            error of his ways and pledged to rule with wisdom and humility.
          </TypographyP>
        </div>
      ),
      code: `import { TypographyLead, TypographyP } from '@e412/titanium';

export function TypographyParagraphDemo() {
  return (
    <div className="space-y-4">
      <TypographyLead>
        A modal dialog that interrupts the user with important content.
      </TypographyLead>
      <TypographyP>
        The king, seeing how much happier his subjects were, realized the error of his ways.
      </TypographyP>
    </div>
  );
}`,
    },
    {
      id: 'blockquote',
      title: 'Blockquote',
      description: 'Styled blockquote for quotations.',
      example: (
        <TypographyBlockquote>
          "After all," he said, "everyone enjoys a good joke, so it's only fair
          that they should pay for the privilege."
        </TypographyBlockquote>
      ),
      code: `import { TypographyBlockquote } from '@e412/titanium';

export function TypographyBlockquoteDemo() {
  return (
    <TypographyBlockquote>
      "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
    </TypographyBlockquote>
  );
}`,
    },
    {
      id: 'list',
      title: 'List',
      description: 'Unordered list with styled bullets.',
      example: (
        <TypographyList>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners: 20 gold coins</li>
        </TypographyList>
      ),
      code: `import { TypographyList } from '@e412/titanium';

export function TypographyListDemo() {
  return (
    <TypographyList>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners: 20 gold coins</li>
    </TypographyList>
  );
}`,
    },
    {
      id: 'inline-code',
      title: 'Inline Code',
      description: 'Inline code styling for technical content.',
      example: (
        <TypographyP>
          You can use the <TypographyInlineCode>useEffect</TypographyInlineCode>{' '}
          hook to perform side effects in functional components.
        </TypographyP>
      ),
      code: `import { TypographyP, TypographyInlineCode } from '@e412/titanium';

export function TypographyCodeDemo() {
  return (
    <TypographyP>
      You can use the <TypographyInlineCode>useEffect</TypographyInlineCode> hook
      to perform side effects in functional components.
    </TypographyP>
  );
}`,
    },
    {
      id: 'sizes',
      title: 'Text Sizes',
      description: 'Large, small, and muted text variants.',
      example: (
        <div className="space-y-2">
          <TypographyLarge>Large text for emphasis</TypographyLarge>
          <TypographySmall>Small text for fine print</TypographySmall>
          <TypographyMuted>Muted text for secondary content</TypographyMuted>
        </div>
      ),
      code: `import {
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
} from '@e412/titanium';

export function TypographySizesDemo() {
  return (
    <div className="space-y-2">
      <TypographyLarge>Large text for emphasis</TypographyLarge>
      <TypographySmall>Small text for fine print</TypographySmall>
      <TypographyMuted>Muted text for secondary content</TypographyMuted>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'TypographyH1',
      description: 'Main page heading with extra bold styling.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The heading content',
          required: true,
        },
      ],
    },
    {
      component: 'TypographyH2',
      description: 'Section heading with border-bottom.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The heading content',
          required: true,
        },
      ],
    },
    {
      component: 'TypographyH3',
      description: 'Subsection heading.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The heading content',
          required: true,
        },
      ],
    },
    {
      component: 'TypographyH4',
      description: 'Minor heading.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The heading content',
          required: true,
        },
      ],
    },
    {
      component: 'TypographyP',
      description: 'Standard paragraph text.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The paragraph content',
          required: true,
        },
      ],
    },
    {
      component: 'TypographyLead',
      description: 'Larger introductory paragraph text.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The lead text content',
          required: true,
        },
      ],
    },
    {
      component: 'TypographyLarge',
      description: 'Large text for emphasis.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The text content',
          required: true,
        },
      ],
    },
    {
      component: 'TypographySmall',
      description: 'Small text for fine print.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The text content',
          required: true,
        },
      ],
    },
    {
      component: 'TypographyMuted',
      description: 'Muted/secondary text.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The text content',
          required: true,
        },
      ],
    },
    {
      component: 'TypographyBlockquote',
      description: 'Styled blockquote for quotations.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The quote content',
          required: true,
        },
      ],
    },
    {
      component: 'TypographyList',
      description: 'Styled unordered list.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'List items (li elements)',
          required: true,
        },
      ],
    },
    {
      component: 'TypographyInlineCode',
      description: 'Inline code styling.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The code content',
          required: true,
        },
      ],
    },
  ],
};
