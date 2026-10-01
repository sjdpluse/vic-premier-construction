import type { ComponentPropsWithoutRef } from "react";
import { Container } from "./container";
export function Section({
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section className={`py-20 sm:py-28 ${className}`} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
export function SectionHeading({
  id,
  eyebrow,
  children,
}: {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2
        id={id}
        className="text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
      >
        {children}
      </h2>
    </div>
  );
}
