import { TerminalHeader } from "@/components/portfolio/TerminalHeader";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { TechStackSection } from "@/components/portfolio/TechStackSection";
import { HomelabSection } from "@/components/portfolio/HomelabSection";
import { InterestsSection } from "@/components/portfolio/InterestsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-green-400 crt-effect">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="terminal-border bg-black/90 p-6 rounded-lg">
          <TerminalHeader />
          <div className="space-y-8 mt-6">
            <HeroSection />
            <AboutSection />
            <TechStackSection />
            <HomelabSection />
            <InterestsSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}
