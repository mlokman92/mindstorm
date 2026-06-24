import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "outlineDark" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-[0_8px_24px_-8px_rgba(75,75,255,0.6)] hover:bg-brand-600 hover:shadow-[0_10px_30px_-8px_rgba(75,75,255,0.7)]",
  secondary: "bg-ink text-white hover:bg-navy-800",
  outline: "border border-slate-200 bg-white text-slate-700 hover:border-brand hover:text-brand",
  outlineDark: "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-brand hover:text-white hover:bg-white/10",
  ghost: "text-brand hover:text-brand-700",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

/** Primary CTA / link button. Renders next/link when `href` is provided. */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    children,
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, withArrow: _a, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }

  const { variant: _v, size: _s, withArrow: _a, className: _c, children: _ch, href: _h, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}
