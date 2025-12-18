import { Checkbox, Label } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const checkboxDocumentation: ComponentDocumentation = {
  id: 'checkbox',
  name: 'Checkbox',
  description:
    'A control that allows the user to toggle between checked and not checked.',
  category: 'form',
  simpleExample: {
    example: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    ),
    code: `import { Checkbox, Label } from '@e412/titanium';

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Checkboxes in different sizes.',
      example: (
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="small" size="sm" />
            <Label htmlFor="small">Small</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="medium" size="md" />
            <Label htmlFor="medium">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="large" size="lg" />
            <Label htmlFor="large">Large</Label>
          </div>
        </div>
      ),
      code: `import { Checkbox, Label } from '@e412/titanium';

export function CheckboxSizesDemo() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center space-x-2">
        <Checkbox id="small" size="sm" />
        <Label htmlFor="small">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="medium" size="md" />
        <Label htmlFor="medium">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="large" size="lg" />
        <Label htmlFor="large">Large</Label>
      </div>
    </div>
  );
}`,
    },
    {
      id: 'states',
      title: 'States',
      description: 'Checkbox in different states.',
      example: (
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">Unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">Checked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="indeterminate" checked="indeterminate" />
            <Label htmlFor="indeterminate">Indeterminate</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked">Disabled Checked</Label>
          </div>
        </div>
      ),
      code: `import { Checkbox, Label } from '@e412/titanium';

export function CheckboxStatesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked">Unchecked</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Checked</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="indeterminate" checked="indeterminate" />
        <Label htmlFor="indeterminate">Indeterminate</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
    </div>
  );
}`,
    },
    {
      id: 'with-description',
      title: 'With Description',
      description: 'Checkbox with label and description text.',
      example: (
        <div className="flex items-start space-x-3">
          <Checkbox id="newsletter" className="mt-0.5" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            <p className="text-sm text-muted-foreground">
              Get notified about new features and updates.
            </p>
          </div>
        </div>
      ),
      code: `import { Checkbox, Label } from '@e412/titanium';

export function CheckboxWithDescriptionDemo() {
  return (
    <div className="flex items-start space-x-3">
      <Checkbox id="newsletter" className="mt-0.5" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        <p className="text-sm text-muted-foreground">
          Get notified about new features and updates.
        </p>
      </div>
    </div>
  );
}`,
    },
    {
      id: 'checkbox-group',
      title: 'Checkbox Group',
      description: 'Multiple checkboxes as a group.',
      example: (
        <div className="space-y-3">
          <p className="text-sm font-medium">Select your interests:</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="tech" defaultChecked />
              <Label htmlFor="tech">Technology</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="design" />
              <Label htmlFor="design">Design</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="business" />
              <Label htmlFor="business">Business</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="science" />
              <Label htmlFor="science">Science</Label>
            </div>
          </div>
        </div>
      ),
      code: `import { Checkbox, Label } from '@e412/titanium';

export function CheckboxGroupDemo() {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">Select your interests:</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="tech" defaultChecked />
          <Label htmlFor="tech">Technology</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="design" />
          <Label htmlFor="design">Design</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="business" />
          <Label htmlFor="business">Business</Label>
        </div>
      </div>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Checkbox',
      description: 'The checkbox input component.',
      props: [
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          description: 'The size of the checkbox',
          defaultValue: '"md"',
        },
        {
          name: 'checked',
          type: 'boolean | "indeterminate"',
          description: 'The controlled checked state',
        },
        {
          name: 'defaultChecked',
          type: 'boolean',
          description: 'The default checked state for uncontrolled usage',
        },
        {
          name: 'onCheckedChange',
          type: '(checked: boolean | "indeterminate") => void',
          description: 'Callback when the checked state changes',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the checkbox is disabled',
          defaultValue: 'false',
        },
        {
          name: 'required',
          type: 'boolean',
          description: 'Whether the checkbox is required',
          defaultValue: 'false',
        },
        {
          name: 'name',
          type: 'string',
          description: 'The name of the checkbox for form submission',
        },
        {
          name: 'value',
          type: 'string',
          description: 'The value of the checkbox for form submission',
          defaultValue: '"on"',
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
