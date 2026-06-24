import { Layers } from "lucide-react";
import { technology } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Slide 8 — Enterprise-grade engineering powered by applied AI.
 * Renders the three architectural layers as a stack of glass panels that
 * convey depth: Intelligent Automation (top) over Cloud & Big Data over the
 * Cyber-Resilience foundation. On md+ each lower layer reads marginally wider
 * with a stronger shadow for a subtle isometric feel; on mobile they collapse
 * to clean, fully legible stacked cards.
 */
export function TechnologyStack() {
  const layers = technology.layers;
  const lastIndex = layers.length - 1;

  // Progressive horizontal inset per layer (md+ only) to suggest an isometric
  // stack — the top layer is slightly narrower, the foundation spans full width.
  const insets = ["md:mx-8", "md:mx-4", "md:mx-0"];

  return (
    <Section variant="dark" grid glow id="technology">
      <SectionHeading
        tone="dark"
        eyebrow={technology.eyebrow}
        title={technology.title}
        highlight="Applied AI"
        lead={technology.subtitle}
        align="center"
        className="mb-14"
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Soft brand under-glow grounding the foundation layer. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 bottom-0 -z-0 h-40 translate-y-1/4 rounded-full bg-brand/20 blur-[90px]"
        />

        <ol className="relative z-10 space-y-4">
          {layers.map((layer, index) => {
            const isFoundation = index === lastIndex;
            const isTop = index === 0;
            return (
              <Reveal as="li" key={layer.title} delay={index * 0.12}>
                <div
                  className={cn(
                    "group relative rounded-2xl border border-white/10 bg-navy-800/60 p-6 backdrop-blur transition-all duration-300 md:p-8",
                    "hover:border-brand/40",
                    insets[index] ?? "md:mx-0",
                    // Depth: deeper shadow toward the foundation.
                    isFoundation
                      ? "shadow-[0_28px_60px_-24px_rgba(75,75,255,0.45)]"
                      : isTop
                        ? "shadow-[0_12px_32px_-18px_rgba(8,12,28,0.8)]"
                        : "shadow-[0_18px_44px_-22px_rgba(8,12,28,0.85)]",
                  )}
                >
                  {/* Inner top highlight for the glass effect. */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />

                  <div className="flex items-start gap-5">
                    <IconTile tone="dark" className="shrink-0">
                      <Icon name={layer.icon} className="h-6 w-6" />
                    </IconTile>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                          {layer.title}
                        </h3>
                        {isFoundation && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[0.7rem] font-medium uppercase tracking-wide text-brand-300">
                            <Layers className="h-3 w-3" strokeWidth={2} aria-hidden />
                            Foundation
                          </span>
                        )}
                      </div>

                      <p className="mt-2 leading-relaxed text-white/70">
                        {layer.detail}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-2">
                        {layer.features.map((feature) => (
                          <li
                            key={feature}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
