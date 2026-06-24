import { Container } from "@/components/ui/Container";
import { trustedBy } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Slim credibility strip on a white band. Renders the trustedBy heading and the
 * partner organizations as understated grayscale text wordmarks. See DESIGN.md §1.
 */
export function TrustBar() {
  return (
    <section
      aria-label={trustedBy.heading}
      className="border-y border-slate-200 bg-white py-10 md:py-12"
    >
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {trustedBy.heading}
        </p>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {trustedBy.orgs.map((org) => (
            <li
              key={org}
              className={cn(
                "font-display text-sm font-semibold text-slate-400 transition-colors md:text-base",
                "hover:text-slate-600",
              )}
            >
              {org}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
