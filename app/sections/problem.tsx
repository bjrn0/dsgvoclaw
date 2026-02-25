'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Users, Puzzle, TrendingUp, Shield, AlertCircle } from 'lucide-react';
import { IconCircle, FeatureTag, ProgressMini, StatCard } from '@/app/components/premium-components';

interface ProblemItem {
  icon: typeof AlertTriangle;
  title: string;
  metric: string;
  subtitle: string;
  description: string;
  variant: 'rose' | 'amber';
  bgVariant: 'sage' | 'terracotta';
  stat?: string;
  statLabel?: string;
  progress?: number;
  progressLabel?: string;
  features: string[];
}

const problems: ProblemItem[] = [
  {
    icon: AlertTriangle,
    title: 'Bußgelder',
    metric: '€20 Mio.',
    subtitle: 'Max. Strafe',
    description: 'DSGVO-Verstöße können existenzbedrohende Strafen nach sich ziehen.',
    variant: 'rose',
    bgVariant: 'sage',
    stat: '+340%',
    statLabel: 'Anstieg 2023',
    features: ['Art. 83 DSGVO', '4% Umsatz', 'Schadensersatz'],
  },
  {
    icon: Clock,
    title: 'Zeitverlust',
    metric: '200+',
    subtitle: 'Stunden pro Jahr',
    description: 'Manuelle Compliance-Aufgaben verschlingen wertvolle Arbeitszeit.',
    variant: 'amber',
    bgVariant: 'terracotta',
    progress: 67,
    progressLabel: 'Routineaufgaben',
    features: ['Dokumentation', 'Audits', 'Schulungen'],
  },
  {
    icon: Users,
    title: 'Fachkräftemangel',
    metric: '70%',
    subtitle: 'der KMUs',
    description: 'Haben keinen eigenen Datenschutzbeauftragten.',
    variant: 'amber',
    bgVariant: 'sage',
    stat: '€80K',
    statLabel: 'DSB Gehalt/Jahr',
    features: ['Keine Expertise', 'Hohe Kosten', 'Schwer zu finden'],
  },
  {
    icon: Puzzle,
    title: 'Tool-Fragmentierung',
    metric: '8+',
    subtitle: 'Verschiedene Tools',
    description: 'Durchschnittlich 8 Tools ohne echte Integration.',
    variant: 'rose',
    bgVariant: 'terracotta',
    progress: 45,
    progressLabel: 'Integration',
    features: ['Datensilos', 'Manuelle Exporte', 'Inkonsistenz'],
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
            DSGVO-Compliance ist ein<br />
            <span className="text-[#a66d4b]">Full-Time Job</span>
          </h2>
          
          <p className="text-lg text-[#57534e]">
            Deutsche Unternehmen verlieren jährlich über 200 Stunden nur für manuelle DSGVO-Aufgaben
          </p>
        </motion.div>
      </div>

      {/* Problem Grid with Full-Width Borders */}
      <motion.div
        className="border-t border-b border-[#e7e5e4]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 border-l border-r border-[#e7e5e4]">
            {problems.slice(0, 2).map((problem, idx) => (
              <motion.div 
                key={problem.title} 
                variants={itemVariants}
                className={`px-6 sm:px-8 py-10 sm:py-12 ${idx === 0 ? 'border-r border-[#e7e5e4]' : ''} ${problem.bgVariant === 'sage' ? 'bg-[#f4f7f2]/30' : 'bg-[#faf6f2]/30'}`}
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
                
                {/* Mini Components */}
                <div className="space-y-4">
                  {problem.stat && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#e7e5e4]">
                      <TrendingUp className="w-4 h-4 text-[#a66d4b]" />
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-[#1c1917]">{problem.stat}</div>
                        <div className="text-xs text-[#78716c]">{problem.statLabel}</div>
                      </div>
                    </div>
                  )}
                  
                  {problem.progress !== undefined && problem.progress > 0 && (
                    <ProgressMini 
                      value={problem.progress} 
                      label={problem.progressLabel}
                      variant="terracotta"
                    />
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {problem.features.map((feature) => (
                      <FeatureTag key={feature} variant="cream">{feature}</FeatureTag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 border-l border-r border-[#e7e5e4] border-t border-[#e7e5e4]">
            {problems.slice(2, 4).map((problem, idx) => (
              <motion.div 
                key={problem.title} 
                variants={itemVariants}
                className={`px-6 sm:px-8 py-10 sm:py-12 ${idx === 0 ? 'border-r border-[#e7e5e4]' : ''} ${problem.bgVariant === 'sage' ? 'bg-[#f4f7f2]/30' : 'bg-[#faf6f2]/30'}`}
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
                
                {/* Mini Components */}
                <div className="space-y-4">
                  {problem.stat && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#e7e5e4]">
                      <Shield className="w-4 h-4 text-[#5a7a4a]" />
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-[#1c1917]">{problem.stat}</div>
                        <div className="text-xs text-[#78716c]">{problem.statLabel}</div>
                      </div>
                    </div>
                  )}
                  
                  {problem.progress !== undefined && problem.progress > 0 && (
                    <ProgressMini 
                      value={problem.progress} 
                      label={problem.progressLabel}
                      variant="sage"
                    />
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {problem.features.map((feature) => (
                      <FeatureTag key={feature} variant="cream">{feature}</FeatureTag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Stats */}
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <StatCard 
            value="€2.8Mrd" 
            label="Bußgelder 2023" 
            icon={AlertCircle}
            variant="terracotta"
          />
          <StatCard 
            value="47%" 
            label="Nicht konform" 
            icon={Shield}
            variant="sage"
          />
          <StatCard 
            value="3 Tage" 
            label="Meldungsfrist" 
            icon={Clock}
            variant="cream"
          />
          <StatCard 
            value="30.000€" 
            label="Ø Kosten/Jahr" 
            icon={TrendingUp}
            variant="stone"
          />
        </motion.div>
      </div>
    </section>
  );
}