import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/** Centers content with the standard max-width and responsive horizontal padding. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 md:px-8", className)}>
      {children}
    </div>
  );
}
