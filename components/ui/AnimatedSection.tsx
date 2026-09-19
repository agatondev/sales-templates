'use client'

import { motion, type Variants } from 'framer-motion'

type AnimationVariant = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scale'

const variants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

interface AnimatedSectionProps {
  children: React.ReactNode
  variant?: AnimationVariant
  className?: string
  delay?: number
  duration?: number
  stagger?: boolean
  once?: boolean
}

export function AnimatedSection({
  children,
  variant = 'fadeUp',
  className = '',
  delay = 0,
  duration = 0.6,
  stagger = false,
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={stagger ? staggerContainer : variants[variant]}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({
  children,
  variant = 'fadeUp',
  className = '',
  delay = 0,
}: Omit<AnimatedSectionProps, 'stagger' | 'once'>) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
