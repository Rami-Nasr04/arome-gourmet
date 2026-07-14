import { motion } from 'framer-motion';
import { fadeRise } from '@/lib/motion';

interface RevealProps {
  className?: string;
  children: React.ReactNode;
}

/** Fade-and-rise once when scrolled into view. MotionConfig(reducedMotion="user") neutralizes it. */
export default function Reveal({ className, children }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeRise}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
    >
      {children}
    </motion.div>
  );
}
