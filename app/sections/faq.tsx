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
    question: 'Was kann der KI-Mitarbeiter konkret tun?',
    answer:
      'Ihr KI-Mitarbeiter übernimmt alle administrativen Routineaufgaben: E-Mails lesen und beantworten, Kalender verwalten und Termine koordinieren, Recherchen durchführen, Reports und Präsentationen erstellen, sowie DSGVO-Dokumentation automatisch pflegen. Er arbeitet 24/7 und lernt Ihre Präferenzen kennen.',
  },
  {
    question: 'Ist meine Daten wirklich sicher?',
    answer:
      'Absolut. Bei Starter (Self-Hosted) verlassen Ihre Daten niemals Ihre Server. Bei Professional hosten wir ausschließlich in deutschen Rechenzentren (Hetzner, AWS Frankfurt). Keine Datenweitergabe in die USA, keine Nutzung für KI-Training, vollständiges Audit-Log. Wir erfüllen alle DSGVO-Anforderungen und bieten fertige Verarbeitungsverzeichnisse.',
  },
  {
    question: 'Wie unterscheidet sich das von ChatGPT oder anderen KI-Tools?',
    answer:
      'ChatGPT und US-basierte Tools übertragen Ihre Daten in unsichere Drittländer (USA) – ein massives DSGVO-Risiko. Unser KI-Mitarbeiter läuft ausschließlich auf EU-Servern, ist speziell für deutsche Geschäftsprozesse trainiert und integriert sich nahtlos in Ihre bestehenden Tools (E-Mail, Kalender, Slack, etc.).',
  },
  {
    question: 'Wie lange dauert die Einrichtung?',
    answer:
      'Die Einrichtung dauert weniger als 10 Minuten. Sie verbinden einfach Ihre E-Mail und Kalender, definieren Ihre Präferenzen – und der KI-Mitarbeiter beginnt sofort zu arbeiten. Keine IT-Kenntnisse nötig, unser Onboarding-Assistent führt Sie Schritt für Schritt.',
  },
  {
    question: 'Kann ich zwischen Self-Hosted und Cloud wechseln?',
    answer:
      'Ja, jederzeit. Sie können mit Starter (Self-Hosted) beginnen und später auf Professional (Cloud) umsteigen – oder umgekehrt. Ihre Daten und Einstellungen können migriert werden. Sie haben immer die volle Flexibilität.',
  },
  {
    question: 'Gibt es eine Geld-zurück-Garantie?',
    answer:
      'Ja, wir bieten 14 Tage Geld-zurück-Garantie. Testen Sie den KI-Mitarbeiter risikofrei. Wenn Sie nicht überzeugt sind, erhalten Sie eine volle Rückerstattung – ohne Fragen.',
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
