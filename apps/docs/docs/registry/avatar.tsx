import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const avatarDocumentation: ComponentDocumentation = {
  id: 'avatar',
  name: 'Avatar',
  description:
    'An image element with a fallback for representing the user.',
  category: 'data-display',
  simpleExample: {
    example: (
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
    code: `import { Avatar, AvatarFallback, AvatarImage } from '@e412/titanium';

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}`,
  },
  examples: [
    {
      id: 'with-fallback',
      title: 'With Fallback',
      description: 'Avatar with fallback initials when image fails to load.',
      example: (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/broken-image.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/broken-image.jpg" alt="User" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/broken-image.jpg" alt="User" />
            <AvatarFallback>XY</AvatarFallback>
          </Avatar>
        </div>
      ),
      code: `import { Avatar, AvatarFallback, AvatarImage } from '@e412/titanium';

export function AvatarFallbackDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
}`,
    },
    {
      id: 'with-status',
      title: 'With Status Indicator',
      description: 'Avatar with online/offline/busy/away status indicators.',
      example: (
        <div className="flex items-center gap-6">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Online" />
            <AvatarFallback>ON</AvatarFallback>
            <AvatarIndicator className="bottom-0 right-0">
              <AvatarStatus variant="online" />
            </AvatarIndicator>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Offline" />
            <AvatarFallback>OF</AvatarFallback>
            <AvatarIndicator className="bottom-0 right-0">
              <AvatarStatus variant="offline" />
            </AvatarIndicator>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Busy" />
            <AvatarFallback>BY</AvatarFallback>
            <AvatarIndicator className="bottom-0 right-0">
              <AvatarStatus variant="busy" />
            </AvatarIndicator>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Away" />
            <AvatarFallback>AW</AvatarFallback>
            <AvatarIndicator className="bottom-0 right-0">
              <AvatarStatus variant="away" />
            </AvatarIndicator>
          </Avatar>
        </div>
      ),
      code: `import { Avatar, AvatarFallback, AvatarImage, AvatarIndicator, AvatarStatus } from '@e412/titanium';

export function AvatarStatusDemo() {
  return (
    <div className="flex items-center gap-6">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Online" />
        <AvatarFallback>ON</AvatarFallback>
        <AvatarIndicator className="bottom-0 right-0">
          <AvatarStatus variant="online" />
        </AvatarIndicator>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Busy" />
        <AvatarFallback>BY</AvatarFallback>
        <AvatarIndicator className="bottom-0 right-0">
          <AvatarStatus variant="busy" />
        </AvatarIndicator>
      </Avatar>
    </div>
  );
}`,
    },
    {
      id: 'sizes',
      title: 'Different Sizes',
      description: 'Avatars in different sizes using className.',
      example: (
        <div className="flex items-center gap-4">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar className="size-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="XLarge" />
            <AvatarFallback>XL</AvatarFallback>
          </Avatar>
        </div>
      ),
      code: `import { Avatar, AvatarFallback, AvatarImage } from '@e412/titanium';

export function AvatarSizesDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar className="size-10">
        <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="size-14">
        <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  );
}`,
    },
    {
      id: 'group',
      title: 'Avatar Group',
      description: 'Multiple avatars stacked together.',
      example: (
        <div className="flex -space-x-3">
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://github.com/github.png" alt="User 3" />
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>+5</AvatarFallback>
          </Avatar>
        </div>
      ),
      code: `import { Avatar, AvatarFallback, AvatarImage } from '@e412/titanium';

export function AvatarGroupDemo() {
  return (
    <div className="flex -space-x-3">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>+5</AvatarFallback>
      </Avatar>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Avatar',
      description: 'The avatar container component.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes for sizing and styling',
        },
      ],
    },
    {
      component: 'AvatarImage',
      description: 'The image element for the avatar.',
      props: [
        {
          name: 'src',
          type: 'string',
          description: 'The image source URL',
          required: true,
        },
        {
          name: 'alt',
          type: 'string',
          description: 'Alternative text for the image',
          required: true,
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AvatarFallback',
      description: 'Fallback content displayed when image fails to load.',
      props: [
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Fallback content (usually initials)',
          required: true,
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'AvatarIndicator',
      description: 'Container for positioning status indicators.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Position classes (e.g., "bottom-0 right-0")',
        },
      ],
    },
    {
      component: 'AvatarStatus',
      description: 'Status dot indicator for the avatar.',
      props: [
        {
          name: 'variant',
          type: '"online" | "offline" | "busy" | "away"',
          description: 'The status variant',
          defaultValue: '"online"',
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
