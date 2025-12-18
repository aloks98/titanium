import { Toggle } from '@e412/titanium';
import { Bold, Italic, Underline } from 'lucide-react';
import type { ComponentDocumentation } from '../types';

export const toggleDocumentation: ComponentDocumentation = {
  id: 'toggle',
  name: 'Toggle',
  description: 'A two-state button that can be either on or off.',
  category: 'form',
  simpleExample: {
    example: (
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    ),
    code: `import { Toggle } from '@e412/titanium';
import { Bold } from 'lucide-react';

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}`,
  },
  examples: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Toggle with different visual variants.',
      example: (
        <div className="flex items-center gap-4">
          <Toggle variant="default" aria-label="Toggle default">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle outline">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      ),
      code: `import { Toggle } from '@e412/titanium';
import { Bold, Italic } from 'lucide-react';

export function ToggleVariantsDemo() {
  return (
    <div className="flex items-center gap-4">
      <Toggle variant="default" aria-label="Toggle default">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle outline">
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  );
}`,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Toggle in different sizes.',
      example: (
        <div className="flex items-center gap-4">
          <Toggle size="sm" aria-label="Toggle small">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="md" aria-label="Toggle medium">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle large">
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>
      ),
      code: `import { Toggle } from '@e412/titanium';
import { Bold } from 'lucide-react';

export function ToggleSizesDemo() {
  return (
    <div className="flex items-center gap-4">
      <Toggle size="sm" aria-label="Toggle small">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="md" aria-label="Toggle medium">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle large">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
}`,
    },
    {
      id: 'with-text',
      title: 'With Text',
      description: 'Toggle with icon and text label.',
      example: (
        <div className="flex items-center gap-4">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
            Bold
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
            Italic
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
            Underline
          </Toggle>
        </div>
      ),
      code: `import { Toggle } from '@e412/titanium';
import { Bold, Italic, Underline } from 'lucide-react';

export function ToggleWithTextDemo() {
  return (
    <div className="flex items-center gap-4">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
        Bold
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
        Italic
      </Toggle>
    </div>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Toggle in disabled state.',
      example: (
        <div className="flex items-center gap-4">
          <Toggle disabled aria-label="Toggle disabled">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle disabled defaultPressed aria-label="Toggle disabled pressed">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      ),
      code: `import { Toggle } from '@e412/titanium';
import { Bold, Italic } from 'lucide-react';

export function ToggleDisabledDemo() {
  return (
    <div className="flex items-center gap-4">
      <Toggle disabled aria-label="Toggle disabled">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle disabled defaultPressed aria-label="Toggle disabled pressed">
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  );
}`,
    },
    {
      id: 'default-pressed',
      title: 'Default Pressed',
      description: 'Toggle that starts in pressed state.',
      example: (
        <Toggle defaultPressed aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
          Bold
        </Toggle>
      ),
      code: `import { Toggle } from '@e412/titanium';
import { Bold } from 'lucide-react';

export function ToggleDefaultPressedDemo() {
  return (
    <Toggle defaultPressed aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
      Bold
    </Toggle>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Toggle',
      description: 'A toggle button component.',
      props: [
        {
          name: 'variant',
          type: '"default" | "outline"',
          description: 'The visual variant',
          defaultValue: '"default"',
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          description: 'The size of the toggle',
          defaultValue: '"md"',
        },
        {
          name: 'pressed',
          type: 'boolean',
          description: 'The controlled pressed state',
        },
        {
          name: 'defaultPressed',
          type: 'boolean',
          description: 'The default pressed state',
          defaultValue: 'false',
        },
        {
          name: 'onPressedChange',
          type: '(pressed: boolean) => void',
          description: 'Callback when pressed state changes',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the toggle is disabled',
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
