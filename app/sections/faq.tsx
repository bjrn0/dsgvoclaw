'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { IconCircle } from '@/app/components/premium-components';
import { useSiteConfig } from '@/lib/use-site';

export function FAQ() {
  const { content: { faq } } = useSiteConfig();

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#fdfcfb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-widest text-[#78716c] font-medium mb-4">
              {faq.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
              {faq.headline}<br />
              <span className="text-[#7c9a8c]">{faq.headlineAccent}</span>
            </h2>

            <p className="text-lg text-[#57534e]">
              {faq.subheadline}
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faq.items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-[#e7e5e4] rounded-xl px-6 data-[state=open]:bg-[#faf7f2] transition-colors last:border-[#e7e5e4]"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-[#1c1917] hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#7c9a8c] flex-shrink-0" />
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#57534e] pb-5 pl-8">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            className="mt-12 p-8 rounded-2xl bg-[#f4f7f2] border border-[#d4e0d4]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <IconCircle icon={MessageCircle} variant="sage" size="md" />
                <div className="text-left">
                  <p className="text-[#1c1917] font-medium">
                    {faq.contactTitle}
                  </p>
                  <p className="text-sm text-[#57534e]">
                    {faq.contactSubtitle}
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1c1917] text-[#fdfcfb] rounded-full text-sm font-medium hover:bg-[#292524] transition-colors"
              >
                {faq.contactCta}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
