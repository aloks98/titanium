import { ScrollArea, ScrollBar, Separator } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const artworks = [
  { artist: 'Ornella Binni', art: 'Reflect' },
  { artist: 'Tom Byrom', art: 'Ocean View' },
  { artist: 'Vladimir Malyavko', art: 'Mountain' },
  { artist: 'Mae Mu', art: 'Still Life' },
  { artist: 'Shifaaz Shamoon', art: 'Beach' },
];

export const scrollAreaDocumentation: ComponentDocumentation = {
  id: 'scroll-area',
  name: 'Scroll Area',
  description: 'A custom scrollable area with styled scrollbars.',
  category: 'layout',
  simpleExample: {
    example: (
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.slice(0, 20).map((tag) => (
            <div key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
    code: `import { ScrollArea, Separator } from '@e412/titanium';

const tags = Array.from({ length: 20 }).map(
  (_, i, a) => \`v1.2.0-beta.\${a.length - i}\`
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`,
  },
  examples: [
    {
      id: 'horizontal',
      title: 'Horizontal Scrolling',
      description: 'Scroll area with horizontal scrolling.',
      example: (
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {artworks.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <div className="h-[150px] w-[150px] bg-muted flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">
                      {artwork.art}
                    </span>
                  </div>
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{' '}
                  <span className="font-semibold text-foreground">
                    {artwork.artist}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ),
      code: `import { ScrollArea, ScrollBar } from '@e412/titanium';

const artworks = [
  { artist: 'Ornella Binni', art: 'Reflect' },
  { artist: 'Tom Byrom', art: 'Ocean View' },
  { artist: 'Vladimir Malyavko', art: 'Mountain' },
  { artist: 'Mae Mu', art: 'Still Life' },
  { artist: 'Shifaaz Shamoon', art: 'Beach' },
];

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {artworks.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <div className="h-[150px] w-[150px] bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">
                  {artwork.art}
                </span>
              </div>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{' '}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}`,
    },
    {
      id: 'both-directions',
      title: 'Both Directions',
      description: 'Scroll area with both vertical and horizontal scrolling.',
      example: (
        <ScrollArea className="h-72 w-72 rounded-md border">
          <div className="p-4">
            <div className="w-[500px]">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Large Content Area
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                This content is wider and taller than the scroll area container,
                allowing for scrolling in both directions.
              </p>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="py-2">
                  <span className="text-sm">
                    Row {i + 1}: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </span>
                </div>
              ))}
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ),
      code: `import { ScrollArea, ScrollBar } from '@e412/titanium';

export function ScrollAreaBothDemo() {
  return (
    <ScrollArea className="h-72 w-72 rounded-md border">
      <div className="p-4">
        <div className="w-[500px]">
          <h4 className="mb-4 text-sm font-medium leading-none">
            Large Content Area
          </h4>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="py-2">
              <span className="text-sm">
                Row {i + 1}: Lorem ipsum dolor sit amet...
              </span>
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}`,
    },
  ],
  api: [
    {
      component: 'ScrollArea',
      description: 'Container for scrollable content with custom scrollbars.',
      props: [
        {
          name: 'type',
          type: '"auto" | "always" | "scroll" | "hover"',
          description: 'Scrollbar visibility behavior',
          defaultValue: '"hover"',
        },
        {
          name: 'scrollHideDelay',
          type: 'number',
          description: 'Delay before scrollbar hides (ms)',
          defaultValue: '600',
        },
        {
          name: 'viewportRef',
          type: 'Ref<HTMLDivElement>',
          description: 'Ref to the viewport element',
        },
        {
          name: 'viewportClassName',
          type: 'string',
          description: 'Additional classes for the viewport',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'ScrollBar',
      description: 'The scrollbar component.',
      props: [
        {
          name: 'orientation',
          type: '"vertical" | "horizontal"',
          description: 'The scrollbar orientation',
          defaultValue: '"vertical"',
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
