import {
  Separator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@e412/titanium';
import { Github } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDocsRegistry } from '../docs/store/useDocsRegistery';
import { type ComponentCategory, categoryNames } from '../docs/types';

interface AppSidebarProps {
  currentComponentId?: string;
}

export function AppSidebar({ currentComponentId }: AppSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { groupedSidebarItems } = useDocsRegistry();

  const isInstallationPage = location.pathname === '/installation';

  const version = import.meta.env.APP_VERSION || '0.0.0';
  const commitHash = import.meta.env.COMMIT_HASH || 'unknown';

  return (
    <Sidebar>
      <SidebarHeader className="h-14 border-b border-sidebar-border px-4 justify-center">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity text-left"
        >
          Titanium UI
        </button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase tracking-wider text-xs text-muted-foreground font-bold">
            Getting Started
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="cursor-pointer"
                  isActive={isInstallationPage}
                  onClick={() => navigate('/installation')}
                >
                  Installation
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {Object.entries(groupedSidebarItems).map(([category, items]) => {
          const categoryName =
            categoryNames[category as ComponentCategory] || category;

          return (
            <SidebarGroup key={category}>
              <SidebarGroupLabel className="uppercase tracking-wider text-xs text-muted-foreground font-bold">
                {categoryName}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        className="cursor-pointer"
                        isActive={item.id === currentComponentId}
                        onClick={() => navigate(`/component/${item.id}`)}
                      >
                        {item.name}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground py-1">
          <span>v{version}</span>
          <Separator orientation="vertical" className="h-3" />
          <a
            href={`https://github.com/aloks98/titanium/commit/${commitHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Github className="size-3" />
            <code className="text-[10px]">{commitHash}</code>
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
