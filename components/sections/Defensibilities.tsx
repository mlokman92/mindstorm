import { defensibilities } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/** Slide 11 — Core structural defensibilities. */
export function Defensibilities() {
  return (
    <Section variant="alt">
      <SectionHeading
        eyebrow={defensibilities.eyebrow}
        title={defensibilities.title}
        highlight="Structural Defensibilities"
        align="center"
        className="mb-14"
      />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {defensibilities.items.map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 0.08} className="h-full">
            <Card tone="light" className="flex h-full flex-col">
              <IconTile tone="light">
                <Icon name={item.icon} className="h-6 w-6" />
              </IconTile>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {item.detail}
              </p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
