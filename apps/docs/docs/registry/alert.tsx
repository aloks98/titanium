import { Alert, AlertDescription, AlertTitle } from '@e412/titanium';
import { type ComponentDocumentation } from '../types';

export const alertDocumentation: ComponentDocumentation = {
  id: 'alert',
  name: 'Alert',
  description:
    'Displays a callout for user attention, such as a success message, warning, or error.',
  category: 'feedback',
  simpleExample: {
    example: (
      <div className="w-full max-w-md">
        <Alert>
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is an informational alert message.
          </AlertDescription>
        </Alert>
      </div>
    ),
    code: `import { Alert, AlertDescription, AlertTitle } from '@/base/alert';

export function AlertDemo() {
  return (
    <div className="w-full max-w-md">
      <Alert>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is an informational alert message.
        </AlertDescription>
      </Alert>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'destructive',
      title: 'Destructive',
      description: 'Alert with destructive styling for error messages.',
      example: (
        <div className="w-full max-w-md">
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>This is an error alert message.</AlertDescription>
          </Alert>
        </div>
      ),
      code: `import { Alert, AlertDescription, AlertTitle } from '@/base/alert';

export function AlertDestructiveDemo() {
  return (
    <div className="w-full max-w-md">
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          This is an error alert message.
        </AlertDescription>
      </Alert>
    </div>
  );
}`,
    },
    {
      id: 'without-title',
      title: 'Without Title',
      description: 'Alert with only description content.',
      example: (
        <div className="w-full max-w-md">
          <Alert>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      ),
      code: `import { Alert, AlertDescription } from '@/base/alert';

export function AlertSimpleDemo() {
  return (
    <div className="w-full max-w-md">
      <Alert>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Alert',
      description: 'The alert container component.',
      props: [
        {
          name: 'variant',
          type: '"default" | "destructive"',
          description: 'The visual style variant',
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
      component: 'AlertTitle',
      description: 'The title component for alert.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AlertDescription',
      description: 'The description component for alert.',
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
