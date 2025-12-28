# Tabs

Tabbed content organization with keyboard navigation.

## Import

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@e412/titanium';
```

## Usage

```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Account settings content here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Password settings content here.</p>
  </TabsContent>
</Tabs>
```

## Controlled

```tsx
const [tab, setTab] = useState('account');

<Tabs value={tab} onValueChange={setTab}>
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account content</TabsContent>
  <TabsContent value="password">Password content</TabsContent>
</Tabs>
```

## With icons

```tsx
import { User, Settings } from 'lucide-react';

<TabsList>
  <TabsTrigger value="profile" className="flex items-center gap-2">
    <User className="size-4" />
    Profile
  </TabsTrigger>
  <TabsTrigger value="settings" className="flex items-center gap-2">
    <Settings className="size-4" />
    Settings
  </TabsTrigger>
</TabsList>
```

## Full width

```tsx
<TabsList className="w-full">
  <TabsTrigger value="tab1" className="flex-1">Tab 1</TabsTrigger>
  <TabsTrigger value="tab2" className="flex-1">Tab 2</TabsTrigger>
  <TabsTrigger value="tab3" className="flex-1">Tab 3</TabsTrigger>
</TabsList>
```

## Disabled tab

```tsx
<TabsList>
  <TabsTrigger value="enabled">Enabled</TabsTrigger>
  <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
</TabsList>
```

## Props

### Tabs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `string` | - | Controlled active tab |
| onValueChange | `(value: string) => void` | - | Tab change callback |
| defaultValue | `string` | - | Initial active tab |
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Tab orientation |

### TabsTrigger

| Prop | Type | Description |
|------|------|-------------|
| value | `string` | Tab identifier |
| disabled | `boolean` | Disable the tab |

## Accessibility

- Full keyboard navigation (Arrow keys)
- Proper ARIA roles and states
- Focus management
