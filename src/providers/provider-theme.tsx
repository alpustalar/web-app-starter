'use client';
import { ThemeProvider } from 'next-themes';
import { ClientOnly } from '@/components/shared/utils';

type Props = {
  children: Readonly<React.ReactNode>;
};

export const ProviderTheme = ({ children }: Props) => {
  return (
    <ClientOnly>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ClientOnly>
  );
};
