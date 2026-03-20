'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Mail, Calendar, Search } from 'lucide-react';
import { SiWhatsapp, SiTelegram, SiDiscord, SiSignal, SiNotion, SiObsidian, SiTrello, SiGithub, SiGoogledocs, SiNvidia, SiDocker, SiKubernetes, SiOllama } from '@icons-pack/react-simple-icons';
import { FeatureTag, ChecklistItem, StatCard } from '@/app/components/premium-components';
import { useSiteConfig } from '@/lib/use-site';

export function FeaturesBento() {
  const { content: { features } } = useSiteConfig();

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
    <section id="features" className="relative pt-16 md:pt-24 pb-24 md:pb-32 bg-[#fdfcfb]">
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
            {features.sectionLabel}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
            {features.headline}<br />
            <span className="text-[#7c9a8c]">{features.headlineAccent}</span>
          </h2>
          <p className="text-lg text-[#57534e]">
            {features.subheadline}
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
                  <FeatureTag variant="sage">{features.email.tag}</FeatureTag>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  {features.email.title}
                </h3>

                <p className="text-[#57534e] leading-relaxed mb-6">
                  {features.email.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <FeatureTag icon={Mail} variant="terracotta">{features.email.skillTags[0]}</FeatureTag>
                    <FeatureTag icon={Calendar} variant="cream">{features.email.skillTags[1]}</FeatureTag>
                  </div>

                  <div className="space-y-3">
                    {features.email.checklist.map((item) => (
                      <ChecklistItem key={item} checked>{item}</ChecklistItem>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Research & Reports Feature */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#faf6f2]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#f5ebe0] border border-[#e8d5c4] flex items-center justify-center">
                    <Search className="w-6 h-6 text-[#a66d4b]" />
                  </div>
                  <FeatureTag variant="terracotta">{features.research.tag}</FeatureTag>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  {features.research.title}
                </h3>

                <p className="text-[#57534e] leading-relaxed mb-6">
                  {features.research.description}
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {features.research.stats.map((stat) => (
                      <div key={stat.label} className="p-3 rounded-lg bg-[#fdfcfb] border border-[#e7e5e4] text-center">
                        <div className="text-2xl font-bold text-[#c17f59]">{stat.value}</div>
                        <div className="text-xs text-[#78716c]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {features.research.skillTags.map((tag) => (
                      <FeatureTag key={tag} variant="terracotta">{tag}</FeatureTag>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Sandbox & Compliance */}
            <div className="grid md:grid-cols-2 divide-x divide-[#e7e5e4] border-t border-[#e7e5e4]">
              {/* Sandboxed Execution Feature */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#fdf6e9]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#f5efe6] border border-[#e8ddd0] flex items-center justify-center">
                    <Lock className="w-6 h-6 text-[#78716c]" />
                  </div>
                  <FeatureTag variant="cream">{features.sandbox.tag}</FeatureTag>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  {features.sandbox.title}
                </h3>

                <p className="text-[#57534e] leading-relaxed mb-6">
                  {features.sandbox.description}
                </p>

                <div className="space-y-4">
                  <div className="space-y-3">
                    {features.sandbox.checklist.map((item) => (
                      <ChecklistItem key={item} checked>{item}</ChecklistItem>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Compliance Feature */}
              <motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#f4f7f2]/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#e8ede3] border border-[#d4ddd0] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#5a7a4a]" />
                  </div>
                  <FeatureTag variant="sage">{features.compliance.tag}</FeatureTag>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  {features.compliance.title}
                </h3>

                <p className="text-[#57534e] leading-relaxed mb-6">
                  {features.compliance.description}
                </p>

                <div className="space-y-4">
                  <div className="space-y-3">
                    {features.compliance.checklist.map((item) => (
                      <ChecklistItem key={item} checked>{item}</ChecklistItem>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tool Integrations — same full-width border pattern as features grid */}
      <motion.div
        className="border-t border-b border-[#e7e5e4] mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="border-l border-r border-[#e7e5e4] px-6 sm:px-8 py-10 sm:py-12">
            <div className="text-center mb-10">
              <div className="text-xs uppercase tracking-widest text-[#78716c] font-medium mb-3">
                {features.integrations.sectionLabel}
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1c1917] mb-3">
                {features.integrations.title}
              </h3>
              <p className="text-[#57534e] max-w-2xl mx-auto">
                {features.integrations.subtitle}
              </p>
            </div>

            {/* Communication Channels */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-wider text-[#78716c] font-medium mb-4">{features.integrations.categories.communication}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
              <ToolLogo name="WhatsApp"><SiWhatsapp size={28} color="#25D366" /></ToolLogo>
              <ToolLogo name="Telegram"><SiTelegram size={28} color="#26A5E4" /></ToolLogo>
              <ToolLogo name="Slack">
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z" fill="#E01E5A"/>
                  <path d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312z" fill="#36C5F0"/>
                  <path d="M18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.163 0a2.528 2.528 0 012.523 2.522v6.312z" fill="#2EB67D"/>
                  <path d="M15.163 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.163 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 01-2.52-2.523 2.527 2.527 0 012.52-2.52h6.315A2.528 2.528 0 0124 15.163a2.528 2.528 0 01-2.522 2.523h-6.315z" fill="#ECB22E"/>
                </svg>
              </ToolLogo>
              <ToolLogo name="Microsoft Teams">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M20.625 10.25h-3.125c.069 0 .125-.056.125-.125V7.75a1.375 1.375 0 00-2.75 0V8h-.102A3.99 3.99 0 0016 6a4 4 0 00-.625-2.14A1.375 1.375 0 0116.75 2.5c.76 0 1.375.616 1.375 1.375V7.75h2.5a.625.625 0 01.625.625v3.25A2.625 2.625 0 0118.625 14.25h-.087A4.375 4.375 0 0114 17.5h-.75A4.375 4.375 0 018.875 14.25H8.5A1.875 1.875 0 016.625 12.375V8.875a.625.625 0 01.625-.625H12.5a.125.125 0 00.125-.125V6a4 4 0 018 4.25z" fill="#5059C9"/>
                  <circle cx="16.75" cy="3.875" r="1.375" fill="#5059C9"/>
                  <circle cx="11" cy="5" r="2.5" fill="#7B83EB"/>
                  <rect x="6.625" y="8.25" width="8.75" height="8.75" rx=".875" fill="#7B83EB"/>
                  <rect x="4" y="9.5" width="7" height="7" rx=".625" fill="#4B53BC"/>
                  <path d="M9.5 11.5H5.5v1h1.5v3h1v-3h1.5v-1z" fill="white"/>
                </svg>
              </ToolLogo>
              <ToolLogo name="Discord"><SiDiscord size={28} color="#5865F2" /></ToolLogo>
              <ToolLogo name="Signal"><SiSignal size={28} color="#3B45FD" /></ToolLogo>
            </div>
          </div>

          {/* Productivity & Documents */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-wider text-[#78716c] font-medium mb-4">{features.integrations.categories.productivity}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
              <ToolLogo name="Notion"><SiNotion size={28} color="#000000" /></ToolLogo>
              <ToolLogo name="Obsidian"><SiObsidian size={28} color="#7C3AED" /></ToolLogo>
              <ToolLogo name="Trello"><SiTrello size={28} color="#0052CC" /></ToolLogo>
              <ToolLogo name="GitHub"><SiGithub size={28} color="#181717" /></ToolLogo>
              <ToolLogo name="Google Docs"><SiGoogledocs size={28} color="#4285F4" /></ToolLogo>
              <ToolLogo name="Microsoft 365">
                <svg width="28" height="28" viewBox="0 0 23 23" fill="none">
                  <rect width="11" height="11" fill="#F25022"/>
                  <rect x="12" width="11" height="11" fill="#7FBA00"/>
                  <rect y="12" width="11" height="11" fill="#00A4EF"/>
                  <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
                </svg>
              </ToolLogo>
            </div>
          </div>

          {/* AI & Infrastructure */}
          <div>
            <p className="text-xs uppercase tracking-wider text-[#78716c] font-medium mb-4">{features.integrations.categories.infrastructure}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
              <ToolLogo name="NVIDIA Nemotron"><SiNvidia size={28} color="#76B900" /></ToolLogo>
              <ToolLogo name="Ollama (Local)"><SiOllama size={28} color="#000000" /></ToolLogo>
              <ToolLogo name="ClawHub Skills">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5a7a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12l2 2 4-4"/>
                </svg>
              </ToolLogo>
              <ToolLogo name="Landlock Sandbox">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a66d4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L4 5.5V11c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V5.5L12 2z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </ToolLogo>
              <ToolLogo name="Docker"><SiDocker size={28} color="#2496ED" /></ToolLogo>
              <ToolLogo name="Kubernetes"><SiKubernetes size={28} color="#326CE5" /></ToolLogo>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ToolLogo({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="w-14 h-14 rounded-xl bg-white border border-[#e7e5e4] flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-[#5a7a4a] transition-all duration-200">
        {children}
      </div>
      <span className="text-xs text-[#57534e] text-center leading-tight">{name}</span>
    </div>
  );
}
