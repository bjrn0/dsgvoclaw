# DSGVOClaw Landing Page Repositioning Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reposition DSGVOClaw from a GDPR documentation tool to an AI employee/agent platform for German/EU businesses, with professional urgency messaging and simplified pricing.

**Architecture:** Keep existing Next.js structure, update copy and positioning across all sections. Maintain German language and design system. Add AI agent capabilities messaging while keeping GDPR compliance as trust anchor.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion

---

## Strategic Overview

**New Positioning:**
- Old: "GDPR compliance documentation generator"
- New: "AI employee that works 24/7, fully GDPR-compliant"

**Key Messages:**
- AI handles: Inbox Zero, emails, calendar, research, reports, automation
- 100% EU hosting, no US data transfer
- Replace 2-4 FTEs per department
- Professional urgency: "2026 is the year AI becomes standard"

**Pricing Strategy:**
- Remove "per agent" confusion
- One-time: €399 (was €499) - more accessible
- Monthly: €79/month (was €149) - sustainable
- Enterprise: Custom pricing unchanged

---

## Task 1: Update Hero Section

**Files:**
- Modify: `app/sections/hero.tsx`

**Changes:**

**Step 1: Update headline and subheadline**

```tsx
// OLD:
// "DSGVO-Konformität. Vollautomatisch. Made in Germany."
// "Die einzige KI-gestützte Plattform für deutsche Datenschutzstandards..."

// NEW:
<h1 className="text-[32px] sm:text-[45px] md:text-[60px] leading-[1.1] tracking-[-0.03em] font-semibold text-[#1c1917]">
  <span className="block">Ihr KI-Mitarbeiter,</span>
  <span className="block">der wirklich arbeitet.</span>
  <span className="block text-[#5a7a4a]">100% DSGVO-konform.</span>
</h1>

// Subheadline:
// "Ersetzen Sie 2–4 Vollzeitkräfte pro Abteilung. Vollautomatisiert."
// "EU-Server. Kein US-Risiko. Kein Bußgeld."
```

**Step 2: Update stats to reflect AI employee value**

```tsx
// OLD STATS:
// 200+ Unternehmen | 0 Datenlecks | 95% Zeitersparnis

// NEW STATS:
<div className="text-center">
  <div className="text-2xl sm:text-3xl font-bold text-[#1c1917]">2–4</div>
  <div className="text-sm text-[#78716c] mt-0.5">FTEs ersetzt</div>
</div>
<div className="w-px h-10 bg-[#e7e5e4] hidden sm:block" />
<div className="text-center">
  <div className="text-2xl sm:text-3xl font-bold text-[#1c1917]">60%</div>
  <div className="text-sm text-[#78716c] mt-0.5">Kostensenkung</div>
</div>
<div className="w-px h-10 bg-[#e7e5e4] hidden sm:block" />
<div className="text-center">
  <div className="text-2xl sm:text-3xl font-bold text-[#1c1917]">24/7</div>
  <div className="text-sm text-[#78716c] mt-0.5">Verfügbarkeit</div>
</div>
```

**Step 3: Update CTA text**

```tsx
// OLD: "Warteliste beitreten"
// NEW: "Jetzt 14 Tage testen"

// OLD: "Demo ansehen"  
// NEW: "Preise ansehen"
```

**Step 4: Add urgency banner below headline**

```tsx
// Add after subheadline, before CTAs:
<motion.div variants={itemVariants} className="mb-6">
  <p className="text-sm text-[#a66d4b] font-medium">
    2026 wird das Jahr der KI-Transformation. Wer jetzt nicht startet, fällt zurück.
  </p>
</motion.div>
```

---

## Task 2: Update Problem Section

**Files:**
- Modify: `app/sections/problem.tsx`

**Changes:**

**Step 1: Update section header**

```tsx
// OLD:
// "DSGVO-Compliance ist ein Full-Time Job"
// "Deutsche Unternehmen verlieren jährlich über 200 Stunden..."

// NEW:
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
  Manuelle Arbeit frisst Ihre<br />
  <span className="text-[#a66d4b]">Wettbewerbsfähigkeit</span>
</h2>

<p className="text-lg text-[#57534e]">
  Während Ihre Konkurrenz bereits KI einsetzt, verlieren Sie Zeit mit Routineaufgaben
</p>
```

**Step 2: Update problem cards to focus on business impact**

```tsx
// Replace problems array:
const problems: ProblemItem[] = [
  {
    icon: Clock,
    title: 'Zeitverlust',
    metric: '200+',
    subtitle: 'Stunden/Monat',
    description: 'Manuelle E-Mails, Kalender, Reports – Zeit, die für strategische Aufgaben fehlt.',
    variant: 'amber',
    bgVariant: 'sage',
    progress: 67,
    progressLabel: 'Routineaufgaben',
    features: ['E-Mail Management', 'Kalenderpflege', 'Report-Erstellung'],
  },
  {
    icon: AlertTriangle,
    title: 'DSGVO-Risiko',
    metric: '€20 Mio.',
    subtitle: 'Max. Bußgeld',
    description: 'Ohne ordentliche Dokumentation drohen existenzbedrohende Strafen.',
    variant: 'rose',
    bgVariant: 'terracotta',
    stat: '+340%',
    statLabel: 'Anstieg 2023',
    features: ['Art. 83 DSGVO', 'Meldungsfristen', 'Dokumentationspflicht'],
  },
  {
    icon: Users,
    title: 'Personalmangel',
    metric: '70%',
    subtitle: 'der KMUs',
    description: 'Haben keine Kapazität für zusätzliche administrative FTEs.',
    variant: 'amber',
    bgVariant: 'sage',
    stat: '€80K',
    statLabel: 'Ø Gehalt/FTE',
    features: ['Fachkräftemangel', 'Hohe Kosten', 'Lange Einarbeitung'],
  },
  {
    icon: Shield,
    title: 'US-Abhängigkeit',
    metric: '100%',
    subtitle: 'Datenrisiko',
    description: 'Standard-KI-Tools übertragen Daten in unsichere Drittländer.',
    variant: 'rose',
    bgVariant: 'terracotta',
    features: ['Kein US-Cloud Act', 'EU-Server only', 'DSGVO-konform'],
  },
];
```

**Step 3: Update bottom stats**

```tsx
// OLD:
// €2.8Mrd Bußgelder | 47% Nicht konform | 3 Tage Meldungsfrist | 30.000€ Kosten

// NEW:
<StatCard 
  value="40%" 
  label="weniger Verwaltung" 
  icon={TrendingUp}
  variant="terracotta"
/>
<StatCard 
  value="€2.8Mrd" 
  label="Bußgelder 2023" 
  icon={AlertCircle}
  variant="sage"
/>
<StatCard 
  value="0" 
  label="US-Datenweitergabe" 
  icon={Shield}
  variant="cream"
/>
<StatCard 
  value="24h" 
  label="Reaktionszeit" 
  icon={Clock}
  variant="stone"
/>
```

---

## Task 3: Update Features Section

**Files:**
- Modify: `app/sections/features-bento.tsx`

**Changes:**

**Step 1: Update section header**

```tsx
// OLD:
// "AI-Powered Compliance"
// "Alles, was Sie für DSGVO-Compliance brauchen"

// NEW:
<div className="text-xs uppercase tracking-widest text-[#78716c] font-medium mb-4">
  KI-Automatisierung
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
  Ein KI-Mitarbeiter für<br />
  <span className="text-[#7c9a8c]">alle Ihre Aufgaben</span>
</h2>
<p className="text-lg text-[#57534e]">
  E-Mails, Kalender, Reports, Recherche – vollautomatisch und DSGVO-sicher
</p>
```

**Step 2: Replace feature cards with AI employee capabilities**

```tsx
// Row 1: E-Mail & Kalender Automation (replace Dokumentation)
<motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#f4f7f2]/20">
  <div className="flex items-start justify-between mb-6">
    <div className="w-12 h-12 rounded-xl bg-[#e8ede3] border border-[#d4ddd0] flex items-center justify-center">
      <Mail className="w-6 h-6 text-[#5a7a4a]" />
    </div>
    <FeatureTag variant="sage">Inbox Zero</FeatureTag>
  </div>
  
  <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
    E-Mail & Kommunikation
  </h3>
  
  <p className="text-[#57534e] leading-relaxed mb-6">
    Liest, kategorisiert und beantwortet E-Mails automatisch. 
    Priorisiert wichtige Nachrichten und erledigt Routine-Anfragen.
  </p>
  
  <div className="space-y-4">
    <div className="flex flex-wrap gap-2 mb-4">
      <FeatureTag icon={Mail} variant="terracotta">Automatisch beantworten</FeatureTag>
      <FeatureTag icon={Calendar} variant="cream">Termine koordinieren</FeatureTag>
    </div>
    
    <div className="space-y-3">
      <ChecklistItem checked>Inbox Zero jeden Tag</ChecklistItem>
      <ChecklistItem checked>Intelligente Priorisierung</ChecklistItem>
      <ChecklistItem checked>Follow-up Erinnerungen</ChecklistItem>
      <ChecklistItem checked>Mehrsprachig (DE/EN)</ChecklistItem>
    </div>
  </div>
</motion.div>

// Row 1: Research & Reports (replace KI-Experte)
<motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#faf6f2]/20">
  <div className="flex items-start justify-between mb-6">
    <div className="w-12 h-12 rounded-xl bg-[#f5ebe0] border border-[#e8d5c4] flex items-center justify-center">
      <Search className="w-6 h-6 text-[#a66d4b]" />
    </div>
    <FeatureTag variant="terracotta">Research</FeatureTag>
  </div>
  
  <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
    Recherche & Analyse
  </h3>
  
  <p className="text-[#57534e] leading-relaxed mb-6">
    Recherchiert Marktdaten, Wettbewerber und Trends. 
    Erstellt professionelle Reports und Präsentationen.
  </p>
  
  <div className="space-y-4">
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div className="p-3 rounded-lg bg-[#fdfcfb] border border-[#e7e5e4] text-center">
        <div className="text-2xl font-bold text-[#c17f59]">10x</div>
        <div className="text-xs text-[#78716c]">schneller</div>
      </div>
      <div className="p-3 rounded-lg bg-[#fdfcfb] border border-[#e7e5e4] text-center">
        <div className="text-2xl font-bold text-[#c17f59]">99%</div>
        <div className="text-xs text-[#78716c]">Genauigkeit</div>
      </div>
    </div>
    
    <div className="flex flex-wrap gap-2">
      <FeatureTag variant="terracotta">Marktrecherche</FeatureTag>
      <FeatureTag variant="cream">Excel-Reports</FeatureTag>
      <FeatureTag variant="sage">Präsentationen</FeatureTag>
    </div>
  </div>
</motion.div>
```

**Step 3: Add more AI capabilities in Row 2**

```tsx
// Replace Self-Hosted card with Calendar & Admin
<motion.div variants={itemVariants} className="px-6 sm:px-8 py-10 sm:py-12 bg-[#fdf6e9]/20">
  <div className="flex items-start justify-between mb-6">
    <div className="w-12 h-12 rounded-xl bg-[#f5efe6] border border-[#e8ddd0] flex items-center justify-center">
      <Calendar className="w-6 h-6 text-[#78716c]" />
    </div>
    <FeatureTag variant="cream">Administration</FeatureTag>
  </div>
  
  <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] mb-3">
    Kalender & Terminmanagement
  </h3>
  
  <p className="text-[#57534e] leading-relaxed mb-6">
    Verwaltet Ihren Kalender, koordiniert Termine mit externen Partnern 
    und bereitet Meetings vor.
  </p>
  
  <div className="space-y-4">
    <div className="space-y-3">
      <ChecklistItem checked>Automatische Terminkoordination</ChecklistItem>
      <ChecklistItem checked>Meeting-Vorbereitung</ChecklistItem>
      <ChecklistItem checked>Reiseplanung & Check-in</ChecklistItem>
      <ChecklistItem checked>Erinnerungen & Follow-ups</ChecklistItem>
    </div>
  </div>
</motion.div>

// Replace Workflow Automation with GDPR Compliance (keep this one)
// But update the copy to emphasize it's automatic:
<p className="text-[#57534e] leading-relaxed mb-6">
  Automatische DSGVO-Dokumentation, Audit-Logs und Compliance-Überwachung 
  – ohne Ihr Zutun.
</p>
```

**Step 4: Update bottom stats**

```tsx
// NEW STATS:
<StatCard 
  value="24/7" 
  label="Automatisierte Arbeit" 
  icon={Clock}
  variant="sage"
/>
<StatCard 
  value="100%" 
  label="DSGVO-Konform" 
  icon={Shield}
  variant="terracotta"
/>
<StatCard 
  value="DE" 
  label="Server-Standort" 
  icon={Server}
  variant="cream"
/>
<StatCard 
  value="0" 
  label="US-Datentransfer" 
  icon={Lock}
  variant="stone"
/>
```

**Step 5: Add imports**

```tsx
import { Mail, Calendar, Search } from 'lucide-react';
```

---

## Task 4: Update How It Works Section

**Files:**
- Modify: `app/sections/how-it-works.tsx`

**Changes:**

**Step 1: Update section header**

```tsx
// OLD:
// "In 4 Schritten zur automatisierten Compliance"

// NEW:
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-4">
  Ihr KI-Mitarbeiter in<br />
  <span className="text-[#7c9a8c]">unter 10 Minuten einsatzbereit</span>
</h2>
```

**Step 2: Update step descriptions**

```tsx
// Step 1: Setup
// "Richten Sie Ihren KI-Mitarbeiter in wenigen Klicks ein"
// "Weniger als 5 Minuten – keine IT-Kenntnisse nötig"

// Step 2: Connect
// "Verbinden Sie E-Mail, Kalender und Tools"
// "Sichere Integration mit Gmail, Outlook, Teams, Slack"

// Step 3: Configure
// "Teilen Sie Ihrem KI-Mitarbeiter mit, was er tun soll"
// "Natürliche Sprache – wie mit einem menschlichen Assistenten"

// Step 4: Work
// "Der KI-Mitarbeiter arbeitet 24/7 für Sie"
// "Sie konzentrieren sich auf das Wesentliche"
```

---

## Task 5: Update Pricing Section

**Files:**
- Modify: `app/sections/pricing.tsx`

**Changes:**

**Step 1: Update pricing plans**

```tsx
const pricingPlans = [
  {
    title: 'Starter',
    icon: Shield,
    price: '€399',
    priceNote: 'Einmalig',
    description: 'Ideal für Einzelunternehmer und kleine Teams',
    features: [
      'Lifetime Lizenz',
      'E-Mail Automation',
      'Kalender Management',
      'Basis Reports',
      'DSGVO-Dokumentation',
      'Community Support',
      'Self-hosted auf Ihren Servern',
    ],
    ctaText: 'Jetzt kaufen',
    variant: 'default' as const,
    color: 'sage',
  },
  {
    title: 'Professional',
    icon: Sparkles,
    price: '€79',
    priceNote: '/Monat',
    description: 'Für wachsende Unternehmen mit vollem Funktionsumfang',
    features: [
      'Alle Starter Features',
      'Erweiterte Recherche',
      'Excel & Präsentationen',
      'Workflow Automation',
      'Prioritäts-Support',
      '99.9% Uptime Garantie',
      'EU-Cloud Hosting (DE)',
      'Automatische Updates',
    ],
    ctaText: 'Kostenlos testen',
    variant: 'highlighted' as const,
    badge: 'Beliebt',
    color: 'terracotta',
  },
  {
    title: 'Enterprise',
    icon: Building2,
    price: 'Custom',
    priceNote: '',
    description: 'Maßgeschneidert für große Organisationen',
    features: [
      'Alle Professional Features',
      'Dedizierter Account Manager',
      'Custom Integrationen',
      'On-Premise Deployment',
      'Team-Schulungen',
      'Custom SLA',
      'White-Label Option',
      'Compliance-Manager',
    ],
    ctaText: 'Gespräch vereinbaren',
    variant: 'default' as const,
    color: 'cream',
  },
];
```

**Step 2: Add urgency to pricing header**

```tsx
// Add after subheadline:
<p className="text-sm text-[#a66d4b] mt-4">
  Frühbucher-Rabatt: 20% auf alle Jahreszahlungen gültig bis 31.03.2026
</p>
```

---

## Task 6: Update FAQ Section

**Files:**
- Modify: `app/sections/faq.tsx`

**Changes:**

**Step 1: Update FAQs for AI employee positioning**

```tsx
const faqs = [
  {
    question: 'Was kann der KI-Mitarbeiter konkret tun?',
    answer:
      'Ihr KI-Mitarbeiter übernimmt alle administrativen Routineaufgaben: E-Mails lesen und beantworten, Kalender verwalten und Termine koordinieren, Recherchen durchführen, Reports und Präsentationen erstellen, sowie DSGVO-Dokumentation automatisch pflegen. Er arbeitet 24/7 und lernt Ihre Präferenzen kennen.',
  },
  {
    question: 'Ist meine Daten wirklich sicher?',
    answer:
      'Absolut. Bei Self-Hosted verlassen Ihre Daten niemals Ihre Server. Bei Professional hosten wir ausschließlich in deutschen Rechenzentren (Hetzner, AWS Frankfurt). Keine Datenweitergabe in die USA, keine Nutzung für KI-Training, vollständiges Audit-Log. Wir erfüllen alle DSGVO-Anforderungen und bieten fertige Verarbeitungsverzeichnisse.',
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
      'Ja, jederzeit. Sie können mit Self-Hosted starten und später auf Professional (Cloud) umsteigen – oder umgekehrt. Ihre Daten und Einstellungen können migriert werden. Sie haben immer die volle Flexibilität.',
  },
  {
    question: 'Gibt es eine Geld-zurück-Garantie?',
    answer:
      'Ja, wir bieten 14 Tage Geld-zurück-Garantie. Testen Sie den KI-Mitarbeiter risikofrei. Wenn Sie nicht überzeugt sind, erhalten Sie eine volle Rückerstattung – ohne Fragen.',
  },
];
```

---

## Task 7: Update CTA Section

**Files:**
- Modify: `app/sections/cta.tsx`

**Changes:**

**Step 1: Update headline and messaging**

```tsx
// OLD:
// "Werden Sie DSGVO-Konform – Heute"
// "Treten Sie der Warteliste bei..."

// NEW:
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1c1917] mb-6">
  Starten Sie 2026 mit einem<br />
  <span className="text-[#5a7a4a]">KI-Vorsprung</span>
</h2>

<p className="text-lg text-[#57534e] mb-10 max-w-xl mx-auto">
  Testen Sie 14 Tage kostenlos – voller Funktionsumfang, keine Kreditkarte nötig. 
  Entscheiden Sie dann, ob der KI-Mitarbeiter Ihr Team verstärkt.
</p>
```

**Step 2: Update trust badges**

```tsx
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
```

**Step 3: Add professional urgency note**

```tsx
// Add after trust badges:
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
```

---

## Task 8: Update Navbar (Optional)

**Files:**
- Modify: `app/components/navbar.tsx`

**Changes:**

**Step 1: Update nav links if needed**

```tsx
// Consider updating labels to match new positioning:
// "Problem" → "Herausforderung"
// "Features" → "Funktionen"
// "Preise" stays
// "Kunden" stays
// "FAQ" stays
```

---

## Task 9: Update Metadata/SEO

**Files:**
- Modify: `app/layout.tsx`

**Changes:**

**Step 1: Update metadata**

```tsx
// OLD:
// title: "DSGVOClaw - DSGVO-Konformität, automatisiert"
// description: "Der einzige KI-Assistent, der speziell für deutsche Datenschutzstandards entwickelt wurde."

// NEW:
export const metadata: Metadata = {
  title: "DSGVOClaw - Ihr KI-Mitarbeiter, 100% DSGVO-konform",
  description: "Ersetzen Sie 2-4 administrative FTEs mit einem KI-Mitarbeiter. E-Mails, Kalender, Reports, Recherche – vollautomatisiert. EU-Server, kein US-Risiko, keine Bußgelder.",
  keywords: ["KI-Mitarbeiter", "DSGVO", "Automatisierung", "E-Mail Automation", "Datenschutz", "Deutschland"],
  // ... rest unchanged
};
```

---

## Testing Checklist

After all changes:

- [ ] Hero displays new headline and stats
- [ ] Problem section shows business pain points
- [ ] Features show AI capabilities (email, calendar, research)
- [ ] Pricing shows €399 / €79 tiers
- [ ] FAQs answer AI employee questions
- [ ] CTA has professional urgency messaging
- [ ] All imports resolve (no missing icons)
- [ ] No TypeScript errors
- [ ] Design remains consistent with existing styles

## Build & Deploy

```bash
npm run build
# Check for errors
```

All sections updated for AI employee positioning with professional urgency messaging.
