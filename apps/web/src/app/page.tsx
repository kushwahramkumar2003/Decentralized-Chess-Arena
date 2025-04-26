import { Background } from "@/components/background";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { WaitlistSection } from "@/components/sections/waitlist-section";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-heade";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <WaitlistSection />
      </main>
      <SiteFooter />
    </div>
  );
}
