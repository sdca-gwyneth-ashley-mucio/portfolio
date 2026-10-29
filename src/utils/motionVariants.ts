import type { Variants, Transition } from 'motion/react';

/** Soft, damped spring used for hover/tap micro-interactions. */
export const SOFT_SPRING: Transition = {
  type: 'spring',
  stiffness: 280,
  damping: 24,
  mass: 0.8,
};

const GENTLE_EASE = [0.22, 1, 0.36, 1] as const;

/** Gentle upward glide + fade for sections and cards. */
export const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: GENTLE_EASE },
  },
};

/** Parent container that staggers its children's entrance. */
export const STAGGER_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** Shared viewport config: animate once, slightly before fully in view. */
export const REVEAL_VIEWPORT = { once: true, margin: '-50px' } as const;
