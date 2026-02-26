'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Users, X, Check } from 'lucide-react';
import { IconCircle } from '@/app/components/premium-components';

interface ProblemItem {
  icon: typeof AlertTriangle;
  title: string;
  metric: string;
  subtitle: string;
  description: string;
  variant: 'rose' | 'amber';
  bgVariant: 'sage' | 'terracotta';
  cons: string[];
  pros?: string[];
}

const problems: ProblemItem[] = [
  {
    icon: Clock,
    title: 'Zeitverlust',
    metric: '200+',
    subtitle: 'Stunden/Monat',
    description: 'Manuelle E-Mails, Kalender, Reports – Zeit, die für strategische Aufgaben fehlt.',
    variant: 'amber',
    bgVariant: 'sage',
    cons: [
      '200+ Stunden pro Monat für Routineaufgaben',
      '67% der Arbeitszeit ist reaktive Verwaltung',
      'Wichtige strategische Projekte werden verschoben',
      'Überstunden und Burnout-Risiko steigt',
    ],
    pros: [
      'Mit KI: Inbox Zero in 10 Minuten statt 2 Stunden',
      'Automatische Report-Erstellung über Nacht',
      'Fokus auf wertschöpfende Aufgaben',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'DSGVO-Risiko',
    metric: '€20 Mio.',
    subtitle: 'Max. Bußgeld',
    description: 'Ohne ordentliche Dokumentation drohen existenzbedrohende Strafen.',
    variant: 'rose',
    bgVariant: 'terracotta',
    cons: [
      'Bußgelder bis zu €20 Mio. oder 4% des Umsatzes',
      'Anstieg der Verstöße um 340% in 2023',
      'Meldungsfrist von nur 72 Stunden bei Datenpannen',
      'Schadensersatzforderungen von Kunden',
      'Reputationsverlust und Imageschaden',
    ],
    pros: [
      'Automatische Dokumentation aller Prozesse',
      'Sofortige Warnung bei Risiken',
      'Prüfungsbereit für jede Behörde',
    ],
  },
  {
    icon: Users,
    title: 'Personalmangel',
    metric: '70%',
    subtitle: 'der KMUs',
    description: 'Haben keine Kapazität für zusätzliche administrative FTEs.',
    variant: 'amber',
    bgVariant: 'sage',
    cons: [
      '70% der KMUs haben keinen Datenschutzbeauftragten',
      '€80.000+ Kosten pro zusätzlichem FTE',
      '6+ Monate bis zur vollen Einsatzfähigkeit',
      'Hohe Fluktuation in administrativen Rollen',
      'Schwierig: gute Assistenten zu finden',
    ],
    pros: [
      'Ein KI-Mitarbeiter ersetzt 2–4 FTEs',
      'Sofort einsatzbereit, keine Einarbeitung',
      'Arbeitet 24/7 ohne Krankentage',
      'Skalierbar ohne Neueinstellungen',
    ],
  },
];

export function Problem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="problem" className="relative py-24 md:py-32 bg-[#fdfcfb]">
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
            Die Herausforderung
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
            Manuelle Arbeit frisst Ihre<br />
            <span className="text-[#a66d4b]">Wettbewerbsfähigkeit</span>
          </h2>
          
          <p className="text-lg text-[#57534e]">
            Während Ihre Konkurrenz bereits KI einsetzt, verlieren Sie Zeit mit Routineaufgaben
          </p>
        </motion.div>
      </div>

      {/* Problem Grid */}
      <motion.div
        className="border-t border-b border-[#e7e5e4]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 border-l border-r border-[#e7e5e4]">
            {problems.map((problem, idx) => (
              <motion.div 
                key={problem.title} 
                variants={itemVariants}
                className={`px-6 sm:px-8 py-10 sm:py-12 ${idx < 2 ? 'border-r border-[#e7e5e4]' : ''} ${problem.bgVariant === 'sage' ? 'bg-[#f4f7f2]/30' : 'bg-[#faf6f2]/30'}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <IconCircle icon={problem.icon} variant={problem.variant} size="lg" />
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-bold text-[#1c1917]">{problem.metric}</div>
                    <div className="text-sm text-[#78716c]">{problem.subtitle}</div>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  {problem.title}
                </h3>
                
                <p className="text-[#57534e] leading-relaxed mb-6">
                  {problem.description}
                </p>
                
                {/* Cons - What you risk */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-[#a66d4b] font-medium mb-3">
                    Ohne KI-Mitarbeiter:
                  </p>
                  <div className="space-y-2">
                    {problem.cons.map((con) => (
                      <div key={con} className="flex items-start gap-2">
                        <X className="w-4 h-4 text-[#dc2626] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#57534e]">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros - What you gain */}
                {problem.pros && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#5a7a4a] font-medium mb-3">
                      Mit DSGVOClaw:
                    </p>
                    <div className="space-y-2">
                      {problem.pros.map((pro) => (
                        <div key={pro} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#5a7a4a] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#57534e]">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
