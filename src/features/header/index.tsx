'use client';
import { Container } from '@/components/layout';
import { cn } from '@/lib/shadcn/utils';
import { ClientOnly } from '@/components/shared/utils';
import { Logo, ModeToggle } from '@/components/shared/ui';
import { useHeaderPosition } from '@/features/header/use-header-position';
import { useSidebar } from '@/components/ui/sidebar';
import { HeaderNavigation } from '@/features/header/components/header-navigation';

export const Header = () => {
  const { open: sidebarIsOpen } = useSidebar();
  const position = useHeaderPosition();

  return (
    <ClientOnly>
      <header
        className={cn(
          'z-50 fixed w-full top-0 border-b bg-background/95 backdrop-blur transition-all duration-[var(--duration-nav)] ease-in-out',
          'h-[var(--mobile-h)] desktop:h-[var(--desktop-h)]',
          position,
          sidebarIsOpen ? 'translate-x-[var(--sidebar-w)]' : 'translate-x-0'
        )}
      >
        <Container className="flex items-center justify-between py-3.5">
          <div className="flex flex-none justify-center order-2 desktop:order-1 ">
            <Logo />
          </div>
          <div className="hidden tablet:flex order-1 desktop:order-2">
            <HeaderNavigation />
          </div>
          <div className="flex order-3 items-center justify-center desktop:order-3">
            <ModeToggle />
          </div>
        </Container>
      </header>
    </ClientOnly>
  );
};
