import Link from "next/link";
import { business, contactLinks } from "@/data/business";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { MobileNavigation } from "./mobile-navigation";
export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-border bg-background">
      <Container className="flex min-h-24 items-center justify-between gap-5">
        <Link
          href="/"
          aria-label={`${business.name} — Home`}
          className="max-w-52 text-sm font-bold leading-tight tracking-[0.06em] sm:max-w-64 sm:text-base"
        >
          {business.name}
        </Link>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-10">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex min-h-12 items-center text-sm hover:text-accent"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink className="hidden md:inline-flex" href={contactLinks.quote}>
          Get a Free Quote
        </ButtonLink>
        <MobileNavigation />
      </Container>
    </header>
  );
}
