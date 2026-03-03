import { Item } from '@/features/navigation/components/desktop/item';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { routeItems } from '@/constants';

const Desktop = () => {
  return (
    <>
      <NavigationMenu className="hidden desktop:flex gap-x-6">
        {routeItems.map((item) => (
          <Item key={item.label} {...item} />
        ))}
      </NavigationMenu>
    </>
  );
};

export { Desktop };
