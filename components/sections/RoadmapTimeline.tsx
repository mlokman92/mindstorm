import { roadmap } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Ascending staircase offsets per phase (desktop). Each subsequent phase sits higher. */
const stairOffsets = ["md:mt-24", "md:mt-12", "md:mt-0"] as const;

/** Slide 12 — Strategic expansion roadmap 2026–2030 (ascending staircase). */
export function RoadmapTimeline() {
  const phases = roadmap.phases;

  return (
    <Section variant="dark" grid glow id="roadmap">
      <SectionHeading
        tone="dark"
        eyebrow={roadmap.eyebrow}
        title={roadmap.title}
        highlight="Expansion Roadmap"
        lead={roadmap.subtitle}
        align="left"
        maxWidthLead="max-w-2xl"
        className="mb-16"
      />

      {/* DESKTOP — ascending staircase (md+) */}
      <div className="relative hidden md:block">
        {/* Ascending guide line behind the cards, climbing left → right */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-full w-full"
          viewBox="0 0 100 60"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="roadmap-stair" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#4B4BFF" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#4B4BFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#9B9BFF" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {/* Stepped staircase path: rises in three steps toward the top-right */}
          <path
            d="M 4 52 H 30 V 34 H 63 V 16 H 96"
            fill="none"
            stroke="url(#roadmap-stair)"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ol className="relative z-10 grid grid-cols-3 items-end gap-8">
          {phases.map((phase, i) => (
            <Reveal
              key={phase.phase}
              as="li"
              delay={i * 0.12}
              className={cn("relative", stairOffsets[i])}
            >
              {/* Glowing node on top of the card */}
              <div className="mb-5 flex items-center gap-3">
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-brand/30 blur-[3px]" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-brand ring-4 ring-brand/15" />
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-brand/50 to-transparent" />
              </div>

              <article className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-brand/40">
                <div className="flex items-center justify-between gap-3">
                  <IconTile tone="dark">
                    <Icon name={phase.icon} className="h-6 w-6" />
                  </IconTile>
                  <Badge tone="dark">{phase.window}</Badge>
                </div>
                <p className="mt-4 text-sm font-semibold text-brand-300">{phase.phase}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{phase.detail}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* MOBILE — vertical timeline (below md) */}
      <ol className="relative ml-2 space-y-8 border-l border-white/15 pl-7 md:hidden">
        {phases.map((phase, i) => (
          <Reveal key={phase.phase} as="li" delay={i * 0.1} className="relative">
            {/* Node anchored on the vertical rail */}
            <span className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center">
              <span className="absolute inline-flex h-4 w-4 rounded-full bg-brand/30 blur-[3px]" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-brand ring-4 ring-navy-900" />
            </span>

            <article className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 backdrop-blur transition-all duration-200 hover:border-brand/40">
              <div className="flex items-center justify-between gap-3">
                <IconTile tone="dark">
                  <Icon name={phase.icon} className="h-6 w-6" />
                </IconTile>
                <Badge tone="dark">{phase.window}</Badge>
              </div>
              <p className="mt-4 text-sm font-semibold text-brand-300">{phase.phase}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-white">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{phase.detail}</p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
