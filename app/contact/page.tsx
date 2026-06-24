import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with MindstormX Technologies to digitize community services, deploy applied AI and grow sustainably across Malaysia and ASEAN. Get in touch with our team in Johor.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build the infrastructure of the everyday economy."
        highlight="everyday economy"
        subtitle="Whether you're an institution, enterprise or community partner — our team in Johor is ready to help you digitize, deploy applied AI and scale."
        align="center"
      />
      <ContactSection />
      <CtaBand />
    </>
  );
}
