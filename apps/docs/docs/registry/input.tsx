import {
  Input,
  InputAddon,
  InputGroup,
  InputWrapper,
  Label,
} from '@e412/titanium';
import { Mail, Search, Eye, DollarSign } from 'lucide-react';
import type { ComponentDocumentation } from '../types';

export const inputDocumentation: ComponentDocumentation = {
  id: 'input',
  name: 'Input',
  description: 'Displays a form input field or a component that looks like an input field.',
  category: 'form',
  simpleExample: {
    example: (
      <div className="w-full max-w-sm">
        <Input type="email" placeholder="Email" />
      </div>
    ),
    code: `import { Input } from '@e412/titanium';

export function InputDemo() {
  return <Input type="email" placeholder="Email" />;
}`,
  },
  examples: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Input fields in different sizes.',
      example: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Input variant="sm" placeholder="Small" />
          <Input variant="md" placeholder="Medium (default)" />
          <Input variant="lg" placeholder="Large" />
        </div>
      ),
      code: `import { Input } from '@e412/titanium';

export function InputSizesDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Input variant="sm" placeholder="Small" />
      <Input variant="md" placeholder="Medium (default)" />
      <Input variant="lg" placeholder="Large" />
    </div>
  );
}`,
    },
    {
      id: 'with-label',
      title: 'With Label',
      description: 'Input with an associated label.',
      example: (
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
      ),
      code: `import { Input, Label } from '@e412/titanium';

export function InputWithLabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  );
}`,
    },
    {
      id: 'with-icon',
      title: 'With Icon',
      description: 'Input with leading or trailing icons using InputWrapper.',
      example: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <InputWrapper>
            <Search className="size-4" />
            <Input placeholder="Search..." />
          </InputWrapper>
          <InputWrapper>
            <Mail className="size-4" />
            <Input type="email" placeholder="Email" />
          </InputWrapper>
          <InputWrapper>
            <Input type="password" placeholder="Password" />
            <Eye className="size-4" />
          </InputWrapper>
        </div>
      ),
      code: `import { Input, InputWrapper } from '@e412/titanium';
import { Search, Mail, Eye } from 'lucide-react';

export function InputWithIconDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <InputWrapper>
        <Search className="size-4" />
        <Input placeholder="Search..." />
      </InputWrapper>
      <InputWrapper>
        <Mail className="size-4" />
        <Input type="email" placeholder="Email" />
      </InputWrapper>
      <InputWrapper>
        <Input type="password" placeholder="Password" />
        <Eye className="size-4" />
      </InputWrapper>
    </div>
  );
}`,
    },
    {
      id: 'with-addon',
      title: 'With Addon',
      description: 'Input with text or icon addons.',
      example: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <InputGroup>
            <InputAddon>https://</InputAddon>
            <Input placeholder="example.com" />
          </InputGroup>
          <InputGroup>
            <InputAddon mode="icon">
              <DollarSign className="size-4" />
            </InputAddon>
            <Input type="number" placeholder="0.00" />
          </InputGroup>
          <InputGroup>
            <Input placeholder="Username" />
            <InputAddon>@gmail.com</InputAddon>
          </InputGroup>
        </div>
      ),
      code: `import { Input, InputAddon, InputGroup } from '@e412/titanium';
import { DollarSign } from 'lucide-react';

export function InputWithAddonDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <InputGroup>
        <InputAddon>https://</InputAddon>
        <Input placeholder="example.com" />
      </InputGroup>
      <InputGroup>
        <InputAddon mode="icon">
          <DollarSign className="size-4" />
        </InputAddon>
        <Input type="number" placeholder="0.00" />
      </InputGroup>
    </div>
  );
}`,
    },
    {
      id: 'states',
      title: 'States',
      description: 'Input in different states.',
      example: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Input placeholder="Default" />
          <Input placeholder="Disabled" disabled />
          <Input placeholder="Read only" readOnly value="Read only value" />
          <Input placeholder="Invalid" aria-invalid="true" />
        </div>
      ),
      code: `import { Input } from '@e412/titanium';

export function InputStatesDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Read only" readOnly value="Read only value" />
      <Input placeholder="Invalid" aria-invalid="true" />
    </div>
  );
}`,
    },
    {
      id: 'file-input',
      title: 'File Input',
      description: 'Input for file uploads.',
      example: (
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
      ),
      code: `import { Input, Label } from '@e412/titanium';

export function FileInputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Input',
      description: 'The input field component.',
      props: [
        {
          name: 'variant',
          type: '"sm" | "md" | "lg"',
          description: 'The size variant of the input',
          defaultValue: '"md"',
        },
        {
          name: 'type',
          type: 'string',
          description: 'The type of input (text, email, password, etc.)',
          defaultValue: '"text"',
        },
        {
          name: 'placeholder',
          type: 'string',
          description: 'Placeholder text',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the input is disabled',
          defaultValue: 'false',
        },
        {
          name: 'readOnly',
          type: 'boolean',
          description: 'Whether the input is read-only',
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
      component: 'InputWrapper',
      description: 'Wrapper for input with icons inside the input field.',
      props: [
        {
          name: 'variant',
          type: '"sm" | "md" | "lg"',
          description: 'The size variant',
          defaultValue: '"md"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'InputGroup',
      description: 'Container for grouping input with addons.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'InputAddon',
      description: 'Addon element for input (prefix or suffix).',
      props: [
        {
          name: 'variant',
          type: '"sm" | "md" | "lg"',
          description: 'The size variant',
          defaultValue: '"md"',
        },
        {
          name: 'mode',
          type: '"default" | "icon"',
          description: 'The addon mode',
          defaultValue: '"default"',
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
