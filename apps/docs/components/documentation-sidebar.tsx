import { useNavigate, useLocation } from 'react-router-dom';
import { useDocsRegistry } from '../docs/store/useDocsRegistery';
import { categoryNames, type ComponentCategory } from '../docs/types';
import { BookOpen } from 'lucide-react';

interface DocumentationSidebarProps {
  currentComponentId: string;
}

export function DocumentationSidebar({
  currentComponentId,
}: DocumentationSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { groupedSidebarItems } = useDocsRegistry();

  const isInstallationPage = location.pathname === '/installation';

  return (
    <div className="p-2">
      {/* Getting Started Section */}
      <div className="mb-4">
        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Getting Started
        </div>
        <button
          type="button"
          onClick={() => navigate('/installation')}
          className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ${
            isInstallationPage
              ? 'bg-accent text-accent-foreground font-medium'
              : 'text-foreground hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          <BookOpen className="h-4 w-4" />
          Installation
        </button>
      </div>

      {/* Components Section */}
      {Object.entries(groupedSidebarItems).map(([category, items]) => {
        const categoryName =
          categoryNames[category as ComponentCategory] || category;

        return (
          <div key={category} className="mb-4">
            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {categoryName}
            </div>
            <div className="space-y-0.5">
              {items.map((item) => {
                const isSelected = item.id === currentComponentId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigate(`/component/${item.id}`)}
                    className={`w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${
                      isSelected
                        ? 'bg-accent text-accent-foreground font-medium'
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
