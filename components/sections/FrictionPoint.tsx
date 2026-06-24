import { Check } from "lucide-react";
import { friction } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Slide 4 — The Friction Point.
 * Contrasts macro digital demand against the operational AI-readiness reality
 * (a 13% donut), concluding on the fragmentation of everyday services.
 */
export function FrictionPoint() {
  const { figure } = friction.reality;
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - figure / 100);

  return (
    <Section variant="alt">
      <SectionHeading
        eyebrow={friction.eyebrow}
        title={friction.title}
        highlight="Outpaces Infrastructure"
        className="mb-14"
      />

      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        {/* LEFT — The Macro Demand */}
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-2xl bg-brand p-8 text-white shadow-lift md:p-10">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {friction.demand.title}
            </h3>
            <ul className="mt-6 space-y-4">
              {friction.demand.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/15 ring-1 ring-inset ring-white/25"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed text-white/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* RIGHT — The Operational Reality */}
        <Reveal delay={0.1} className="h-full">
          <div className="flex h-full flex-col items-center gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_3px_rgba(16,24,40,0.06)] sm:flex-row md:p-10">
            <div className="relative flex h-40 w-40 flex-none items-center justify-center">
              <svg
                aria-hidden
                viewBox="0 0 120 120"
                className="h-40 w-40 -rotate-90"
              >
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  strokeWidth="12"
                  className="stroke-slate-200"
                />
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  className="stroke-brand"
                />
              </svg>
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold text-ink"
              >
                {figure}%
              </span>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {friction.reality.title}
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                <span className="sr-only">{`Only ${figure} percent. `}</span>
                {friction.reality.detail}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Conclusion */}
      <Reveal delay={0.15}>
        <p
          className={cn(
            "mt-10 max-w-4xl border-t border-slate-200 pt-8",
            "text-lg font-medium text-slate-700 md:text-xl",
          )}
        >
          {friction.conclusion}
        </p>
      </Reveal>
    </Section>
  );
}
