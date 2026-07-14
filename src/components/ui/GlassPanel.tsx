import { cn } from '@/lib/utils';

type GlassPanelProps = React.HTMLAttributes<HTMLDivElement>;

/** Warm translucent panel for floating over 3D scenes. Use sparingly (perf). */
export default function GlassPanel({ className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius)] border border-border/50 bg-card/60 backdrop-blur-md',
        className,
      )}
      {...props}
    />
  );
}
