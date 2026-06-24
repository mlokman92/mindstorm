import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** "light" = dark glyphs (on light bg). "dark" = inverted white glyphs (on dark bg). */
  tone?: "light" | "dark";
  /** Rendered height in px; width scales with the 625×160 aspect ratio. */
  height?: number;
  href?: string | null;
  className?: string;
  priority?: boolean;
};

const ASPECT = 625 / 160;

/** MindstormX wordmark. Uses public/mindstormx-logo.png. DESIGN.md §5. */
export function Logo({
  tone = "light",
  height = 30,
  href = "/",
  className,
  priority = false,
}: LogoProps) {
  const width = Math.round(height * ASPECT);
  const img = (
    <Image
      src="/mindstormx-logo.png"
      alt="MindstormX Technologies"
      width={width}
      height={height}
      priority={priority}
      className={cn(
        "h-auto w-auto transition-[filter] duration-300",
        tone === "dark" && "brightness-0 invert",
      )}
      style={{ height, width: "auto" }}
    />
  );

  if (href === null) {
    return <span className={cn("inline-flex items-center", className)}>{img}</span>;
  }

  return (
    <Link
      href={href}
      aria-label="MindstormX Technologies — home"
      className={cn(
        "inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className,
      )}
    >
      {img}
    </Link>
  );
}
