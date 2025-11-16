'use client';

import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';
type ThemeColorScheme =
  | 'default'
  | 'amber'
  | 'doom'
  | 'mono'
  | 'starry-night'
  | 'vintage';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultThemeColorScheme?: ThemeColorScheme;
  storageKey?: string;
  colorSchemeStorageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  themeColorScheme: ThemeColorScheme;
  setTheme: (theme: Theme) => void;
  setThemeColorScheme: (theme: ThemeColorScheme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  themeColorScheme: 'default',
  setThemeColorScheme: () => null,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'ui-theme',
  defaultThemeColorScheme = 'default',
  colorSchemeStorageKey = 'ui-theme-color-schema',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () =>
      (typeof window !== 'undefined'
        ? (localStorage.getItem(storageKey) as Theme)
        : null) || defaultTheme,
  );
  const [themeColorScheme, setThemeColorScheme] = useState<ThemeColorScheme>(
    () =>
      (typeof window !== 'undefined'
        ? (localStorage.getItem(colorSchemeStorageKey) as ThemeColorScheme)
        : null) || defaultThemeColorScheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.remove(
      'default',
      'amber',
      'doom',
      'mono',
      'starry-night',
      'vintage',
    );

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(themeColorScheme);
    root.classList.add(theme);
  }, [theme, themeColorScheme]);

  const value = {
    theme,
    themeColorScheme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    setThemeColorScheme: (themeColorScheme: ThemeColorScheme) => {
      localStorage.setItem(colorSchemeStorageKey, themeColorScheme);
      setThemeColorScheme(themeColorScheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
