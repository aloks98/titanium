# Navigation Menu

Complex navigation with dropdowns and megamenus.

## Import

```tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@e412/titanium';
```

## Usage

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px]">
          <li>
            <NavigationMenuLink asChild>
              <a href="/products/analytics">Analytics</a>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <a href="/products/automation">Automation</a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
        About
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Megamenu layout

```tsx
<NavigationMenuContent>
  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <a className="flex h-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6">
          <div className="mb-2 text-lg font-medium">Featured Product</div>
          <p className="text-sm text-muted-foreground">
            Description of the featured product.
          </p>
        </a>
      </NavigationMenuLink>
    </li>
    <li>
      <NavigationMenuLink asChild>
        <a href="/docs">Documentation</a>
      </NavigationMenuLink>
    </li>
    <li>
      <NavigationMenuLink asChild>
        <a href="/examples">Examples</a>
      </NavigationMenuLink>
    </li>
  </ul>
</NavigationMenuContent>
```

## Props

### NavigationMenu

| Prop | Type | Description |
|------|------|-------------|
| value | `string` | Controlled active item |
| onValueChange | `(value: string) => void` | Active item callback |

### NavigationMenuContent

| Prop | Type | Description |
|------|------|-------------|
| forceMount | `boolean` | Keep content mounted |

## Accessibility

- Full keyboard navigation
- Arrow keys navigate items
- Escape closes dropdowns
- ARIA labels for expanded state
