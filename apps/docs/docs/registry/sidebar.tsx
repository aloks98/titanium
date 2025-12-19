import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@e412/titanium';
import { Calendar, Home, Inbox, Search, Settings, User } from 'lucide-react';
import type { ComponentDocumentation } from '../types';

const menuItems = [
  { title: 'Home', icon: Home },
  { title: 'Inbox', icon: Inbox },
  { title: 'Calendar', icon: Calendar },
  { title: 'Search', icon: Search },
  { title: 'Settings', icon: Settings },
];

export const sidebarDocumentation: ComponentDocumentation = {
  id: 'sidebar',
  name: 'Sidebar',
  description:
    'A responsive sidebar component with collapsible support and mobile adaptation.',
  category: 'layout',
  simpleExample: {
    example: (
      <SidebarProvider>
        <div className="flex h-[400px] w-full border rounded-lg overflow-hidden">
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2 py-2">
                <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  A
                </div>
                <span className="font-semibold">Acme Inc</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton>
                          <item.icon />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <User />
                    <span>Profile</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <header className="flex h-12 items-center gap-2 border-b px-4">
              <SidebarTrigger />
              <span className="font-semibold">Dashboard</span>
            </header>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">Main content area</p>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    ),
    code: `import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@e412/titanium';
import { Calendar, Home, Inbox, Search, Settings, User } from 'lucide-react';

const menuItems = [
  { title: 'Home', icon: Home },
  { title: 'Inbox', icon: Inbox },
  { title: 'Calendar', icon: Calendar },
  { title: 'Search', icon: Search },
  { title: 'Settings', icon: Settings },
];

export function SidebarDemo() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
              A
            </div>
            <span className="font-semibold">Acme Inc</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User />
                <span>Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="font-semibold">Dashboard</span>
        </header>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">Main content area</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}`,
  },
  examples: [
    {
      id: 'with-tooltip',
      title: 'With Tooltips',
      description: 'Sidebar menu buttons with tooltips when collapsed.',
      example: (
        <SidebarProvider defaultOpen={false}>
          <div className="flex h-[400px] w-full border rounded-lg overflow-hidden">
            <Sidebar collapsible="icon">
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {menuItems.slice(0, 4).map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton tooltip={item.title}>
                            <item.icon />
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <header className="flex h-12 items-center gap-2 border-b px-4">
                <SidebarTrigger />
                <span className="font-semibold">Dashboard</span>
              </header>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Toggle the sidebar to see tooltips appear
                </p>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      ),
      code: `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@e412/titanium';
import { Home, Inbox, Calendar, Search } from 'lucide-react';

export function SidebarTooltipDemo() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Home">
                    <Home />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Inbox">
                    <Inbox />
                    <span>Inbox</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="font-semibold">Dashboard</span>
        </header>
      </SidebarInset>
    </SidebarProvider>
  );
}`,
    },
    {
      id: 'active-item',
      title: 'Active Item',
      description: 'Sidebar with an active menu item highlighted.',
      example: (
        <SidebarProvider>
          <div className="flex h-[300px] w-full border rounded-lg overflow-hidden">
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                          <Home />
                          <span>Home</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Inbox />
                          <span>Inbox</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Settings />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  The Home item is marked as active
                </p>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      ),
      code: `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from '@e412/titanium';
import { Home, Inbox, Settings } from 'lucide-react';

export function SidebarActiveDemo() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <Home />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Inbox />
                    <span>Inbox</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            The Home item is marked as active
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}`,
    },
  ],
  api: [
    {
      component: 'SidebarProvider',
      description: 'Context provider that manages sidebar state.',
      props: [
        {
          name: 'defaultOpen',
          type: 'boolean',
          description: 'The default open state',
          defaultValue: 'true',
        },
        {
          name: 'open',
          type: 'boolean',
          description: 'The controlled open state',
        },
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          description: 'Callback when open state changes',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'Sidebar',
      description: 'The main sidebar container.',
      props: [
        {
          name: 'side',
          type: '"left" | "right"',
          description: 'Which side to render',
          defaultValue: '"left"',
        },
        {
          name: 'variant',
          type: '"sidebar" | "floating" | "inset"',
          description: 'Visual variant',
          defaultValue: '"sidebar"',
        },
        {
          name: 'collapsible',
          type: '"offcanvas" | "icon" | "none"',
          description: 'Collapse behavior',
          defaultValue: '"offcanvas"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SidebarHeader',
      description: 'Header area of the sidebar.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SidebarContent',
      description: 'Main content area with overflow handling.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SidebarFooter',
      description: 'Footer area of the sidebar.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SidebarGroup',
      description: 'Groups related menu items.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SidebarGroupLabel',
      description: 'Label for a sidebar group.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Merge props onto child',
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
      component: 'SidebarGroupContent',
      description: 'Content container for sidebar group.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SidebarMenu',
      description: 'Menu container (ul element).',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SidebarMenuItem',
      description: 'Menu item container (li element).',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SidebarMenuButton',
      description: 'Interactive menu button.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Merge props onto child',
          defaultValue: 'false',
        },
        {
          name: 'isActive',
          type: 'boolean',
          description: 'Whether the button is active',
          defaultValue: 'false',
        },
        {
          name: 'variant',
          type: '"default" | "outline"',
          description: 'Visual variant',
          defaultValue: '"default"',
        },
        {
          name: 'size',
          type: '"default" | "sm" | "lg"',
          description: 'Button size',
          defaultValue: '"default"',
        },
        {
          name: 'tooltip',
          type: 'string | TooltipContentProps',
          description: 'Tooltip content when collapsed',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SidebarTrigger',
      description: 'Button to toggle sidebar open/closed.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SidebarInset',
      description: 'Main content area adjacent to sidebar.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'useSidebar',
      description: 'Hook to access sidebar state and controls.',
      props: [
        {
          name: 'Returns',
          type: 'SidebarContextProps',
          description:
            '{ state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar }',
        },
      ],
    },
  ],
};
