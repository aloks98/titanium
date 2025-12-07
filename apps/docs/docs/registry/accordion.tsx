import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const accordionDocumentation: ComponentDocumentation = {
  id: 'accordion',
  name: 'Accordion',
  description:
    'A vertically stacked set of interactive headings that each reveal a section of content.',
  category: 'navigation',
  simpleExample: {
    example: (
      <div className="w-full max-w-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),
    code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/base/accordion';

export function AccordionDemo() {
  return (
    <div className="w-full max-w-md">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'outline-variant',
      title: 'Outline Variant',
      description: 'Accordion with outline styling and plus indicator.',
      example: (
        <div className="w-full max-w-md">
          <Accordion
            type="single"
            collapsible
            variant="outline"
            indicator="plus"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What is React?</AccordionTrigger>
              <AccordionContent>
                React is a JavaScript library for building user interfaces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is TypeScript?</AccordionTrigger>
              <AccordionContent>
                TypeScript is a typed superset of JavaScript that compiles to
                plain JavaScript.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
      code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/base/accordion';

export function AccordionOutlineDemo() {
  return (
    <div className="w-full max-w-md">
      <Accordion type="single" collapsible variant="outline" indicator="plus" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            React is a JavaScript library for building user interfaces.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is TypeScript?</AccordionTrigger>
          <AccordionContent>
            TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`,
    },
    {
      id: 'multiple-selection',
      title: 'Multiple Selection',
      description: 'Allow multiple items to be open simultaneously.',
      example: (
        <div className="w-full max-w-md">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
              <AccordionContent>
                Yes! Set the type prop to "multiple" to allow multiple items to
                be open at once.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is keyboard navigation supported?
              </AccordionTrigger>
              <AccordionContent>
                Yes, full keyboard navigation is supported out of the box.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I customize the animation?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can customize the animation using CSS classes or inline
                styles.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
      code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/base/accordion';

export function AccordionMultipleDemo() {
  return (
    <div className="w-full max-w-md">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! Set the type prop to "multiple" to allow multiple items to be open at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is keyboard navigation supported?</AccordionTrigger>
          <AccordionContent>
            Yes, full keyboard navigation is supported out of the box.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customize the animation?</AccordionTrigger>
          <AccordionContent>
            Yes, you can customize the animation using CSS classes or inline styles.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Accordion',
      description: 'The root container component.',
      props: [
        {
          name: 'type',
          type: '"single" | "multiple"',
          description: 'Determines if only one or multiple items can be open',
          required: true,
          defaultValue: '"single"',
        },
        {
          name: 'collapsible',
          type: 'boolean',
          description: 'Whether items can be collapsed',
          defaultValue: 'true',
        },
        {
          name: 'variant',
          type: '"default" | "outline" | "solid"',
          description: 'The visual style variant',
          defaultValue: '"default"',
        },
        {
          name: 'indicator',
          type: '"arrow" | "plus"',
          description: 'The type of indicator to show',
          defaultValue: '"arrow"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AccordionItem',
      description: 'An individual accordion item.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The unique identifier for this item',
          required: true,
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AccordionTrigger',
      description: 'The button that toggles accordion item.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AccordionContent',
      description: 'The content that is revealed when trigger is clicked.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
  ],
};
