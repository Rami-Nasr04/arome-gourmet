import Container from '@/components/ui/Container';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

/** Standard subpage opener — includes top offset for the fixed header. */
export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <div className="border-b border-border bg-card pb-14 pt-32">
      <Container>
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-2 font-display text-4xl font-semibold text-foreground md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </Container>
    </div>
  );
}
