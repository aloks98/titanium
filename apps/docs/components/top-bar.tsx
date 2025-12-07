import {
  Button,
  cn,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  useTheme,
} from '@e412/titanium';
import { Moon, Palette, Sun } from 'lucide-react';

interface TopBarProps {
  className?: string;
}

export function TopBar({ className }: TopBarProps) {
  const { setTheme, setThemeColorScheme } = useTheme();

  return (
    <header
      className={cn(
        'flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background px-4',
        className,
      )}
    >
      <div className="flex-1" />
      <div className="flex gap-2">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">Toggle Color Scheme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setThemeColorScheme('default')}>
              Default
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeColorScheme('amber')}>
              Amber
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeColorScheme('doom')}>
              Doom
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeColorScheme('mono')}>
              Mono
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setThemeColorScheme('starry-night')}
            >
              Starry Night
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeColorScheme('vintage')}>
              Vintage
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
