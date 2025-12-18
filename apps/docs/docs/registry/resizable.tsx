import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const resizableDocumentation: ComponentDocumentation = {
  id: 'resizable',
  name: 'Resizable',
  description:
    'Resizable panels built on react-resizable-panels for creating adjustable layouts.',
  category: 'layout',
  simpleExample: {
    example: (
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Panel One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Panel Two</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
    code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@e412/titanium';

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Panel One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Panel Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`,
  },
  examples: [
    {
      id: 'vertical',
      title: 'Vertical',
      description: 'Resizable panels in vertical orientation.',
      example: (
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[300px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Header</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      ),
      code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@e412/titanium';

export function ResizableVerticalDemo() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[300px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`,
    },
    {
      id: 'with-handle',
      title: 'With Handle',
      description: 'Resizable panels with a visible drag handle.',
      example: (
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[200px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      ),
      code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@e412/titanium';

export function ResizableWithHandleDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`,
    },
    {
      id: 'three-panels',
      title: 'Three Panels',
      description: 'Layout with three resizable panels.',
      example: (
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[200px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={20} minSize={10}>
            <div className="flex h-full items-center justify-center p-2">
              <span className="text-sm font-semibold">Left</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={60}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Center</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={20} minSize={10}>
            <div className="flex h-full items-center justify-center p-2">
              <span className="text-sm font-semibold">Right</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      ),
      code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@e412/titanium';

export function ResizableThreePanelsDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={20} minSize={10}>
        <div className="flex h-full items-center justify-center p-2">
          <span className="text-sm font-semibold">Left</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Center</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20} minSize={10}>
        <div className="flex h-full items-center justify-center p-2">
          <span className="text-sm font-semibold">Right</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`,
    },
  ],
  api: [
    {
      component: 'ResizablePanelGroup',
      description: 'Container for resizable panels.',
      props: [
        {
          name: 'direction',
          type: '"horizontal" | "vertical"',
          description: 'The direction of the panels',
          required: true,
        },
        {
          name: 'autoSaveId',
          type: 'string',
          description: 'ID for persisting panel sizes to localStorage',
        },
        {
          name: 'onLayout',
          type: '(sizes: number[]) => void',
          description: 'Callback when panel sizes change',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'ResizablePanel',
      description: 'An individual resizable panel.',
      props: [
        {
          name: 'defaultSize',
          type: 'number',
          description: 'The default size as a percentage (0-100)',
        },
        {
          name: 'minSize',
          type: 'number',
          description: 'Minimum size as a percentage',
        },
        {
          name: 'maxSize',
          type: 'number',
          description: 'Maximum size as a percentage',
        },
        {
          name: 'collapsible',
          type: 'boolean',
          description: 'Whether the panel can be collapsed',
          defaultValue: 'false',
        },
        {
          name: 'collapsedSize',
          type: 'number',
          description: 'Size when collapsed',
        },
        {
          name: 'onCollapse',
          type: '() => void',
          description: 'Callback when panel collapses',
        },
        {
          name: 'onExpand',
          type: '() => void',
          description: 'Callback when panel expands',
        },
        {
          name: 'onResize',
          type: '(size: number) => void',
          description: 'Callback when panel resizes',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'ResizableHandle',
      description: 'The drag handle between panels.',
      props: [
        {
          name: 'withHandle',
          type: 'boolean',
          description: 'Show a visible grip handle',
          defaultValue: 'false',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disable resizing',
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
