import { Spinner, Button } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const spinnerDocumentation: ComponentDocumentation = {
  id: 'spinner',
  name: 'Spinner',
  description:
    'A loading spinner component with multiple visual variants.',
  category: 'feedback',
  simpleExample: {
    example: (
      <div className="flex items-center gap-4">
        <Spinner />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    ),
    code: `import { Spinner } from '@e412/titanium';

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'All available spinner variants.',
      example: (
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="default" />
            <span className="text-xs text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="circle" />
            <span className="text-xs text-muted-foreground">Circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="pinwheel" />
            <span className="text-xs text-muted-foreground">Pinwheel</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="circle-filled" />
            <span className="text-xs text-muted-foreground">Circle Filled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="ellipsis" />
            <span className="text-xs text-muted-foreground">Ellipsis</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="ring" />
            <span className="text-xs text-muted-foreground">Ring</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="bars" />
            <span className="text-xs text-muted-foreground">Bars</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="infinite" />
            <span className="text-xs text-muted-foreground">Infinite</span>
          </div>
        </div>
      ),
      code: `import { Spinner } from '@e412/titanium';

export function SpinnerVariantsDemo() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <Spinner variant="default" />
      <Spinner variant="circle" />
      <Spinner variant="pinwheel" />
      <Spinner variant="circle-filled" />
      <Spinner variant="ellipsis" />
      <Spinner variant="ring" />
      <Spinner variant="bars" />
      <Spinner variant="infinite" />
    </div>
  );
}`,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Spinner in different sizes.',
      example: (
        <div className="flex items-end gap-8">
          <div className="flex flex-col items-center gap-2">
            <Spinner size={16} />
            <span className="text-xs text-muted-foreground">16px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size={24} />
            <span className="text-xs text-muted-foreground">24px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size={32} />
            <span className="text-xs text-muted-foreground">32px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size={48} />
            <span className="text-xs text-muted-foreground">48px</span>
          </div>
        </div>
      ),
      code: `import { Spinner } from '@e412/titanium';

export function SpinnerSizesDemo() {
  return (
    <div className="flex items-end gap-8">
      <Spinner size={16} />
      <Spinner size={24} />
      <Spinner size={32} />
      <Spinner size={48} />
    </div>
  );
}`,
    },
    {
      id: 'in-button',
      title: 'In Button',
      description: 'Spinner used inside a button for loading state.',
      example: (
        <div className="flex items-center gap-4">
          <Button disabled>
            <Spinner size={16} className="mr-2" />
            Loading...
          </Button>
          <Button variant="outline" disabled>
            <Spinner variant="circle" size={16} className="mr-2" />
            Please wait
          </Button>
          <Button variant="secondary" disabled>
            <Spinner variant="ellipsis" size={16} className="mr-2" />
            Processing
          </Button>
        </div>
      ),
      code: `import { Spinner, Button } from '@e412/titanium';

export function SpinnerButtonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button disabled>
        <Spinner size={16} className="mr-2" />
        Loading...
      </Button>
      <Button variant="outline" disabled>
        <Spinner variant="circle" size={16} className="mr-2" />
        Please wait
      </Button>
      <Button variant="secondary" disabled>
        <Spinner variant="ellipsis" size={16} className="mr-2" />
        Processing
      </Button>
    </div>
  );
}`,
    },
    {
      id: 'fullscreen',
      title: 'Fullscreen Loading',
      description: 'Spinner centered in a container for full-page loading.',
      example: (
        <div className="relative h-48 w-full rounded-lg border bg-muted/20">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <Spinner size="lg" variant="ring" />
            <p className="text-sm text-muted-foreground">Loading content...</p>
          </div>
        </div>
      ),
      code: `import { Spinner } from '@e412/titanium';

export function SpinnerFullscreenDemo() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <Spinner size="lg" variant="ring" />
        <p className="text-sm text-muted-foreground">Loading content...</p>
      </div>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Spinner',
      description: 'A loading spinner with multiple visual variants.',
      props: [
        {
          name: 'variant',
          type: '"default" | "circle" | "pinwheel" | "circle-filled" | "ellipsis" | "ring" | "bars" | "infinite"',
          description: 'The visual style of the spinner',
          defaultValue: '"default"',
        },
        {
          name: 'size',
          type: 'number',
          description: 'The size of the spinner in pixels',
          defaultValue: '24',
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
