import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { MacroThesis } from "@/components/sections/MacroThesis";
import { FrictionPoint } from "@/components/sections/FrictionPoint";
import { PlatformsShowcase } from "@/components/sections/PlatformsShowcase";
import { EcosystemFlywheel } from "@/components/sections/EcosystemFlywheel";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { Defensibilities } from "@/components/sections/Defensibilities";
import { RoadmapTimeline } from "@/components/sections/RoadmapTimeline";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SolutionsGrid />
      <MacroThesis />
      <FrictionPoint />
      <PlatformsShowcase />
      <EcosystemFlywheel />
      <TechnologyStack />
      <Defensibilities />
      <RoadmapTimeline />
      <CtaBand />
    </>
  );
}
