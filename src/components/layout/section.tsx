import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/shadcn/utils';

const sectionVariants = cva('w-full relative', {
  variants: {
    size: {
      none: 'py-0',
      text: 'py-text-gap',
      content: 'py-content-gap',
      fluid: 'py-fluid-gap',
    },
  },
  defaultVariants: {
    size: 'content',
  },
});

interface SectionProps
  extends React.ComponentProps<'section'>,
    VariantProps<typeof sectionVariants> {}

export function Section({ children, className, size, ...props }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ size }), className)} {...props}>
      {children}
    </section>
  );
}
