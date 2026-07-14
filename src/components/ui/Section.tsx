import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export default function Section({ className, ...props }: SectionProps) {
  return <section className={cn('py-16 md:py-24', className)} {...props} />;
}
