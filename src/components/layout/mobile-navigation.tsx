"use client";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";
import { contactLinks } from "@/data/business";
import { ButtonLink } from "@/components/ui/button";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const close = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);
  return (
    <div
      className="md:hidden"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <button
        ref={toggle}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
        className="min-h-12 min-w-16 border border-border px-3 text-sm font-semibold"
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-background px-6 py-6 shadow-lg"
      >
        <ul className="mb-5">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ButtonLink
          href={contactLinks.quote}
          onClick={() => setOpen(false)}
          className="w-full"
        >
          Get a Free Quote
        </ButtonLink>
      </nav>
    </div>
  );
}
