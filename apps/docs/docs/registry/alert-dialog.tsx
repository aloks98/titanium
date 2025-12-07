import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@e412/titanium';
import { Button } from '@e412/titanium';

import type { ComponentDocumentation } from '../types';

export const alertDialogDocumentation: ComponentDocumentation = {
  id: 'alert-dialog',
  name: 'Alert Dialog',
  description:
    'A modal dialog that interrupts the user with important content and expects a response.',
  category: 'overlay',
  simpleExample: {
    example: (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
    code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@e412/titanium';
import { Button } from '@e412/titanium';

export function AlertDialogDemo() {
  return (
    
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    
  );
}`,
  },
  examples: [],
  api: [
    {
      component: 'AlertDialog',
      description: 'The root container for the alert dialog.',
      props: [
        {
          name: 'defaultOpen',
          type: 'boolean',
          description: 'Whether the dialog is open by default',
        },
        {
          name: 'open',
          type: 'boolean',
          description: 'Controlled open state of the dialog',
        },
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          description: 'Callback when the open state changes',
        },
      ],
    },
    {
      component: 'AlertDialogTrigger',
      description: 'The button that triggers the dialog.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Whether to render as child element',
          defaultValue: 'false',
        },
      ],
    },
    {
      component: 'AlertDialogContent',
      description: 'The content container for the dialog.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
        {
          name: 'onOpenAutoFocus',
          type: '(event: Event) => void',
          description: 'Event handler called when auto-focusing',
        },
        {
          name: 'onCloseAutoFocus',
          type: '(event: Event) => void',
          description: 'Event handler called when auto-focusing on close',
        },
        {
          name: 'onEscapeKeyDown',
          type: '(event: KeyboardEvent) => void',
          description: 'Event handler called when escape key is pressed',
        },
      ],
    },
    {
      component: 'AlertDialogHeader',
      description: 'The header section containing title and description.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AlertDialogFooter',
      description: 'The footer section containing action buttons.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AlertDialogTitle',
      description: 'The title of the dialog.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AlertDialogDescription',
      description: 'The description text of the dialog.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AlertDialogAction',
      description: 'The primary action button.',
      props: [
        {
          name: 'variant',
          type: 'ButtonVariant',
          description: 'Button variant style',
          defaultValue: '"default"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AlertDialogCancel',
      description: 'The cancel button.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AlertDialogPortal',
      description: 'The portal container for the dialog.',
      props: [
        {
          name: 'container',
          type: 'HTMLElement | null',
          description: 'Container element to portal into',
        },
        {
          name: 'forceMount',
          type: 'boolean',
          description: 'Whether to force mount the portal',
        },
      ],
    },
    {
      component: 'AlertDialogOverlay',
      description: 'The overlay behind the dialog.',
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
