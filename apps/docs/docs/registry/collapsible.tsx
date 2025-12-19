import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@e412/titanium';
import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import type { ComponentDocumentation } from '../types';

function CollapsibleControlledExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export const collapsibleDocumentation: ComponentDocumentation = {
  id: 'collapsible',
  name: 'Collapsible',
  description: 'An interactive component that expands and collapses content.',
  category: 'layout',
  simpleExample: {
    example: (
      <Collapsible className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Toggle to see more</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          Always visible content
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 text-sm">
            Hidden content 1
          </div>
          <div className="rounded-md border px-4 py-3 text-sm">
            Hidden content 2
          </div>
        </CollapsibleContent>
      </Collapsible>
    ),
    code: `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from '@e412/titanium';
import { ChevronsUpDown } from 'lucide-react';

export function CollapsibleDemo() {
  return (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Toggle to see more</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-sm">
        Always visible content
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          Hidden content 1
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          Hidden content 2
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`,
  },
  examples: [
    {
      id: 'controlled',
      title: 'Controlled',
      description: 'Collapsible with controlled open state.',
      example: <CollapsibleControlledExample />,
      code: `import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from '@e412/titanium';
import { ChevronsUpDown } from 'lucide-react';

export function CollapsibleControlledDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`,
    },
    {
      id: 'default-open',
      title: 'Default Open',
      description: 'Collapsible that starts in the open state.',
      example: (
        <Collapsible defaultOpen className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Open by default</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 text-sm">
              This content is visible by default
            </div>
            <div className="rounded-md border px-4 py-3 text-sm">
              Click the button to collapse
            </div>
          </CollapsibleContent>
        </Collapsible>
      ),
      code: `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from '@e412/titanium';
import { ChevronsUpDown } from 'lucide-react';

export function CollapsibleDefaultOpenDemo() {
  return (
    <Collapsible defaultOpen className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Open by default</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          This content is visible by default
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          Click the button to collapse
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Collapsible in a disabled state.',
      example: (
        <Collapsible disabled className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold text-muted-foreground">
              Disabled collapsible
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" disabled>
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 text-sm">
              This won't be shown
            </div>
          </CollapsibleContent>
        </Collapsible>
      ),
      code: `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from '@e412/titanium';
import { ChevronsUpDown } from 'lucide-react';

export function CollapsibleDisabledDemo() {
  return (
    <Collapsible disabled className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold text-muted-foreground">
          Disabled collapsible
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" disabled>
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          This won't be shown
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Collapsible',
      description: 'The root collapsible container.',
      props: [
        {
          name: 'open',
          type: 'boolean',
          description: 'The controlled open state',
        },
        {
          name: 'defaultOpen',
          type: 'boolean',
          description: 'The default open state',
          defaultValue: 'false',
        },
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          description: 'Callback when open state changes',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the collapsible is disabled',
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
      component: 'CollapsibleTrigger',
      description: 'The button that toggles the collapsible content.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Merge props onto child element',
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
      component: 'CollapsibleContent',
      description: 'The content that is shown/hidden.',
      props: [
        {
          name: 'forceMount',
          type: 'boolean',
          description: 'Force mount even when collapsed',
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
