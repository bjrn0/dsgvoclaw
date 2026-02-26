'use client';

import { motion } from 'framer-motion';

const companies = [
  { name: 'Werner & Kollegen Rechtsanwälte', logo: 'Werner & Kollegen' },
  { name: 'Meta Consulting Group', logo: 'Meta Consulting' },
  { name: 'Schmidt Steuerberater PartG', logo: 'Schmidt Steuerberater' },
  { name: 'Vertex Solutions GmbH', logo: 'Vertex Solutions' },
  { name: 'Koch Rechtsanwälte mbB', logo: 'Koch Rechtsanwälte' },
  { name: 'Axiom Partners', logo: 'Axiom Partners' },
  { name: 'Richter Datenschutz Consult', logo: 'Richter Consult' },
  { name: 'Nexus Advisory', logo: 'Nexus Advisory' },
  { name: 'Weber Treuhand GmbH', logo: 'Weber Treuhand' },
  { name: 'Praxis Consulting', logo: 'Praxis Consulting' },
  { name: 'Krause Wirtschaftsprüfer AG', logo: 'Krause WP' },
  { name: 'Global Edge Partners', logo: 'Global Edge' },
  { name: 'Lehmann Rechtsanwälte', logo: 'Lehmann Kanzlei' },
  { name: 'Summit Advisory Group', logo: 'Summit Advisory' },
  { name: 'Braun & Associates', logo: 'Braun & Associates' },
  { name: 'Pinnacle Consult', logo: 'Pinnacle Consult' },
];

export function TrustedByCarousel() {
  return (
    <div className="w-full overflow-hidden py-6">
      <p className="text-center text-xs uppercase tracking-widest text-[#78716c] font-medium mb-6">
        Vertraut von führenden Unternehmen
      </p>
      
      <div className="relative">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fdfcfb] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fdfcfb] to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -50 * companies.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* First set of companies */}
          {companies.map((company, idx) => (
            <div
              key={`first-${idx}`}
              className="flex items-center justify-center px-4 shrink-0"
            >
              <span className="text-lg font-semibold text-[#a8a29e] whitespace-nowrap hover:text-[#78716c] transition-colors">
                {company.logo}
              </span>
            </div>
          ))}
          
          {/* Duplicate for seamless loop */}
          {companies.map((company, idx) => (
            <div
              key={`second-${idx}`}
              className="flex items-center justify-center px-4 shrink-0"
            >
              <span className="text-lg font-semibold text-[#a8a29e] whitespace-nowrap hover:text-[#78716c] transition-colors">
                {company.logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
