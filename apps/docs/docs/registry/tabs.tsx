import { Tabs, TabsContent, TabsList, TabsTrigger } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const tabsDocumentation: ComponentDocumentation = {
  id: 'tabs',
  name: 'Tabs',
  description:
    'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  category: 'navigation',
  simpleExample: {
    example: (
      <Tabs defaultValue="account" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p className="text-sm text-muted-foreground">
            Make changes to your account here.
          </p>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-sm text-muted-foreground">
            Change your password here.
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <p className="text-sm text-muted-foreground">
            Manage your settings here.
          </p>
        </TabsContent>
      </Tabs>
    ),
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@e412/titanium';

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  );
}`,
  },
  examples: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Different tab list variants.',
      example: (
        <div className="space-y-6">
          <Tabs defaultValue="tab1" className="w-full max-w-md">
            <TabsList variant="default">
              <TabsTrigger value="tab1">Default</TabsTrigger>
              <TabsTrigger value="tab2">Variant</TabsTrigger>
              <TabsTrigger value="tab3">Style</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Default variant content</TabsContent>
            <TabsContent value="tab2">Tab 2 content</TabsContent>
            <TabsContent value="tab3">Tab 3 content</TabsContent>
          </Tabs>
          <Tabs defaultValue="tab1" className="w-full max-w-md">
            <TabsList variant="button">
              <TabsTrigger value="tab1">Button</TabsTrigger>
              <TabsTrigger value="tab2">Variant</TabsTrigger>
              <TabsTrigger value="tab3">Style</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Button variant content</TabsContent>
            <TabsContent value="tab2">Tab 2 content</TabsContent>
            <TabsContent value="tab3">Tab 3 content</TabsContent>
          </Tabs>
          <Tabs defaultValue="tab1" className="w-full max-w-md">
            <TabsList variant="line">
              <TabsTrigger value="tab1">Line</TabsTrigger>
              <TabsTrigger value="tab2">Variant</TabsTrigger>
              <TabsTrigger value="tab3">Style</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Line variant content</TabsContent>
            <TabsContent value="tab2">Tab 2 content</TabsContent>
            <TabsContent value="tab3">Tab 3 content</TabsContent>
          </Tabs>
        </div>
      ),
      code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@e412/titanium';

export function TabsVariantsDemo() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="tab1">
        <TabsList variant="default">
          <TabsTrigger value="tab1">Default</TabsTrigger>
          <TabsTrigger value="tab2">Variant</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="tab1">
        <TabsList variant="button">
          <TabsTrigger value="tab1">Button</TabsTrigger>
          <TabsTrigger value="tab2">Variant</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="tab1">
        <TabsList variant="line">
          <TabsTrigger value="tab1">Line</TabsTrigger>
          <TabsTrigger value="tab2">Variant</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}`,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Tabs in different sizes.',
      example: (
        <div className="space-y-6">
          <Tabs defaultValue="tab1" className="w-full max-w-md">
            <TabsList size="xs">
              <TabsTrigger value="tab1">Extra Small</TabsTrigger>
              <TabsTrigger value="tab2">Size</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="tab1" className="w-full max-w-md">
            <TabsList size="sm">
              <TabsTrigger value="tab1">Small</TabsTrigger>
              <TabsTrigger value="tab2">Size</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="tab1" className="w-full max-w-md">
            <TabsList size="md">
              <TabsTrigger value="tab1">Medium</TabsTrigger>
              <TabsTrigger value="tab2">Default</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="tab1" className="w-full max-w-md">
            <TabsList size="lg">
              <TabsTrigger value="tab1">Large</TabsTrigger>
              <TabsTrigger value="tab2">Size</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      ),
      code: `import { Tabs, TabsList, TabsTrigger } from '@e412/titanium';

export function TabsSizesDemo() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="tab1">
        <TabsList size="sm">
          <TabsTrigger value="tab1">Small</TabsTrigger>
          <TabsTrigger value="tab2">Size</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="tab1">
        <TabsList size="lg">
          <TabsTrigger value="tab1">Large</TabsTrigger>
          <TabsTrigger value="tab2">Size</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}`,
    },
    {
      id: 'pill-shape',
      title: 'Pill Shape',
      description: 'Tabs with pill-shaped styling.',
      example: (
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList shape="pill">
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Overview content</TabsContent>
          <TabsContent value="tab2">Analytics content</TabsContent>
          <TabsContent value="tab3">Reports content</TabsContent>
        </Tabs>
      ),
      code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@e412/titanium';

export function TabsPillDemo() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList shape="pill">
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Analytics</TabsTrigger>
        <TabsTrigger value="tab3">Reports</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled Tab',
      description: 'Tabs with a disabled trigger.',
      example: (
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="tab1">Active</TabsTrigger>
            <TabsTrigger value="tab2" disabled>
              Disabled
            </TabsTrigger>
            <TabsTrigger value="tab3">Active</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">First tab content</TabsContent>
          <TabsContent value="tab3">Third tab content</TabsContent>
        </Tabs>
      ),
      code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@e412/titanium';

export function TabsDisabledDemo() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Active</TabsTrigger>
        <TabsTrigger value="tab2" disabled>Disabled</TabsTrigger>
        <TabsTrigger value="tab3">Active</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Tabs',
      description: 'The root tabs component.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The controlled value of the active tab',
        },
        {
          name: 'defaultValue',
          type: 'string',
          description: 'The default value for uncontrolled usage',
        },
        {
          name: 'onValueChange',
          type: '(value: string) => void',
          description: 'Callback when the active tab changes',
        },
        {
          name: 'orientation',
          type: '"horizontal" | "vertical"',
          description: 'The orientation of the tabs',
          defaultValue: '"horizontal"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'TabsList',
      description: 'The container for tab triggers.',
      props: [
        {
          name: 'variant',
          type: '"default" | "button" | "line"',
          description: 'The visual variant of the tabs list',
          defaultValue: '"default"',
        },
        {
          name: 'size',
          type: '"xs" | "sm" | "md" | "lg"',
          description: 'The size of the tabs',
          defaultValue: '"md"',
        },
        {
          name: 'shape',
          type: '"default" | "pill"',
          description: 'The shape of the tabs',
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
      component: 'TabsTrigger',
      description: 'A button that activates its associated tab panel.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The unique value of the tab',
          required: true,
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the trigger is disabled',
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
      component: 'TabsContent',
      description: 'Contains the content associated with a tab.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The value that associates this content with a trigger',
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
