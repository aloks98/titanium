# Card

Container component for grouping related content with header, body, and footer.

## Import

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@e412/titanium';
```

## Usage

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content and body.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Simple card

```tsx
<Card>
  <CardContent className="pt-6">
    <p>Simple card with just content.</p>
  </CardContent>
</Card>
```

## With form

```tsx
<Card>
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>Enter your details below.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input placeholder="Name" />
    <Input type="email" placeholder="Email" />
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Submit</Button>
  </CardFooter>
</Card>
```

## Composable structure

Each Card subcomponent can be used independently and styled:

```tsx
<Card className="w-[350px]">
  <CardHeader className="pb-2">
    <CardTitle className="text-lg">Compact Header</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Custom spacing and sizing.</p>
  </CardContent>
</Card>
```

## Props

All Card components accept standard HTML div props plus `className` for styling.
