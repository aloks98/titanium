import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@e412/titanium';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react';
import { useState } from 'react';
import type { ComponentDocumentation } from '../types';

export const commandDocumentation: ComponentDocumentation = {
  id: 'command',
  name: 'Command',
  description:
    'A command palette component for fast keyboard-driven navigation and actions.',
  category: 'overlay',
  simpleExample: {
    example: (
      <Command className="rounded-lg border shadow-md max-w-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
    code: `import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@e412/titanium';
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

export function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md max-w-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
  },
  examples: [
    {
      id: 'dialog',
      title: 'Command Dialog',
      description:
        'Command palette as a modal dialog triggered by keyboard shortcut.',
      example: (() => {
        const CommandDialogDemo = () => {
          const [open, setOpen] = useState(false);
          return (
            <>
              <p className="text-sm text-muted-foreground mb-4">
                Press{' '}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>{' '}
                or click the button
              </p>
              <Button variant="outline" onClick={() => setOpen(true)}>
                Open Command Palette
              </Button>
              <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className="mr-2 h-4 w-4" />
                      <span>Search Emoji</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>
            </>
          );
        };
        return <CommandDialogDemo />;
      })(),
      code: `import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Button,
} from '@e412/titanium';
import { Calendar, Smile } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CommandDialogDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Command Palette
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}`,
    },
    {
      id: 'with-checkmarks',
      title: 'With Selection',
      description: 'Command items with checkmarks for selection state.',
      example: (
        <Command className="rounded-lg border shadow-md max-w-md">
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              <CommandItem className="flex items-center justify-between">
                <span>Next.js</span>
                <span className="text-primary">✓</span>
              </CommandItem>
              <CommandItem>
                <span>Remix</span>
              </CommandItem>
              <CommandItem>
                <span>Astro</span>
              </CommandItem>
              <CommandItem>
                <span>Vite</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      ),
      code: `import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@e412/titanium';
import { Check } from 'lucide-react';
import { useState } from 'react';

const frameworks = [
  { value: 'next', label: 'Next.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'vite', label: 'Vite' },
];

export function CommandSelectionDemo() {
  const [selected, setSelected] = useState('next');

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup>
          {frameworks.map((framework) => (
            <CommandItem
              key={framework.value}
              onSelect={() => setSelected(framework.value)}
              className="flex items-center justify-between"
            >
              <span>{framework.label}</span>
              {selected === framework.value && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Command',
      description: 'The root command component.',
      props: [
        {
          name: 'shouldFilter',
          type: 'boolean',
          description: 'Whether to filter items based on search',
          defaultValue: 'true',
        },
        {
          name: 'filter',
          type: '(value: string, search: string) => number',
          description: 'Custom filter function',
        },
        {
          name: 'value',
          type: 'string',
          description: 'The controlled selected value',
        },
        {
          name: 'onValueChange',
          type: '(value: string) => void',
          description: 'Callback when selection changes',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CommandDialog',
      description: 'Command palette in a modal dialog.',
      props: [
        {
          name: 'open',
          type: 'boolean',
          description: 'The controlled open state',
        },
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          description: 'Callback when open state changes',
        },
      ],
    },
    {
      component: 'CommandInput',
      description: 'The search input field.',
      props: [
        {
          name: 'placeholder',
          type: 'string',
          description: 'Placeholder text',
        },
        {
          name: 'value',
          type: 'string',
          description: 'The controlled input value',
        },
        {
          name: 'onValueChange',
          type: '(value: string) => void',
          description: 'Callback when input changes',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CommandList',
      description: 'Container for command items.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CommandEmpty',
      description: 'Shown when no results match.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CommandGroup',
      description: 'Groups related command items.',
      props: [
        {
          name: 'heading',
          type: 'string',
          description: 'The group heading text',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CommandItem',
      description: 'An individual command item.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The value for filtering and selection',
        },
        {
          name: 'onSelect',
          type: '(value: string) => void',
          description: 'Callback when item is selected',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the item is disabled',
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
      component: 'CommandSeparator',
      description: 'Visual separator between groups.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CommandShortcut',
      description: 'Displays keyboard shortcut hint.',
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
