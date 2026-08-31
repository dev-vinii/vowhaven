import type { Metadata } from "next";

import { RsvpForm } from "@/components/rsvp/rsvp-form";

export const metadata: Metadata = {
  title: "Confirmar presença",
};

export default function RsvpPage() {
  return (
    <section className="mx-auto max-w-xl px-4 py-12">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-cobalt">
        RSVP
      </p>
      <h1 className="mt-3 font-display text-5xl text-tile">Confirmar presença</h1>
      <p className="mt-4 text-mute">
        Responda até o dia 15 de outubro. Se vier acompanhado, conte quantas
        pessoas sentam à mesa com você.
      </p>
      <div className="mt-8">
        <RsvpForm />
      </div>
    </section>
  );
}
