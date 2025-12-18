import { ToggleGroup, ToggleGroupItem } from '@e412/titanium';
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
} from 'lucide-react';
import type { ComponentDocumentation } from '../types';

export const toggleGroupDocumentation: ComponentDocumentation = {
  id: 'toggle-group',
  name: 'Toggle Group',
  description:
    'A set of two-state buttons that can be toggled on or off.',
  category: 'form',
  simpleExample: {
    example: (
      <ToggleGroup type="single" defaultValue="center">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
    code: `import { ToggleGroup, ToggleGroupItem } from '@e412/titanium';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`,
  },
  examples: [
    {
      id: 'single',
      title: 'Single Selection',
      description: 'Only one item can be selected at a time.',
      example: (
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="justify" aria-label="Align justify">
            <AlignJustify className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      ),
      code: `import { ToggleGroup, ToggleGroupItem } from '@e412/titanium';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';

export function ToggleGroupSingleDemo() {
  return (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`,
    },
    {
      id: 'multiple',
      title: 'Multiple Selection',
      description: 'Multiple items can be selected simultaneously.',
      example: (
        <ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      ),
      code: `import { ToggleGroup, ToggleGroupItem } from '@e412/titanium';
import { Bold, Italic, Underline } from 'lucide-react';

export function ToggleGroupMultipleDemo() {
  return (
    <ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`,
    },
    {
      id: 'outline',
      title: 'Outline Variant',
      description: 'Toggle group with outline styling.',
      example: (
        <ToggleGroup type="single" variant="outline" defaultValue="list">
          <ToggleGroupItem value="list" aria-label="Bulleted list">
            <List className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="ordered" aria-label="Numbered list">
            <ListOrdered className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      ),
      code: `import { ToggleGroup, ToggleGroupItem } from '@e412/titanium';
import { List, ListOrdered } from 'lucide-react';

export function ToggleGroupOutlineDemo() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="list">
      <ToggleGroupItem value="list" aria-label="Bulleted list">
        <List className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="ordered" aria-label="Numbered list">
        <ListOrdered className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Toggle group in different sizes.',
      example: (
        <div className="flex flex-col items-start gap-4">
          <ToggleGroup type="single" size="sm" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="md" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="lg" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      ),
      code: `import { ToggleGroup, ToggleGroupItem } from '@e412/titanium';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export function ToggleGroupSizesDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ToggleGroup type="single" size="sm" defaultValue="center">
        <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
        <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
        <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="lg" defaultValue="center">
        <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
        <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
        <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Toggle group with disabled items.',
      example: (
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center" disabled>
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      ),
      code: `import { ToggleGroup, ToggleGroupItem } from '@e412/titanium';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export function ToggleGroupDisabledDemo() {
  return (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center" disabled>
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`,
    },
  ],
  api: [
    {
      component: 'ToggleGroup',
      description: 'The toggle group container.',
      props: [
        {
          name: 'type',
          type: '"single" | "multiple"',
          description: 'Whether single or multiple items can be pressed',
          required: true,
        },
        {
          name: 'value',
          type: 'string | string[]',
          description: 'The controlled value(s)',
        },
        {
          name: 'defaultValue',
          type: 'string | string[]',
          description: 'The default value(s) for uncontrolled usage',
        },
        {
          name: 'onValueChange',
          type: '(value: string | string[]) => void',
          description: 'Callback when value changes',
        },
        {
          name: 'variant',
          type: '"default" | "outline"',
          description: 'The visual variant',
          defaultValue: '"default"',
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          description: 'The size of toggle items',
          defaultValue: '"md"',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the entire group is disabled',
          defaultValue: 'false',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'ToggleGroupItem',
      description: 'An individual toggle button within the group.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The value of this item',
          required: true,
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether this item is disabled',
          defaultValue: 'false',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
  ],
};
