import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const carouselDocumentation: ComponentDocumentation = {
  id: 'carousel',
  name: 'Carousel',
  description:
    'A carousel component built on Embla Carousel for displaying slideable content.',
  category: 'data-display',
  simpleExample: {
    example: (
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((num) => (
            <CarouselItem key={num}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{num}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
    code: `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@e412/titanium';

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((num) => (
          <CarouselItem key={num}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{num}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`,
  },
  examples: [
    {
      id: 'multiple-items',
      title: 'Multiple Items Per View',
      description: 'Carousel showing multiple items at once.',
      example: (
        <Carousel className="w-full max-w-sm mx-auto">
          <CarouselContent className="-ml-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <CarouselItem key={num} className="pl-2 basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <span className="text-2xl font-semibold">{num}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ),
      code: `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@e412/titanium';

export function CarouselMultipleDemo() {
  return (
    <Carousel className="w-full max-w-sm mx-auto">
      <CarouselContent className="-ml-2">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <CarouselItem key={num} className="pl-2 basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <span className="text-2xl font-semibold">{num}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`,
    },
    {
      id: 'vertical',
      title: 'Vertical Orientation',
      description: 'Carousel with vertical scrolling.',
      example: (
        <Carousel orientation="vertical" className="w-full max-w-xs mx-auto">
          <CarouselContent className="-mt-1 h-[200px]">
            {[1, 2, 3, 4, 5].map((num) => (
              <CarouselItem key={num} className="pt-1 basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-4">
                      <span className="text-2xl font-semibold">{num}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ),
      code: `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@e412/titanium';

export function CarouselVerticalDemo() {
  return (
    <Carousel orientation="vertical" className="w-full max-w-xs mx-auto">
      <CarouselContent className="-mt-1 h-[200px]">
        {[1, 2, 3, 4, 5].map((num) => (
          <CarouselItem key={num} className="pt-1 basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-4">
                  <span className="text-2xl font-semibold">{num}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`,
    },
    {
      id: 'autoplay',
      title: 'With Options',
      description: 'Carousel with loop and alignment options.',
      example: (
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full max-w-xs mx-auto"
        >
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((num) => (
              <CarouselItem key={num} className="basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{num}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ),
      code: `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@e412/titanium';

export function CarouselOptionsDemo() {
  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      className="w-full max-w-xs mx-auto"
    >
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((num) => (
          <CarouselItem key={num} className="basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{num}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Carousel',
      description: 'The root carousel container.',
      props: [
        {
          name: 'opts',
          type: 'CarouselOptions',
          description: 'Embla Carousel options (align, loop, etc.)',
        },
        {
          name: 'plugins',
          type: 'CarouselPlugin',
          description: 'Embla Carousel plugins',
        },
        {
          name: 'orientation',
          type: '"horizontal" | "vertical"',
          description: 'The scroll direction',
          defaultValue: '"horizontal"',
        },
        {
          name: 'setApi',
          type: '(api: CarouselApi) => void',
          description: 'Callback to get the carousel API instance',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CarouselContent',
      description: 'Container for carousel items.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CarouselItem',
      description: 'An individual slide item.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes (use basis-* for sizing)',
        },
      ],
    },
    {
      component: 'CarouselPrevious',
      description: 'Button to navigate to the previous slide.',
      props: [
        {
          name: 'variant',
          type: 'ButtonVariant',
          description: 'Button variant',
          defaultValue: '"outline"',
        },
        {
          name: 'size',
          type: 'ButtonSize',
          description: 'Button size',
          defaultValue: '"icon"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'CarouselNext',
      description: 'Button to navigate to the next slide.',
      props: [
        {
          name: 'variant',
          type: 'ButtonVariant',
          description: 'Button variant',
          defaultValue: '"outline"',
        },
        {
          name: 'size',
          type: 'ButtonSize',
          description: 'Button size',
          defaultValue: '"icon"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'useCarousel',
      description: 'Hook to access carousel context and API.',
      props: [
        {
          name: 'Returns',
          type: 'CarouselContextProps',
          description:
            '{ carouselRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext, orientation }',
        },
      ],
    },
  ],
};
