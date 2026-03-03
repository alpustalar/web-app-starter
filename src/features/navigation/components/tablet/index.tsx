'use client';

import Link from 'next/link';
import { routeItems } from '@/constants';
import { cn } from '@/lib/shadcn/utils';

export const Tablet = () => {
  return (
    <>
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-[60] w-[280px] bg-background border-r transform transition-transform duration-300 ease-in-out',
          'translate-x-0'
        )}
      >
        <nav className="flex flex-col p-4">
          {routeItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl font-bold py-4 hover:bg-accent px-2 rounded-lg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="fixed inset-0 bg-black/20 z-[55] desktop:hidden" />
    </>
  );
};
