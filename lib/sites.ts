export type SiteId = 'dsgvoclaw' | 'gdprclaw' | 'soc2claw';

export interface SiteConfig {
  id: SiteId;
  name: string;
  lang: string;
  locale: string;
  faviconColor: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
}

export const sites: Record<SiteId, SiteConfig> = {
  dsgvoclaw: {
    id: 'dsgvoclaw',
    name: 'DSGVOClaw',
    lang: 'de',
    locale: 'de_DE',
    faviconColor: '#1e3a5f',
    metadata: {
      title: 'DSGVOClaw - Ihr KI-Mitarbeiter, 100% DSGVO-konform',
      description: 'Ersetzen Sie 2–4 administrative FTEs mit einem KI-Mitarbeiter. E-Mails, Kalender, Reports, Recherche – vollautomatisiert. EU-Server, kein US-Risiko, keine Bußgelder.',
      keywords: ['KI-Mitarbeiter', 'DSGVO', 'Automatisierung', 'E-Mail Automation', 'Datenschutz', 'Deutschland', 'KI-Assistent'],
      ogTitle: 'DSGVOClaw - Ihr KI-Mitarbeiter, 100% DSGVO-konform',
      ogDescription: 'Ersetzen Sie 2–4 administrative FTEs mit einem KI-Mitarbeiter. EU-Server, kein US-Risiko.',
    },
  },
  gdprclaw: {
    id: 'gdprclaw',
    name: 'GDPRClaw',
    lang: 'en',
    locale: 'en_US',
    faviconColor: '#2d6a4f',
    metadata: {
      title: 'GDPRClaw - Your AI Employee, 100% GDPR-Compliant',
      description: 'Replace 2–4 administrative FTEs with an AI employee. Emails, calendar, reports, research – fully automated. EU servers, no US risk, no fines.',
      keywords: ['AI Employee', 'GDPR', 'Automation', 'Email Automation', 'Data Privacy', 'EU Compliance', 'AI Assistant'],
      ogTitle: 'GDPRClaw - Your AI Employee, 100% GDPR-Compliant',
      ogDescription: 'Replace 2–4 administrative FTEs with an AI employee. EU servers, no US risk.',
    },
  },
  soc2claw: {
    id: 'soc2claw',
    name: 'SOC2Claw',
    lang: 'en',
    locale: 'en_US',
    faviconColor: '#7c3aed',
    metadata: {
      title: 'SOC2Claw - Your AI Employee, SOC 2 Type II Compliant',
      description: 'Replace 2–4 administrative FTEs with an AI employee. Emails, calendar, reports, research – fully automated. Sandboxed execution, SOC 2 compliant, zero data leakage.',
      keywords: ['AI Employee', 'SOC 2', 'Compliance', 'Email Automation', 'Data Security', 'Enterprise AI', 'AI Assistant'],
      ogTitle: 'SOC2Claw - Your AI Employee, SOC 2 Type II Compliant',
      ogDescription: 'Replace 2–4 administrative FTEs with an AI employee. SOC 2 certified, sandboxed, secure.',
    },
  },
};

export function getSiteId(): SiteId {
  const id = process.env.NEXT_PUBLIC_SITE_ID as SiteId;
  if (id && sites[id]) return id;
  return 'dsgvoclaw';
}

export function getSiteConfig(): SiteConfig {
  return sites[getSiteId()];
}
