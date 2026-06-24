import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProductDeepDive } from "@/components/sections/ProductDeepDive";
import { MonetizationPyramid } from "@/components/sections/MonetizationPyramid";
import { EcosystemFlywheel } from "@/components/sections/EcosystemFlywheel";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Four vertically integrated everyday platforms — doktor+ (health), pasar+ (commerce), khairat+ (welfare) and reno+ (renovation) — engineered for Malaysian market behaviors.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Platforms"
        title="A vertically integrated suite of everyday platforms."
        highlight="everyday platforms"
        subtitle="doktor+, pasar+, khairat+ and reno+ — four mass-market ecosystems that share infrastructure, data and trust across healthcare, commerce, welfare and property."
      />
      <ProductDeepDive />
      <MonetizationPyramid />
      <EcosystemFlywheel />
      <CtaBand />
    </>
  );
}
