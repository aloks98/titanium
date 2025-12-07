import { ComponentViewer } from './component-viewer';
import { DocumentationSidebar } from './documentation-sidebar';
import { TopBar } from './top-bar';

export function DocumentationLayout() {
  return (
    <div className="h-screen flex flex-col bg-background relative">
      <div className="fixed top-0 left-0 right-0 z-10">
        <TopBar />
      </div>

      <div className="flex h-[calc(100vh-theme(space.16))] mt-16">
        <div className="w-64 border-r border-border bg-background">
          <DocumentationSidebar />
        </div>

        <div className="flex-1 overflow-y-auto">
          <ComponentViewer />
        </div>
      </div>
    </div>
  );
}
