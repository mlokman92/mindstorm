import { proposition } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Slide 14 — the investor proposition. Three invest-grade pillars on a deep band. */
export function Proposition() {
  return (
    <Section variant="darker" grid glow>
      <SectionHeading
        tone="dark"
        align="center"
        eyebrow={proposition.eyebrow}
        title={proposition.title}
        highlight="Everyday Economy"
        lead={proposition.subtitle}
        className="mb-14"
      />

      <ul className="grid gap-6 md:grid-cols-3">
        {proposition.pillars.map((pillar, index) => (
          <Reveal as="li" key={pillar.title} delay={index * 0.1}>
            <article
              className={cn(
                "group h-full rounded-2xl border border-white/10 bg-navy-800/60 p-8 backdrop-blur",
                "transition-all duration-200 hover:-translate-y-1 hover:border-brand/50",
              )}
            >
              <IconTile tone="dark">
                <Icon name={pillar.icon} className="h-6 w-6" />
              </IconTile>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/70">{pillar.detail}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
