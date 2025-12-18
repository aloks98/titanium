import {
  Button,
  cn,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Kbd,
  useTheme,
} from '@e412/titanium';
import { Moon, Search, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCommandStore } from '../stores/useCommandStore';

interface TopBarProps {
  className?: string;
}

export function TopBar({ className }: TopBarProps) {
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const { open } = useCommandStore();

  return (
    <header
      className={cn(
        'flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background px-4',
        className,
      )}
    >
      <button
        type="button"
        onClick={() => navigate('/')}
        className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
      >
        Titanium UI
      </button>
      <div className="flex-1" />
      <Button
        variant="outline"
        className="w-64 justify-between text-muted-foreground"
        onClick={open}
      >
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          <span>Search components...</span>
        </div>
        <Kbd keys={['command']}>K</Kbd>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
