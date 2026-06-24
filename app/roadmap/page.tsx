import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MacroThesis } from "@/components/sections/MacroThesis";
import { RoadmapTimeline } from "@/components/sections/RoadmapTimeline";
import { Defensibilities } from "@/components/sections/Defensibilities";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "The MindstormX strategic expansion roadmap, 2026–2030: from Johor market penetration to nationwide expansion and regional ecosystem scaling across ASEAN.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="2026 – 2030"
        title="The strategic expansion roadmap."
        highlight="expansion roadmap"
        subtitle="A staged path from validating core ecosystems in Johor, to nationwide and B2G scale, to exporting the architecture across the ASEAN region."
      />
      <MacroThesis />
      <RoadmapTimeline />
      <Defensibilities />
      <CtaBand />
    </>
  );
}
