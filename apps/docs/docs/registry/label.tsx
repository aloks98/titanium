import { Label, Checkbox, Input } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const labelDocumentation: ComponentDocumentation = {
  id: 'label',
  name: 'Label',
  description: 'Renders an accessible label associated with controls.',
  category: 'form',
  simpleExample: {
    example: (
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email" />
      </div>
    ),
    code: `import { Label, Input } from '@e412/titanium';

export function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Label with primary and secondary variants.',
      example: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <div className="grid gap-1.5">
            <Label variant="primary" htmlFor="primary">
              Primary Label (default)
            </Label>
            <Input id="primary" placeholder="Input with primary label" />
          </div>
          <div className="grid gap-1.5">
            <Label variant="secondary" htmlFor="secondary">
              Secondary Label
            </Label>
            <Input id="secondary" placeholder="Input with secondary label" />
          </div>
        </div>
      ),
      code: `import { Label, Input } from '@e412/titanium';

export function LabelVariantsDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="grid gap-1.5">
        <Label variant="primary" htmlFor="primary">
          Primary Label (default)
        </Label>
        <Input id="primary" placeholder="Input with primary label" />
      </div>
      <div className="grid gap-1.5">
        <Label variant="secondary" htmlFor="secondary">
          Secondary Label
        </Label>
        <Input id="secondary" placeholder="Input with secondary label" />
      </div>
    </div>
  );
}`,
    },
    {
      id: 'with-checkbox',
      title: 'With Checkbox',
      description: 'Label associated with a checkbox.',
      example: (
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      ),
      code: `import { Label, Checkbox } from '@e412/titanium';

export function LabelWithCheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`,
    },
    {
      id: 'required-field',
      title: 'Required Field',
      description: 'Label with required indicator.',
      example: (
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input id="name" placeholder="Enter your name" required />
        </div>
      ),
      code: `import { Label, Input } from '@e412/titanium';

export function LabelRequiredDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="name">
        Name <span className="text-destructive">*</span>
      </Label>
      <Input id="name" placeholder="Enter your name" required />
    </div>
  );
}`,
    },
    {
      id: 'with-helper-text',
      title: 'With Helper Text',
      description: 'Label with additional helper text below.',
      example: (
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter username" />
          <p className="text-sm text-muted-foreground">
            This will be your public display name.
          </p>
        </div>
      ),
      code: `import { Label, Input } from '@e412/titanium';

export function LabelWithHelperDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="Enter username" />
      <p className="text-sm text-muted-foreground">
        This will be your public display name.
      </p>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Label',
      description: 'The label component for form controls.',
      props: [
        {
          name: 'variant',
          type: '"primary" | "secondary"',
          description: 'The visual variant of the label',
          defaultValue: '"primary"',
        },
        {
          name: 'htmlFor',
          type: 'string',
          description: 'The id of the element the label is associated with',
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
