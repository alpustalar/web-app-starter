import { Desktop } from '@/features/navigation/components/desktop';
import { Tablet } from '@/features/navigation/components/tablet';
import { Mobile } from '@/features/navigation/components/mobile';

const Navigation = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
Navigation.Desktop = Desktop;
Navigation.Tablet = Tablet;
Navigation.Mobile = Mobile;

export { Navigation };
