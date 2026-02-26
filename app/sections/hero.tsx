'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Server } from 'lucide-react';
import { TrustedByCarousel } from '@/app/components/trusted-by-carousel';
import { FeatureTag } from '@/app/components/premium-components';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#fdfcfb] pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden bg-pattern-subtle">
      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tags Row */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <FeatureTag icon={Shield} variant="sage">Made in Germany</FeatureTag>
          <FeatureTag icon={Lock} variant="terracotta">DSGVO-konform</FeatureTag>
          <FeatureTag icon={Server} variant="cream">Self-hosted</FeatureTag>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-[32px] sm:text-[45px] md:text-[60px] leading-[1.1] tracking-[-0.03em] font-semibold text-[#1c1917]">
            <span className="block">Ihr KI-Mitarbeiter,</span>
            <span className="block">der wirklich arbeitet.</span>
            <span className="block text-[#5a7a4a]">100% DSGVO-konform.</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[550px] text-base sm:text-lg leading-relaxed text-[#57534e] mb-6 sm:mb-8"
        >
          Ersetzen Sie <span className="font-semibold text-[#1c1917]">2–4 administrative FTEs</span> mit einem KI-Mitarbeiter. 
          E-Mails, Kalender, Reports, Recherche – <span className="font-semibold text-[#1c1917]">vollautomatisiert</span>.
          EU-Server. Kein US-Risiko. Kein Bußgeld.
        </motion.p>

        {/* Urgency Banner */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
          <p className="text-sm text-[#a66d4b] font-medium">
            2026 wird das Jahr der KI-Transformation. Wer jetzt nicht startet, fällt zurück.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16"
        >
          <a
            href="#signup"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1c1917] text-[#fdfcfb] rounded-full font-medium hover:bg-[#292524] transition-all duration-300 text-base w-full sm:w-auto"
          >
            Jetzt 14 Tage testen
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 text-[#57534e] hover:text-[#1c1917] text-[15px] font-medium transition-colors duration-200"
          >
            Preise ansehen
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path 
                d="M6 12L10 8L6 4" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-12 sm:mb-16 px-4"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1c1917]">2–4</div>
            <div className="text-sm text-[#78716c] mt-0.5">FTEs ersetzt</div>
          </div>
          <div className="w-px h-10 bg-[#e7e5e4] hidden sm:block" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1c1917]">60%</div>
            <div className="text-sm text-[#78716c] mt-0.5">Kostensenkung</div>
          </div>
          <div className="w-px h-10 bg-[#e7e5e4] hidden sm:block" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1c1917]">24/7</div>
            <div className="text-sm text-[#78716c] mt-0.5">Verfügbarkeit</div>
          </div>
        </motion.div>

        {/* Trusted By Carousel */}
        <motion.div variants={itemVariants}>
          <TrustedByCarousel />
        </motion.div>
      </motion.div>
    </section>
  );
}