import type { Metadata } from "next";

import { GiftCatalog } from "@/components/gifts/gift-catalog";

export const metadata: Metadata = {
  title: "Presentes",
};

export default function GiftsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-cobalt">
        Lista
      </p>
      <h1 className="mt-3 font-display text-5xl text-tile">Presentes</h1>
      <p className="mt-4 max-w-xl text-mute">
        Escolha um item da casa nova ou uma experiência da lua de mel. Reservar
        tira o presente da lista para os outros convidados.
      </p>
      <div className="mt-10">
        <GiftCatalog />
      </div>
    </section>
  );
}
