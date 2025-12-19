import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const drawerDocumentation: ComponentDocumentation = {
  id: 'drawer',
  name: 'Drawer',
  description:
    'A mobile-friendly drawer component that slides in from the bottom.',
  category: 'overlay',
  simpleExample: {
    example: (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit Profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Drawer content goes here...
            </p>
          </div>
          <DrawerFooter>
            <Button>Save changes</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    ),
    code: `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from '@e412/titanium';

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Drawer content goes here...
          </p>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
  },
  examples: [
    {
      id: 'with-form',
      title: 'With Form',
      description: 'Drawer containing a simple form.',
      example: (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Contact Us</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Contact Us</DrawerTitle>
              <DrawerDescription>
                Send us a message and we'll get back to you.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border px-3 py-2 text-sm mt-1"
                  />
                </label>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Message
                  <textarea
                    placeholder="Your message..."
                    className="w-full rounded-md border px-3 py-2 text-sm min-h-[100px] mt-1"
                  />
                </label>
              </div>
            </div>
            <DrawerFooter>
              <Button>Send Message</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from '@e412/titanium';

export function DrawerFormDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Contact Us</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Contact Us</DrawerTitle>
          <DrawerDescription>
            Send us a message and we'll get back to you.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              placeholder="Your message..."
              className="w-full rounded-md border px-3 py-2 text-sm min-h-[100px]"
            />
          </div>
        </div>
        <DrawerFooter>
          <Button>Send Message</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
    },
    {
      id: 'without-scale',
      title: 'Without Scale Effect',
      description: 'Drawer without the background scale animation.',
      example: (
        <Drawer shouldScaleBackground={false}>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>No Scale Effect</DrawerTitle>
              <DrawerDescription>
                This drawer doesn't scale the background.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                The background remains static when this drawer opens.
              </p>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from '@e412/titanium';

export function DrawerNoScaleDemo() {
  return (
    <Drawer shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>No Scale Effect</DrawerTitle>
          <DrawerDescription>
            This drawer doesn't scale the background.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            The background remains static when this drawer opens.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Drawer',
      description: 'The root drawer component.',
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
        {
          name: 'shouldScaleBackground',
          type: 'boolean',
          description: 'Scale the background when open',
          defaultValue: 'true',
        },
        {
          name: 'dismissible',
          type: 'boolean',
          description: 'Allow dismissing by clicking outside',
          defaultValue: 'true',
        },
        {
          name: 'modal',
          type: 'boolean',
          description: 'Whether the drawer is modal',
          defaultValue: 'true',
        },
      ],
    },
    {
      component: 'DrawerTrigger',
      description: 'The button that opens the drawer.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Merge props onto child element',
          defaultValue: 'false',
        },
      ],
    },
    {
      component: 'DrawerContent',
      description: 'The drawer content container.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DrawerHeader',
      description: 'Container for the drawer title and description.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DrawerTitle',
      description: 'The drawer title.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DrawerDescription',
      description: 'The drawer description.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DrawerFooter',
      description: 'Container for drawer actions.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DrawerClose',
      description: 'Button to close the drawer.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Merge props onto child element',
          defaultValue: 'false',
        },
      ],
    },
    {
      component: 'DrawerOverlay',
      description: 'The overlay behind the drawer.',
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
