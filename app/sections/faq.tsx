'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { IconCircle } from '@/app/components/premium-components';

const faqs = [
  {
    question: 'Ist DSGVOClaw wirklich DSGVO-konform?',
    answer:
      'Ja, DSGVOClaw wurde speziell nach deutschen Datenschutzstandards entwickelt. Wir hosten ausschließlich in Deutschland und der EU, und bei der Self-Hosted-Option haben Sie die volle Kontrolle über Ihre Daten. Unser System erfüllt alle Anforderungen der DSGVO und wird regelmäßig von externen Datenschutzexperten geprüft.',
  },
  {
    question: 'Was ist der Unterschied zwischen Self-Hosted und Managed?',
    answer:
      'Bei Self-Hosted installieren Sie DSGVOClaw auf Ihren eigenen Servern. Sie haben volle Datensouveränität, zahlen einmalig und besitzen eine Lifetime-Lizenz. Bei Managed hosten wir die Anwendung für Sie in deutschen Rechenzentren. Sie profitieren von automatischen Updates, 99.9% Uptime-Garantie und Prioritäts-Support.',
  },
  {
    question: 'Wie lange dauert die Einrichtung?',
    answer:
      'Die Einrichtung von DSGVOClaw dauert weniger als 10 Minuten. Bei Self-Hosted folgen Sie einfach unserer Schritt-für-Schritt-Anleitung. Bei Managed richten wir Ihre Instanz innerhalb von 24 Stunden ein. Unser Onboarding-Assistent führt Sie durch den gesamten Prozess.',
  },
  {
    question: 'Kann ich DSGVOClaw mit meinen Tools verbinden?',
    answer:
      'Ja, DSGVOClaw bietet eine umfangreiche API und native Integrationen für gängige Tools wie CRM-Systeme, Marketing-Plattformen und Cloud-Speicher. Bei Enterprise erhalten Sie sogar maßgeschneiderte Integrationen für Ihre spezifischen Anforderungen.',
  },
  {
    question: 'Gibt es eine Geld-zurück-Garantie?',
    answer:
      'Absolut. Wir bieten eine 14-tägige Geld-zurück-Garantie für alle Pläne. Wenn Sie mit DSGVOClaw nicht zufrieden sind, erhalten Sie Ihr Geld zurück - ohne Fragen. Bei Self-Hosted gilt dies innerhalb von 14 Tagen nach Kauf, bei Managed innerhalb der ersten 14 Tage nach Aktivierung.',
  },
  {
    question: 'Werden meine Daten für KI-Training verwendet?',
    answer:
      'Nein, niemals. Ihre Daten gehören Ihnen und werden niemals für KI-Training oder andere Zwecke verwendet. Bei Self-Hosted verlassen Ihre Daten niemals Ihre Server. Bei Managed werden alle Daten ausschließlich in Deutschland gespeichert und verarbeitet. Wir nehmen Datenschutz ernst - das ist unser Versprechen.',
  },
];

export function FAQ() {
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
              FAQ
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
              Häufig gestellte<br />
              <span className="text-[#7c9a8c]">Fragen</span>
            </h2>
            
            <p className="text-lg text-[#57534e]">
              Alles, was Sie über DSGVOClaw wissen müssen
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
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-[#e7e5e4] rounded-xl px-6 data-[state=open]:bg-[#faf7f2] transition-colors last:border-[#e7e5e4]"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-[#1c1917] hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#7c9a8c] flex-shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#57534e] pb-5 pl-8">
                    {faq.answer}
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
                    Noch Fragen?
                  </p>
                  <p className="text-sm text-[#57534e]">
                    Unser Team hilft Ihnen gerne weiter
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1c1917] text-[#fdfcfb] rounded-full text-sm font-medium hover:bg-[#292524] transition-colors"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
