import { cn } from '@/lib/utils';

interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export default function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn('flex flex-col items-center gap-1 text-center', className)}>
      <span className="font-display text-4xl font-semibold tabular-nums text-accent md:text-5xl">
        {value}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
