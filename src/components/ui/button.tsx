import type { ComponentPropsWithoutRef } from "react";
type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};
/** Navigation/contact CTAs are anchors, not action buttons. */
export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-6 px-6 py-3 text-sm font-semibold transition-colors ${variant === "primary" ? "bg-accent text-accent-foreground hover:bg-accent-hover" : "border border-current hover:bg-foreground/5"} ${className}`}
      {...props}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
