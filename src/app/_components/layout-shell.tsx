'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import { ClientOnly } from '@/components/shared/utils';
import { Header } from '@/features/header';
import Content from '@/features/content';
import AppSidebar from '@/features/app-sidebar';
import { CSSProperties } from 'react';
import { Navigation } from '@/features/navigation';

type Props = {
  children: Readonly<React.ReactNode>;
};

const sidebarWidth = 280;
const mobileHeaderHeight = 64;
const desktopHeaderHeight = 80;

export const LayoutShell = ({ children }: Props) => {
  return (
    <ClientOnly>
      <SidebarProvider defaultOpen={false}>
        <div
          className="relative min-h-screen w-full flex"
          style={
            {
              '--sidebar-width': `${sidebarWidth}px`,
              '--mobile-h': `${mobileHeaderHeight}px`,
              '--desktop-h': `${desktopHeaderHeight}px`,
            } as CSSProperties
          }
        >
          <AppSidebar />
          <div className="flex flex-col flex-1 min-w-0 h-screen ">
            <Header />
            <Content>{children}</Content>
          </div>
        </div>
      </SidebarProvider>
      <Navigation.Mobile />
    </ClientOnly>
  );
};
