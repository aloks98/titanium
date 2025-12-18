import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogBody,
  Button,
  Input,
  Label,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const dialogDocumentation: ComponentDocumentation = {
  id: 'dialog',
  name: 'Dialog',
  description:
    'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
  category: 'overlay',
  simpleExample: {
    example: (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a dialog description that explains what this dialog is for.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p className="text-sm text-muted-foreground">
              Dialog content goes here.
            </p>
          </DialogBody>
        </DialogContent>
      </Dialog>
    ),
    code: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from '@e412/titanium';

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}`,
  },
  examples: [
    {
      id: 'with-form',
      title: 'With Form',
      description: 'Dialog with form inputs.',
      example: (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Edit Profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <DialogBody className="space-y-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@johndoe" />
              </div>
            </DialogBody>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogBody,
  Button,
  Input,
  Label,
} from '@e412/titanium';

export function DialogFormDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <DialogBody className="space-y-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    },
    {
      id: 'fullscreen',
      title: 'Fullscreen',
      description: 'Dialog that takes up the full screen.',
      example: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Fullscreen</Button>
          </DialogTrigger>
          <DialogContent variant="fullscreen">
            <DialogHeader>
              <DialogTitle>Fullscreen Dialog</DialogTitle>
              <DialogDescription>
                This dialog takes up most of the screen.
              </DialogDescription>
            </DialogHeader>
            <DialogBody className="flex-1 overflow-auto">
              <p className="text-sm text-muted-foreground">
                Content can be scrollable in fullscreen dialogs.
              </p>
            </DialogBody>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogBody,
  Button,
} from '@e412/titanium';

export function DialogFullscreenDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Fullscreen</Button>
      </DialogTrigger>
      <DialogContent variant="fullscreen">
        <DialogHeader>
          <DialogTitle>Fullscreen Dialog</DialogTitle>
          <DialogDescription>
            This dialog takes up most of the screen.
          </DialogDescription>
        </DialogHeader>
        <DialogBody className="flex-1 overflow-auto">
          <p>Content here...</p>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    },
    {
      id: 'no-close-button',
      title: 'Without Close Button',
      description: 'Dialog without the close button.',
      example: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">No Close Button</Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Confirmation Required</DialogTitle>
              <DialogDescription>
                You must make a choice to continue.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from '@e412/titanium';

export function DialogNoCloseDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">No Close Button</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Confirmation Required</DialogTitle>
          <DialogDescription>
            You must make a choice to continue.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Dialog',
      description: 'The root dialog component.',
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
        {
          name: 'modal',
          type: 'boolean',
          description: 'Whether the dialog is modal',
          defaultValue: 'true',
        },
      ],
    },
    {
      component: 'DialogTrigger',
      description: 'The button that opens the dialog.',
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
      component: 'DialogContent',
      description: 'The dialog content container.',
      props: [
        {
          name: 'variant',
          type: '"default" | "fullscreen"',
          description: 'The dialog size variant',
          defaultValue: '"default"',
        },
        {
          name: 'showCloseButton',
          type: 'boolean',
          description: 'Whether to show the close button',
          defaultValue: 'true',
        },
        {
          name: 'overlay',
          type: 'boolean',
          description: 'Whether to show the overlay',
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
      component: 'DialogHeader',
      description: 'Container for dialog title and description.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DialogTitle',
      description: 'The dialog title.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DialogDescription',
      description: 'The dialog description.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DialogBody',
      description: 'The main content area of the dialog.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DialogFooter',
      description: 'Container for dialog actions.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DialogClose',
      description: 'A button that closes the dialog.',
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
