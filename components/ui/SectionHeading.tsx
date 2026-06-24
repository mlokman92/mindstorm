import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Tone = "light" | "dark";
type Align = "left" | "center";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** Optional phrase within `title` to color with the brand accent. */
  highlight?: string;
  lead?: string;
  tone?: Tone;
  align?: Align;
  className?: string;
  /** Constrain the lead paragraph width. */
  maxWidthLead?: string;
};

function renderTitle(title: string, highlight?: string) {
  if (!highlight || !title.includes(highlight)) return title;
  const [before, ...rest] = title.split(highlight);
  const after = rest.join(highlight);
  return (
    <>
      {before}
      <span className="text-brand">{highlight}</span>
      {after}
    </>
  );
}

/** Eyebrow + H2 (with optional brand highlight) + lead paragraph. DESIGN.md §2, §5. */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  lead,
  tone = "light",
  align = "left",
  className,
  maxWidthLead = "max-w-2xl",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto text-center" : "text-left",
        align === "center" && "flex flex-col items-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display text-3xl font-semibold tracking-tight md:text-5xl",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          {renderTitle(title, highlight)}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed md:text-xl",
              align === "center" && "mx-auto",
              maxWidthLead,
              tone === "dark" ? "text-white/70" : "text-slate-500",
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
