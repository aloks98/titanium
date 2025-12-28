import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Kbd,
  SidebarTrigger,
  useTheme,
} from '@e412/titanium';
import { Github, Moon, Search, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCommandStore } from '../stores/useCommandStore';

export function AppHeader() {
  const { setTheme } = useTheme();
  const { open } = useCommandStore();

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border bg-background px-4">
      <SidebarTrigger className="md:hidden" />
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
        <Kbd>⌘K</Kbd>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link
          to="https://github.com/aloks98/titanium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">GitHub</span>
        </Link>
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
