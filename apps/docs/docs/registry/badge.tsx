import { Badge, BadgeButton, BadgeDot } from '@e412/titanium';
import { X } from 'lucide-react';
import type { ComponentDocumentation } from '../types';

export const badgeDocumentation: ComponentDocumentation = {
  id: 'badge',
  name: 'Badge',
  description: 'Displays a badge or a component that looks like a badge.',
  category: 'data-display',
  simpleExample: {
    example: (
      <div className="flex flex-wrap gap-2">
        <Badge>Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    ),
    code: `import { Badge } from '@e412/titanium';

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'All badge color variants.',
      example: (
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      ),
      code: `import { Badge } from '@e412/titanium';

export function BadgeVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`,
    },
    {
      id: 'appearances',
      title: 'Appearances',
      description: 'Different appearance styles for badges.',
      example: (
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" appearance="default">
              Default
            </Badge>
            <Badge variant="success" appearance="default">
              Success
            </Badge>
            <Badge variant="destructive" appearance="default">
              Destructive
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" appearance="light">
              Light
            </Badge>
            <Badge variant="success" appearance="light">
              Success
            </Badge>
            <Badge variant="destructive" appearance="light">
              Destructive
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" appearance="outline">
              Outline
            </Badge>
            <Badge variant="success" appearance="outline">
              Success
            </Badge>
            <Badge variant="destructive" appearance="outline">
              Destructive
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" appearance="ghost">
              Ghost
            </Badge>
            <Badge variant="success" appearance="ghost">
              Success
            </Badge>
            <Badge variant="destructive" appearance="ghost">
              Destructive
            </Badge>
          </div>
        </div>
      ),
      code: `import { Badge } from '@e412/titanium';

export function BadgeAppearancesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="primary" appearance="default">Default</Badge>
        <Badge variant="success" appearance="default">Success</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="primary" appearance="light">Light</Badge>
        <Badge variant="success" appearance="light">Success</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="primary" appearance="outline">Outline</Badge>
        <Badge variant="success" appearance="outline">Success</Badge>
      </div>
    </div>
  );
}`,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Badges in different sizes.',
      example: (
        <div className="flex items-center gap-2">
          <Badge size="xs">Extra Small</Badge>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      ),
      code: `import { Badge } from '@e412/titanium';

export function BadgeSizesDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}`,
    },
    {
      id: 'with-dot',
      title: 'With Dot Indicator',
      description: 'Badges with dot indicators.',
      example: (
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary" appearance="light">
            <BadgeDot />
            Active
          </Badge>
          <Badge variant="success" appearance="light">
            <BadgeDot />
            Online
          </Badge>
          <Badge variant="warning" appearance="light">
            <BadgeDot />
            Pending
          </Badge>
          <Badge variant="destructive" appearance="light">
            <BadgeDot />
            Error
          </Badge>
        </div>
      ),
      code: `import { Badge, BadgeDot } from '@e412/titanium';

export function BadgeWithDotDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary" appearance="light">
        <BadgeDot />
        Active
      </Badge>
      <Badge variant="success" appearance="light">
        <BadgeDot />
        Online
      </Badge>
    </div>
  );
}`,
    },
    {
      id: 'dismissible',
      title: 'Dismissible',
      description: 'Badges with a close button.',
      example: (
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary" appearance="light">
            React
            <BadgeButton>
              <X />
            </BadgeButton>
          </Badge>
          <Badge variant="success" appearance="light">
            TypeScript
            <BadgeButton>
              <X />
            </BadgeButton>
          </Badge>
          <Badge variant="info" appearance="light">
            Tailwind
            <BadgeButton>
              <X />
            </BadgeButton>
          </Badge>
        </div>
      ),
      code: `import { Badge, BadgeButton } from '@e412/titanium';
import { X } from 'lucide-react';

export function BadgeDismissibleDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary" appearance="light">
        React
        <BadgeButton>
          <X />
        </BadgeButton>
      </Badge>
      <Badge variant="success" appearance="light">
        TypeScript
        <BadgeButton>
          <X />
        </BadgeButton>
      </Badge>
    </div>
  );
}`,
    },
    {
      id: 'shapes',
      title: 'Shapes',
      description: 'Default and circle shaped badges.',
      example: (
        <div className="flex items-center gap-2">
          <Badge variant="primary">Default</Badge>
          <Badge variant="primary" shape="circle">
            5
          </Badge>
          <Badge variant="destructive" shape="circle">
            99+
          </Badge>
        </div>
      ),
      code: `import { Badge } from '@e412/titanium';

export function BadgeShapesDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="primary">Default</Badge>
      <Badge variant="primary" shape="circle">5</Badge>
      <Badge variant="destructive" shape="circle">99+</Badge>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Badge',
      description: 'The badge component.',
      props: [
        {
          name: 'variant',
          type: '"primary" | "secondary" | "success" | "warning" | "info" | "outline" | "destructive"',
          description: 'The color variant',
          defaultValue: '"primary"',
        },
        {
          name: 'appearance',
          type: '"default" | "light" | "outline" | "ghost"',
          description: 'The visual appearance style',
          defaultValue: '"default"',
        },
        {
          name: 'size',
          type: '"xs" | "sm" | "md" | "lg"',
          description: 'The size of the badge',
          defaultValue: '"md"',
        },
        {
          name: 'shape',
          type: '"default" | "circle"',
          description: 'The shape of the badge',
          defaultValue: '"default"',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the badge appears disabled',
          defaultValue: 'false',
        },
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Render as child element using Slot',
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
      component: 'BadgeButton',
      description: 'A button component for badge actions like dismiss.',
      props: [
        {
          name: 'variant',
          type: '"default"',
          description: 'The button variant',
          defaultValue: '"default"',
        },
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Render as child element using Slot',
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
      component: 'BadgeDot',
      description: 'A dot indicator for badges.',
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
