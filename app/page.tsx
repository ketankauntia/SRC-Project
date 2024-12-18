import { AboutProgramSection } from "@/components/AboutProgram";
import { Case } from "@/components/case";
import { CoordinatorSection } from "@/components/Coordinator";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ResearchGroupSection } from "@/components/ResearchGroup";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutProgramSection />
      <Case />
      <ResearchGroupSection />
      <CoordinatorSection />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
