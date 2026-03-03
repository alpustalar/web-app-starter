'use client';
import Link from 'next/link';

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/shadcn/utils';
import { usePathname } from 'next/navigation';
import { ClientOnly } from '@/components/shared/utils';
import { RouteItem } from '@/constants';

export function Item({ label, href }: RouteItem) {
  const path = usePathname();

  const isActive =
    href === '/'
      ? path === '/'
      : path.startsWith(href) && path.length >= href.length;

  return (
    <ClientOnly>
      <NavigationMenuItem>
        <NavigationMenuLink
          asChild
          isActive={isActive}
          className={cn('tracking-widest uppercase')}
        >
          <Link href={href}>{label}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </ClientOnly>
  );
}
