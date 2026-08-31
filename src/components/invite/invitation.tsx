import Link from "next/link";

import { AzulejoFrame } from "@/components/layout/azulejo-frame";
import { Button } from "@/components/ui/button";
import { formatWeddingDate } from "@/lib/utils";
import { wedding } from "@/service/wedding";

export function Invitation() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <AzulejoFrame>
        <p className="font-mono text-center text-xs uppercase tracking-[0.28em] text-cobalt">
          {formatWeddingDate(wedding.date)} · {wedding.time}
        </p>
        <h1 className="mt-8 text-center font-display text-6xl leading-[0.9] text-tile sm:text-7xl">
          {wedding.partnerOne}
        </h1>
        <p className="my-4 text-center font-display text-3xl text-clay">&</p>
        <h2 className="text-center font-display text-6xl leading-[0.9] text-tile sm:text-7xl">
          {wedding.partnerTwo}
        </h2>
        <p className="mx-auto mt-10 max-w-md text-center text-lg leading-relaxed text-ink">
          {wedding.greeting}
        </p>
        <p className="mt-8 text-center font-mono text-xs uppercase tracking-[0.22em] text-mute">
          {wedding.venue}
          <span className="mx-2 text-brass">·</span>
          {wedding.city}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/rsvp">Confirmar presença</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/gifts">Ver lista de presentes</Link>
          </Button>
        </div>
      </AzulejoFrame>
    </section>
  );
}
