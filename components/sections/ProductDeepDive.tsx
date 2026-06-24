import { Check } from "lucide-react";
import { platforms, type Platform } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Split a platform name into its base and a trailing "+" so the plus can be accented. */
function splitName(name: string): { base: string; plus: boolean } {
  if (name.endsWith("+")) return { base: name.slice(0, -1), plus: true };
  return { base: name, plus: false };
}

function PlatformVisual({ platform }: { platform: Platform }) {
  const { base, plus } = splitName(platform.name);
  return (
    <div
      className={cn(
        "relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-3xl",
        "border border-slate-200 bg-gradient-to-br from-brand/10 to-slate-50 p-10",
      )}
    >
      {/* Blueprint grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:32px_32px] opacity-60 mask-radial-faded"
      />
      {/* Soft ambient glow orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-brand/20 blur-3xl"
      />

      {/* Floating mini-chips of feature names */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-5 top-6 hidden rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-card backdrop-blur sm:block"
      >
        {platform.features[0]}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-7 right-6 hidden rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-card backdrop-blur sm:block"
      >
        {platform.features[platform.features.length - 1]}
      </div>

      {/* Centerpiece */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <IconTile className="h-20 w-20 rounded-3xl shadow-glow">
          <Icon name={platform.icon} className="h-10 w-10 text-brand" />
        </IconTile>
        <p className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
          {base}
          {plus && <span className="text-brand">+</span>}
        </p>
        <Badge tone="light" className="mt-3">
          {platform.frequency}
        </Badge>
      </div>
    </div>
  );
}

function PlatformText({ platform }: { platform: Platform }) {
  const { base, plus } = splitName(platform.name);
  return (
    <div>
      <Badge tone="brand">{platform.domain}</Badge>
      <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        {base}
        {plus && <span className="text-brand">+</span>}
      </h3>
      <p className="mt-1 font-medium text-brand">{platform.tagline}</p>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        {platform.description}
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {platform.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
            <span className="text-sm text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Products page centerpiece: each platform rendered as a full, alternating feature row. */
export function ProductDeepDive() {
  return (
    <Section variant="light">
      <div className="space-y-20 md:space-y-28">
        {platforms.map((platform, index) => {
          const reversed = index % 2 === 1;
          return (
            <Reveal key={platform.slug}>
              <div
                id={platform.slug}
                className="grid scroll-mt-24 items-center gap-10 md:grid-cols-2 lg:gap-16"
              >
                {/* Text side */}
                <div className={cn(reversed && "md:order-2")}>
                  <PlatformText platform={platform} />
                </div>
                {/* Visual side */}
                <div className={cn(reversed && "md:order-1")}>
                  <PlatformVisual platform={platform} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
