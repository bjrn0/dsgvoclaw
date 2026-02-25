'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, Server, Lock, Zap, Users, Clock, Check, ArrowRight, Database, Workflow } from 'lucide-react';
import { IconCircle, FeatureTag, ChecklistItem, StatCard } from '@/app/components/premium-components';

export function FeaturesBento() {
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
    <section id="features" className="relative py-24 md:py-32 bg-[#fdfcfb]">
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
            AI-Powered Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
            Alles, was Sie für<br />
            <span className="text-[#7c9a8c]">DSGVO-Compliance</span> brauchen
          </h2>
          <p className="text-lg text-[#57534e]">
            Eine Plattform für alle Ihre Datenschutz-Anforderungen
          </p>
        </motion.div>
      </div>

      {/* Features Grid with Full-Width Borders */}
      <motion.div
        className="border-t border-b border-[#e7e5e4]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="border-l border-r border-[#e7e5e4]">
            {/* Row 1: Dokumentation & KI-Experte */}
            <div className="grid md:grid-cols-2 divide-x divide-[#e7e5e4]">
              {/* Dokumentation Feature */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#f4f7f2]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#e8ede3] border border-[#d4ddd0] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#5a7a4a]" />
                  </div>
                  <FeatureTag variant="sage">95% Zeitersparnis</FeatureTag>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  Automatisierte Dokumentation
                </h3>
                
                <p className="text-[#57534e] leading-relaxed mb-6">
                  Erstellen Sie automatisch alle erforderlichen DSGVO-Dokumente – 
                  von Verzeichnis der Verarbeitungstätigkeiten bis zur Datenschutz-Folgenabschätzung.
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <FeatureTag icon={Database} variant="terracotta">Verzeichnis</FeatureTag>
                    <FeatureTag icon={Shield} variant="cream">DSFA</FeatureTag>
                    <FeatureTag icon={FileText} variant="sage">Dokumente</FeatureTag>
                  </div>
                  
                  <div className="space-y-3">
                    <ChecklistItem checked>Automatische Verzeichnis-Erstellung</ChecklistItem>
                    <ChecklistItem checked>DSFA mit Risiko-Bewertung</ChecklistItem>
                    <ChecklistItem checked>Auftragsverarbeitungsverträge</ChecklistItem>
                    <ChecklistItem checked>Einwilligungs-Verwaltung</ChecklistItem>
                  </div>
                </div>
              </motion.div>

              {/* KI-Experte Feature */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#faf6f2]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#f5ebe0] border border-[#e8d5c4] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#a66d4b]" />
                  </div>
                  <FeatureTag variant="terracotta">Made in Germany</FeatureTag>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  DSGVO-konforme KI
                </h3>
                
                <p className="text-[#57534e] leading-relaxed mb-6">
                  Unsere KI wurde speziell für deutsches Datenschutzrecht trainiert 
                  und gibt zuverlässige, quellenbasierte Antworten.
                </p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-[#fdfcfb] border border-[#e7e5e4] text-center">
                      <div className="text-2xl font-bold text-[#c17f59]">99.2%</div>
                      <div className="text-xs text-[#78716c]">Genauigkeit</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#fdfcfb] border border-[#e7e5e4] text-center">
                      <div className="text-2xl font-bold text-[#c17f59]">{"<1s"}</div>
                      <div className="text-xs text-[#78716c]">Antwortzeit</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <FeatureTag variant="terracotta">Quellenbasiert</FeatureTag>
                    <FeatureTag variant="cream">Aktuelle Gesetze</FeatureTag>
                    <FeatureTag variant="sage">Deutschsprachig</FeatureTag>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Hosting & Workflows */}
            <div className="grid md:grid-cols-2 divide-x divide-[#e7e5e4] border-t border-[#e7e5e4]">
              {/* Self-Hosted Feature */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#fdf6e9]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#f5efe6] border border-[#e8ddd0] flex items-center justify-center">
                    <Server className="w-6 h-6 text-[#78716c]" />
                  </div>
                  <FeatureTag variant="cream">100% Kontrolle</FeatureTag>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  Self-Hosted oder Managed
                </h3>
                
                <p className="text-[#57534e] leading-relaxed mb-6">
                  Wählen Sie zwischen eigener Infrastruktur oder unserem Managed-Service 
                  – volle Kontrolle bei maximaler Flexibilität.
                </p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#fdfcfb] border border-[#e7e5e4]">
                      <div className="flex items-center gap-2 mb-2">
                        <Server className="w-4 h-4 text-[#d4a574]" />
                        <span className="text-sm font-semibold text-[#1c1917]">Self-Hosted</span>
                      </div>
                      <div className="text-xs text-[#78716c]">Auf Ihren Servern</div>
                      <div className="text-lg font-bold text-[#1c1917] mt-1">€499</div>
                      <div className="text-xs text-[#a8a29e]">einmalig</div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-[#fdfcfb] border border-[#e7e5e4]">
                      <div className="flex items-center gap-2 mb-2">
                        <Cloud className="w-4 h-4 text-[#7c9a8c]" />
                        <span className="text-sm font-semibold text-[#1c1917]">Managed</span>
                      </div>
                      <div className="text-xs text-[#78716c]">Wir hosten für Sie</div>
                      <div className="text-lg font-bold text-[#1c1917] mt-1">€149</div>
                      <div className="text-xs text-[#a8a29e]">/Monat</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Workflow Automation */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#f4f7f2]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#e8ede3] border border-[#d4ddd0] flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-[#5a7a4a]" />
                  </div>
                  <FeatureTag variant="sage">Automatisierung</FeatureTag>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  Workflow-Automatisierung
                </h3>
                
                <p className="text-[#57534e] leading-relaxed mb-6">
                  Automatisieren Sie wiederkehrende Compliance-Aufgaben 
                  und sparen Sie wertvolle Arbeitszeit.
                </p>
                
                <div className="space-y-4">
                  <div className="space-y-3">
                    <ChecklistItem checked>Automatische Erinnerungen</ChecklistItem>
                    <ChecklistItem checked>Workflow-Templates</ChecklistItem>
                    <ChecklistItem checked>Integrationen (Slack, Teams)</ChecklistItem>
                    <ChecklistItem checked>Berichts-Automatisierung</ChecklistItem>
                  </div>
                  
                  <a 
                    href="#workflows" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#7c9a8c] hover:text-[#6b8a7a] transition-colors"
                  >
                    Alle Workflows ansehen
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Feature Stats - With Context */}
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-[#78716c]">
            Vertrauen Sie auf bewährte Leistung und deutsche Qualität
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StatCard 
            value="24/7" 
            label="Rund-um-die-Uhr Verfügbarkeit" 
            icon={Clock}
            variant="sage"
          />
          <StatCard 
            value="200+" 
            label="Dokumente pro Tag generiert" 
            icon={FileText}
            variant="terracotta"
          />
          <StatCard 
            value="100%" 
            label="DSGVO-Konformität garantiert" 
            icon={Shield}
            variant="cream"
          />
          <StatCard 
            value="DE" 
            label="Server-Standort Deutschland" 
            icon={Server}
            variant="stone"
          />
        </motion.div>
      </div>
    </section>
  );
}

// Cloud icon component for the hosting section
function Cloud({ className }: { className?: string }) {
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
      <path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19" />
      <path d="M17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10c-.186 0-.367.012-.544.035C16.473 6.607 13.487 4 10 4 6.134 4 3 7.134 3 11c0 .37.024.733.07 1.087A4.501 4.501 0 0 0 6.5 19" />
    </svg>
  );
}