'use client';

import { motion } from 'framer-motion';
import { Download, Settings, MessageSquare, Sparkles, ArrowRight, Check } from 'lucide-react';
import { IconCircle, FeatureTag } from '@/app/components/premium-components';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Wählen Sie Ihr Paket',
    description: 'Wählen Sie aus drei leistungsstarken Optionen die passende für Ihr Unternehmen. Alle Pakete sind sofort einsatzbereit und DSGVO-konform auf deutschen Servern.',
    variant: 'sage' as const,
    bullets: [
      'Essential (€149/Monat): Ideal für Solo-Unternehmer und kleine Teams',
      'Professional (€199/Monat): Voller Funktionsumfang für wachsende Unternehmen',
      'Business (€399/Monat): Enterprise-Features mit dediziertem Support',
    ],
    features: ['Sofortige Aktivierung', 'Keine Einrichtungsgebühr', 'Jederzeit kündbar'],
    time: '< 5 Min.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Verbinden Sie Ihre Tools',
    description: 'Integrieren Sie Ihren KI-Mitarbeiter nahtlos in Ihre bestehende Infrastruktur. In wenigen Klicks verbinden Sie E-Mail, Kalender und alle wichtigen Geschäftstools.',
    variant: 'terracotta' as const,
    bullets: [
      'E-Mail: Gmail, Outlook, Microsoft 365 – vollständig synchronisiert',
      'Kalender: Google Calendar, Outlook Calendar, Calendly Integration',
      'Kommunikation: Slack, Microsoft Teams, Zoom direkt verbunden',
    ],
    features: ['One-Click Setup', 'SSL-verschlüsselt', 'Sichere API-Verbindungen'],
    time: '< 10 Min.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Geben Sie Anweisungen',
    description: 'Kommunizieren Sie mit Ihrem KI-Mitarbeiter wie mit einem menschlichen Assistenten. Natürliche Sprache, kein technisches Know-how erforderlich.',
    variant: 'cream' as const,
    bullets: [
      'Textbasierte Anweisungen: "Beantworte alle E-Mails zu Projekt Alpha"',
      'Kontextverständnis: Erkennt Prioritäten und Dringlichkeiten automatisch',
      'Lernfähig: Merkt sich Ihre Präferenzen und Arbeitsweisen',
    ],
    features: ['Deutsch & Englisch', 'Kontext-Verständnis', 'Spracherkennung'],
    time: 'Sofort',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Ihr KI-Mitarbeiter arbeitet',
    description: 'Ab sofort arbeitet Ihr KI-Mitarbeiter rund um die Uhr für Sie. Erledigt Routineaufgaben, hält Ihren Posteingang auf Null und erstellt Reports – während Sie sich auf das Wesentliche konzentrieren.',
    variant: 'sage' as const,
    bullets: [
      'Inbox Zero: Liest, kategorisiert und beantwortet E-Mails automatisch',
      'Terminmanagement: Koordiniert Meetings, sendet Erinnerungen, bucht Reisen',
      'Reporting: Erstellt tägliche, wöchentliche und monatliche Reports',
    ],
    features: ['24/7 Verfügbarkeit', 'Automatische Updates', 'DSGVO-Compliance'],
    time: '24/7',
  },
];

export function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="relative py-24 md:py-32 bg-[#faf7f2]">
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
            So funktioniert's
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
            Ihr KI-Mitarbeiter in<br />
            <span className="text-[#7c9a8c]">unter 10 Minuten einsatzbereit</span>
          </h2>
          
          <p className="text-lg text-[#57534e]">
            Einfacher geht es nicht – drei Schritte zu Ihrem persönlichen KI-Assistenten
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#e7e5e4] hidden sm:block" />
          
          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className={cn(
                  'relative flex flex-col sm:flex-row items-start mb-6 last:mb-0',
                  index % 2 === 1 && 'sm:flex-row-reverse'
                )}
              >
                {/* Step Number Circle */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#7c9a8c] border-4 border-[#fdfcfb] shadow-sm hidden sm:block z-10" />
                
                {/* Content Card */}
                <div className={cn(
                  'flex-1 ml-0 sm:ml-0',
                  index % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16'
                )}
                >
                  <div className={cn(
                    'bg-[#fdfcfb] rounded-xl p-6 sm:p-8 border border-[#e7e5e4] shadow-sm',
                    index % 2 === 0 && 'sm:ml-auto'
                  )}
                  style={{ maxWidth: '540px' }}
                  >
                    <div className={cn(
                      'flex items-start gap-4 mb-4',
                      index % 2 === 0 && 'sm:flex-row-reverse'
                    )}>
                      <IconCircle icon={step.icon} variant={step.variant} size="lg" />
                      
                      <div className={cn('flex-1', index % 2 === 0 && 'sm:text-right')}>
                        <div className="text-3xl font-bold text-[#e7e5e4] mb-1">{step.number}</div>
                        <h3 className="text-xl font-semibold text-[#1c1917]">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className={cn(
                      'text-[#57534e] leading-relaxed mb-5',
                      index % 2 === 0 && 'sm:text-right'
                    )}>
                      {step.description}
                    </p>
                    
                    {/* Bullet Points */}
                    <div className={cn(
                      'mb-5 space-y-2',
                      index % 2 === 0 && 'sm:text-right'
                    )}>
                      {step.bullets.map((bullet) => (
                        <div key={bullet} className={cn(
                          'flex items-start gap-2 text-sm text-[#57534e]',
                          index % 2 === 0 && 'sm:flex-row-reverse sm:justify-end'
                        )}>
                          <Check className="w-4 h-4 text-[#5a7a4a] flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={cn(
                      'flex flex-wrap gap-2 mb-4',
                      index % 2 === 0 && 'sm:justify-end'
                    )}>
                      {step.features.map((feature) => (
                        <FeatureTag key={feature} variant={step.variant}>{feature}</FeatureTag>
                      ))}
                    </div>
                    
                    <div className={cn(
                      'flex items-center gap-2 text-sm text-[#78716c]',
                      index % 2 === 0 && 'sm:justify-end'
                    )}>
                      <ClockIcon className="w-4 h-4" />
                      <span>{step.time}</span>
                    </div>
                  </div>
                </div>
                
                {/* Spacer */}
                <div className="hidden sm:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1c1917] text-[#fdfcfb] rounded-full font-medium hover:bg-[#292524] transition-all duration-300"
          >
            Jetzt starten
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Clock icon component
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
