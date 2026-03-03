'use client';

import { cn } from '@/lib/shadcn/utils';
import { useSidebar } from '@/components/ui/sidebar';
import { Conditional } from '@/components/shared/utils';

type Props = {
  children: Readonly<React.ReactNode>;
};

const Content = ({ children }: Props) => {
  const { open: isOpen, setOpen } = useSidebar();

  const close = () => setOpen(false);

  return (
    <div
      className={cn(
        'relative z-10 min-h-screen bg-background transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] flex-1'
      )}
      onClick={close}
    >
      <Conditional show={isOpen}>
        <div className="absolute inset-0 z-[20] bg-black/5 backdrop-blur-[2px] cursor-pointer" />
      </Conditional>

      <main className="pt-[var(--mobile-h)] desktop:pt-[var(--desktop-h)]">
        {children}
      </main>
    </div>
  );
};

export default Content;
