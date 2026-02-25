'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  priceNote: string;
  features: string[];
  ctaText: string;
  variant?: 'default' | 'highlighted';
  badge?: string;
}

export function PricingCard({
  title,
  price,
  priceNote,
  features,
  ctaText,
  variant = 'default',
  badge,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={cn(
          'relative flex flex-col h-full transition-all duration-300',
          variant === 'highlighted'
            ? 'border-primary shadow-xl scale-105'
            : 'border-border hover:border-border/80 hover:shadow-lg'
        )}
      >
        {badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
            {badge}
          </div>
        )}
        <CardHeader className="pb-4">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <div className="mt-2">
            <span className="text-4xl font-bold text-foreground">{price}</span>
            <span className="ml-2 text-sm text-muted-foreground">{priceNote}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            variant={variant === 'highlighted' ? 'default' : 'outline'}
          >
            {ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
