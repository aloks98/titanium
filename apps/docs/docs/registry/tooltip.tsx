import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@e412/titanium';
import { Info, Plus, Settings } from 'lucide-react';
import type { ComponentDocumentation } from '../types';

export const tooltipDocumentation: ComponentDocumentation = {
  id: 'tooltip',
  name: 'Tooltip',
  description:
    'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  category: 'overlay',
  simpleExample: {
    example: (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    ),
    code: `import { Tooltip, TooltipContent, TooltipTrigger, Button } from '@e412/titanium';

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}`,
  },
  examples: [
    {
      id: 'sides',
      title: 'Positioning',
      description: 'Tooltip positioned on different sides.',
      example: (
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Top</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Bottom</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Left</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Right</p>
            </TooltipContent>
          </Tooltip>
        </div>
      ),
      code: `import { Tooltip, TooltipContent, TooltipTrigger, Button } from '@e412/titanium';
import { Plus } from 'lucide-react';

export function TooltipSidesDemo() {
  return (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">Top</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Bottom</TooltipContent>
      </Tooltip>
    </div>
  );
}`,
    },
    {
      id: 'with-icon',
      title: 'Icon Button Tooltip',
      description: 'Common pattern for icon buttons with tooltips.',
      example: (
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>More information</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add new item</p>
            </TooltipContent>
          </Tooltip>
        </div>
      ),
      code: `import { Tooltip, TooltipContent, TooltipTrigger, Button } from '@e412/titanium';
import { Info, Settings, Plus } from 'lucide-react';

export function TooltipIconDemo() {
  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>More information</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Settings</TooltipContent>
      </Tooltip>
    </div>
  );
}`,
    },
    {
      id: 'multiline',
      title: 'Multiline Content',
      description: 'Tooltip with longer content.',
      example: (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover for details</Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>
              This is a longer tooltip that contains more detailed information
              about the action or element.
            </p>
          </TooltipContent>
        </Tooltip>
      ),
      code: `import { Tooltip, TooltipContent, TooltipTrigger, Button } from '@e412/titanium';

export function TooltipMultilineDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This is a longer tooltip that contains more detailed information
          about the action or element.
        </p>
      </TooltipContent>
    </Tooltip>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Tooltip',
      description: 'The root tooltip component (includes TooltipProvider).',
      props: [
        {
          name: 'open',
          type: 'boolean',
          description: 'Controlled open state',
        },
        {
          name: 'defaultOpen',
          type: 'boolean',
          description: 'Default open state',
        },
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          description: 'Callback when open state changes',
        },
      ],
    },
    {
      component: 'TooltipTrigger',
      description: 'The element that triggers the tooltip.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Render as child element',
          defaultValue: 'false',
        },
      ],
    },
    {
      component: 'TooltipContent',
      description: 'The tooltip content popup.',
      props: [
        {
          name: 'side',
          type: '"top" | "right" | "bottom" | "left"',
          description: 'The preferred side of the trigger',
          defaultValue: '"top"',
        },
        {
          name: 'sideOffset',
          type: 'number',
          description: 'Offset from the trigger in pixels',
          defaultValue: '0',
        },
        {
          name: 'align',
          type: '"start" | "center" | "end"',
          description: 'Alignment relative to the trigger',
          defaultValue: '"center"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'TooltipProvider',
      description: 'Provider for controlling tooltip delay.',
      props: [
        {
          name: 'delayDuration',
          type: 'number',
          description: 'Delay before tooltip shows (ms)',
          defaultValue: '0',
        },
        {
          name: 'skipDelayDuration',
          type: 'number',
          description: 'Time after closing before delay resets',
          defaultValue: '300',
        },
      ],
    },
  ],
};
