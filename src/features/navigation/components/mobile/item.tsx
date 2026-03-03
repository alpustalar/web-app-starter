import Link from 'next/link';
import { cn } from '@/lib/shadcn/utils';
import { RouteItem } from '@/constants';
import { usePathname } from 'next/navigation';

type Props = {
  item: RouteItem;
};
export const Item = ({ item }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  return (
    <>
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
    </>
  );
};
