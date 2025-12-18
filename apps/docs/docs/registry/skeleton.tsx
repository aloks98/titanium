import { Skeleton } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const skeletonDocumentation: ComponentDocumentation = {
  id: 'skeleton',
  name: 'Skeleton',
  description: 'Use to show a placeholder while content is loading.',
  category: 'feedback',
  simpleExample: {
    example: (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    ),
    code: `import { Skeleton } from '@e412/titanium';

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'card',
      title: 'Card Skeleton',
      description: 'Skeleton placeholder for a card component.',
      example: (
        <div className="w-full max-w-sm rounded-lg border p-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      ),
      code: `import { Skeleton } from '@e412/titanium';

export function SkeletonCardDemo() {
  return (
    <div className="w-full max-w-sm rounded-lg border p-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}`,
    },
    {
      id: 'list',
      title: 'List Skeleton',
      description: 'Skeleton placeholder for a list of items.',
      example: (
        <div className="w-full max-w-md space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-md" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ),
      code: `import { Skeleton } from '@e412/titanium';

export function SkeletonListDemo() {
  return (
    <div className="w-full max-w-md space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-md" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}`,
    },
    {
      id: 'form',
      title: 'Form Skeleton',
      description: 'Skeleton placeholder for a form.',
      example: (
        <div className="w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-24 w-full" />
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
      ),
      code: `import { Skeleton } from '@e412/titanium';

export function SkeletonFormDemo() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="h-10 w-24" />
    </div>
  );
}`,
    },
    {
      id: 'table',
      title: 'Table Skeleton',
      description: 'Skeleton placeholder for a table.',
      example: (
        <div className="w-full max-w-lg">
          <div className="flex border-b pb-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4 ml-4" />
            <Skeleton className="h-4 w-1/4 ml-4" />
            <Skeleton className="h-4 w-1/4 ml-4" />
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex py-3 border-b">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4 ml-4" />
              <Skeleton className="h-4 w-1/4 ml-4" />
              <Skeleton className="h-4 w-1/4 ml-4" />
            </div>
          ))}
        </div>
      ),
      code: `import { Skeleton } from '@e412/titanium';

export function SkeletonTableDemo() {
  return (
    <div className="w-full max-w-lg">
      <div className="flex border-b pb-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4 ml-4" />
        <Skeleton className="h-4 w-1/4 ml-4" />
        <Skeleton className="h-4 w-1/4 ml-4" />
      </div>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex py-3 border-b">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4 ml-4" />
          <Skeleton className="h-4 w-1/4 ml-4" />
          <Skeleton className="h-4 w-1/4 ml-4" />
        </div>
      ))}
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Skeleton',
      description: 'A placeholder component with pulse animation.',
      props: [
        {
          name: 'className',
          type: 'string',
          description:
            'CSS classes to define size, shape, and styling (required for dimensions)',
          required: true,
        },
      ],
    },
  ],
};
