'use client';

import { cn } from '@/lib/shadcn/utils';
import { routeItems } from '@/constants';
import { ClientOnly } from '@/components/shared/utils';
import { useScrollDirection } from '@/hooks/ui';
import { Item } from '@/features/navigation/components/mobile/item';

export const Mobile = () => {
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
            return <Item item={item} />;
          })}
        </div>
      </nav>
    </ClientOnly>
  );
};
