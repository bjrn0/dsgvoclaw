'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, Server, Lock, Zap, Users, Clock, Check, ArrowRight, Database, Workflow, Mail, Calendar, Search } from 'lucide-react';
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
            KI-Automatisierung
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
            Ein KI-Mitarbeiter für<br />
            <span className="text-[#7c9a8c]">alle Ihre Aufgaben</span>
          </h2>
          <p className="text-lg text-[#57534e]">
            E-Mails, Kalender, Reports, Recherche – vollautomatisch und DSGVO-sicher
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
            {/* Row 1: E-Mail & Research */}
            <div className="grid md:grid-cols-2 divide-x divide-[#e7e5e4]">
              {/* E-Mail & Communication Feature */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#f4f7f2]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#e8ede3] border border-[#d4ddd0] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#5a7a4a]" />
                  </div>
                  <FeatureTag variant="sage">Inbox Zero</FeatureTag>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  E-Mail & Kommunikation
                </h3>
                
                <p className="text-[#57534e] leading-relaxed mb-6">
                  Liest, kategorisiert und beantwortet E-Mails automatisch. 
                  Priorisiert wichtige Nachrichten und erledigt Routine-Anfragen.
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <FeatureTag icon={Mail} variant="terracotta">Automatisch beantworten</FeatureTag>
                    <FeatureTag icon={Calendar} variant="cream">Termine koordinieren</FeatureTag>
                  </div>
                  
                  <div className="space-y-3">
                    <ChecklistItem checked>Inbox Zero jeden Tag</ChecklistItem>
                    <ChecklistItem checked>Intelligente Priorisierung</ChecklistItem>
                    <ChecklistItem checked>Follow-up Erinnerungen</ChecklistItem>
                    <ChecklistItem checked>Mehrsprachig (DE/EN)</ChecklistItem>
                  </div>
                </div>
              </motion.div>

              {/* Research & Reports Feature */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#faf6f2]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#f5ebe0] border border-[#e8d5c4] flex items-center justify-center">
                    <Search className="w-6 h-6 text-[#a66d4b]" />
                  </div>
                  <FeatureTag variant="terracotta">Research</FeatureTag>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  Recherche & Analyse
                </h3>
                
                <p className="text-[#57534e] leading-relaxed mb-6">
                  Recherchiert Marktdaten, Wettbewerber und Trends. 
                  Erstellt professionelle Reports und Präsentationen.
                </p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-[#fdfcfb] border border-[#e7e5e4] text-center">
                      <div className="text-2xl font-bold text-[#c17f59]">10x</div>
                      <div className="text-xs text-[#78716c]">schneller</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#fdfcfb] border border-[#e7e5e4] text-center">
                      <div className="text-2xl font-bold text-[#c17f59]">99%</div>
                      <div className="text-xs text-[#78716c]">Genauigkeit</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <FeatureTag variant="terracotta">Marktrecherche</FeatureTag>
                    <FeatureTag variant="cream">Excel-Reports</FeatureTag>
                    <FeatureTag variant="sage">Präsentationen</FeatureTag>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Admin & GDPR Compliance */}
            <div className="grid md:grid-cols-2 divide-x divide-[#e7e5e4] border-t border-[#e7e5e4]">
              {/* Calendar & Admin Feature */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#fdf6e9]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#f5efe6] border border-[#e8ddd0] flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#78716c]" />
                  </div>
                  <FeatureTag variant="cream">Administration</FeatureTag>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  Kalender & Terminmanagement
                </h3>
                
                <p className="text-[#57534e] leading-relaxed mb-6">
                  Verwaltet Ihren Kalender, koordiniert Termine mit externen Partnern 
                  und bereitet Meetings vor.
                </p>
                
                <div className="space-y-4">
                  <div className="space-y-3">
                    <ChecklistItem checked>Automatische Terminkoordination</ChecklistItem>
                    <ChecklistItem checked>Meeting-Vorbereitung</ChecklistItem>
                    <ChecklistItem checked>Reiseplanung & Check-in</ChecklistItem>
                    <ChecklistItem checked>Erinnerungen & Follow-ups</ChecklistItem>
                  </div>
                </div>
              </motion.div>

              {/* GDPR Compliance Feature */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#f4f7f2]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#e8ede3] border border-[#d4ddd0] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#5a7a4a]" />
                  </div>
                  <FeatureTag variant="sage">DSGVO</FeatureTag>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  Automatische Compliance
                </h3>
                
                <p className="text-[#57534e] leading-relaxed mb-6">
                  Automatische DSGVO-Dokumentation, Audit-Logs und Compliance-Überwachung 
                  – ohne Ihr Zutun.
                </p>
                
                <div className="space-y-4">
                  <div className="space-y-3">
                    <ChecklistItem checked>Verzeichnis der Verarbeitungstätigkeiten</ChecklistItem>
                    <ChecklistItem checked>DSFA automatisch generiert</ChecklistItem>
                    <ChecklistItem checked>Vollständiges Audit-Log</ChecklistItem>
                    <ChecklistItem checked>Rechtskonforme Dokumente</ChecklistItem>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tool Integrations */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-widest text-[#78716c] font-medium mb-3">
            Integrationen
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#1c1917] mb-3">
            Verbindung mit Ihren Tools
          </h3>
          <p className="text-[#57534e] max-w-2xl mx-auto">
            Nahtlose Integration in Ihre bestehende Infrastruktur. Der KI-Mitarbeiter arbeitet direkt mit den Tools, die Sie täglich nutzen.
          </p>
        </motion.div>
        
        <motion.div
          className="bg-[#f4f7f2] rounded-2xl p-8 sm:p-12 border border-[#e7e5e4]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Communication Tools */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-wider text-[#78716c] font-medium mb-4">Kommunikation</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
              <ToolLogo name="Microsoft Outlook" icon="📧" />
              <ToolLogo name="Gmail" icon="📧" />
              <ToolLogo name="Microsoft Teams" icon="💬" />
              <ToolLogo name="Slack" icon="💬" />
              <ToolLogo name="Zoom" icon="📹" />
              <ToolLogo name="Google Meet" icon="📹" />
            </div>
          </div>
          
          {/* Office & Productivity */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-wider text-[#78716c] font-medium mb-4">Office & Produktivität</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
              <ToolLogo name="Microsoft Excel" icon="📊" />
              <ToolLogo name="Microsoft Word" icon="📝" />
              <ToolLogo name="PowerPoint" icon="📊" />
              <ToolLogo name="Google Sheets" icon="📊" />
              <ToolLogo name="Google Docs" icon="📝" />
              <ToolLogo name="Notion" icon="📋" />
            </div>
          </div>
          
          {/* Calendar & CRM */}
          <div>
            <p className="text-xs uppercase tracking-wider text-[#78716c] font-medium mb-4">Kalender & CRM</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
              <ToolLogo name="Google Calendar" icon="📅" />
              <ToolLogo name="Outlook Calendar" icon="📅" />
              <ToolLogo name="Calendly" icon="📅" />
              <ToolLogo name="Salesforce" icon="💼" />
              <ToolLogo name="HubSpot" icon="💼" />
              <ToolLogo name="Pipedrive" icon="💼" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Tool Logo Component
function ToolLogo({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="w-14 h-14 rounded-xl bg-white border border-[#e7e5e4] flex items-center justify-center text-2xl shadow-sm group-hover:shadow-md group-hover:border-[#5a7a4a] transition-all duration-200">
        {icon}
      </div>
      <span className="text-xs text-[#57534e] text-center leading-tight">{name}</span>
    </div>
  );
}

