import { Scrollspy, Button } from '@e412/titanium';
import { useRef } from 'react';
import type { ComponentDocumentation } from '../types';

export const scrollspyDocumentation: ComponentDocumentation = {
  id: 'scrollspy',
  name: 'Scrollspy',
  description:
    'A component that tracks scroll position and highlights the active section in navigation.',
  category: 'navigation',
  simpleExample: {
    example: (
      <div className="rounded-lg border p-4">
        <p className="text-sm text-muted-foreground mb-4">
          Scrollspy tracks scroll position and updates navigation automatically.
        </p>
        <div className="flex gap-4">
          <nav className="flex flex-col gap-2">
            <a
              href="#section-1"
              className="text-sm px-3 py-1.5 rounded-md hover:bg-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              data-scrollspy-anchor="section-1"
            >
              Introduction
            </a>
            <a
              href="#section-2"
              className="text-sm px-3 py-1.5 rounded-md hover:bg-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              data-scrollspy-anchor="section-2"
            >
              Getting Started
            </a>
            <a
              href="#section-3"
              className="text-sm px-3 py-1.5 rounded-md hover:bg-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              data-scrollspy-anchor="section-3"
            >
              API Reference
            </a>
          </nav>
        </div>
      </div>
    ),
    code: `import { Scrollspy } from '@e412/titanium';
import { useRef } from 'react';

export function ScrollspyDemo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex gap-4">
      <Scrollspy targetRef={scrollRef}>
        <nav className="flex flex-col gap-2 sticky top-0">
          <a
            href="#section-1"
            data-scrollspy-anchor="section-1"
            className="px-3 py-1.5 rounded-md hover:bg-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
          >
            Introduction
          </a>
          <a
            href="#section-2"
            data-scrollspy-anchor="section-2"
            className="px-3 py-1.5 rounded-md hover:bg-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
          >
            Getting Started
          </a>
          <a
            href="#section-3"
            data-scrollspy-anchor="section-3"
            className="px-3 py-1.5 rounded-md hover:bg-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
          >
            API Reference
          </a>
        </nav>
      </Scrollspy>

      <div ref={scrollRef} className="h-96 overflow-y-auto">
        <section id="section-1" className="min-h-96">
          <h2>Introduction</h2>
          <p>Content for introduction...</p>
        </section>
        <section id="section-2" className="min-h-96">
          <h2>Getting Started</h2>
          <p>Content for getting started...</p>
        </section>
        <section id="section-3" className="min-h-96">
          <h2>API Reference</h2>
          <p>Content for API reference...</p>
        </section>
      </div>
    </div>
  );
}`,
  },
  examples: [
    {
      id: 'with-offset',
      title: 'With Offset',
      description: 'Scrollspy with custom scroll offset for fixed headers.',
      example: (
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Use the offset prop to account for fixed headers or other elements.
          </p>
          <code className="block mt-2 text-xs bg-muted p-2 rounded">
            {'<Scrollspy offset={80}>'}
          </code>
        </div>
      ),
      code: `import { Scrollspy } from '@e412/titanium';

export function ScrollspyOffsetDemo() {
  return (
    <Scrollspy offset={80}>
      <nav className="fixed top-0 w-full bg-background border-b h-20">
        <a href="#section-1" data-scrollspy-anchor="section-1">
          Section 1
        </a>
        <a href="#section-2" data-scrollspy-anchor="section-2">
          Section 2
        </a>
      </nav>
    </Scrollspy>
  );
}`,
    },
    {
      id: 'with-callback',
      title: 'With Update Callback',
      description: 'Scrollspy with onUpdate callback for tracking active section.',
      example: (
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Use onUpdate to react to section changes.
          </p>
          <code className="block mt-2 text-xs bg-muted p-2 rounded">
            {'<Scrollspy onUpdate={(id) => console.log("Active:", id)}>'}
          </code>
        </div>
      ),
      code: `import { Scrollspy } from '@e412/titanium';
import { useState } from 'react';

export function ScrollspyCallbackDemo() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div>
      <p>Active section: {activeSection}</p>
      <Scrollspy onUpdate={setActiveSection}>
        <nav>
          <a href="#intro" data-scrollspy-anchor="intro">
            Intro
          </a>
          <a href="#features" data-scrollspy-anchor="features">
            Features
          </a>
        </nav>
      </Scrollspy>
    </div>
  );
}`,
    },
    {
      id: 'no-history',
      title: 'Without URL History',
      description: 'Scrollspy without updating the URL hash.',
      example: (
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Set history to false to prevent URL hash updates.
          </p>
          <code className="block mt-2 text-xs bg-muted p-2 rounded">
            {'<Scrollspy history={false}>'}
          </code>
        </div>
      ),
      code: `import { Scrollspy } from '@e412/titanium';

export function ScrollspyNoHistoryDemo() {
  return (
    <Scrollspy history={false}>
      <nav>
        <a href="#section-1" data-scrollspy-anchor="section-1">
          Section 1
        </a>
        <a href="#section-2" data-scrollspy-anchor="section-2">
          Section 2
        </a>
      </nav>
    </Scrollspy>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Scrollspy',
      description: 'Tracks scroll position and highlights active navigation items.',
      props: [
        {
          name: 'targetRef',
          type: 'RefObject<HTMLElement | Document>',
          description: 'Ref to the scrollable container (defaults to document)',
        },
        {
          name: 'onUpdate',
          type: '(id: string) => void',
          description: 'Callback when active section changes',
        },
        {
          name: 'offset',
          type: 'number',
          description: 'Scroll offset in pixels',
          defaultValue: '0',
        },
        {
          name: 'smooth',
          type: 'boolean',
          description: 'Enable smooth scrolling when clicking anchors',
          defaultValue: 'true',
        },
        {
          name: 'dataAttribute',
          type: 'string',
          description: 'Custom data attribute prefix',
          defaultValue: '"scrollspy"',
        },
        {
          name: 'history',
          type: 'boolean',
          description: 'Update URL hash on section change',
          defaultValue: 'true',
        },
        {
          name: 'throttleTime',
          type: 'number',
          description: 'Throttle time for scroll events (ms)',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'Data Attributes',
      description: 'HTML data attributes used by Scrollspy.',
      props: [
        {
          name: 'data-scrollspy-anchor',
          type: 'string',
          description: 'Set on navigation links with the target section ID',
        },
        {
          name: 'data-scrollspy-offset',
          type: 'number',
          description: 'Override offset for individual anchors',
        },
        {
          name: 'data-active',
          type: 'boolean',
          description: 'Automatically set on the active anchor',
        },
      ],
    },
  ],
};
