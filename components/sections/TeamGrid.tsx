import { Linkedin } from "lucide-react";
import { team } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Slide 13 — the founding, multidisciplinary ecosystem architects. */
export function TeamGrid() {
  return (
    <Section variant="alt">
      <SectionHeading
        eyebrow={team.eyebrow}
        title={team.title}
        highlight="Ecosystem Architects"
        lead={team.subtitle}
        align="center"
        className="mb-14"
      />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.members.map((member, index) => (
          <Reveal key={member.name} as="li" delay={index * 0.08} className="h-full">
            <Card tone="light" className="flex h-full flex-col text-center">
              <div className="relative mx-auto">
                <div
                  aria-hidden
                  className={cn(
                    "flex h-20 w-20 items-center justify-center rounded-2xl",
                    "bg-gradient-to-br from-brand/15 to-brand/5 ring-1 ring-inset ring-brand/20",
                  )}
                >
                  <span className="font-display text-2xl font-bold text-brand">
                    {member.initials}
                  </span>
                </div>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {member.detail}
              </p>

              <span
                aria-hidden
                className="mt-5 inline-flex items-center justify-center text-slate-300"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
