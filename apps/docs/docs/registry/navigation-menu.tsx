import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '#',
    description:
      'A modal dialog that interrupts the user with important content.',
  },
  {
    title: 'Hover Card',
    href: '#',
    description: 'For sighted users to preview content behind a link.',
  },
  {
    title: 'Progress',
    href: '#',
    description: 'Displays an indicator showing completion of a task.',
  },
  {
    title: 'Scroll Area',
    href: '#',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '#',
    description:
      'A set of layered sections of content displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '#',
    description:
      'A popup that displays information related to an element.',
  },
];

export const navigationMenuDocumentation: ComponentDocumentation = {
  id: 'navigation-menu',
  name: 'Navigation Menu',
  description:
    'A responsive navigation menu with dropdown support for complex site navigation.',
  category: 'navigation',
  simpleExample: {
    example: (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[400px]">
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">
                      <div className="font-medium">Introduction</div>
                      <p className="text-sm text-muted-foreground">
                        Re-usable components built with Radix UI and Tailwind
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">
                      <div className="font-medium">Installation</div>
                      <p className="text-sm text-muted-foreground">
                        How to install dependencies and structure your app
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    ),
    code: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@e412/titanium';

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Introduction</div>
                    <p className="text-sm text-muted-foreground">
                      Re-usable components built with Radix UI and Tailwind
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Installation</div>
                    <p className="text-sm text-muted-foreground">
                      How to install dependencies and structure your app
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`,
  },
  examples: [
    {
      id: 'with-components-grid',
      title: 'With Components Grid',
      description: 'Navigation menu with a grid layout for component links.',
      example: (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <a href={component.href}>
                          <div className="font-medium">{component.title}</div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {component.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ),
      code: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@e412/titanium';

const components = [
  {
    title: 'Alert Dialog',
    href: '#',
    description: 'A modal dialog that interrupts the user with important content.',
  },
  {
    title: 'Hover Card',
    href: '#',
    description: 'For sighted users to preview content behind a link.',
  },
  {
    title: 'Progress',
    href: '#',
    description: 'Displays an indicator showing completion of a task.',
  },
  {
    title: 'Tabs',
    href: '#',
    description: 'A set of layered sections of content displayed one at a time.',
  },
];

export function NavigationMenuGridDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {components.map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <a href={component.href}>
                      <div className="font-medium">{component.title}</div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {component.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`,
    },
    {
      id: 'multiple-menus',
      title: 'Multiple Menus',
      description: 'Navigation with multiple dropdown menus.',
      example: (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[300px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">
                        <div className="font-medium">Analytics</div>
                        <p className="text-sm text-muted-foreground">
                          Track and analyze user behavior
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">
                        <div className="font-medium">Automation</div>
                        <p className="text-sm text-muted-foreground">
                          Automate your workflow tasks
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[300px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">
                        <div className="font-medium">Documentation</div>
                        <p className="text-sm text-muted-foreground">
                          Learn how to use our platform
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">
                        <div className="font-medium">Blog</div>
                        <p className="text-sm text-muted-foreground">
                          Read our latest articles
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ),
      code: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@e412/titanium';

export function NavigationMenuMultipleDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[300px]">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Analytics</div>
                    <p className="text-sm text-muted-foreground">
                      Track and analyze user behavior
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Automation</div>
                    <p className="text-sm text-muted-foreground">
                      Automate your workflow tasks
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[300px]">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Documentation</div>
                    <p className="text-sm text-muted-foreground">
                      Learn how to use our platform
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`,
    },
    {
      id: 'without-viewport',
      title: 'Without Viewport',
      description: 'Navigation menu without the shared viewport container.',
      example: (
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[250px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">
                        <div className="font-medium">Profile</div>
                        <p className="text-sm text-muted-foreground">
                          View your profile
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">
                        <div className="font-medium">Settings</div>
                        <p className="text-sm text-muted-foreground">
                          Manage preferences
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ),
      code: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@e412/titanium';

export function NavigationMenuNoViewportDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[250px]">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Profile</div>
                    <p className="text-sm text-muted-foreground">
                      View your profile
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Settings</div>
                    <p className="text-sm text-muted-foreground">
                      Manage preferences
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`,
    },
  ],
  api: [
    {
      component: 'NavigationMenu',
      description: 'The root navigation menu container.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'The controlled value of the active menu',
        },
        {
          name: 'defaultValue',
          type: 'string',
          description: 'The default active menu',
        },
        {
          name: 'onValueChange',
          type: '(value: string) => void',
          description: 'Callback when the active menu changes',
        },
        {
          name: 'viewport',
          type: 'boolean',
          description: 'Whether to render the viewport container',
          defaultValue: 'true',
        },
        {
          name: 'delayDuration',
          type: 'number',
          description: 'Delay before the menu opens on hover (ms)',
          defaultValue: '200',
        },
        {
          name: 'skipDelayDuration',
          type: 'number',
          description: 'Delay before skip animations',
          defaultValue: '300',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'NavigationMenuList',
      description: 'The list container for menu items.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'NavigationMenuItem',
      description: 'An individual menu item container.',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'Unique value for this menu item',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'NavigationMenuTrigger',
      description: 'The button that opens the menu content.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Merge props onto child element',
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
      component: 'NavigationMenuContent',
      description: 'The dropdown content container.',
      props: [
        {
          name: 'forceMount',
          type: 'boolean',
          description: 'Force mount even when not open',
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
      component: 'NavigationMenuLink',
      description: 'A link item within the menu.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Merge props onto child element',
          defaultValue: 'false',
        },
        {
          name: 'active',
          type: 'boolean',
          description: 'Whether the link is active',
          defaultValue: 'false',
        },
        {
          name: 'onSelect',
          type: '(event: Event) => void',
          description: 'Callback when the link is selected',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'NavigationMenuViewport',
      description: 'The shared viewport for menu content.',
      props: [
        {
          name: 'forceMount',
          type: 'boolean',
          description: 'Force mount even when not open',
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
      component: 'NavigationMenuIndicator',
      description: 'An optional indicator that highlights the active item.',
      props: [
        {
          name: 'forceMount',
          type: 'boolean',
          description: 'Force mount even when not open',
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
      component: 'navigationMenuTriggerStyle',
      description: 'A CVA utility for styling navigation menu triggers and links.',
      props: [],
    },
  ],
};
