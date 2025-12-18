import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
  StepperNav,
  StepperContent,
  Button,
} from '@e412/titanium';
import { Check, Loader2 } from 'lucide-react';
import type { ComponentDocumentation } from '../types';

export const stepperDocumentation: ComponentDocumentation = {
  id: 'stepper',
  name: 'Stepper',
  description:
    'A multi-step wizard component for guiding users through a process.',
  category: 'navigation',
  simpleExample: {
    example: (
      <Stepper defaultValue={2}>
        <StepperNav>
          <StepperItem step={1}>
            <StepperTrigger>
              <StepperIndicator>1</StepperIndicator>
              <div className="text-left">
                <StepperTitle>Account</StepperTitle>
                <StepperDescription>Create your account</StepperDescription>
              </div>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>
          <StepperItem step={2}>
            <StepperTrigger>
              <StepperIndicator>2</StepperIndicator>
              <div className="text-left">
                <StepperTitle>Profile</StepperTitle>
                <StepperDescription>Set up your profile</StepperDescription>
              </div>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>
          <StepperItem step={3}>
            <StepperTrigger>
              <StepperIndicator>3</StepperIndicator>
              <div className="text-left">
                <StepperTitle>Complete</StepperTitle>
                <StepperDescription>Finish setup</StepperDescription>
              </div>
            </StepperTrigger>
          </StepperItem>
        </StepperNav>
      </Stepper>
    ),
    code: `import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
  StepperNav,
} from '@e412/titanium';

export function StepperDemo() {
  return (
    <Stepper defaultValue={2}>
      <StepperNav>
        <StepperItem step={1}>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <div className="text-left">
              <StepperTitle>Account</StepperTitle>
              <StepperDescription>Create your account</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <div className="text-left">
              <StepperTitle>Profile</StepperTitle>
              <StepperDescription>Set up your profile</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <div className="text-left">
              <StepperTitle>Complete</StepperTitle>
              <StepperDescription>Finish setup</StepperDescription>
            </div>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>
    </Stepper>
  );
}`,
  },
  examples: [
    {
      id: 'with-content',
      title: 'With Content',
      description: 'Stepper with content panels for each step.',
      example: (
        <Stepper defaultValue={1}>
          <StepperNav>
            <StepperItem step={1}>
              <StepperTrigger>
                <StepperIndicator>1</StepperIndicator>
                <StepperTitle>Step 1</StepperTitle>
              </StepperTrigger>
              <StepperSeparator />
            </StepperItem>
            <StepperItem step={2}>
              <StepperTrigger>
                <StepperIndicator>2</StepperIndicator>
                <StepperTitle>Step 2</StepperTitle>
              </StepperTrigger>
              <StepperSeparator />
            </StepperItem>
            <StepperItem step={3}>
              <StepperTrigger>
                <StepperIndicator>3</StepperIndicator>
                <StepperTitle>Step 3</StepperTitle>
              </StepperTrigger>
            </StepperItem>
          </StepperNav>
          <div className="mt-4">
            <StepperContent value={1}>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Step 1 Content</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  This is the content for step 1.
                </p>
              </div>
            </StepperContent>
            <StepperContent value={2}>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Step 2 Content</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  This is the content for step 2.
                </p>
              </div>
            </StepperContent>
            <StepperContent value={3}>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Step 3 Content</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  This is the content for step 3.
                </p>
              </div>
            </StepperContent>
          </div>
        </Stepper>
      ),
      code: `import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperNav,
  StepperContent,
} from '@e412/titanium';

export function StepperWithContentDemo() {
  return (
    <Stepper defaultValue={1}>
      <StepperNav>
        <StepperItem step={1}>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <StepperTitle>Step 1</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <StepperTitle>Step 2</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <StepperTitle>Step 3</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>
      <div className="mt-4">
        <StepperContent value={1}>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Step 1 Content</h3>
            <p className="text-sm text-muted-foreground mt-2">
              This is the content for step 1.
            </p>
          </div>
        </StepperContent>
        <StepperContent value={2}>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Step 2 Content</h3>
            <p className="text-sm text-muted-foreground mt-2">
              This is the content for step 2.
            </p>
          </div>
        </StepperContent>
        <StepperContent value={3}>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Step 3 Content</h3>
            <p className="text-sm text-muted-foreground mt-2">
              This is the content for step 3.
            </p>
          </div>
        </StepperContent>
      </div>
    </Stepper>
  );
}`,
    },
    {
      id: 'with-indicators',
      title: 'Custom Indicators',
      description: 'Stepper with custom indicators for completed and active states.',
      example: (
        <Stepper
          defaultValue={2}
          indicators={{
            completed: <Check className="size-3" />,
            loading: <Loader2 className="size-3 animate-spin" />,
          }}
        >
          <StepperNav>
            <StepperItem step={1}>
              <StepperTrigger>
                <StepperIndicator>1</StepperIndicator>
                <StepperTitle>Complete</StepperTitle>
              </StepperTrigger>
              <StepperSeparator />
            </StepperItem>
            <StepperItem step={2}>
              <StepperTrigger>
                <StepperIndicator>2</StepperIndicator>
                <StepperTitle>In Progress</StepperTitle>
              </StepperTrigger>
              <StepperSeparator />
            </StepperItem>
            <StepperItem step={3}>
              <StepperTrigger>
                <StepperIndicator>3</StepperIndicator>
                <StepperTitle>Pending</StepperTitle>
              </StepperTrigger>
            </StepperItem>
          </StepperNav>
        </Stepper>
      ),
      code: `import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperNav,
} from '@e412/titanium';
import { Check, Loader2 } from 'lucide-react';

export function StepperIndicatorsDemo() {
  return (
    <Stepper
      defaultValue={2}
      indicators={{
        completed: <Check className="size-3" />,
        loading: <Loader2 className="size-3 animate-spin" />,
      }}
    >
      <StepperNav>
        <StepperItem step={1}>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <StepperTitle>Complete</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <StepperTitle>In Progress</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <StepperTitle>Pending</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>
    </Stepper>
  );
}`,
    },
    {
      id: 'vertical',
      title: 'Vertical Orientation',
      description: 'Stepper in vertical orientation.',
      example: (
        <Stepper defaultValue={2} orientation="vertical">
          <StepperNav>
            <StepperItem step={1}>
              <StepperTrigger>
                <StepperIndicator>1</StepperIndicator>
                <div className="text-left">
                  <StepperTitle>Account Setup</StepperTitle>
                  <StepperDescription>Create your account</StepperDescription>
                </div>
              </StepperTrigger>
              <StepperSeparator />
            </StepperItem>
            <StepperItem step={2}>
              <StepperTrigger>
                <StepperIndicator>2</StepperIndicator>
                <div className="text-left">
                  <StepperTitle>Verification</StepperTitle>
                  <StepperDescription>Verify your email</StepperDescription>
                </div>
              </StepperTrigger>
              <StepperSeparator />
            </StepperItem>
            <StepperItem step={3}>
              <StepperTrigger>
                <StepperIndicator>3</StepperIndicator>
                <div className="text-left">
                  <StepperTitle>Complete</StepperTitle>
                  <StepperDescription>Start using the app</StepperDescription>
                </div>
              </StepperTrigger>
            </StepperItem>
          </StepperNav>
        </Stepper>
      ),
      code: `import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
  StepperNav,
} from '@e412/titanium';

export function StepperVerticalDemo() {
  return (
    <Stepper defaultValue={2} orientation="vertical">
      <StepperNav>
        <StepperItem step={1}>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <div className="text-left">
              <StepperTitle>Account Setup</StepperTitle>
              <StepperDescription>Create your account</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <div className="text-left">
              <StepperTitle>Verification</StepperTitle>
              <StepperDescription>Verify your email</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <div className="text-left">
              <StepperTitle>Complete</StepperTitle>
              <StepperDescription>Start using the app</StepperDescription>
            </div>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>
    </Stepper>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Stepper',
      description: 'The root stepper component.',
      props: [
        {
          name: 'defaultValue',
          type: 'number',
          description: 'The default active step',
          defaultValue: '1',
        },
        {
          name: 'value',
          type: 'number',
          description: 'The controlled active step',
        },
        {
          name: 'onValueChange',
          type: '(value: number) => void',
          description: 'Callback when active step changes',
        },
        {
          name: 'orientation',
          type: '"horizontal" | "vertical"',
          description: 'The stepper orientation',
          defaultValue: '"horizontal"',
        },
        {
          name: 'indicators',
          type: 'StepIndicators',
          description: 'Custom indicators for step states',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'StepperItem',
      description: 'Container for a single step.',
      props: [
        {
          name: 'step',
          type: 'number',
          description: 'The step number',
          required: true,
        },
        {
          name: 'completed',
          type: 'boolean',
          description: 'Force completed state',
          defaultValue: 'false',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disable the step',
          defaultValue: 'false',
        },
        {
          name: 'loading',
          type: 'boolean',
          description: 'Show loading state',
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
      component: 'StepperTrigger',
      description: 'Interactive button to select a step.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Render as child element',
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
      component: 'StepperIndicator',
      description: 'Visual indicator for the step number or icon.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The indicator content (usually step number)',
        },
      ],
    },
    {
      component: 'StepperSeparator',
      description: 'Visual separator between steps.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'StepperTitle',
      description: 'Title text for a step.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'StepperDescription',
      description: 'Description text for a step.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'StepperNav',
      description: 'Container for step navigation items.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'StepperContent',
      description: 'Content panel for a specific step.',
      props: [
        {
          name: 'value',
          type: 'number',
          description: 'The step number this content belongs to',
          required: true,
        },
        {
          name: 'forceMount',
          type: 'boolean',
          description: 'Keep content mounted when not active',
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
      component: 'useStepper',
      description: 'Hook to access stepper state and controls.',
      props: [
        {
          name: 'Returns',
          type: 'StepperContextValue',
          description:
            '{ activeStep, setActiveStep, stepsCount, orientation, ... }',
        },
      ],
    },
  ],
};
