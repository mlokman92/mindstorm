import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MacroThesis } from "@/components/sections/MacroThesis";
import { MarketStats } from "@/components/sections/MarketStats";
import { ValuesGrid } from "@/components/sections/ValuesGrid";
import { Proposition } from "@/components/sections/Proposition";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { NationalAlignment } from "@/components/sections/NationalAlignment";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MindstormX Technologies is a Johor-based venture architecting the digital infrastructure of Malaysia's everyday economy — bridging national digital ambitions with everyday commercial reality.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MindstormX"
        title="Architecting the digital infrastructure of the everyday economy."
        highlight="everyday economy"
        subtitle="A Johor-based technology venture developing subscription-driven, transaction-enabled platforms designed for mass-market adoption and long-term recurring revenue."
      />
      <MacroThesis />
      <MarketStats />
      <ValuesGrid />
      <Proposition />
      <TeamGrid />
      <NationalAlignment />
      <CtaBand />
    </>
  );
}
