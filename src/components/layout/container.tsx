import { cn } from '@/lib/shadcn/utils';

export interface ContainerProps extends React.ComponentProps<'div'> {}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={cn(
        'mx-auto w-full',
        'px-4',
        'sm:px-6',
        'md:px-10',
        'lg:px-16',
        'xl:px-20',
        '2xl:px-24',
        'max-w-screen-2xl',
        className
      )}
    >
      {children}
    </div>
  );
}
