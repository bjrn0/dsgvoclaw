import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { getSiteConfig } from "@/lib/sites";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export function generateMetadata(): Metadata {
  const site = getSiteConfig();

  return {
    title: site.metadata.title,
    description: site.metadata.description,
    keywords: site.metadata.keywords,
    authors: [{ name: site.name }],
    openGraph: {
      title: site.metadata.ogTitle,
      description: site.metadata.ogDescription,
      type: "website",
      locale: site.locale,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = getSiteConfig();

  return (
    <html lang={site.lang}>
      <body className={`${interTight.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}