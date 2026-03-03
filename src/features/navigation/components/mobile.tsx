'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/shadcn/utils';
import { routeItems } from '@/constants';
import { ClientOnly } from '@/components/shared/utils';
import { useScrollDirection } from '@/hooks/ui';

export const Mobile = () => {
  const pathname = usePathname();
  const { direction } = useScrollDirection();

  const isHidden = direction === 'down';

  return (
    <ClientOnly>
      <nav
        className={cn(
          'fixed tablet:hidden left-4 right-4 z-50 transition-all duration-500 ease-in-out',
          'bottom-1 h-16',
          'rounded-2xl border border-border/40 bg-background/80 backdrop-blur-md shadow-lg',
          isHidden
            ? 'translate-y-[calc(100%+24px)] opacity-0'
            : 'translate-y-0 opacity-100'
        )}
      >
        <div className="flex h-full w-full items-center justify-around px-2">
          {routeItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative flex h-full flex-1 flex-col items-center justify-center gap-1 transition-all duration-300',
                  isActive
                    ? 'text-primary scale-110'
                    : 'text-muted-foreground hover:text-primary/70'
                )}
              >
                {/* İkonun Varsa Buraya Gelecek */}
                <div
                  className={cn(
                    'p-1 rounded-xl transition-colors',
                    isActive ? 'bg-primary/10' : 'bg-transparent'
                  )}
                >
                  {/* Örn: <item.icon size={20} /> */}
                </div>

                <span
                  className={cn(
                    'text-[10px] font-semibold tracking-wide uppercase',
                    isActive ? 'opacity-100' : 'opacity-70'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </ClientOnly>
  );
};
