import Link from 'next/link';
import { RouteItem } from '@/constants';

type Props = {
  item: RouteItem;
};
export const Item = ({ item }: Props) => {
  return (
    <>
      <Link
        key={item.href}
        href={item.href}
        className="text-xl font-bold py-4 hover:bg-accent px-2 rounded-lg"
      >
        {item.label}
      </Link>
    </>
  );
};
