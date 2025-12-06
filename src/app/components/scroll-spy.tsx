import { cn } from '@/utils';
import { useEffect, useState } from 'react';

interface ScrollSpyItem {
  id: string;
  title: string;
  level: number;
}

interface ScrollSpyProps {
  items: ScrollSpyItem[];
  className?: string;
}

export function ScrollSpy({ items, className }: ScrollSpyProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={cn('space-y-2 sticky top-24', className)}>
      <h3 className="text-sm font-semibold text-muted-foreground mb-3">
        On this page
      </h3>
      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-md transition-colors hover:bg-muted border border-transparent',
                activeId === item.id
                  ? 'bg-muted font-medium text-foreground border-border'
                  : 'text-muted-foreground hover:text-foreground',
                item.level > 1 && 'pl-6 text-xs',
              )}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
