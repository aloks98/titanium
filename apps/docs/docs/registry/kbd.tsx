import { Kbd, KbdGroup } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const kbdDocumentation: ComponentDocumentation = {
  id: 'kbd',
  name: 'Kbd',
  description:
    'A component for displaying keyboard shortcuts and key combinations.',
  category: 'typography',
  simpleExample: {
    example: (
      <div className="flex items-center gap-4">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
        <span className="text-sm text-muted-foreground">
          to open command palette
        </span>
      </div>
    ),
    code: `import { Kbd } from '@e412/titanium';

export function KbdDemo() {
  return (
    <div className="flex items-center gap-4">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <span className="text-sm text-muted-foreground">to open command palette</span>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Kbd component in different sizes.',
      example: (
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Kbd size="xs">⌘</Kbd>
            <span className="text-xs text-muted-foreground">Extra Small</span>
          </div>
          <div className="flex items-center gap-2">
            <Kbd size="sm">⌘</Kbd>
            <span className="text-sm text-muted-foreground">Small</span>
          </div>
          <div className="flex items-center gap-2">
            <Kbd size="md">⌘</Kbd>
            <span className="text-sm text-muted-foreground">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <Kbd size="lg">⌘</Kbd>
            <span className="text-sm text-muted-foreground">Large</span>
          </div>
        </div>
      ),
      code: `import { Kbd } from '@e412/titanium';

export function KbdSizesDemo() {
  return (
    <div className="flex items-center gap-6">
      <Kbd size="xs">⌘</Kbd>
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="md">⌘</Kbd>
      <Kbd size="lg">⌘</Kbd>
    </div>
  );
}`,
    },
    {
      id: 'kbd-group',
      title: 'Keyboard Shortcuts Group',
      description: 'KbdGroup for displaying key combinations.',
      example: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Save</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>S</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Copy</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Paste</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>V</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Undo</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>Z</Kbd>
            </KbdGroup>
          </div>
        </div>
      ),
      code: `import { Kbd, KbdGroup } from '@e412/titanium';

export function KbdGroupDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">Save</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Copy</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>C</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Paste</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>V</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
}`,
    },
    {
      id: 'common-shortcuts',
      title: 'Common Shortcuts',
      description: 'Examples of common keyboard shortcuts.',
      example: (
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
            <span className="text-sm text-muted-foreground">
              Command Palette
            </span>
          </div>
          <div className="flex items-center gap-2">
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>⌥</Kbd>
              <Kbd>I</Kbd>
            </KbdGroup>
            <span className="text-sm text-muted-foreground">Dev Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>Space</Kbd>
            </KbdGroup>
            <span className="text-sm text-muted-foreground">Autocomplete</span>
          </div>
          <div className="flex items-center gap-2">
            <Kbd>Esc</Kbd>
            <span className="text-sm text-muted-foreground">Close</span>
          </div>
        </div>
      ),
      code: `import { Kbd, KbdGroup } from '@e412/titanium';

export function KbdCommonDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>P</Kbd>
        </KbdGroup>
        <span className="text-sm text-muted-foreground">Command Palette</span>
      </div>
      <div className="flex items-center gap-2">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>I</Kbd>
        </KbdGroup>
        <span className="text-sm text-muted-foreground">Dev Tools</span>
      </div>
      <div className="flex items-center gap-2">
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>Space</Kbd>
        </KbdGroup>
        <span className="text-sm text-muted-foreground">Autocomplete</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd>Esc</Kbd>
        <span className="text-sm text-muted-foreground">Close</span>
      </div>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Kbd',
      description: 'Displays a single keyboard key.',
      props: [
        {
          name: 'size',
          type: '"xs" | "sm" | "md" | "lg"',
          description: 'The size of the key',
          defaultValue: '"sm"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The key label or symbol',
        },
      ],
    },
    {
      component: 'KbdGroup',
      description: 'Groups multiple Kbd components together.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Kbd components to group',
        },
      ],
    },
  ],
};
