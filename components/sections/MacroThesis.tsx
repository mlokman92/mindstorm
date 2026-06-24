import { Check } from "lucide-react";
import { macro } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Slide 2 — Bridging Malaysia's digital ambitions with everyday commercial reality. */
export function MacroThesis() {
  return (
    <Section variant="light">
      <SectionHeading
        eyebrow={macro.eyebrow}
        title={macro.title}
        highlight="Everyday Commercial Reality"
        align="left"
        maxWidthLead="max-w-3xl"
        className="mb-14"
      />

      <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
        {macro.pillars.map((pillar, index) => (
          <Reveal
            key={pillar.title}
            delay={index * 0.1}
            className={cn(
              "h-full",
              index > 0 && "md:border-l md:border-slate-200 md:pl-8 lg:pl-12",
            )}
          >
            <IconTile tone="light">
              <Icon name={pillar.icon} className="h-6 w-6" />
            </IconTile>

            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
              {pillar.title}
            </h3>

            <ul className="mt-4 space-y-3">
              {pillar.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="text-slate-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
