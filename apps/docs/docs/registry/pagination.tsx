import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  Button,
} from '@e412/titanium';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ComponentDocumentation } from '../types';

export const paginationDocumentation: ComponentDocumentation = {
  id: 'pagination',
  name: 'Pagination',
  description:
    'Navigation component for paginated content.',
  category: 'navigation',
  simpleExample: {
    example: (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button variant="outline" size="icon">1</Button>
          </PaginationItem>
          <PaginationItem>
            <Button variant="outline" size="icon">2</Button>
          </PaginationItem>
          <PaginationItem>
            <Button variant="default" size="icon">3</Button>
          </PaginationItem>
          <PaginationItem>
            <Button variant="outline" size="icon">4</Button>
          </PaginationItem>
          <PaginationItem>
            <Button variant="outline" size="icon">5</Button>
          </PaginationItem>
          <PaginationItem>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
    code: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  Button,
} from '@e412/titanium';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">1</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">2</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="default" size="icon">3</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">4</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">5</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
  },
  examples: [
    {
      id: 'with-ellipsis',
      title: 'With Ellipsis',
      description: 'Pagination with ellipsis for many pages.',
      example: (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline" size="icon">1</Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline" size="icon">2</Button>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <Button variant="default" size="icon">8</Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline" size="icon">9</Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline" size="icon">10</Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ),
      code: `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  Button,
} from '@e412/titanium';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PaginationEllipsisDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">1</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">2</Button>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Button variant="default" size="icon">8</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">9</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">10</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    },
    {
      id: 'with-text-buttons',
      title: 'With Text Buttons',
      description: 'Pagination with text labels for navigation.',
      example: (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ),
      code: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  Button,
} from '@e412/titanium';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PaginationTextButtonsDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="outline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline">
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    },
    {
      id: 'compact',
      title: 'Compact',
      description: 'Compact pagination for limited space.',
      example: (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button variant="ghost" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <span className="text-sm text-muted-foreground px-2">
                Page 3 of 10
              </span>
            </PaginationItem>
            <PaginationItem>
              <Button variant="ghost" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ),
      code: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  Button,
} from '@e412/titanium';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PaginationCompactDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="ghost" size="sm">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <span className="text-sm text-muted-foreground px-2">
            Page 3 of 10
          </span>
        </PaginationItem>
        <PaginationItem>
          <Button variant="ghost" size="sm">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled Navigation',
      description: 'Pagination with disabled navigation buttons.',
      example: (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="default" size="icon">1</Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline" size="icon">2</Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline" size="icon">3</Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ),
      code: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  Button,
} from '@e412/titanium';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PaginationDisabledDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="outline" size="icon" disabled>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="default" size="icon">1</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">2</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">3</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Pagination',
      description: 'The root pagination navigation container.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'PaginationContent',
      description: 'The container for pagination items.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'PaginationItem',
      description: 'A wrapper for individual pagination elements.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'PaginationEllipsis',
      description: 'Indicates skipped page numbers.',
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
