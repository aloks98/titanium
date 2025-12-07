import { AspectRatio } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const aspectRatioDocumentation: ComponentDocumentation = {
  id: 'aspect-ratio',
  name: 'Aspect Ratio',
  description:
    'Displays content within a container that maintains a specific aspect ratio.',
  category: 'layout',
  simpleExample: {
    example: (
      <div className="w-full max-w-2xl">
        <AspectRatio ratio={16 / 9} className="bg-background border">
          <div className="flex h-full items-center justify-center text-sm">
            16:9 Aspect Ratio
          </div>
        </AspectRatio>
      </div>
    ),
    code: `import { AspectRatio } from '@e412/titanium';

export function AspectRatioDemo() {
  return (
    <div className="w-full max-w-2xl">
      <AspectRatio ratio={16 / 9} className="bg-background border">
        <div className="flex h-full items-center justify-center text-sm">
          16:9 Aspect Ratio
        </div>
      </AspectRatio>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'square',
      title: 'Square Ratio',
      description: '1:1 square aspect ratio.',
      example: (
        <div className="w-full max-w-96">
          <AspectRatio ratio={1 / 1} className="bg-background border">
            <div className="flex h-full items-center justify-center text-sm">
              1:1 Square
            </div>
          </AspectRatio>
        </div>
      ),
      code: `import { AspectRatio } from '@e412/titanium';

export function AspectRatioSquareDemo() {
  return (
    <div className="w-full max-w-96">
      <AspectRatio ratio={1 / 1} className="bg-background border">
        <div className="flex h-full items-center justify-center text-sm">
          1:1 Square
        </div>
      </AspectRatio>
    </div>
  );
}`,
    },
    {
      id: 'portrait',
      title: 'Portrait Ratio',
      description: '9:16 portrait aspect ratio.',
      example: (
        <div className="w-full max-w-52">
          <AspectRatio ratio={9 / 16} className="bg-background border">
            <div className="flex h-full items-center justify-center text-sm">
              9:16 Portrait
            </div>
          </AspectRatio>
        </div>
      ),
      code: `import { AspectRatio } from '@e412/titanium';

export function AspectRatioPortraitDemo() {
  return (
    <div className="w-full max-w-52">
      <AspectRatio ratio={9 / 16} className="bg-background border">
        <div className="flex h-full items-center justify-center text-sm">
          9:16 Portrait
        </div>
      </AspectRatio>
    </div>
  );
}`,
    },
    {
      id: 'standard',
      title: 'Standard Ratio',
      description: '4:3 standard aspect ratio.',
      example: (
        <div className="w-full max-w-xl">
          <AspectRatio ratio={4 / 3} className="bg-background border">
            <div className="flex h-full items-center justify-center text-sm">
              4:3 Standard
            </div>
          </AspectRatio>
        </div>
      ),
      code: `import { AspectRatio } from '@e412/titanium';

export function AspectRatioStandardDemo() {
  return (
    <div className="w-full max-w-xl">
      <AspectRatio ratio={4 / 3} className="bg-background border">
        <div className="flex h-full items-center justify-center text-sm">
          4:3 Standard
        </div>
      </AspectRatio>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'AspectRatio',
      description:
        'A component that maintains a specific aspect ratio for its content.',
      props: [
        {
          name: 'ratio',
          type: 'number',
          description: 'The aspect ratio (width / height)',
          required: true,
        },
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Whether to render as child element',
          defaultValue: 'false',
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
