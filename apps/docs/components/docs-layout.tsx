import { SidebarInset, SidebarProvider } from '@e412/titanium';
import type { ReactNode } from 'react';
import { AppHeader } from './app-header';
import { AppSidebar } from './app-sidebar';

interface DocsLayoutProps {
  children: ReactNode;
  currentComponentId?: string;
}

export function DocsLayout({ children, currentComponentId }: DocsLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar currentComponentId={currentComponentId} />
      <SidebarInset className="flex flex-col max-h-svh">
        <AppHeader />
        <main className="flex-1 overflow-y-auto" data-scroll-container>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
