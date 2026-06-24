import { ArrowRight, ArrowDown } from "lucide-react";
import { nationalAlignment } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Slide 10 — Strategic alignment with national digital agendas.
 * Renders a scannable comparison mapping each National Macro Agenda to the
 * corresponding MindstormX Solution. Two-column on desktop, stacked on mobile.
 */
export function NationalAlignment() {
  const { eyebrow, title, subtitle, rows } = nationalAlignment;

  return (
    <Section variant="light" id="alignment">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        highlight="National Digital Agendas"
        lead={subtitle}
        className="mb-12"
      />

      {/* Desktop: two-column comparison */}
      <div className="hidden md:block">
        {/* Header row */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 pb-4">
          <p className="font-display text-base font-semibold text-ink">
            National Macro Agenda
          </p>
          <span aria-hidden className="h-9 w-9" />
          <p className="font-display text-base font-semibold text-brand">
            MindstormX Solution
          </p>
        </div>

        {rows.map((row) => (
          <Reveal
            key={row.agenda}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 border-t border-slate-200 py-6"
          >
            {/* Left — agenda */}
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {row.agenda}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{row.agendaDetail}</p>
            </div>

            {/* Middle — connector */}
            <span
              aria-hidden
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </span>

            {/* Right — solution */}
            <div className="rounded-2xl border border-brand/15 bg-brand-50/50 p-5">
              <p className="text-slate-700">{row.solution}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Mobile: stacked cards */}
      <div className="space-y-4 md:hidden">
        {rows.map((row) => (
          <Reveal
            key={row.agenda}
            className={cn(
              "rounded-2xl border border-slate-200 p-5",
            )}
          >
            {/* Agenda */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                National Macro Agenda
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {row.agenda}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{row.agendaDetail}</p>
            </div>

            {/* Connector */}
            <div className="my-4 flex justify-center">
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand"
              >
                <ArrowDown className="h-4 w-4" strokeWidth={2} />
              </span>
            </div>

            {/* Solution */}
            <div className="rounded-xl border border-brand/15 bg-brand-50/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                MindstormX Solution
              </p>
              <p className="mt-2 text-slate-700">{row.solution}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
