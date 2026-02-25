'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { IconCircle, FeatureTag } from '@/app/components/premium-components';

const testimonials = [
  {
    quote: 'DSGVOClaw hat unsere Datenschutzprozesse revolutioniert. Was früher Tage dauerte, erledigen wir jetzt in Minuten.',
    author: 'Maria Schmidt',
    role: 'Datenschutzbeauftragte',
    company: 'TechCorp GmbH',
    rating: 5,
    variant: 'sage' as const,
  },
  {
    quote: 'Endlich ein Tool, das versteht, was deutsche Unternehmen brauchen. Die Self-Hosted Option war ein Game-Changer für uns.',
    author: 'Thomas Weber',
    role: 'CTO',
    company: 'DataSecure AG',
    rating: 5,
    variant: 'terracotta' as const,
  },
  {
    quote: 'Unsere Kunden vertrauen uns jetzt noch mehr, seitdem wir DSGVOClaw für unsere Compliance nutzen.',
    author: 'Anna Müller',
    role: 'Geschäftsführerin',
    company: 'PrivacyFirst Consulting',
    rating: 5,
    variant: 'cream' as const,
  },
];

export function SocialProof() {
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
    <section id="social-proof" className="relative py-24 md:py-32 bg-[#faf7f2]">
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
            Testimonials
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
            Was unsere<br />
            <span className="text-[#7c9a8c]">Kunden sagen</span>
          </h2>
          
          <p className="text-lg text-[#57534e]">
            Vertrauen von über 200 Unternehmen in Deutschland
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className={`rounded-2xl p-6 sm:p-8 border ${
                testimonial.variant === 'sage'
                  ? 'bg-[#f4f7f2]/50 border-[#d4e0d4]'
                  : testimonial.variant === 'terracotta'
                  ? 'bg-[#faf6f2]/50 border-[#e8d5c4]'
                  : 'bg-[#fdf6e9]/50 border-[#e8d5c4]'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-[#d6d3d1] mb-3" />
                <p className="text-[#57534e] leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#e7e5e4]">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  testimonial.variant === 'sage'
                    ? 'bg-[#e8f0e8] text-[#5a7a6a]'
                    : testimonial.variant === 'terracotta'
                    ? 'bg-[#f5ebe4] text-[#a66a4b]'
                    : 'bg-[#f5ebe4] text-[#8b6f4e]'
                }`}>
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div>
                  <p className="font-semibold text-[#1c1917]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#57534e]">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-[#78716c]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
