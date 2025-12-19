import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@e412/titanium';
import { Settings } from 'lucide-react';
import type { ComponentDocumentation } from '../types';

export const popoverDocumentation: ComponentDocumentation = {
  id: 'popover',
  name: 'Popover',
  description: 'Displays rich content in a portal, triggered by a button.',
  category: 'overlay',
  simpleExample: {
    example: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    ),
    code: `import { Popover, PopoverContent, PopoverTrigger, Button } from '@e412/titanium';

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}`,
  },
  examples: [
    {
      id: 'with-form',
      title: 'With Form',
      description: 'Popover containing a form.',
      example: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ),
      code: `import { Popover, PopoverContent, PopoverTrigger, Button, Input, Label } from '@e412/titanium';
import { Settings } from 'lucide-react';

export function PopoverFormDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}`,
    },
    {
      id: 'positioning',
      title: 'Positioning',
      description: 'Popover with different side positioning.',
      example: (
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Top</Button>
            </PopoverTrigger>
            <PopoverContent side="top">
              <p className="text-sm">Popover content on top</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom">
              <p className="text-sm">Popover content on bottom</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Left</Button>
            </PopoverTrigger>
            <PopoverContent side="left">
              <p className="text-sm">Popover content on left</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Right</Button>
            </PopoverTrigger>
            <PopoverContent side="right">
              <p className="text-sm">Popover content on right</p>
            </PopoverContent>
          </Popover>
        </div>
      ),
      code: `import { Popover, PopoverContent, PopoverTrigger, Button } from '@e412/titanium';

export function PopoverPositioningDemo() {
  return (
    <div className="flex items-center gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p className="text-sm">Popover content on top</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p className="text-sm">Popover content on right</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}`,
    },
    {
      id: 'alignment',
      title: 'Alignment',
      description: 'Popover with different alignment options.',
      example: (
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Start</Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <p className="text-sm">Aligned to start</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Center</Button>
            </PopoverTrigger>
            <PopoverContent align="center">
              <p className="text-sm">Aligned to center</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">End</Button>
            </PopoverTrigger>
            <PopoverContent align="end">
              <p className="text-sm">Aligned to end</p>
            </PopoverContent>
          </Popover>
        </div>
      ),
      code: `import { Popover, PopoverContent, PopoverTrigger, Button } from '@e412/titanium';

export function PopoverAlignmentDemo() {
  return (
    <div className="flex items-center gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Start</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <p className="text-sm">Aligned to start</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">End</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <p className="text-sm">Aligned to end</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Popover',
      description: 'The root popover component.',
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
        {
          name: 'modal',
          type: 'boolean',
          description: 'Whether the popover is modal',
          defaultValue: 'false',
        },
      ],
    },
    {
      component: 'PopoverTrigger',
      description: 'The element that triggers the popover.',
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
      component: 'PopoverContent',
      description: 'The popover content container.',
      props: [
        {
          name: 'side',
          type: '"top" | "right" | "bottom" | "left"',
          description: 'The preferred side',
          defaultValue: '"bottom"',
        },
        {
          name: 'sideOffset',
          type: 'number',
          description: 'Offset from the trigger',
          defaultValue: '4',
        },
        {
          name: 'align',
          type: '"start" | "center" | "end"',
          description: 'Alignment relative to trigger',
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
      component: 'PopoverAnchor',
      description: 'An optional anchor element for positioning.',
      props: [
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Render as child element',
          defaultValue: 'false',
        },
      ],
    },
  ],
};
