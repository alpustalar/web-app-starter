import { useSidebar } from '@/components/ui/sidebar';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/shadcn/utils';
import { Show } from '@/components/shared/utils';
import { Navigation } from '@/features/navigation';

export const HeaderNavigation = () => {
  const { open: sidebarIsOpen, toggleSidebar } = useSidebar();

  return (
    <>
      <div className="hidden desktop:flex">
        <Navigation.Desktop />
      </div>

      <div className="hidden tablet:flex desktop:hidden items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn(
            'relative z-[70] transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)]',
            sidebarIsOpen ? '-translate-x-6 opacity-80' : 'translate-x-0'
          )}
        >
          <div className="relative h-6 w-6">
            <Show>
              <Show.When isTrue={sidebarIsOpen}>
                <X
                  className="h-6 w-6 absolute inset-0 transition-transform duration-300 rotate-0 scale-100"
                  strokeWidth={3}
                />
              </Show.When>
              <Show.Else>
                <Menu className="h-6 w-6 absolute inset-0 transition-transform duration-300 rotate-0 scale-100" />
              </Show.Else>
            </Show>
          </div>
        </Button>
      </div>
    </>
  );
};
