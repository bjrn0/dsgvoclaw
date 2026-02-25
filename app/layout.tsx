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
  title: "DSGVOClaw - DSGVO-Konformität, automatisiert",
  description: "Der einzige KI-Assistent, der speziell für deutsche Datenschutzstandards entwickelt wurde.",
  keywords: ["DSGVO", "GDPR", "Datenschutz", "KI", "Compliance", "Deutschland"],
  authors: [{ name: "DSGVOClaw" }],
  openGraph: {
    title: "DSGVOClaw - DSGVO-Konformität, automatisiert",
    description: "Der einzige KI-Assistent für deutsche Datenschutzstandards.",
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