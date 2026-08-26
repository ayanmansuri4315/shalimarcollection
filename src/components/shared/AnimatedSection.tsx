import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export type SectionDirection = 'right' | 'left' | 'subtle' | 'none';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: SectionDirection;
  className?: string;
  id?: string;
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction = 'right',
  className = '',
  id,
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion || direction === 'none') {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  // Refined subtle offsets according to specification:
  // Desktop: 30-45px (using 36px), Mobile: 20-30px (using 24px)
  const isRight = direction === 'right';
  const isLeft = direction === 'left';
  const isSubtle = direction === 'subtle';

  // Desktop horizontal displacement: 36px. Smooth entrance, not jarring or sliding across screen.
  const variants = {
    hidden: {
      opacity: 0,
      x: isRight ? 36 : isLeft ? -36 : 0,
      y: isSubtle ? 20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier ease-out
      },
    },
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: '-30px' }}
      variants={variants}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
};
