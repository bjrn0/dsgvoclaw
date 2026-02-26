'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Users, ArrowRight, Mail } from 'lucide-react';
import { IconCircle, FeatureTag, ChecklistItem } from '@/app/components/premium-components';

const trustBadges = [
  {
    icon: Shield,
    text: 'DSGVO-konform',
  },
  {
    icon: Clock,
    text: 'Setup in 10 Min.',
  },
  {
    icon: Users,
    text: '200+ Unternehmen',
  },
];

export function CTA() {
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
              Jetzt beitreten
            </span>
          </div>

          {/* Main Heading */}
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-6">
            Starten Sie 2026 mit einem<br />
            <span className="text-[#5a7a4a]">KI-Vorsprung</span>
          </h2>

          <p className="text-lg text-[#57534e] mb-10 max-w-xl mx-auto">
            Testen Sie 14 Tage kostenlos – voller Funktionsumfang, keine Kreditkarte nötig. 
            Entscheiden Sie dann, ob der KI-Mitarbeiter Ihr Team verstärkt.
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
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[#d4ddd0] rounded-full text-[#1c1917] placeholder:text-[#78716c] focus:outline-none focus:ring-2 focus:ring-[#7c9a6a] focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1c1917] text-[#fdfcfb] rounded-full font-medium hover:bg-[#292524] transition-all duration-300 whitespace-nowrap"
              >
                Beitreten
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
            <ChecklistItem checked className="text-[#57534e]">Keine Kreditkarte nötig</ChecklistItem>
            <ChecklistItem checked className="text-[#57534e]">Jederzeit kündbar</ChecklistItem>
            <ChecklistItem checked className="text-[#57534e]">14 Tage Geld-zurück</ChecklistItem>
          </motion.div>

          {/* Trust Badges */}
          
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-sm text-[#57534e]"
              >
                <badge.icon className="h-4 w-4 text-[#5a7a4a]" />
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Professional Urgency Note */}
          <motion.p
            className="text-sm text-[#78716c] mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            2026 wird das Jahr, in dem KI zum Standard wird. 
            Die Frage ist nicht mehr „ob", sondern „wann".
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}