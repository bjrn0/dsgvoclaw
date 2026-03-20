'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Users, ArrowRight, Mail } from 'lucide-react';
import { ChecklistItem } from '@/app/components/premium-components';
import { useSiteConfig } from '@/lib/use-site';

const trustBadgeIcons = [Shield, Clock, Users];

export function CTA() {
  const { content: { cta } } = useSiteConfig();

  return (
    <section className="relative py-16 md:py-20 bg-[#f4f7f2] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #5a7a4a 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#5a7a4a] text-sm font-medium border border-[#d4ddd0]">
              <Shield className="w-4 h-4" />
              {cta.badge}
            </span>
          </div>

          {/* Main Heading */}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-6">
            {cta.headline}<br />
            <span className="text-[#5a7a4a]">{cta.headlineAccent}</span>
          </h2>

          <p className="text-lg text-[#57534e] mb-10 max-w-xl mx-auto">
            {cta.subheadline}
          </p>

          {/* Email Form */}

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#78716c]" />
                <input
                  type="email"
                  placeholder={cta.emailPlaceholder}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[#d4ddd0] rounded-full text-[#1c1917] placeholder:text-[#78716c] focus:outline-none focus:ring-2 focus:ring-[#7c9a6a] focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1c1917] text-[#fdfcfb] rounded-full font-medium hover:bg-[#292524] transition-all duration-300 whitespace-nowrap"
              >
                {cta.submitText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Benefits */}

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {cta.benefits.map((benefit) => (
              <ChecklistItem key={benefit} checked className="text-[#57534e]">{benefit}</ChecklistItem>
            ))}
          </motion.div>

          {/* Trust Badges */}

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {cta.trustBadges.map((badge, idx) => {
              const Icon = trustBadgeIcons[idx];
              return (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-sm text-[#57534e]"
                >
                  <Icon className="h-4 w-4 text-[#5a7a4a]" />
                  <span>{badge}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Professional Urgency Note */}
          <motion.p
            className="text-sm text-[#78716c] mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {cta.urgencyText}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
