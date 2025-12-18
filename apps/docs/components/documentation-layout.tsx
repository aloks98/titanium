import { useEffect, useRef } from 'react';
import { ComponentViewer } from './component-viewer';
import { DocumentationSidebar } from './documentation-sidebar';
import { TopBar } from './top-bar';

interface DocumentationLayoutProps {
  componentId: string;
}

export function DocumentationLayout({ componentId }: DocumentationLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [componentId]);

  return (
    <div className="h-screen w-screen flex flex-col bg-background overflow-hidden">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 shrink-0 border-r border-border overflow-y-auto">
          <DocumentationSidebar currentComponentId={componentId} />
        </div>

        <div ref={contentRef} className="flex-1 overflow-y-auto">
          <ComponentViewer componentId={componentId} />
        </div>
      </div>
    </div>
  );
}
