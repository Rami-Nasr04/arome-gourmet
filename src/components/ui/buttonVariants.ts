import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex touch-manipulation items-center justify-center gap-2 rounded-[var(--radius)] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-busy:pointer-events-none aria-busy:opacity-70',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-bean-deep',
        accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
        outline: 'border border-border bg-transparent text-foreground hover:bg-card',
        ghost: 'bg-transparent text-foreground hover:bg-card',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-11 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);
