import { RadioGroup, RadioGroupItem, Label } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const radioGroupDocumentation: ComponentDocumentation = {
  id: 'radio-group',
  name: 'Radio Group',
  description:
    'A set of checkable buttons where only one can be checked at a time.',
  category: 'form',
  simpleExample: {
    example: (
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Option Three</Label>
        </div>
      </RadioGroup>
    ),
    code: `import { RadioGroup, RadioGroupItem, Label } from '@e412/titanium';

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  );
}`,
  },
  examples: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Radio buttons in different sizes.',
      example: (
        <div className="flex flex-col gap-6">
          <div>
            <Label className="mb-2 block text-muted-foreground">Small</Label>
            <RadioGroup defaultValue="sm-1" size="sm">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sm-1" id="sm-1" />
                <Label htmlFor="sm-1">Small Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sm-2" id="sm-2" />
                <Label htmlFor="sm-2">Small Option 2</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label className="mb-2 block text-muted-foreground">Medium (default)</Label>
            <RadioGroup defaultValue="md-1" size="md">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="md-1" id="md-1" />
                <Label htmlFor="md-1">Medium Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="md-2" id="md-2" />
                <Label htmlFor="md-2">Medium Option 2</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label className="mb-2 block text-muted-foreground">Large</Label>
            <RadioGroup defaultValue="lg-1" size="lg">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lg-1" id="lg-1" />
                <Label htmlFor="lg-1">Large Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lg-2" id="lg-2" />
                <Label htmlFor="lg-2">Large Option 2</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      ),
      code: `import { RadioGroup, RadioGroupItem, Label } from '@e412/titanium';

export function RadioGroupSizesDemo() {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup defaultValue="sm-1" size="sm">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sm-1" id="sm-1" />
          <Label htmlFor="sm-1">Small</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="lg-1" size="lg">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="lg-1" id="lg-1" />
          <Label htmlFor="lg-1">Large</Label>
        </div>
      </RadioGroup>
    </div>
  );
}`,
    },
    {
      id: 'horizontal',
      title: 'Horizontal Layout',
      description: 'Radio group with horizontal orientation.',
      example: (
        <RadioGroup defaultValue="comfortable" className="flex flex-row gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      ),
      code: `import { RadioGroup, RadioGroupItem, Label } from '@e412/titanium';

export function RadioGroupHorizontalDemo() {
  return (
    <RadioGroup defaultValue="comfortable" className="flex flex-row gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}`,
    },
    {
      id: 'with-description',
      title: 'With Description',
      description: 'Radio items with additional description text.',
      example: (
        <RadioGroup defaultValue="card">
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="card" id="card" className="mt-1" />
            <div className="grid gap-1">
              <Label htmlFor="card">Card</Label>
              <p className="text-sm text-muted-foreground">
                Pay with your credit or debit card.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
            <div className="grid gap-1">
              <Label htmlFor="paypal">PayPal</Label>
              <p className="text-sm text-muted-foreground">
                Pay using your PayPal account.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="apple" id="apple" className="mt-1" />
            <div className="grid gap-1">
              <Label htmlFor="apple">Apple Pay</Label>
              <p className="text-sm text-muted-foreground">
                Pay with Apple Pay on supported devices.
              </p>
            </div>
          </div>
        </RadioGroup>
      ),
      code: `import { RadioGroup, RadioGroupItem, Label } from '@e412/titanium';

export function RadioGroupDescriptionDemo() {
  return (
    <RadioGroup defaultValue="card">
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="card" id="card" className="mt-1" />
        <div className="grid gap-1">
          <Label htmlFor="card">Card</Label>
          <p className="text-sm text-muted-foreground">
            Pay with your credit or debit card.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
        <div className="grid gap-1">
          <Label htmlFor="paypal">PayPal</Label>
          <p className="text-sm text-muted-foreground">
            Pay using your PayPal account.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled State',
      description: 'Radio group with disabled items.',
      example: (
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="d1" />
            <Label htmlFor="d1">Available</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="d2" disabled />
            <Label htmlFor="d2" className="text-muted-foreground">
              Disabled
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="d3" />
            <Label htmlFor="d3">Available</Label>
          </div>
        </RadioGroup>
      ),
      code: `import { RadioGroup, RadioGroupItem, Label } from '@e412/titanium';

export function RadioGroupDisabledDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="d1" />
        <Label htmlFor="d1">Available</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="d2" disabled />
        <Label htmlFor="d2" className="text-muted-foreground">Disabled</Label>
      </div>
    </RadioGroup>
  );
}`,
    },
  ],
  api: [
    {
      component: 'RadioGroup',
      description: 'The root container for radio items.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The controlled value',
        },
        {
          name: 'defaultValue',
          type: 'string',
          description: 'The default value for uncontrolled usage',
        },
        {
          name: 'onValueChange',
          type: '(value: string) => void',
          description: 'Callback when the value changes',
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          description: 'The size of radio items',
          defaultValue: '"md"',
        },
        {
          name: 'variant',
          type: '"primary" | "mono"',
          description: 'The color variant',
          defaultValue: '"primary"',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the entire group is disabled',
          defaultValue: 'false',
        },
        {
          name: 'required',
          type: 'boolean',
          description: 'Whether selection is required',
          defaultValue: 'false',
        },
        {
          name: 'orientation',
          type: '"horizontal" | "vertical"',
          description: 'The orientation of the group',
          defaultValue: '"vertical"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'RadioGroupItem',
      description: 'An individual radio button.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The value of this item',
          required: true,
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          description: 'Override the group size for this item',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether this item is disabled',
          defaultValue: 'false',
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
