import { Label, Switch, SwitchIndicator, SwitchWrapper } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const switchDocumentation: ComponentDocumentation = {
  id: 'switch',
  name: 'Switch',
  description:
    'A control that allows the user to toggle between checked and not checked.',
  category: 'form',
  simpleExample: {
    example: (
      <div className="flex items-center space-x-2">
        <SwitchWrapper>
          <Switch id="airplane-mode" />
        </SwitchWrapper>
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    ),
    code: `import { Switch, SwitchWrapper, Label } from '@e412/titanium';

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <SwitchWrapper>
        <Switch id="airplane-mode" />
      </SwitchWrapper>
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Switch in different sizes.',
      example: (
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <SwitchWrapper>
              <Switch id="sm" size="sm" />
            </SwitchWrapper>
            <Label htmlFor="sm">Small</Label>
          </div>
          <div className="flex items-center space-x-2">
            <SwitchWrapper>
              <Switch id="md" size="md" />
            </SwitchWrapper>
            <Label htmlFor="md">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <SwitchWrapper>
              <Switch id="lg" size="lg" />
            </SwitchWrapper>
            <Label htmlFor="lg">Large</Label>
          </div>
          <div className="flex items-center space-x-2">
            <SwitchWrapper>
              <Switch id="xl" size="xl" />
            </SwitchWrapper>
            <Label htmlFor="xl">Extra Large</Label>
          </div>
        </div>
      ),
      code: `import { Switch, SwitchWrapper, Label } from '@e412/titanium';

export function SwitchSizesDemo() {
  return (
    <div className="flex items-center gap-6">
      <SwitchWrapper>
        <Switch id="sm" size="sm" />
      </SwitchWrapper>
      <SwitchWrapper>
        <Switch id="md" size="md" />
      </SwitchWrapper>
      <SwitchWrapper>
        <Switch id="lg" size="lg" />
      </SwitchWrapper>
    </div>
  );
}`,
    },
    {
      id: 'shapes',
      title: 'Shapes',
      description: 'Switch with different shapes.',
      example: (
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <SwitchWrapper>
              <Switch id="pill" shape="pill" defaultChecked />
            </SwitchWrapper>
            <Label htmlFor="pill">Pill (default)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <SwitchWrapper>
              <Switch id="square" shape="square" defaultChecked />
            </SwitchWrapper>
            <Label htmlFor="square">Square</Label>
          </div>
        </div>
      ),
      code: `import { Switch, SwitchWrapper, Label } from '@e412/titanium';

export function SwitchShapesDemo() {
  return (
    <div className="flex items-center gap-6">
      <SwitchWrapper>
        <Switch id="pill" shape="pill" defaultChecked />
      </SwitchWrapper>
      <SwitchWrapper>
        <Switch id="square" shape="square" defaultChecked />
      </SwitchWrapper>
    </div>
  );
}`,
    },
    {
      id: 'with-indicator',
      title: 'With Indicator',
      description: 'Switch with on/off text indicators.',
      example: (
        <div className="flex items-center space-x-2">
          <SwitchWrapper>
            <Switch id="indicator" size="lg" defaultChecked />
            <SwitchIndicator state="on">On</SwitchIndicator>
            <SwitchIndicator state="off">Off</SwitchIndicator>
          </SwitchWrapper>
          <Label htmlFor="indicator">Notifications</Label>
        </div>
      ),
      code: `import { Switch, SwitchWrapper, SwitchIndicator, Label } from '@e412/titanium';

export function SwitchWithIndicatorDemo() {
  return (
    <div className="flex items-center space-x-2">
      <SwitchWrapper>
        <Switch id="indicator" size="lg" defaultChecked />
        <SwitchIndicator state="on">On</SwitchIndicator>
        <SwitchIndicator state="off">Off</SwitchIndicator>
      </SwitchWrapper>
      <Label htmlFor="indicator">Notifications</Label>
    </div>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Switch in disabled state.',
      example: (
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <SwitchWrapper>
              <Switch id="disabled-off" disabled />
            </SwitchWrapper>
            <Label htmlFor="disabled-off">Disabled (off)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <SwitchWrapper>
              <Switch id="disabled-on" disabled defaultChecked />
            </SwitchWrapper>
            <Label htmlFor="disabled-on">Disabled (on)</Label>
          </div>
        </div>
      ),
      code: `import { Switch, SwitchWrapper, Label } from '@e412/titanium';

export function SwitchDisabledDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <SwitchWrapper>
          <Switch id="disabled-off" disabled />
        </SwitchWrapper>
        <Label htmlFor="disabled-off">Disabled (off)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <SwitchWrapper>
          <Switch id="disabled-on" disabled defaultChecked />
        </SwitchWrapper>
        <Label htmlFor="disabled-on">Disabled (on)</Label>
      </div>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Switch',
      description: 'The switch toggle component.',
      props: [
        {
          name: 'size',
          type: '"sm" | "md" | "lg" | "xl"',
          description: 'The size of the switch',
          defaultValue: '"md"',
        },
        {
          name: 'shape',
          type: '"pill" | "square"',
          description: 'The shape of the switch',
          defaultValue: '"pill"',
        },
        {
          name: 'checked',
          type: 'boolean',
          description: 'The controlled checked state',
        },
        {
          name: 'defaultChecked',
          type: 'boolean',
          description: 'The default checked state',
        },
        {
          name: 'onCheckedChange',
          type: '(checked: boolean) => void',
          description: 'Callback when the checked state changes',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the switch is disabled',
          defaultValue: 'false',
        },
        {
          name: 'thumbClassName',
          type: 'string',
          description: 'Additional CSS classes for the thumb',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SwitchWrapper',
      description: 'Container for switch with indicator support.',
      props: [
        {
          name: 'permanent',
          type: 'boolean',
          description: 'Whether indicators are permanently visible',
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
      component: 'SwitchIndicator',
      description: 'On/off text indicator for the switch.',
      props: [
        {
          name: 'state',
          type: '"on" | "off"',
          description: 'Which state this indicator represents',
          required: true,
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
