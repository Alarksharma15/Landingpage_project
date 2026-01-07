import { Background } from "@/components/sections/Background";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { FeatureDeepDive } from "@/components/sections/FeatureDeepDive";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30 text-white overflow-hidden">
      <Background />
      <Navbar />

      <div className="flex flex-col gap-0 md:gap-0 pb-24">
        <Hero />
        <TrustedBy />
        <BentoGrid />
        <FeatureDeepDive />
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}
