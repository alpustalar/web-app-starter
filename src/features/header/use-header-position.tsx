import { useScrollDirection } from '@/hooks/ui';

export const useHeaderPosition = () => {
  const initialPosition = 'opacity-100 translate-y-0';
  const hiddenPosition = 'opacity-0 -translate-y-full';

  const { direction } = useScrollDirection(20);

  return direction === 'down' ? hiddenPosition : initialPosition;
};
