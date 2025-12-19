import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const cardDocumentation: ComponentDocumentation = {
  id: 'card',
  name: 'Card',
  description: 'Displays a card with header, content, and footer.',
  category: 'layout',
  simpleExample: {
    example: (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardHeading>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeading>
        </CardHeader>
        <CardContent>
          <p>Card content goes here. This is the main body of the card.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    ),
    code: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  Button,
} from '@e412/titanium';

export function CardDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardHeading>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeading>
      </CardHeader>
      <CardContent>
        <p>Card content goes here. This is the main body of the card.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}`,
  },
  examples: [
    {
      id: 'default-variant',
      title: 'Default Variant',
      description: 'The default card variant with border and shadow.',
      example: (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardHeading>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>
                This is the default card variant with a subtle border.
              </CardDescription>
            </CardHeading>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The default variant uses a white background with a border and
              shadow. It's perfect for most use cases.
            </p>
          </CardContent>
        </Card>
      ),
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardHeading,
  CardTitle,
} from '@e412/titanium';

export function CardDefaultDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardHeading>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>
            This is the default card variant with a subtle border.
          </CardDescription>
        </CardHeading>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          The default variant uses a white background with a border and shadow.
        </p>
      </CardContent>
    </Card>
  );
}`,
    },
    {
      id: 'accent-variant',
      title: 'Accent Variant',
      description: 'The accent card variant with muted background.',
      example: (
        <Card variant="accent" className="w-full max-w-md">
          <CardHeader>
            <CardHeading>
              <CardTitle>Accent Card</CardTitle>
              <CardDescription>
                This is the accent card variant with a muted background.
              </CardDescription>
            </CardHeading>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The accent variant uses a muted background with internal padding.
              Content areas have a white background.
            </p>
          </CardContent>
        </Card>
      ),
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardHeading,
  CardTitle,
} from '@e412/titanium';

export function CardAccentDemo() {
  return (
    <Card variant="accent" className="w-full max-w-md">
      <CardHeader>
        <CardHeading>
          <CardTitle>Accent Card</CardTitle>
          <CardDescription>
            This is the accent card variant with a muted background.
          </CardDescription>
        </CardHeading>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          The accent variant uses a muted background with internal padding.
        </p>
      </CardContent>
    </Card>
  );
}`,
    },
    {
      id: 'with-toolbar',
      title: 'With Toolbar',
      description: 'Card with header toolbar for actions.',
      example: (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardHeading>
              <CardTitle>Card with Actions</CardTitle>
              <CardDescription>Manage your settings here.</CardDescription>
            </CardHeading>
            <CardToolbar>
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button size="sm">Save</Button>
            </CardToolbar>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use the toolbar to add action buttons to your card header.
            </p>
          </CardContent>
        </Card>
      ),
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
  Button,
} from '@e412/titanium';

export function CardToolbarDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardHeading>
          <CardTitle>Card with Actions</CardTitle>
          <CardDescription>Manage your settings here.</CardDescription>
        </CardHeading>
        <CardToolbar>
          <Button variant="outline" size="sm">Edit</Button>
          <Button size="sm">Save</Button>
        </CardToolbar>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Use the toolbar to add action buttons to your card header.
        </p>
      </CardContent>
    </Card>
  );
}`,
    },
    {
      id: 'full-example',
      title: 'Complete Card',
      description: 'A complete card with all sections.',
      example: (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardHeading>
              <CardTitle>Create Project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeading>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Name
                <input
                  type="text"
                  placeholder="My Project"
                  className="w-full px-3 py-2 border rounded-md text-sm mt-1"
                />
              </label>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Framework
                <select className="w-full px-3 py-2 border rounded-md text-sm mt-1">
                  <option>Next.js</option>
                  <option>React</option>
                  <option>Vue</option>
                </select>
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      ),
      code: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  Button,
} from '@e412/titanium';

export function CardCompleteDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardHeading>
          <CardTitle>Create Project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeading>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="My Project"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Card',
      description:
        'The root card component that provides context to child components.',
      props: [
        {
          name: 'variant',
          type: '"default" | "accent"',
          description: 'The visual variant of the card',
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
      component: 'CardHeader',
      description: 'The header section of the card.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CardHeading',
      description: 'Container for card title and description.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CardTitle',
      description: 'The title of the card.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CardDescription',
      description: 'The description text of the card.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CardToolbar',
      description: 'Container for card header actions.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CardContent',
      description: 'The main content area of the card.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CardTable',
      description: 'A specialized content area for tables.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CardFooter',
      description: 'The footer section of the card.',
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
