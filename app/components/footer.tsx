'use client';

import { Shield, Twitter, Github, Linkedin, Heart } from 'lucide-react';
import { IconCircle, FeatureTag } from '@/app/components/premium-components';

const footerLinks = {
  produkt: {
    title: 'Produkt',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Preise', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Changelog', href: '#' },
    ],
  },
  unternehmen: {
    title: 'Unternehmen',
    links: [
      { label: 'Über uns', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Karriere', href: '#' },
      { label: 'Kontakt', href: '#' },
    ],
  },
  rechtliches: {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum', href: '#' },
      { label: 'Datenschutz', href: '#' },
      { label: 'AGB', href: '#' },
      { label: 'Cookie-Richtlinie', href: '#' },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e7e5e4] bg-[#fdfcfb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#5a7a4a] flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#fdfcfb]" />
              </div>
              <span className="text-lg font-semibold text-[#1c1917] tracking-tight">DSGVOClaw</span>
            </a>
            
            <p className="max-w-sm text-sm text-[#57534e] leading-relaxed">
              Der KI-Assistent für deutsche Datenschutzstandards. 
              Self-hosted oder Managed – Sie haben die volle Kontrolle über Ihre Daten.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#faf7f2] text-[#57534e] transition-colors hover:bg-[#f4f7f2] hover:text-[#7c9a8c]"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-[#1c1917] mb-4">
                {column.title}
              </h3>
              
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#57534e] transition-colors hover:text-[#7c9a8c]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="my-8 h-px bg-[#e7e5e4]" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#78716c]">
            © 2026 DSGVOClaw. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex items-center gap-4">
            <FeatureTag variant="sage">Made in Germany</FeatureTag>
            <p className="flex items-center gap-1 text-sm text-[#78716c]">
              <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
              Datenschutz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
