import { Link, type LinkProps } from 'react-router-dom';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants } from './buttonVariants';

interface LinkButtonProps extends LinkProps, VariantProps<typeof buttonVariants> {}

/** A router Link styled as a Button — for CTA navigation. */
export default function LinkButton({ className, variant, size, ...props }: LinkButtonProps) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
