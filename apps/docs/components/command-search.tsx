import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@e412/titanium';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocsRegistry } from '../docs/store/useDocsRegistery';
import { categoryNames } from '../docs/types';
import { useCommandStore } from '../stores/useCommandStore';

export function CommandSearch() {
  const navigate = useNavigate();
  const { isOpen, open, close } = useCommandStore();
  const { groupedSidebarItems } = useDocsRegistry();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        open();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const handleSelect = (componentId: string) => {
    close();
    navigate(`/component/${componentId}`);
  };

  const categories = Object.keys(groupedSidebarItems) as Array<
    keyof typeof groupedSidebarItems
  >;

  return (
    <CommandDialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <CommandInput placeholder="Search components..." />
      <CommandList>
        <CommandEmpty>No components found.</CommandEmpty>
        {categories.map((category) => (
          <CommandGroup
            key={category}
            heading={categoryNames[category as keyof typeof categoryNames]}
          >
            {groupedSidebarItems[category]?.map((item) => (
              <CommandItem
                key={item.id}
                value={item.name}
                onSelect={() => handleSelect(item.id)}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
