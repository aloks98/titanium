import '../lib/globals.css';
import { Button } from '@/base/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/base/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/base/select';
import { useTheme } from '@/base/theme-provider';
import { Moon, Sun } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import { AccordionDemo } from './demo/accordion-demo';

const components = [
  {
    name: 'Accordion',
    component: <AccordionDemo />,
  },
];

const App = () => {
  const componentMap = components.reduce(
    (acc, c) => {
      acc[c.name] = c.component;
      return acc;
    },
    {} as Record<string, ReactNode>,
  );

  const { setTheme } = useTheme();
  const [selectedComponent, setSelectedComponent] = useState<ReactNode | null>(
    null,
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center w-full p-4 border-b border-muted">
        <Select
          onValueChange={(value) => setSelectedComponent(componentMap[value])}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a component" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {components.map((c) => (
                <SelectItem value={c.name}>{c.name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
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
      </div>
      <div className="flex w-full p-4">
        {selectedComponent ? (
          selectedComponent
        ) : (
          <div className="mx-auto mt-4 text-lg text-muted-foreground">
            No component selected
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
