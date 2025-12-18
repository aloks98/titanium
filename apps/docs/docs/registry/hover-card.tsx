import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
} from '@e412/titanium';
import { CalendarDays } from 'lucide-react';
import type { ComponentDocumentation } from '../types';

export const hoverCardDocumentation: ComponentDocumentation = {
  id: 'hover-card',
  name: 'Hover Card',
  description:
    'A card that appears when hovering over a trigger element, useful for previews.',
  category: 'overlay',
  simpleExample: {
    example: (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
    code: `import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
} from '@e412/titanium';
import { CalendarDays } from 'lucide-react';

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`,
  },
  examples: [
    {
      id: 'custom-alignment',
      title: 'Custom Alignment',
      description: 'Hover card with different alignment options.',
      example: (
        <div className="flex gap-8">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline">Align Start</Button>
            </HoverCardTrigger>
            <HoverCardContent align="start" className="w-64">
              <p className="text-sm">
                This hover card is aligned to the start of the trigger.
              </p>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline">Align End</Button>
            </HoverCardTrigger>
            <HoverCardContent align="end" className="w-64">
              <p className="text-sm">
                This hover card is aligned to the end of the trigger.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      ),
      code: `import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Button,
} from '@e412/titanium';

export function HoverCardAlignmentDemo() {
  return (
    <div className="flex gap-8">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Align Start</Button>
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-64">
          <p className="text-sm">
            This hover card is aligned to the start of the trigger.
          </p>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Align End</Button>
        </HoverCardTrigger>
        <HoverCardContent align="end" className="w-64">
          <p className="text-sm">
            This hover card is aligned to the end of the trigger.
          </p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}`,
    },
    {
      id: 'product-preview',
      title: 'Product Preview',
      description: 'Hover card showing a product preview.',
      example: (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-base">
              MacBook Pro
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-3">
              <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Product Image</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold">MacBook Pro 14"</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Apple M3 Pro chip, 18GB unified memory, 512GB SSD storage.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">$1,999</span>
                <Button size="sm">View Details</Button>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ),
      code: `import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Button,
} from '@e412/titanium';

export function HoverCardProductDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-base">
          MacBook Pro
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <div className="h-32 bg-muted rounded-md flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Product Image</span>
          </div>
          <div>
            <h4 className="text-sm font-semibold">MacBook Pro 14"</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Apple M3 Pro chip, 18GB unified memory, 512GB SSD storage.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">$1,999</span>
            <Button size="sm">View Details</Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`,
    },
  ],
  api: [
    {
      component: 'HoverCard',
      description: 'The root hover card component.',
      props: [
        {
          name: 'open',
          type: 'boolean',
          description: 'The controlled open state',
        },
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          description: 'Callback when open state changes',
        },
        {
          name: 'openDelay',
          type: 'number',
          description: 'Delay before showing (ms)',
          defaultValue: '700',
        },
        {
          name: 'closeDelay',
          type: 'number',
          description: 'Delay before hiding (ms)',
          defaultValue: '300',
        },
      ],
    },
    {
      component: 'HoverCardTrigger',
      description: 'The element that triggers the hover card.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Merge props onto child element',
          defaultValue: 'false',
        },
      ],
    },
    {
      component: 'HoverCardContent',
      description: 'The content displayed in the hover card.',
      props: [
        {
          name: 'side',
          type: '"top" | "right" | "bottom" | "left"',
          description: 'Preferred side to show',
          defaultValue: '"bottom"',
        },
        {
          name: 'sideOffset',
          type: 'number',
          description: 'Distance from trigger',
          defaultValue: '4',
        },
        {
          name: 'align',
          type: '"start" | "center" | "end"',
          description: 'Alignment against trigger',
          defaultValue: '"center"',
        },
        {
          name: 'alignOffset',
          type: 'number',
          description: 'Offset from alignment',
          defaultValue: '0',
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
