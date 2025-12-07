import { Button } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const buttonDocumentation: ComponentDocumentation = {
  id: 'button',
  name: 'Button',
  description: 'Displays a button or a component that looks like a button.',
  category: 'form',
  simpleExample: {
    example: (
      <div className="flex flex-wrap gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    ),
    code: `import { Button } from '@/base/button';

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Different button variants for different use cases.',
      example: (
        <div className="flex flex-wrap gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      ),
      code: `import { Button } from '@/base/button';

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Different button sizes for different contexts.',
      example: (
        <div className="flex items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="md">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      ),
      code: `import { Button } from '@/base/button';

export function ButtonSizesDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Button',
      description: 'The button component.',
      props: [
        {
          name: 'variant',
          type: '"default" | "destructive" | "outline" | "secondary" | "ghost"',
          description: 'The visual style variant',
          defaultValue: '"default"',
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg" | "icon"',
          description: 'The size of the button',
          defaultValue: '"md"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
        {
          name: 'children',
          type: 'ReactNode',
          description: 'The content to render inside the button',
          required: true,
        },
      ],
    },
  ],
};
