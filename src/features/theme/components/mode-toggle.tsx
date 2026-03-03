'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { ClientOnly } from '@/components/shared/utils';

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const themeHandler = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  return (
    <ClientOnly>
      <Button
        variant="outline"
        size="icon"
        onClick={themeHandler}
        className="cursor-pointer"
      >
        <Sun className="absolute h-4 w-4 scale-100 dark:scale-0" />
        <Moon className="absolute h-4 w-4 scale-0 dark:scale-100" />
      </Button>
    </ClientOnly>
  );
}
