import { Hero } from './sections/hero';
import { Problem } from './sections/problem';
import { FeaturesBento } from './sections/features-bento';
import { HowItWorks } from './sections/how-it-works';
import { Pricing } from './sections/pricing';
import { SocialProof } from './sections/social-proof';
import { FAQ } from './sections/faq';
import { CTA } from './sections/cta';

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Hero />
      <div className="w-full h-px bg-[#e7e5e4]" />
      <Problem />
      <div className="w-full h-px bg-[#e7e5e4]" />
      <FeaturesBento />
      <div className="w-full h-px bg-[#e7e5e4]" />
      <HowItWorks />
      <div className="w-full h-px bg-[#e7e5e4]" />
      <Pricing />
      <div className="w-full h-px bg-[#e7e5e4]" />
      <SocialProof />
      <div className="w-full h-px bg-[#e7e5e4]" />
      <FAQ />
      <div className="w-full h-px bg-[#e7e5e4]" />
      <CTA />
    </main>
  );
}