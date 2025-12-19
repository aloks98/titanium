import { Avatar, AvatarFallback, Marquee } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

const reviews = [
  { name: 'Alice', text: 'Amazing product!' },
  { name: 'Bob', text: 'Great experience.' },
  { name: 'Charlie', text: 'Highly recommended.' },
  { name: 'Diana', text: 'Love it!' },
  { name: 'Eve', text: 'Best decision ever.' },
];

export const marqueeDocumentation: ComponentDocumentation = {
  id: 'marquee',
  name: 'Marquee',
  description:
    'An infinite scrolling animation component for showcasing content.',
  category: 'data-display',
  simpleExample: {
    example: (
      <div className="w-full max-w-md overflow-hidden">
        <Marquee className="py-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex items-center gap-3 rounded-lg border bg-background px-4 py-3 shadow-sm"
            >
              <Avatar className="size-8">
                <AvatarFallback>{review.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.text}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    ),
    code: `import { Marquee, Avatar, AvatarFallback } from '@e412/titanium';

const reviews = [
  { name: 'Alice', text: 'Amazing product!' },
  { name: 'Bob', text: 'Great experience.' },
  { name: 'Charlie', text: 'Highly recommended.' },
  { name: 'Diana', text: 'Love it!' },
  { name: 'Eve', text: 'Best decision ever.' },
];

export function MarqueeDemo() {
  return (
    <Marquee className="py-4">
      {reviews.map((review) => (
        <div
          key={review.name}
          className="flex items-center gap-3 rounded-lg border bg-background px-4 py-3 shadow-sm"
        >
          <Avatar className="size-8">
            <AvatarFallback>{review.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.text}</p>
          </div>
        </div>
      ))}
    </Marquee>
  );
}`,
  },
  examples: [
    {
      id: 'reverse',
      title: 'Reverse Direction',
      description: 'Marquee scrolling in the opposite direction.',
      example: (
        <div className="w-full max-w-md overflow-hidden">
          <Marquee reverse className="py-4">
            {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Radix UI'].map(
              (tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center rounded-full bg-primary/10 px-4 py-2"
                >
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ),
            )}
          </Marquee>
        </div>
      ),
      code: `import { Marquee } from '@e412/titanium';

export function MarqueeReverseDemo() {
  return (
    <Marquee reverse className="py-4">
      {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Radix UI'].map(
        (tech) => (
          <div
            key={tech}
            className="flex items-center justify-center rounded-full bg-primary/10 px-4 py-2"
          >
            <span className="text-sm font-medium">{tech}</span>
          </div>
        )
      )}
    </Marquee>
  );
}`,
    },
    {
      id: 'pause-on-hover',
      title: 'Pause on Hover',
      description: 'Marquee that pauses when hovered.',
      example: (
        <div className="w-full max-w-md overflow-hidden">
          <Marquee pauseOnHover className="py-4">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex items-center gap-3 rounded-lg border bg-background px-4 py-3 shadow-sm"
              >
                <Avatar className="size-8">
                  <AvatarFallback>{review.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.text}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      ),
      code: `import { Marquee, Avatar, AvatarFallback } from '@e412/titanium';

export function MarqueePauseDemo() {
  return (
    <Marquee pauseOnHover className="py-4">
      {reviews.map((review) => (
        <div
          key={review.name}
          className="flex items-center gap-3 rounded-lg border bg-background px-4 py-3 shadow-sm"
        >
          <Avatar className="size-8">
            <AvatarFallback>{review.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.text}</p>
          </div>
        </div>
      ))}
    </Marquee>
  );
}`,
    },
    {
      id: 'vertical',
      title: 'Vertical Marquee',
      description: 'Marquee scrolling vertically.',
      example: (
        <div className="h-48 max-w-md overflow-hidden">
          <Marquee vertical className="h-full">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex items-center gap-3 rounded-lg border bg-background px-4 py-3 shadow-sm"
              >
                <Avatar className="size-8">
                  <AvatarFallback>{review.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.text}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      ),
      code: `import { Marquee, Avatar, AvatarFallback } from '@e412/titanium';

export function MarqueeVerticalDemo() {
  return (
    <div className="h-48 overflow-hidden">
      <Marquee vertical className="h-full">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex items-center gap-3 rounded-lg border bg-background px-4 py-3 shadow-sm"
          >
            <Avatar className="size-8">
              <AvatarFallback>{review.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{review.name}</p>
              <p className="text-xs text-muted-foreground">{review.text}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Marquee',
      description: 'Infinite scrolling animation container.',
      props: [
        {
          name: 'reverse',
          type: 'boolean',
          description: 'Reverse the animation direction',
          defaultValue: 'false',
        },
        {
          name: 'pauseOnHover',
          type: 'boolean',
          description: 'Pause animation when hovered',
          defaultValue: 'false',
        },
        {
          name: 'vertical',
          type: 'boolean',
          description: 'Animate vertically instead of horizontally',
          defaultValue: 'false',
        },
        {
          name: 'repeat',
          type: 'number',
          description: 'Number of times to repeat the content',
          defaultValue: '4',
        },
        {
          name: 'autoFill',
          type: 'boolean',
          description: 'Automatically fill visible area with repetitions',
          defaultValue: 'false',
        },
        {
          name: 'ariaLabel',
          type: 'string',
          description: 'ARIA label for accessibility',
        },
        {
          name: 'ariaLive',
          type: '"off" | "polite" | "assertive"',
          description: 'ARIA live region politeness',
          defaultValue: '"off"',
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
