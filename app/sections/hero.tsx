'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TrustedByCarousel } from '@/app/components/trusted-by-carousel';
import { FeatureTag } from '@/app/components/premium-components';
import { useSiteConfig } from '@/lib/use-site';

export function Hero() {
  const { content: { hero } } = useSiteConfig();

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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#fdfcfb] pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
      {/* Background depth — grid layers from isxyzdown pattern */}
      <div className="absolute inset-0 bg-grid-blur pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tags Row */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {hero.tags.map((tag) => (
            <FeatureTag key={tag.label} icon={tag.icon} variant={tag.variant}>{tag.label}</FeatureTag>
          ))}
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-[32px] sm:text-[45px] md:text-[60px] leading-[1.1] tracking-[-0.03em] font-semibold text-[#1c1917]">
            {hero.headlineLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
            <span className="block text-[#5a7a4a]">{hero.headlineAccent}</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[550px] text-base sm:text-lg leading-relaxed text-[#57534e] mb-6 sm:mb-8"
          dangerouslySetInnerHTML={{ __html: hero.subheadline }}
        />

        {/* Urgency Banner */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
          <p className="text-sm text-[#a66d4b] font-medium">
            {hero.urgencyText}
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
            {hero.primaryCta}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 text-[#57534e] hover:text-[#1c1917] text-[15px] font-medium transition-colors duration-200"
          >
            {hero.secondaryCta}
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

        {/* Trusted By Carousel — temporarily hidden */}
        {/* <motion.div variants={itemVariants}>
          <TrustedByCarousel />
        </motion.div> */}
      </motion.div>
    </section>
  );
}
