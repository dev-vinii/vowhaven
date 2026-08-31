"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { wedding } from "@/service/wedding";

const links = [
  { href: "/", label: "Convite" },
  { href: "/schedule", label: "Programa" },
  { href: "/gifts", label: "Presentes" },
  { href: "/rsvp", label: "Confirmar" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="font-display text-xl tracking-wide text-tile">
          Vowhaven
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 text-sm uppercase tracking-[0.14em] text-mute transition-colors hover:text-tile",
                  active && "text-tile"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <p className="sr-only">
        {wedding.partnerOne} e {wedding.partnerTwo}
      </p>
    </header>
  );
}
