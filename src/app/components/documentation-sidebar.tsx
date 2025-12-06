import { cn } from '@/utils';
import {useDocsRegistry} from "../docs/store/useDocsRegistery.ts";

export function DocumentationSidebar() {
    const { sidebarItems, selectedDoc, setSelectedDoc } = useDocsRegistry();

  return (
    <div className="w-64 border-r border-border bg-background">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Titanium UI</h2>
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedDoc(item.id)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-md text-sm transition-colors hover:bg-muted',
                selectedDoc.id === item.id
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
