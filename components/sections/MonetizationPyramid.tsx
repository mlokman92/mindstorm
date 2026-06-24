import { ArrowUp } from "lucide-react";
import { monetization } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Slide 9 — Stratified monetization pyramid.
 * Data in `monetization.tiers` runs base (broad volume) -> apex (high margin).
 * The pyramid renders apex (top) -> base (bottom); the legend mirrors it
 * top-down so both read in the same order.
 */

// Visual treatment per row, indexed apex (0) -> base (4).
// Brand intensity increases toward the apex; width narrows toward the apex.
const rows = [
  { width: "44%", surface: "bg-brand text-white" },
  { width: "58%", surface: "bg-brand-600/90 text-white" },
  { width: "72%", surface: "bg-brand-500/80 text-white" },
  { width: "86%", surface: "bg-brand-400/70 text-white" },
  { width: "100%", surface: "bg-brand-300/60 text-ink" },
] as const;

// Trapezoid edges narrow toward the apex; the apex row is a clean triangle.
const TRAPEZOID = "polygon(8% 0, 92% 0, 100% 100%, 0 100%)";
const APEX = "polygon(50% 0, 100% 100%, 0 100%)";

export function MonetizationPyramid() {
  // Apex -> base ordering for both the pyramid and the legend.
  const topDown = [...monetization.tiers].reverse();

  return (
    <Section variant="alt">
      <SectionHeading
        eyebrow={monetization.eyebrow}
        title={monetization.title}
        highlight="High-Margin Scalability"
        lead={monetization.subtitle}
        align="left"
        maxWidthLead="max-w-2xl"
        className="mb-14"
      />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — pyramid visual with an upward "shift" annotation. */}
        <Reveal>
          <div className="flex items-stretch gap-4 sm:gap-6">
            {/* Upward shift annotation. */}
            <div
              className="flex shrink-0 flex-col items-center justify-center gap-3 py-2"
              aria-hidden
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                <ArrowUp className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="h-full w-px flex-1 bg-gradient-to-t from-brand/10 via-brand/30 to-brand/60" />
              <span className="max-w-[7rem] text-center text-sm font-medium leading-snug text-slate-500 sm:[writing-mode:vertical-rl] sm:rotate-180 sm:text-left">
                Shift from Volume to High-Margin Scalability
              </span>
            </div>

            {/* Stacked tiers, apex (top) -> base (bottom). */}
            <ol className="flex flex-1 flex-col items-center gap-2">
              {topDown.map((tier, i) => {
                const row = rows[i];
                const isApex = i === 0;
                return (
                  <li
                    key={tier.title}
                    className="flex w-full justify-center"
                    style={{ width: row.width }}
                  >
                    <div
                      className={cn(
                        "flex h-14 w-full items-center justify-center px-4 text-center shadow-sm sm:h-16",
                        row.surface,
                      )}
                      style={{
                        clipPath: isApex ? APEX : TRAPEZOID,
                      }}
                    >
                      <span
                        className={cn(
                          "text-sm font-medium leading-tight",
                          isApex && "translate-y-1.5",
                        )}
                      >
                        {tier.title}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        {/* RIGHT — legend, apex -> base, matching the pyramid top-down. */}
        <ol className="space-y-4">
          {topDown.map((tier, i) => (
            <Reveal as="li" key={tier.title} delay={i * 0.06}>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition-colors duration-200 hover:border-brand/40">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                  <Icon name={tier.icon} className="h-5 w-5 text-brand" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-ink">
                    {tier.title}
                  </h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-500">
                    {tier.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
