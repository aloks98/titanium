import { Button } from '@e412/titanium';
import { toast } from 'sonner';
import type { ComponentDocumentation } from '../types';

export const sonnerDocumentation: ComponentDocumentation = {
  id: 'sonner',
  name: 'Sonner',
  description:
    'A toast notification component for displaying brief messages to users.',
  category: 'feedback',
  simpleExample: {
    example: (
      <div className="flex flex-col gap-4">
        <Button
          variant="outline"
          onClick={() => toast('Event has been created')}
        >
          Show Toast
        </Button>
        <p className="text-sm text-muted-foreground">
          Note: Add {'<Toaster />'} to your app root to see toasts.
        </p>
      </div>
    ),
    code: `import { Toaster, Button } from '@e412/titanium';
import { toast } from 'sonner';

export function SonnerDemo() {
  return (
    <>
      {/* Add Toaster to your app root */}
      <Toaster />

      <Button
        variant="outline"
        onClick={() => toast('Event has been created')}
      >
        Show Toast
      </Button>
    </>
  );
}`,
  },
  examples: [
    {
      id: 'types',
      title: 'Toast Types',
      description: 'Different types of toast notifications.',
      example: (
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => toast('Default toast message')}
          >
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.success('Success! Your changes have been saved.')
            }
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error('Error! Something went wrong.')}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.info('Info: New features are available.')}
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.warning('Warning: This action cannot be undone.')
            }
          >
            Warning
          </Button>
        </div>
      ),
      code: `import { Button } from '@e412/titanium';
import { toast } from 'sonner';

export function SonnerTypesDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast('Default toast message')}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success('Success! Your changes have been saved.')}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error('Error! Something went wrong.')}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info('Info: New features are available.')}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning('Warning: This action cannot be undone.')}
      >
        Warning
      </Button>
    </div>
  );
}`,
    },
    {
      id: 'with-description',
      title: 'With Description',
      description: 'Toast with title and description.',
      example: (
        <Button
          variant="outline"
          onClick={() =>
            toast('Event Created', {
              description: 'Monday, January 3rd at 6:00pm',
            })
          }
        >
          Show Toast with Description
        </Button>
      ),
      code: `import { Button } from '@e412/titanium';
import { toast } from 'sonner';

export function SonnerDescriptionDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event Created', {
          description: 'Monday, January 3rd at 6:00pm',
        })
      }
    >
      Show Toast with Description
    </Button>
  );
}`,
    },
    {
      id: 'with-action',
      title: 'With Action',
      description: 'Toast with action buttons.',
      example: (
        <Button
          variant="outline"
          onClick={() =>
            toast('Event Created', {
              description: 'Monday, January 3rd at 6:00pm',
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo clicked'),
              },
            })
          }
        >
          Show Toast with Action
        </Button>
      ),
      code: `import { Button } from '@e412/titanium';
import { toast } from 'sonner';

export function SonnerActionDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event Created', {
          description: 'Monday, January 3rd at 6:00pm',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo clicked'),
          },
        })
      }
    >
      Show Toast with Action
    </Button>
  );
}`,
    },
    {
      id: 'promise',
      title: 'Promise Toast',
      description: 'Toast that shows loading, success, and error states.',
      example: (
        <Button
          variant="outline"
          onClick={() => {
            const promise = () =>
              new Promise((resolve) => setTimeout(resolve, 2000));

            toast.promise(promise, {
              loading: 'Loading...',
              success: 'Data loaded successfully!',
              error: 'Error loading data',
            });
          }}
        >
          Show Promise Toast
        </Button>
      ),
      code: `import { Button } from '@e412/titanium';
import { toast } from 'sonner';

export function SonnerPromiseDemo() {
  const loadData = () => {
    const promise = fetch('/api/data').then((res) => res.json());

    toast.promise(promise, {
      loading: 'Loading...',
      success: 'Data loaded successfully!',
      error: 'Error loading data',
    });
  };

  return (
    <Button variant="outline" onClick={loadData}>
      Show Promise Toast
    </Button>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Toaster',
      description: 'The toast container that renders notifications.',
      props: [
        {
          name: 'position',
          type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"',
          description: 'The position of the toasts',
          defaultValue: '"bottom-right"',
        },
        {
          name: 'duration',
          type: 'number',
          description: 'Duration in milliseconds before auto-dismiss',
          defaultValue: '4000',
        },
        {
          name: 'richColors',
          type: 'boolean',
          description: 'Use rich colors for toast types',
          defaultValue: 'false',
        },
        {
          name: 'expand',
          type: 'boolean',
          description: 'Expand toasts by default',
          defaultValue: 'false',
        },
        {
          name: 'closeButton',
          type: 'boolean',
          description: 'Show close button on toasts',
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
      component: 'toast',
      description: 'Function to trigger toast notifications.',
      props: [
        {
          name: 'toast(message)',
          type: 'function',
          description: 'Show a default toast',
        },
        {
          name: 'toast.success(message)',
          type: 'function',
          description: 'Show a success toast',
        },
        {
          name: 'toast.error(message)',
          type: 'function',
          description: 'Show an error toast',
        },
        {
          name: 'toast.info(message)',
          type: 'function',
          description: 'Show an info toast',
        },
        {
          name: 'toast.warning(message)',
          type: 'function',
          description: 'Show a warning toast',
        },
        {
          name: 'toast.promise(promise, options)',
          type: 'function',
          description: 'Show loading/success/error states for a promise',
        },
        {
          name: 'toast.dismiss(id?)',
          type: 'function',
          description: 'Dismiss a specific toast or all toasts',
        },
      ],
    },
  ],
};
