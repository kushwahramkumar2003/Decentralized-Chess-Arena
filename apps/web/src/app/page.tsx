import { Background } from "@/components/background";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { WaitlistSection } from "@/components/sections/waitlist-section";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-heade";
import { getRecentWaitlistUsers } from "./actions/waitlist";
import { WaitlistUser } from "@prisma/client";

interface WaitlistUser2 {
  handle: string;
  createdAt: string;
}

export default async function Home() {
  const users = (await getRecentWaitlistUsers()) as WaitlistUser[];
  const formattedUsers: WaitlistUser2[] = users.map((user) => ({
    ...user,
    createdAt: user.createdAt.toISOString(),
  }));

  return (
    <div className="relative min-h-screen">
      <Background />
      <SiteHeader />
      <main>
        <HeroSection users={formattedUsers} />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <WaitlistSection users={formattedUsers} />
      </main>
      <SiteFooter />
    </div>
  );
}
