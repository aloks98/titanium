import { Separator } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const separatorDocumentation: ComponentDocumentation = {
  id: 'separator',
  name: 'Separator',
  description: 'Visually or semantically separates content.',
  category: 'layout',
  simpleExample: {
    example: (
      <div className="w-full max-w-md">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Titanium UI</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    ),
    code: `import { Separator } from '@e412/titanium';

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Titanium UI</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'horizontal',
      title: 'Horizontal',
      description: 'Default horizontal separator.',
      example: (
        <div className="w-full max-w-md space-y-4">
          <p className="text-sm">Content above the separator</p>
          <Separator />
          <p className="text-sm">Content below the separator</p>
        </div>
      ),
      code: `import { Separator } from '@e412/titanium';

export function SeparatorHorizontalDemo() {
  return (
    <div className="space-y-4">
      <p className="text-sm">Content above the separator</p>
      <Separator />
      <p className="text-sm">Content below the separator</p>
    </div>
  );
}`,
    },
    {
      id: 'vertical',
      title: 'Vertical',
      description: 'Vertical separator for inline content.',
      example: (
        <div className="flex h-5 items-center space-x-4 text-sm">
          <span>Home</span>
          <Separator orientation="vertical" />
          <span>Products</span>
          <Separator orientation="vertical" />
          <span>About</span>
          <Separator orientation="vertical" />
          <span>Contact</span>
        </div>
      ),
      code: `import { Separator } from '@e412/titanium';

export function SeparatorVerticalDemo() {
  return (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <span>Home</span>
      <Separator orientation="vertical" />
      <span>Products</span>
      <Separator orientation="vertical" />
      <span>About</span>
      <Separator orientation="vertical" />
      <span>Contact</span>
    </div>
  );
}`,
    },
    {
      id: 'in-menu',
      title: 'In Menu',
      description: 'Separator used to group menu items.',
      example: (
        <div className="w-48 rounded-md border p-2">
          <div className="px-2 py-1.5 text-sm">New Tab</div>
          <div className="px-2 py-1.5 text-sm">New Window</div>
          <Separator className="my-1" />
          <div className="px-2 py-1.5 text-sm">Share</div>
          <div className="px-2 py-1.5 text-sm">Print</div>
          <Separator className="my-1" />
          <div className="px-2 py-1.5 text-sm">Settings</div>
        </div>
      ),
      code: `import { Separator } from '@e412/titanium';

export function SeparatorMenuDemo() {
  return (
    <div className="w-48 rounded-md border p-2">
      <div className="px-2 py-1.5 text-sm">New Tab</div>
      <div className="px-2 py-1.5 text-sm">New Window</div>
      <Separator className="my-1" />
      <div className="px-2 py-1.5 text-sm">Share</div>
      <div className="px-2 py-1.5 text-sm">Print</div>
      <Separator className="my-1" />
      <div className="px-2 py-1.5 text-sm">Settings</div>
    </div>
  );
}`,
    },
    {
      id: 'with-text',
      title: 'With Text',
      description: 'Separator with centered text.',
      example: (
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
      ),
      code: `import { Separator } from '@e412/titanium';

export function SeparatorWithTextDemo() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-0 flex items-center">
        <Separator />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Separator',
      description: 'A visual divider between content.',
      props: [
        {
          name: 'orientation',
          type: '"horizontal" | "vertical"',
          description: 'The orientation of the separator',
          defaultValue: '"horizontal"',
        },
        {
          name: 'decorative',
          type: 'boolean',
          description:
            'Whether the separator is purely decorative (not semantic)',
          defaultValue: 'true',
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
