import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  AlertContent,
  AlertToolbar,
} from '@e412/titanium';
import {
  CheckCircle,
  Info,
  AlertTriangle,
  XCircle,
  Bell,
  X,
} from 'lucide-react';
import type { ComponentDocumentation } from '../types';

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
    code: `import { Alert, AlertDescription, AlertTitle } from '@e412/titanium';

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
      id: 'all-variants-solid',
      title: 'All Variants - Solid',
      description: 'All alert variants with solid appearance.',
      example: (
        <div className="w-full max-w-lg space-y-4">
          <Alert variant="secondary" appearance="solid">
            <AlertTitle>Secondary</AlertTitle>
            <AlertDescription>
              This is a secondary alert message.
            </AlertDescription>
          </Alert>
          <Alert variant="primary" appearance="solid">
            <AlertTitle>Primary</AlertTitle>
            <AlertDescription>
              This is a primary alert message.
            </AlertDescription>
          </Alert>
          <Alert variant="success" appearance="solid">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
          <Alert variant="warning" appearance="solid">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Please review your input before proceeding.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive" appearance="solid">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>
          <Alert variant="info" appearance="solid">
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Here's some useful information for you.
            </AlertDescription>
          </Alert>
        </div>
      ),
      code: `import { Alert, AlertDescription, AlertTitle } from '@e412/titanium';

export function AlertAllVariantsSolidDemo() {
  return (
    <div className="w-full max-w-lg space-y-4">
      <Alert variant="secondary" appearance="solid">
        <AlertTitle>Secondary</AlertTitle>
        <AlertDescription>This is a secondary alert message.</AlertDescription>
      </Alert>
      <Alert variant="primary" appearance="solid">
        <AlertTitle>Primary</AlertTitle>
        <AlertDescription>This is a primary alert message.</AlertDescription>
      </Alert>
      <Alert variant="success" appearance="solid">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning" appearance="solid">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please review your input before proceeding.</AlertDescription>
      </Alert>
      <Alert variant="destructive" appearance="solid">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
      <Alert variant="info" appearance="solid">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Here's some useful information for you.</AlertDescription>
      </Alert>
    </div>
  );
}`,
    },
    {
      id: 'with-icons',
      title: 'With Icons',
      description: 'Alerts with custom icons.',
      example: (
        <div className="w-full max-w-lg space-y-4">
          <Alert variant="success" appearance="light">
            <AlertIcon icon="success">
              <CheckCircle className="size-5" />
            </AlertIcon>
            <AlertContent>
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your profile has been updated.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert variant="warning" appearance="light">
            <AlertIcon icon="warning">
              <AlertTriangle className="size-5" />
            </AlertIcon>
            <AlertContent>
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Please check your network connection.
              </AlertDescription>
            </AlertContent>
          </Alert>
        </div>
      ),
      code: `import { Alert, AlertDescription, AlertTitle } from '@e412/titanium';

export function AlertOutlineDemo() {
  return (
    <div className="w-full max-w-lg">
      <Alert variant="primary" appearance="outline">
        <AlertTitle>Primary Outline</AlertTitle>
        <AlertDescription>This is a primary outline alert.</AlertDescription>
      </Alert>
      <Alert variant="success" appearance="outline">
        <AlertTitle>Success Outline</AlertTitle>
        <AlertDescription>Operation completed successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning" appearance="outline">
        <AlertTitle>Warning Outline</AlertTitle>
        <AlertDescription>Please be careful with this action.</AlertDescription>
      </Alert>
    </div>
  );
}`,
    },
    {
      id: 'outline-variants',
      title: 'Outline Variants',
      description: 'Alert variants with outline appearance.',
      example: (
        <div className="w-full max-w-lg space-y-4">
          <Alert variant="primary" appearance="outline">
            <AlertTitle>Primary Outline</AlertTitle>
            <AlertDescription>
              This is a primary outline alert.
            </AlertDescription>
          </Alert>
          <Alert variant="success" appearance="outline">
            <AlertTitle>Success Outline</AlertTitle>
            <AlertDescription>
              Operation completed successfully.
            </AlertDescription>
          </Alert>
          <Alert variant="warning" appearance="outline">
            <AlertTitle>Warning Outline</AlertTitle>
            <AlertDescription>
              Please be careful with this action.
            </AlertDescription>
          </Alert>
        </div>
      ),
      code: `import { Alert, AlertDescription, AlertTitle } from '@e412/titanium';

export function AlertOutlineDemo() {
  return (
    <div className="w-full max-w-lg space-y-4">
      <Alert variant="primary" appearance="outline">
        <AlertTitle>Primary Outline</AlertTitle>
        <AlertDescription>This is a primary outline alert.</AlertDescription>
      </Alert>
      <Alert variant="success" appearance="outline">
        <AlertTitle>Success Outline</AlertTitle>
        <AlertDescription>Operation completed successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning" appearance="outline">
        <AlertTitle>Warning Outline</AlertTitle>
        <AlertDescription>Please be careful with this action.</AlertDescription>
      </Alert>
    </div>
  );
}`,
    },
    {
      id: 'sizes',
      title: 'Different Sizes',
      description: 'Alerts in different sizes.',
      example: (
        <div className="w-full max-w-lg space-y-4">
          <Alert variant="primary" size="sm" appearance="outline">
            <AlertTitle>Small Alert</AlertTitle>
            <AlertDescription>
              This is a small alert with compact spacing.
            </AlertDescription>
          </Alert>
          <Alert variant="primary" size="md" appearance="outline">
            <AlertTitle>Medium Alert</AlertTitle>
            <AlertDescription>
              This is a medium alert with default spacing.
            </AlertDescription>
          </Alert>
          <Alert variant="primary" size="lg" appearance="outline">
            <AlertTitle>Large Alert</AlertTitle>
            <AlertDescription>
              This is a large alert with more generous spacing and larger text.
            </AlertDescription>
          </Alert>
        </div>
      ),
      code: `import { Alert, AlertDescription, AlertTitle } from '@e412/titanium';

export function AlertSizesDemo() {
  return (
    <div className="w-full max-w-lg">
      <Alert variant="primary" size="sm" appearance="outline">
        <AlertTitle>Small Alert</AlertTitle>
        <AlertDescription>This is a small alert with compact spacing.</AlertDescription>
      </Alert>
      <Alert variant="primary" size="md" appearance="outline">
        <AlertTitle>Medium Alert</AlertTitle>
        <AlertDescription>This is a medium alert with default spacing.</AlertDescription>
      </Alert>
      <Alert variant="primary" size="lg" appearance="outline">
        <AlertTitle>Large Alert</AlertTitle>
        <AlertDescription>This is a large alert with more generous spacing and larger text.</AlertDescription>
      </Alert>
    </div>
  );
}`,
    },
    {
      id: 'dismissible',
      title: 'Dismissible Alerts',
      description: 'Alerts that can be closed by user.',
      example: (
        <div className="w-full max-w-lg space-y-4">
          <Alert variant="primary" appearance="light" close>
            <AlertIcon icon="info">
              <Bell className="size-5" />
            </AlertIcon>
            <AlertContent className="w-full">
              <AlertTitle>New Update Available</AlertTitle>
              <AlertDescription>
                A new version of application is ready to install.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert variant="success" appearance="light" close>
            <AlertIcon icon="success">
              <CheckCircle className="size-5" />
            </AlertIcon>
            <AlertContent className="w-full">
              <AlertTitle>Installation Complete</AlertTitle>
              <AlertDescription>
                Your application has been successfully updated.
              </AlertDescription>
            </AlertContent>
          </Alert>
        </div>
      ),
      code: `import { Alert, AlertDescription, AlertTitle, AlertIcon, AlertContent } from '@e412/titanium';
import { Bell, CheckCircle } from 'lucide-react';

export function AlertDismissibleDemo() {
  return (
    <div className="w-full max-w-lg space-y-4">
          <Alert variant="primary" appearance="light" close>
            <AlertIcon icon="info">
              <Bell className="size-5" />
            </AlertIcon>
            <AlertContent className="w-full">
              <AlertTitle>New Update Available</AlertTitle>
              <AlertDescription>
                A new version of application is ready to install.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert variant="success" appearance="light" close>
            <AlertIcon icon="success">
              <CheckCircle className="size-5" />
            </AlertIcon>
            <AlertContent className="w-full">
              <AlertTitle>Installation Complete</AlertTitle>
              <AlertDescription>
                Your application has been successfully updated.
              </AlertDescription>
            </AlertContent>
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
        <div className="w-full max-w-lg space-y-4">
          <Alert variant="success" appearance="light">
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
          <Alert variant="warning" appearance="light">
            <AlertDescription>
              This action cannot be undone. Please proceed with caution.
            </AlertDescription>
          </Alert>
        </div>
      ),
      code: `import { Alert, AlertDescription } from '@e412/titanium';

export function AlertSimpleDemo() {
  return (
    <div className="w-full max-w-lg">
      <Alert variant="success" appearance="light">
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
      <Alert variant="warning" appearance="light">
        <AlertDescription>
          This action cannot be undone. Please proceed with caution.
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
          type: '"secondary" | "primary" | "destructive" | "success" | "info" | "mono" | "warning"',
          description: 'The visual style variant',
          defaultValue: '"secondary"',
        },
        {
          name: 'appearance',
          type: '"solid" | "outline" | "light" | "stroke"',
          description: 'The visual appearance style',
          defaultValue: '"solid"',
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          description: 'The size of the alert',
          defaultValue: '"md"',
        },
        {
          name: 'icon',
          type: '"primary" | "destructive" | "success" | "info" | "warning"',
          description: 'The icon variant for styling',
        },
        {
          name: 'close',
          type: 'boolean',
          description: 'Whether to show a close button',
          defaultValue: 'false',
        },
        {
          name: 'onClose',
          type: '() => void',
          description: 'Callback when close button is clicked',
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
    {
      component: 'AlertIcon',
      description: 'The icon container component for alert.',
      props: [
        {
          name: 'icon',
          type: '"primary" | "destructive" | "success" | "info" | "warning"',
          description: 'The icon variant for styling',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AlertContent',
      description: 'The content container component for alert.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AlertToolbar',
      description: 'The toolbar component for alert actions.',
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
