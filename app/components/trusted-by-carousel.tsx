'use client';

import { motion } from 'framer-motion';

const companies = [
  'sevDesk',
  'Candis',
  'Circula',
  'Taxdoo',
  'Haiilo',
  'Moss',
  'Billie',
  'FastBill',
  'Scopevisio',
  'Storyblok',
  'Mostly AI',
  'Prewave',
  'Anyline',
  'Usersnap',
  'Zeotap',
  'Userlane',
];

export function TrustedByCarousel() {
  return (
    <div className="w-full overflow-hidden py-6">
      <p className="text-center text-xs uppercase tracking-widest text-[#78716c] font-medium mb-6">
        Vertraut von führenden Unternehmen
      </p>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fdfcfb] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fdfcfb] to-transparent z-10" />
        
        <motion.div
          className="flex gap-14 items-center"
          animate={{
            x: [0, -120 * companies.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...companies, ...companies].map((name, idx) => (
            <div
              key={`logo-${idx}`}
              className="flex items-center justify-center shrink-0"
            >
              <span className="text-[22px] font-bold tracking-tight text-[#c8c4bf] whitespace-nowrap select-none hover:text-[#a8a29e] transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
