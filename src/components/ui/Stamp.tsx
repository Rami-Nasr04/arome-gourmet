import { cn } from '@/lib/utils';

interface StampProps {
  country: string;
  data: string[];
  className?: string;
}

/** Export-stamp signature: stenciled origin name over a monospace data row,
 *  jute hairline border — echoes the stencils on green-coffee jute sacks. */
export default function Stamp({ country, data, className }: StampProps) {
  return (
    <div
      className={cn(
        'inline-block -rotate-1 rounded-sm border-2 border-jute bg-card/40 px-4 py-3 font-mono uppercase',
        className,
      )}
    >
      <div className="text-lg font-medium tracking-widest text-foreground">{country}</div>
      {data.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-x-2 text-xs tracking-wider text-muted-foreground tabular-nums">
          {data.map((row, i) => (
            <span key={row}>
              {i > 0 && <span aria-hidden="true" className="me-2 text-jute">·</span>}
              {row}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
