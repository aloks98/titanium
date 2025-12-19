import {
  Button,
  Input,
  Label,
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const sheetDocumentation: ComponentDocumentation = {
  id: 'sheet',
  name: 'Sheet',
  description:
    'Extends the Dialog component to display content that complements the main content of the screen. Slides in from the edge of the screen.',
  category: 'overlay',
  simpleExample: {
    example: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              This is a sheet that slides in from the side.
            </SheetDescription>
          </SheetHeader>
          <SheetBody>
            <p className="text-sm text-muted-foreground">Sheet content here.</p>
          </SheetBody>
        </SheetContent>
      </Sheet>
    ),
    code: `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from '@e412/titanium';

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a sheet that slides in from the side.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}`,
  },
  examples: [
    {
      id: 'sides',
      title: 'Different Sides',
      description: 'Sheet can slide in from different sides.',
      example: (
        <div className="flex flex-wrap gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Right</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Right Sheet</SheetTitle>
                <SheetDescription>Slides from the right.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Left Sheet</SheetTitle>
                <SheetDescription>Slides from the left.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Top</Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Top Sheet</SheetTitle>
                <SheetDescription>Slides from the top.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Bottom Sheet</SheetTitle>
                <SheetDescription>Slides from the bottom.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      ),
      code: `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from '@e412/titanium';

export function SheetSidesDemo() {
  return (
    <div className="flex gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Right</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}`,
    },
    {
      id: 'with-form',
      title: 'With Form',
      description: 'Sheet with form inputs.',
      example: (
        <Sheet>
          <SheetTrigger asChild>
            <Button>Edit Settings</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Settings</SheetTitle>
              <SheetDescription>
                Make changes to your settings here.
              </SheetDescription>
            </SheetHeader>
            <SheetBody className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Display Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
            </SheetBody>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ),
      code: `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetBody,
  Button,
  Input,
  Label,
} from '@e412/titanium';

export function SheetFormDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Edit Settings</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Settings</SheetTitle>
          <SheetDescription>
            Make changes to your settings here.
          </SheetDescription>
        </SheetHeader>
        <SheetBody className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Display Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
        </SheetBody>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`,
    },
    {
      id: 'no-overlay',
      title: 'Without Overlay',
      description: 'Sheet without the backdrop overlay.',
      example: (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">No Overlay</Button>
          </SheetTrigger>
          <SheetContent overlay={false}>
            <SheetHeader>
              <SheetTitle>No Overlay</SheetTitle>
              <SheetDescription>
                This sheet doesn't have a backdrop overlay.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ),
      code: `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from '@e412/titanium';

export function SheetNoOverlayDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">No Overlay</Button>
      </SheetTrigger>
      <SheetContent overlay={false}>
        <SheetHeader>
          <SheetTitle>No Overlay</SheetTitle>
          <SheetDescription>
            This sheet doesn't have a backdrop overlay.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Sheet',
      description: 'The root sheet component.',
      props: [
        {
          name: 'open',
          type: 'boolean',
          description: 'Controlled open state',
        },
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          description: 'Callback when open state changes',
        },
        {
          name: 'defaultOpen',
          type: 'boolean',
          description: 'Default open state for uncontrolled usage',
        },
      ],
    },
    {
      component: 'SheetTrigger',
      description: 'The button that opens the sheet.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Render as child element',
          defaultValue: 'false',
        },
      ],
    },
    {
      component: 'SheetContent',
      description: 'The sheet content container.',
      props: [
        {
          name: 'side',
          type: '"top" | "right" | "bottom" | "left"',
          description: 'Which side the sheet slides in from',
          defaultValue: '"right"',
        },
        {
          name: 'overlay',
          type: 'boolean',
          description: 'Whether to show the backdrop overlay',
          defaultValue: 'true',
        },
        {
          name: 'close',
          type: 'boolean',
          description: 'Whether to show the close button',
          defaultValue: 'true',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SheetHeader',
      description: 'Container for sheet title and description.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SheetTitle',
      description: 'The sheet title.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SheetDescription',
      description: 'The sheet description.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SheetBody',
      description: 'The main content area of the sheet.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SheetFooter',
      description: 'Container for sheet actions.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SheetClose',
      description: 'A button that closes the sheet.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Render as child element',
          defaultValue: 'false',
        },
      ],
    },
  ],
};
