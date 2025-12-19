import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@e412/titanium';
import { useState } from 'react';
import type { ComponentDocumentation } from '../types';

function ContextMenuCheckboxExample() {
  const [bookmarked, setBookmarked] = useState(true);
  const [fullUrls, setFullUrls] = useState(false);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuCheckboxItem
          checked={bookmarked}
          onCheckedChange={setBookmarked}
        >
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={fullUrls}
          onCheckedChange={setFullUrls}
        >
          Show Full URLs
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function ContextMenuRadioExample() {
  const [person, setPerson] = useState('pedro');

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuLabel>People</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          <ContextMenuRadioItem value="john">John Doe</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export const contextMenuDocumentation: ComponentDocumentation = {
  id: 'context-menu',
  name: 'Context Menu',
  description:
    'A menu that appears on right-click, providing contextual actions.',
  category: 'navigation',
  simpleExample: {
    example: (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Save Page As...</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    ),
    code: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@e412/titanium';

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Save Page As...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
  },
  examples: [
    {
      id: 'with-shortcuts',
      title: 'With Keyboard Shortcuts',
      description: 'Context menu items with keyboard shortcut hints.',
      example: (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuItem>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              View Source
              <ContextMenuShortcut>⌘U</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Inspect
              <ContextMenuShortcut>⌘⇧I</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@e412/titanium';

export function ContextMenuShortcutsDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          View Source
          <ContextMenuShortcut>⌘U</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
    },
    {
      id: 'with-submenu',
      title: 'With Submenu',
      description: 'Nested context menu with submenus.',
      example: (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuItem>New Tab</ContextMenuItem>
            <ContextMenuItem>New Window</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>Save Page As...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>Exit</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@e412/titanium';

export function ContextMenuSubmenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>New Tab</ContextMenuItem>
        <ContextMenuItem>New Window</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Save Page As...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Exit</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
    },
    {
      id: 'with-checkboxes',
      title: 'With Checkboxes',
      description: 'Context menu with checkbox items.',
      example: <ContextMenuCheckboxExample />,
      code: `import { useState } from 'react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuCheckboxItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@e412/titanium';

export function ContextMenuCheckboxDemo() {
  const [bookmarked, setBookmarked] = useState(true);
  const [fullUrls, setFullUrls] = useState(false);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuCheckboxItem
          checked={bookmarked}
          onCheckedChange={setBookmarked}
        >
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={fullUrls}
          onCheckedChange={setFullUrls}
        >
          Show Full URLs
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
    },
    {
      id: 'with-radio',
      title: 'With Radio Group',
      description: 'Context menu with radio items for single selection.',
      example: <ContextMenuRadioExample />,
      code: `import { useState } from 'react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@e412/titanium';

export function ContextMenuRadioDemo() {
  const [person, setPerson] = useState('pedro');

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuLabel>People</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
          <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          <ContextMenuRadioItem value="john">John Doe</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
    },
    {
      id: 'destructive',
      title: 'Destructive Items',
      description: 'Context menu with destructive action items.',
      example: (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Edit</ContextMenuItem>
            <ContextMenuItem>Duplicate</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@e412/titanium';

export function ContextMenuDestructiveDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
    },
  ],
  api: [
    {
      component: 'ContextMenu',
      description: 'The root component for the context menu.',
      props: [
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          description: 'Callback when open state changes',
        },
        {
          name: 'modal',
          type: 'boolean',
          description: 'Whether the context menu is modal',
          defaultValue: 'true',
        },
      ],
    },
    {
      component: 'ContextMenuTrigger',
      description: 'The element that triggers the context menu on right-click.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Merge props onto child element',
          defaultValue: 'false',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the trigger is disabled',
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
      component: 'ContextMenuContent',
      description: 'The context menu content container.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
        {
          name: 'alignOffset',
          type: 'number',
          description: 'Offset from the alignment edge',
        },
      ],
    },
    {
      component: 'ContextMenuItem',
      description: 'An individual menu item.',
      props: [
        {
          name: 'inset',
          type: 'boolean',
          description: 'Add left padding for items without icons',
          defaultValue: 'false',
        },
        {
          name: 'variant',
          type: '"default" | "destructive"',
          description: 'The visual variant',
          defaultValue: '"default"',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the item is disabled',
          defaultValue: 'false',
        },
        {
          name: 'onSelect',
          type: '(event: Event) => void',
          description: 'Callback when the item is selected',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'ContextMenuCheckboxItem',
      description: 'A menu item with a checkbox.',
      props: [
        {
          name: 'checked',
          type: 'boolean',
          description: 'The controlled checked state',
        },
        {
          name: 'onCheckedChange',
          type: '(checked: boolean) => void',
          description: 'Callback when checked state changes',
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
      component: 'ContextMenuRadioGroup',
      description: 'A group of radio items.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The controlled value',
        },
        {
          name: 'onValueChange',
          type: '(value: string) => void',
          description: 'Callback when value changes',
        },
      ],
    },
    {
      component: 'ContextMenuRadioItem',
      description: 'A radio item within a radio group.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The value of this radio item',
          required: true,
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
      component: 'ContextMenuLabel',
      description: 'A label for a group of items.',
      props: [
        {
          name: 'inset',
          type: 'boolean',
          description: 'Add left padding to align with items',
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
      component: 'ContextMenuSeparator',
      description: 'A visual separator between menu items.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'ContextMenuShortcut',
      description: 'Displays keyboard shortcut hints.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'ContextMenuSub',
      description: 'Container for nested submenus.',
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
        },
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          description: 'Callback when open state changes',
        },
      ],
    },
    {
      component: 'ContextMenuSubTrigger',
      description: 'Trigger for opening a submenu.',
      props: [
        {
          name: 'inset',
          type: 'boolean',
          description: 'Add left padding for alignment',
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
      component: 'ContextMenuSubContent',
      description: 'Content container for submenus.',
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
