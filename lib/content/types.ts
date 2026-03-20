import type { LucideIcon } from 'lucide-react';
import {
  Shield, Lock, Cpu, Zap, Clock, AlertTriangle, Users,
  Download, Settings, MessageSquare, Sparkles, Building2,
} from 'lucide-react';
import type { SiteId } from '../sites';

/* ─── Types ─────────────────────────────────────────────── */

export interface SiteContent {
  nav: {
    links: { href: string; label: string }[];
    signIn: string;
    signUp: string;
  };
  hero: {
    tags: { icon: LucideIcon; label: string; variant: 'sage' | 'terracotta' | 'cream' }[];
    headlineLines: string[];
    headlineAccent: string;
    subheadline: string;
    urgencyText: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { icon: LucideIcon; value: string; label: string; variant: 'sage' | 'terracotta' | 'cream'; details: string[] }[];
  };
  problem: {
    sectionLabel: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    withoutLabel: string;
    withLabel: string;
    items: {
      icon: LucideIcon;
      title: string;
      metric: string;
      subtitle: string;
      description: string;
      variant: 'rose' | 'amber';
      bgVariant: 'sage' | 'terracotta';
      cons: string[];
      pros: string[];
    }[];
  };
  features: {
    sectionLabel: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    email: {
      tag: string;
      title: string;
      description: string;
      skillTags: string[];
      checklist: string[];
    };
    research: {
      tag: string;
      title: string;
      description: string;
      stats: { value: string; label: string }[];
      skillTags: string[];
    };
    sandbox: {
      tag: string;
      title: string;
      description: string;
      checklist: string[];
    };
    compliance: {
      tag: string;
      title: string;
      description: string;
      checklist: string[];
    };
    integrations: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      categories: {
        communication: string;
        productivity: string;
        infrastructure: string;
      };
    };
  };
  howItWorks: {
    sectionLabel: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    steps: {
      number: string;
      icon: LucideIcon;
      title: string;
      description: string;
      variant: 'sage' | 'terracotta' | 'cream';
      bullets: string[];
      features: string[];
      time: string;
    }[];
    ctaText: string;
  };
  pricing: {
    sectionLabel: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    annualNote: string;
    plans: {
      title: string;
      icon: LucideIcon;
      price: string;
      priceNote: string;
      description: string;
      features: string[];
      ctaText: string;
      variant: 'default' | 'highlighted';
      badge?: string;
      color: string;
    }[];
    guaranteeText: string;
  };
  socialProof: {
    sectionLabel: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    testimonials: {
      quote: string;
      author: string;
      role: string;
      company: string;
      rating: number;
      variant: 'sage' | 'terracotta' | 'cream';
    }[];
  };
  faq: {
    sectionLabel: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    items: { question: string; answer: string }[];
    contactTitle: string;
    contactSubtitle: string;
    contactCta: string;
  };
  cta: {
    badge: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    emailPlaceholder: string;
    submitText: string;
    benefits: string[];
    trustBadges: string[];
    urgencyText: string;
  };
  footer: {
    description: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    copyright: string;
    madeIn: string;
    lovesLabel: string;
  };
}

export { type SiteId };
