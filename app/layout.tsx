import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DSGVOClaw - Ihr KI-Mitarbeiter, 100% DSGVO-konform",
  description: "Ersetzen Sie 2–4 administrative FTEs mit einem KI-Mitarbeiter. E-Mails, Kalender, Reports, Recherche – vollautomatisiert. EU-Server, kein US-Risiko, keine Bußgelder.",
  keywords: ["KI-Mitarbeiter", "DSGVO", "Automatisierung", "E-Mail Automation", "Datenschutz", "Deutschland", "KI-Assistent"],
  authors: [{ name: "DSGVOClaw" }],
  openGraph: {
    title: "DSGVOClaw - Ihr KI-Mitarbeiter, 100% DSGVO-konform",
    description: "Ersetzen Sie 2–4 administrative FTEs mit einem KI-Mitarbeiter. EU-Server, kein US-Risiko.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${interTight.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}