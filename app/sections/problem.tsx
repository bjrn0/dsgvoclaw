'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { IconCircle } from '@/app/components/premium-components';
import { useSiteConfig } from '@/lib/use-site';

export function Problem() {
  const { content: { problem } } = useSiteConfig();

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
    <section id="problem" className="relative pt-24 md:pt-32 pb-12 md:pb-16 bg-[#fdfcfb]">
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
            {problem.sectionLabel}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
            {problem.headline}<br />
            <span className="text-[#a66d4b]">{problem.headlineAccent}</span>
          </h2>

          <p className="text-lg text-[#57534e]">
            {problem.subheadline}
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
            {problem.items.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`px-6 sm:px-8 py-10 sm:py-12 ${idx < 2 ? 'border-r border-[#e7e5e4]' : ''} ${item.bgVariant === 'sage' ? 'bg-[#f4f7f2]/30' : 'bg-[#faf6f2]/30'}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <IconCircle icon={item.icon} variant={item.variant} size="lg" />
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-bold text-[#1c1917]">{item.metric}</div>
                    <div className="text-sm text-[#78716c]">{item.subtitle}</div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#57534e] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Cons - What you risk */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-[#a66d4b] font-medium mb-3">
                    {problem.withoutLabel}
                  </p>
                  <div className="space-y-2">
                    {item.cons.map((con) => (
                      <div key={con} className="flex items-start gap-2">
                        <X className="w-4 h-4 text-[#dc2626] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#57534e]">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros - What you gain */}
                {item.pros.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#5a7a4a] font-medium mb-3">
                      {problem.withLabel}
                    </p>
                    <div className="space-y-2">
                      {item.pros.map((pro) => (
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
