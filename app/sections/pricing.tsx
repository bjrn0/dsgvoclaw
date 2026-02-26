'use client';

import { motion } from 'framer-motion';
import { Check, Shield, Sparkles, Building2 } from 'lucide-react';
import { IconCircle, FeatureTag } from '@/app/components/premium-components';

const pricingPlans = [
  {
    title: 'Essential',
    icon: Shield,
    price: '€149',
    priceNote: '/Monat',
    description: 'Perfekt für Solo-Unternehmer und kleine Teams',
    features: [
      'Intelligente E-Mail Automation',
      'Kalender Management & Terminkoordination',
      'Tägliche Zusammenfassungen',
      'Automatische DSGVO-Dokumentation',
      'EU-Cloud Hosting (DE)',
      'E-Mail Support',
      '99.9% Uptime Garantie',
      '1 Nutzer inklusive',
    ],
    ctaText: 'Kostenlos testen',
    variant: 'default' as const,
    color: 'sage',
  },
  {
    title: 'Professional',
    icon: Sparkles,
    price: '€199',
    priceNote: '/Monat',
    description: 'Die Wahl für Unternehmen, die Wachstum beschleunigen wollen',
    features: [
      'Alle Essential Features',
      'KI-gestützte Recherche & Analyse',
      'Automatische Excel-Reports & Präsentationen',
      'Erweiterte Workflow-Automation',
      'Unbegrenzte E-Mail-Verarbeitung',
      'Intelligentes Terminmanagement',
      'Multi-User Unterstützung (bis 5 Nutzer)',
      'Prioritäts-Support (< 2h Antwortzeit)',
      'Voller API-Zugang',
      'Erweiterte Analytics Dashboard',
    ],
    ctaText: 'Kostenlos testen',
    variant: 'highlighted' as const,
    badge: 'Meistgewählt',
    color: 'terracotta',
  },
  {
    title: 'Business',
    icon: Building2,
    price: '€399',
    priceNote: '/Monat',
    description: 'Für etablierte Unternehmen mit höchsten Ansprüchen',
    features: [
      'Alle Professional Features',
      'Dedizierter Account Manager',
      'Custom Integrationen',
      'On-Premise Option',
      'Team-Schulungen',
      'Premium SLA',
      'White-Label Option',
      'Compliance-Manager',
    ],
    ctaText: 'Gespräch vereinbaren',
    variant: 'default' as const,
    color: 'cream',
  },
];

export function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[#fdfcfb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-widest text-[#78716c] font-medium mb-4">
            Preise
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
            Einfache, transparente<br />
            <span className="text-[#7c9a8c]">Preise</span>
          </h2>
          
          <p className="text-lg text-[#57534e]">
            Monatliche Subscription – jederzeit kündbar
          </p>
          
          <p className="text-sm text-[#a66d4b] mt-4 font-medium">
            Jahreszahlung: 2 Monate geschenkt (17% Rabatt)
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.title}
              variants={itemVariants}
              className={`relative rounded-2xl p-6 sm:p-8 ${
                plan.variant === 'highlighted'
                  ? 'bg-gradient-to-b from-[#faf6f2] to-[#fdfcfb] border-2 border-[#e8d5c4] shadow-lg'
                  : 'bg-[#fdfcfb] border border-[#e7e5e4]'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <FeatureTag variant="terracotta">{plan.badge}</FeatureTag>
                </div>
              )}
              
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <IconCircle 
                    icon={plan.icon} 
                    variant={plan.color as 'sage' | 'terracotta' | 'cream'} 
                    size="md" 
                  />
                  <h3 className="text-xl font-semibold text-[#1c1917]">{plan.title}</h3>
                </div>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#1c1917]">{plan.price}</span>
                  {plan.priceNote && <span className="text-[#78716c]">{plan.priceNote}</span>}
                </div>
                
                <p className="text-sm text-[#57534e] mt-2">{plan.description}</p>
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#f4f7f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#7c9a8c]" />
                    </div>
                    <span className="text-sm text-[#57534e]">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <a
                href="#signup"
                className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                  plan.variant === 'highlighted'
                    ? 'bg-[#1c1917] text-[#fdfcfb] hover:bg-[#292524]'
                    : 'bg-[#faf7f2] text-[#1c1917] hover:bg-[#f5f0e8]'
                }`}
              >
                {plan.ctaText}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee Note */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Shield className="h-5 w-5 text-[#7c9a8c]" />
          <p className="text-sm text-[#57534e]">
            14 Tage Geld-zurück-Garantie – risikolos testen
          </p>
        </motion.div>
      </div>
    </section>
  );
}
