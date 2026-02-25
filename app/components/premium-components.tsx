'use client';

import { TrendingUp, Check, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricBadgeProps {
  value: string;
  label?: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export function MetricBadge({ value, label, trend = 'up', className }: MetricBadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-[#f4f7f2] text-[#5a7a4a]", className)}>
      {trend === 'up' && <TrendingUp className="w-4 h-4" />}
      <span>{value}</span>
      {label && <span className="text-[#5a7a4a]/70">{label}</span>}
    </div>
  );
}

interface FeatureTagProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'sage' | 'terracotta' | 'cream' | 'stone';
  className?: string;
}

export function FeatureTag({ children, icon: Icon, variant = 'sage', className }: FeatureTagProps) {
  const variants = {
    sage: 'bg-[#f4f7f2] text-[#5a7a4a]',
    terracotta: 'bg-[#faf6f2] text-[#a66d4b]',
    cream: 'bg-[#faf7f2] text-[#78716c]',
    stone: 'bg-[#f5f5f4] text-[#57534e]',
  };

  return (
    <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium", variants[variant], className)}>
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  variant?: 'sage' | 'terracotta' | 'cream' | 'stone';
  className?: string;
}

export function StatCard({ value, label, icon: Icon, variant = 'sage', className }: StatCardProps) {
  const variants = {
    sage: 'stat-card-sage',
    terracotta: 'stat-card-terracotta',
    cream: 'stat-card-cream',
    stone: 'stat-card-stone',
  };

  const iconColors = {
    sage: 'text-[#5a7a4a]',
    terracotta: 'text-[#a66d4b]',
    cream: 'text-[#78716c]',
    stone: 'text-[#57534e]',
  };

  return (
    <div className={cn("p-5 rounded-xl", variants[variant], className)}>
      <div className="flex items-start justify-between mb-3">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center bg-white/60", iconColors[variant])}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-[#1c1917] mb-1">{value}</div>
      <div className="text-sm text-[#57534e]">{label}</div>
    </div>
  );
}

interface ProgressMiniProps {
  value: number;
  label?: string;
  variant?: 'sage' | 'terracotta' | 'cream' | 'stone';
  className?: string;
}

export function ProgressMini({ value, label, variant = 'sage', className }: ProgressMiniProps) {
  const fills = {
    sage: 'bg-[#7c9a6a]',
    terracotta: 'bg-[#c9906e]',
    cream: 'bg-[#a8a29e]',
    stone: 'bg-[#78716c]',
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="w-full bg-[#f5f5f4] rounded-full h-2 overflow-hidden">
        <div className={cn("h-full rounded-full transition-all duration-700", fills[variant])} style={{ width: `${value}%` }} />
      </div>
      {label && <div className="flex justify-between mt-1.5">
        <span className="text-xs text-[#78716c]">{label}</span>
        <span className="text-xs text-[#57534e] font-medium">{value}%</span>
      </div>}
    </div>
  );
}

interface ChecklistItemProps {
  children: React.ReactNode;
  checked?: boolean;
  className?: string;
}

export function ChecklistItem({ children, checked = true, className }: ChecklistItemProps) {
  return (
    <div className={cn("flex items-center gap-2.5 text-sm text-[#57534e]", className)}>
      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0", checked ? "bg-[#e8ede3] text-[#5a7a4a]" : "bg-[#f5f5f4] text-[#a8a29e]")}>
        <Check className="w-3 h-3" />
      </div>
      <span>{children}</span>
    </div>
  );
}

interface IconCircleProps {
  icon: LucideIcon;
  variant?: 'sage' | 'terracotta' | 'cream' | 'stone' | 'amber' | 'rose';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function IconCircle({ icon: Icon, variant = 'sage', size = 'md', className }: IconCircleProps) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const variants = {
    sage: 'bg-[#e8ede3] text-[#5a7a4a]',
    terracotta: 'bg-[#f5ebe0] text-[#a66d4b]',
    cream: 'bg-[#f5efe6] text-[#78716c]',
    stone: 'bg-[#f5f5f4] text-[#57534e]',
    amber: 'bg-[#fef3c7] text-[#b45309]',
    rose: 'bg-[#ffe4e6] text-[#be123c]',
  };

  return (
    <div className={cn("rounded-xl flex items-center justify-center", sizes[size], variants[variant], className)}>
      <Icon className={iconSizes[size]} />
    </div>
  );
}

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'sage' | 'terracotta' | 'cream';
}

export function GridItem({ children, className, variant = 'default' }: GridItemProps) {
  const variants = {
    default: '',
    sage: 'bg-[#f4f7f2]/50',
    terracotta: 'bg-[#faf6f2]/50',
    cream: 'bg-[#faf7f2]/50',
  };

  return (
    <div className={cn("px-8 py-12", variants[variant], className)}>
      {children}
    </div>
  );
}