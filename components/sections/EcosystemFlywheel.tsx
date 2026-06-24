import { ArrowRight, RefreshCw } from "lucide-react";
import { ecosystem } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Step = (typeof ecosystem.steps)[number];

/** A single flywheel step card — shared between the radial and vertical layouts. */
function StepCard({ step, className }: { step: Step; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-semibold text-white"
        >
          {step.step}
        </span>
        <IconTile className="h-10 w-10 rounded-xl">
          <Icon name={step.icon} className="h-5 w-5" />
        </IconTile>
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-ink">
        {step.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.detail}</p>
    </div>
  );
}

/** Central hub of the flywheel. */
function Hub() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand/10 ring-1 ring-brand/30">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-brand/20">
          <Icon name="Boxes" className="h-7 w-7 text-brand" strokeWidth={1.75} />
        </div>
      </div>
      <p className="mt-3 font-display text-sm font-semibold text-ink">MindstormX</p>
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
        Ecosystem
      </p>
    </div>
  );
}

/**
 * Slide 7 — Multi-ecosystem network-effects flywheel.
 * Desktop: 4 steps around a central hub with a clockwise SVG loop.
 * Mobile: a clean vertical numbered flow that loops back to the start.
 */
export function EcosystemFlywheel() {
  const steps = ecosystem.steps;

  return (
    <Section variant="light">
      <SectionHeading
        eyebrow={ecosystem.eyebrow}
        title={ecosystem.title}
        highlight="Multi-Ecosystem Advantage"
        lead={ecosystem.subtitle}
        align="center"
        className="mb-16"
      />

      {/* ── Desktop: radial flywheel ─────────────────────────────── */}
      <Reveal className="hidden lg:block">
        <div className="relative mx-auto aspect-square w-full max-w-3xl">
          {/* Clockwise loop connector behind the cards */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker
                id="flywheel-arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M1 1 L9 5 L1 9 Z" className="fill-brand" />
              </marker>
            </defs>
            {/* Four clockwise arcs (top→right→bottom→left→top), each with an arrowhead. */}
            {[
              "M 50 18 A 32 32 0 0 1 82 50",
              "M 82 50 A 32 32 0 0 1 50 82",
              "M 50 82 A 32 32 0 0 1 18 50",
              "M 18 50 A 32 32 0 0 1 50 18",
            ].map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                strokeWidth={0.9}
                strokeLinecap="round"
                strokeDasharray="2 2.4"
                className="stroke-brand/45"
                markerEnd="url(#flywheel-arrow)"
              />
            ))}
          </svg>

          {/* Central hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hub />
          </div>

          {/* Step cards positioned at top / right / bottom / left */}
          <div className="absolute left-1/2 top-0 w-64 -translate-x-1/2">
            <StepCard step={steps[0]} />
          </div>
          <div className="absolute right-0 top-1/2 w-64 -translate-y-1/2">
            <StepCard step={steps[1]} />
          </div>
          <div className="absolute bottom-0 left-1/2 w-64 -translate-x-1/2">
            <StepCard step={steps[2]} />
          </div>
          <div className="absolute left-0 top-1/2 w-64 -translate-y-1/2">
            <StepCard step={steps[3]} />
          </div>
        </div>
      </Reveal>

      {/* ── Mobile / tablet: vertical numbered flow ──────────────── */}
      <div className="relative mx-auto max-w-xl lg:hidden">
        <ol className="relative space-y-5 pl-2">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 0.06} className="relative">
              {/* Connector line to the next step */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[1.0625rem] top-12 bottom-[-1.25rem] w-px bg-gradient-to-b from-brand/40 to-brand/15"
                />
              )}
              <StepCard step={step} />
            </Reveal>
          ))}
        </ol>

        {/* Loop-back hint */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-500">
            <RefreshCw className="h-4 w-4 text-brand" aria-hidden />
            <span>Data feeds back into acquisition</span>
            <ArrowRight className="h-4 w-4 text-brand" aria-hidden />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
