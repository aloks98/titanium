import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const selectDocumentation: ComponentDocumentation = {
  id: 'select',
  name: 'Select',
  description:
    'Displays a list of options for the user to pick from, triggered by a button.',
  category: 'form',
  simpleExample: {
    example: (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@e412/titanium';

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
  },
  examples: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Select trigger in different sizes.',
      example: (
        <div className="flex flex-col gap-4">
          <Select>
            <SelectTrigger size="xs" className="w-[180px]">
              <SelectValue placeholder="Extra Small" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="sm" className="w-[180px]">
              <SelectValue placeholder="Small" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="md" className="w-[180px]">
              <SelectValue placeholder="Medium (default)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="lg" className="w-[180px]">
              <SelectValue placeholder="Large" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
      code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@e412/titanium';

export function SelectSizesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Select>
        <SelectTrigger size="sm" className="w-[180px]">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="lg" className="w-[180px]">
          <SelectValue placeholder="Large" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`,
    },
    {
      id: 'with-label',
      title: 'With Label',
      description: 'Select with an associated label.',
      example: (
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="framework">Framework</Label>
          <Select>
            <SelectTrigger id="framework">
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="angular">Angular</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
      code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
} from '@e412/titanium';

export function SelectWithLabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`,
    },
    {
      id: 'with-groups',
      title: 'With Groups',
      description: 'Select with grouped options.',
      example: (
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              <SelectItem value="cet">Central European Time (CET)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
      code: `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@e412/titanium';

export function SelectGroupedDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time</SelectItem>
          <SelectItem value="pst">Pacific Standard Time</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}`,
    },
    {
      id: 'indicator-position',
      title: 'Indicator Position',
      description: 'Change the check indicator position.',
      example: (
        <div className="flex gap-4">
          <Select indicatorPosition="left">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Left indicator" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
          </Select>
          <Select indicatorPosition="right">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Right indicator" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
      code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@e412/titanium';

export function SelectIndicatorDemo() {
  return (
    <div className="flex gap-4">
      <Select indicatorPosition="left">
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Left" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
      <Select indicatorPosition="right">
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Right" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled State',
      description: 'Disabled select and disabled items.',
      example: (
        <div className="flex flex-col gap-4">
          <Select disabled>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Disabled select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="With disabled item" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Available</SelectItem>
              <SelectItem value="2" disabled>
                Disabled Item
              </SelectItem>
              <SelectItem value="3">Available</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
      code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@e412/titanium';

export function SelectDisabledDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Select disabled>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="With disabled item" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Available</SelectItem>
          <SelectItem value="2" disabled>Disabled</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Select',
      description: 'The root select component.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The controlled value',
        },
        {
          name: 'onValueChange',
          type: '(value: string) => void',
          description: 'Callback when value changes',
        },
        {
          name: 'defaultValue',
          type: 'string',
          description: 'Default value for uncontrolled usage',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the select is disabled',
          defaultValue: 'false',
        },
        {
          name: 'indicatorPosition',
          type: '"left" | "right"',
          description: 'Position of the check indicator',
          defaultValue: '"left"',
        },
        {
          name: 'indicatorVisibility',
          type: 'boolean',
          description: 'Whether to show the indicator',
          defaultValue: 'true',
        },
        {
          name: 'indicator',
          type: 'ReactNode',
          description: 'Custom indicator element',
        },
      ],
    },
    {
      component: 'SelectTrigger',
      description: 'The trigger button that opens the select.',
      props: [
        {
          name: 'size',
          type: '"xs" | "sm" | "md" | "lg"',
          description: 'The size of the trigger',
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
      component: 'SelectValue',
      description: 'Displays the selected value.',
      props: [
        {
          name: 'placeholder',
          type: 'string',
          description: 'Placeholder text when no value is selected',
        },
      ],
    },
    {
      component: 'SelectContent',
      description: 'The dropdown content container.',
      props: [
        {
          name: 'position',
          type: '"item-aligned" | "popper"',
          description: 'Positioning strategy',
          defaultValue: '"popper"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SelectItem',
      description: 'An individual select option.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The value of the item',
          required: true,
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the item is disabled',
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
      component: 'SelectGroup',
      description: 'Groups related select items.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SelectLabel',
      description: 'A label for a select group.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SelectSeparator',
      description: 'A separator between select items.',
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
