import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { Defensibilities } from "@/components/sections/Defensibilities";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI & data, healthcare, government and smart community solutions — powered by enterprise-grade engineering, cloud & big data architecture and a cyber-resilience engine.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Solutions engineered for the everyday economy."
        highlight="everyday economy"
        subtitle="From applied AI to citizen-centric government systems, MindstormX delivers secure, scalable digital solutions built to the highest standards of compliance and data privacy."
      />
      <SolutionsGrid />
      <TechnologyStack />
      <Defensibilities />
      <CtaBand />
    </>
  );
}
