import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Textarea,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const fieldDocumentation: ComponentDocumentation = {
  id: 'field',
  name: 'Field',
  description:
    'Composable, accessible form field components. Combine labels, controls, and help text to build form fields with proper accessibility.',
  category: 'form',
  simpleExample: {
    example: (
      <div className="w-full max-w-sm">
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="Enter your email" />
          <FieldDescription>We'll never share your email.</FieldDescription>
        </Field>
      </div>
    ),
    code: `import { Field, FieldLabel, FieldDescription, Input } from '@e412/titanium';

export function FieldDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" placeholder="Enter your email" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  );
}`,
  },
  examples: [
    {
      id: 'with-error',
      title: 'With Error',
      description: 'Field with validation error message.',
      example: (
        <div className="w-full max-w-sm">
          <Field data-invalid="true">
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              id="username"
              placeholder="Enter username"
              aria-invalid="true"
            />
            <FieldError>Username is already taken.</FieldError>
          </Field>
        </div>
      ),
      code: `import { Field, FieldLabel, FieldError, Input } from '@e412/titanium';

export function FieldWithErrorDemo() {
  return (
    <Field data-invalid="true">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" placeholder="Enter username" aria-invalid="true" />
      <FieldError>Username is already taken.</FieldError>
    </Field>
  );
}`,
    },
    {
      id: 'horizontal',
      title: 'Horizontal Layout',
      description: 'Field with horizontal orientation.',
      example: (
        <div className="w-full max-w-md">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="name" className="w-24">
              Name
            </FieldLabel>
            <Input id="name" placeholder="Enter your name" />
          </Field>
        </div>
      ),
      code: `import { Field, FieldLabel, Input } from '@e412/titanium';

export function FieldHorizontalDemo() {
  return (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="name" className="w-24">Name</FieldLabel>
      <Input id="name" placeholder="Enter your name" />
    </Field>
  );
}`,
    },
    {
      id: 'with-content',
      title: 'With Field Content',
      description:
        'Use FieldContent to group control and descriptions together.',
      example: (
        <div className="w-full max-w-md">
          <Field orientation="horizontal">
            <FieldLabel className="w-32">Notifications</FieldLabel>
            <FieldContent>
              <Switch id="notifications" />
              <FieldDescription>
                Receive email notifications about updates.
              </FieldDescription>
            </FieldContent>
          </Field>
        </div>
      ),
      code: `import { Field, FieldLabel, FieldContent, FieldDescription, Switch } from '@e412/titanium';

export function FieldWithContentDemo() {
  return (
    <Field orientation="horizontal">
      <FieldLabel className="w-32">Notifications</FieldLabel>
      <FieldContent>
        <Switch id="notifications" />
        <FieldDescription>
          Receive email notifications about updates.
        </FieldDescription>
      </FieldContent>
    </Field>
  );
}`,
    },
    {
      id: 'fieldset',
      title: 'FieldSet with Legend',
      description: 'Group related fields using FieldSet and FieldLegend.',
      example: (
        <div className="w-full max-w-sm">
          <FieldSet>
            <FieldLegend>Contact Information</FieldLegend>
            <FieldDescription>
              Please provide your contact details.
            </FieldDescription>
            <Field>
              <FieldLabel htmlFor="fullname">Full Name</FieldLabel>
              <Input id="fullname" placeholder="John Doe" />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </Field>
          </FieldSet>
        </div>
      ),
      code: `import { Field, FieldLabel, FieldSet, FieldLegend, FieldDescription, Input } from '@e412/titanium';

export function FieldSetDemo() {
  return (
    <FieldSet>
      <FieldLegend>Contact Information</FieldLegend>
      <FieldDescription>Please provide your contact details.</FieldDescription>
      <Field>
        <FieldLabel htmlFor="fullname">Full Name</FieldLabel>
        <Input id="fullname" placeholder="John Doe" />
      </Field>
      <Field>
        <FieldLabel htmlFor="phone">Phone</FieldLabel>
        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </Field>
    </FieldSet>
  );
}`,
    },
    {
      id: 'field-group',
      title: 'Field Group',
      description: 'Use FieldGroup to enable responsive container queries.',
      example: (
        <div className="w-full max-w-md">
          <FieldGroup>
            <Field orientation="responsive">
              <FieldLabel className="min-w-32">First Name</FieldLabel>
              <Input placeholder="John" />
            </Field>
            <Field orientation="responsive">
              <FieldLabel className="min-w-32">Last Name</FieldLabel>
              <Input placeholder="Doe" />
            </Field>
            <Field orientation="responsive">
              <FieldLabel className="min-w-32">Email</FieldLabel>
              <Input type="email" placeholder="john@example.com" />
            </Field>
          </FieldGroup>
        </div>
      ),
      code: `import { Field, FieldLabel, FieldGroup, Input } from '@e412/titanium';

export function FieldGroupDemo() {
  return (
    <FieldGroup>
      <Field orientation="responsive">
        <FieldLabel className="min-w-32">First Name</FieldLabel>
        <Input placeholder="John" />
      </Field>
      <Field orientation="responsive">
        <FieldLabel className="min-w-32">Last Name</FieldLabel>
        <Input placeholder="Doe" />
      </Field>
      <Field orientation="responsive">
        <FieldLabel className="min-w-32">Email</FieldLabel>
        <Input type="email" placeholder="john@example.com" />
      </Field>
    </FieldGroup>
  );
}`,
    },
    {
      id: 'with-separator',
      title: 'With Separator',
      description: 'Divide field groups with FieldSeparator.',
      example: (
        <div className="w-full max-w-sm">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="personal-email">Email</FieldLabel>
              <Input
                id="personal-email"
                type="email"
                placeholder="you@example.com"
              />
            </Field>
            <FieldSeparator>Optional</FieldSeparator>
            <Field>
              <FieldLabel htmlFor="company">Company</FieldLabel>
              <Input id="company" placeholder="Acme Inc." />
            </Field>
          </FieldGroup>
        </div>
      ),
      code: `import { Field, FieldLabel, FieldGroup, FieldSeparator, Input } from '@e412/titanium';

export function FieldSeparatorDemo() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="you@example.com" />
      </Field>
      <FieldSeparator>Optional</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="company">Company</FieldLabel>
        <Input id="company" placeholder="Acme Inc." />
      </Field>
    </FieldGroup>
  );
}`,
    },
    {
      id: 'multiple-errors',
      title: 'Multiple Errors',
      description: 'FieldError can display multiple validation errors.',
      example: (
        <div className="w-full max-w-sm">
          <Field data-invalid="true">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" type="password" aria-invalid="true" />
            <FieldError
              errors={[
                { message: 'Must be at least 8 characters' },
                { message: 'Must contain a number' },
                { message: 'Must contain a special character' },
              ]}
            />
          </Field>
        </div>
      ),
      code: `import { Field, FieldLabel, FieldError, Input } from '@e412/titanium';

export function FieldMultipleErrorsDemo() {
  return (
    <Field data-invalid="true">
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <Input id="password" type="password" aria-invalid="true" />
      <FieldError
        errors={[
          { message: 'Must be at least 8 characters' },
          { message: 'Must contain a number' },
          { message: 'Must contain a special character' },
        ]}
      />
    </Field>
  );
}`,
    },
    {
      id: 'with-checkbox',
      title: 'With Checkbox',
      description: 'Field with checkbox control.',
      example: (
        <div className="w-full max-w-sm">
          <Field orientation="horizontal">
            <Checkbox id="terms" />
            <FieldContent>
              <FieldLabel htmlFor="terms">
                Accept terms and conditions
              </FieldLabel>
              <FieldDescription>
                You agree to our Terms of Service and Privacy Policy.
              </FieldDescription>
            </FieldContent>
          </Field>
        </div>
      ),
      code: `import { Field, FieldLabel, FieldContent, FieldDescription, Checkbox } from '@e412/titanium';

export function FieldCheckboxDemo() {
  return (
    <Field orientation="horizontal">
      <Checkbox id="terms" />
      <FieldContent>
        <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
        <FieldDescription>
          You agree to our Terms of Service and Privacy Policy.
        </FieldDescription>
      </FieldContent>
    </Field>
  );
}`,
    },
    {
      id: 'with-select',
      title: 'With Select',
      description: 'Field with select dropdown.',
      example: (
        <div className="w-full max-w-sm">
          <Field>
            <FieldLabel>Country</FieldLabel>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
              </SelectContent>
            </Select>
            <FieldDescription>
              Select your country of residence.
            </FieldDescription>
          </Field>
        </div>
      ),
      code: `import {
  Field,
  FieldLabel,
  FieldDescription,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@e412/titanium';

export function FieldSelectDemo() {
  return (
    <Field>
      <FieldLabel>Country</FieldLabel>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>Select your country of residence.</FieldDescription>
    </Field>
  );
}`,
    },
    {
      id: 'with-textarea',
      title: 'With Textarea',
      description: 'Field with textarea control.',
      example: (
        <div className="w-full max-w-sm">
          <Field>
            <FieldLabel htmlFor="bio">Bio</FieldLabel>
            <Textarea id="bio" placeholder="Tell us about yourself..." />
            <FieldDescription>Max 280 characters.</FieldDescription>
          </Field>
        </div>
      ),
      code: `import { Field, FieldLabel, FieldDescription, Textarea } from '@e412/titanium';

export function FieldTextareaDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="bio">Bio</FieldLabel>
      <Textarea id="bio" placeholder="Tell us about yourself..." />
      <FieldDescription>Max 280 characters.</FieldDescription>
    </Field>
  );
}`,
    },
    {
      id: 'radio-group',
      title: 'Radio Group',
      description: 'FieldSet with radio group.',
      example: (
        <div className="w-full max-w-sm">
          <FieldSet>
            <FieldLegend variant="label">Notification Preference</FieldLegend>
            <RadioGroup defaultValue="email">
              <Field orientation="horizontal">
                <RadioGroupItem value="email" id="notify-email" />
                <FieldLabel htmlFor="notify-email">Email</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem value="sms" id="notify-sms" />
                <FieldLabel htmlFor="notify-sms">SMS</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem value="push" id="notify-push" />
                <FieldLabel htmlFor="notify-push">Push notification</FieldLabel>
              </Field>
            </RadioGroup>
          </FieldSet>
        </div>
      ),
      code: `import {
  Field,
  FieldLabel,
  FieldSet,
  FieldLegend,
  RadioGroup,
  RadioGroupItem,
} from '@e412/titanium';

export function FieldRadioGroupDemo() {
  return (
    <FieldSet>
      <FieldLegend variant="label">Notification Preference</FieldLegend>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal">
          <RadioGroupItem value="email" id="notify-email" />
          <FieldLabel htmlFor="notify-email">Email</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="sms" id="notify-sms" />
          <FieldLabel htmlFor="notify-sms">SMS</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="push" id="notify-push" />
          <FieldLabel htmlFor="notify-push">Push notification</FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  );
}`,
    },
    {
      id: 'complete-form',
      title: 'Complete Form Example',
      description: 'A complete form using Field components.',
      example: (
        <div className="w-full max-w-md">
          <form className="space-y-6">
            <FieldSet>
              <FieldLegend>Account Details</FieldLegend>
              <FieldDescription>
                Enter your account information below.
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="form-email">Email</FieldLabel>
                  <Input
                    id="form-email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-password">Password</FieldLabel>
                  <Input id="form-password" type="password" />
                  <FieldDescription>
                    Must be at least 8 characters.
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <Field orientation="horizontal">
              <Checkbox id="form-terms" />
              <FieldContent>
                <FieldLabel htmlFor="form-terms">
                  I agree to the terms of service
                </FieldLabel>
              </FieldContent>
            </Field>
          </form>
        </div>
      ),
      code: `import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Input,
} from '@e412/titanium';

export function CompleteFormDemo() {
  return (
    <form className="space-y-6">
      <FieldSet>
        <FieldLegend>Account Details</FieldLegend>
        <FieldDescription>Enter your account information below.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="you@example.com" />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" type="password" />
            <FieldDescription>Must be at least 8 characters.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <Field orientation="horizontal">
        <Checkbox id="terms" />
        <FieldContent>
          <FieldLabel htmlFor="terms">I agree to the terms of service</FieldLabel>
        </FieldContent>
      </Field>
    </form>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Field',
      description:
        'Core wrapper component that provides orientation control and invalid state styling.',
      props: [
        {
          name: 'orientation',
          type: '"vertical" | "horizontal" | "responsive"',
          description: 'Layout direction for the field',
          defaultValue: '"vertical"',
        },
        {
          name: 'data-invalid',
          type: 'boolean',
          description: 'Marks the field as invalid for error styling',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'FieldSet',
      description:
        'Semantic container rendering a fieldset element with proper spacing.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'FieldLegend',
      description: 'Legend element with "legend" and "label" variants.',
      props: [
        {
          name: 'variant',
          type: '"legend" | "label"',
          description: 'Size variant for the legend',
          defaultValue: '"legend"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'FieldGroup',
      description:
        'Layout wrapper enabling container queries for responsive field orientations.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'FieldLabel',
      description:
        'Label component with styling for checked states and disabled states.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
        {
          name: 'htmlFor',
          type: 'string',
          description: 'ID of the form element this label is for',
        },
      ],
    },
    {
      component: 'FieldTitle',
      description: 'Semantic title element for field labeling.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'FieldContent',
      description: 'Wrapper for grouping control and descriptions together.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'FieldDescription',
      description:
        'Helper text with muted foreground color and link styling support.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'FieldError',
      description:
        'Alert component that deduplicates and displays error messages.',
      props: [
        {
          name: 'errors',
          type: 'Array<{ message?: string } | undefined>',
          description:
            'Array of error objects. Multiple errors render as a list.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Custom error content (overrides errors prop)',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'FieldSeparator',
      description: 'Divider with optional centered content.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Optional content to display in the center',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
  ],
  related: ['form', 'input', 'label', 'checkbox', 'radio-group', 'select'],
};
