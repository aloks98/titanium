# Sidebar

Collapsible sidebar navigation with responsive behavior.

## Import

```tsx
import {
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
  SidebarTrigger
} from '@e412/titanium';
```

## Usage

```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <h2 className="text-lg font-semibold">App Name</h2>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard">Dashboard</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/settings">Settings</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <p className="text-sm text-muted-foreground">v1.0.0</p>
    </SidebarFooter>
  </Sidebar>

  <main className="flex-1">
    <SidebarTrigger />
    {/* Main content */}
  </main>
</SidebarProvider>
```

## With icons

```tsx
import { Home, Settings, Users } from 'lucide-react';

<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton>
      <Home className="size-4" />
      <span>Home</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
  <SidebarMenuItem>
    <SidebarMenuButton>
      <Users className="size-4" />
      <span>Users</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
</SidebarMenu>
```

## Collapsible

```tsx
<SidebarProvider defaultCollapsed={false}>
  <Sidebar collapsible="icon">
    {/* Collapses to icon-only mode */}
  </Sidebar>
</SidebarProvider>
```

## Props

### SidebarProvider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultCollapsed | `boolean` | `false` | Initial collapsed state |
| collapsed | `boolean` | - | Controlled collapsed state |
| onCollapsedChange | `(collapsed: boolean) => void` | - | Collapse state callback |

### Sidebar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| collapsible | `'icon' \| 'offcanvas' \| 'none'` | `'offcanvas'` | Collapse behavior |
| side | `'left' \| 'right'` | `'left'` | Sidebar position |

## Features

- Responsive collapse behavior
- Icon-only collapsed state
- Keyboard accessible
- Mobile-friendly overlay mode
