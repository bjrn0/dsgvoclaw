'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variant?: 'default' | 'highlight';
  size?: 'default' | 'large';
}

export function BentoCard({
  icon: Icon,
  title,
  description,
  className,
  variant = 'default',
  size = 'default',
}: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
        variant === 'highlight'
          ? 'border-primary/30 bg-primary/5 hover:border-primary/50'
          : 'border-border hover:border-border/80',
        size === 'large' && 'sm:col-span-2',
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={cn(
          'mb-4 flex h-12 w-12 items-center justify-center rounded-xl',
          variant === 'highlight'
            ? 'bg-primary/20'
            : 'bg-primary/10'
        )}
      >
        <Icon
          className={cn(
            'h-6 w-6',
            variant === 'highlight' ? 'text-primary' : 'text-primary/80'
          )}
        />
      </div>
      <h3 className={cn(
        'font-semibold',
        size === 'large' ? 'text-xl' : 'text-lg'
      )}>
        {title}
      </h3>
      <p className={cn(
        'mt-2 text-muted-foreground',
        size === 'large' ? 'text-base' : 'text-sm'
      )}>
        {description}
      </p>
    </motion.div>
  );
}
