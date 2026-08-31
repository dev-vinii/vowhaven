"use client";

import { GiftCard } from "@/components/gifts/gift-card";
import { useGifts } from "@/hooks/use-gifts";

export function GiftCatalog() {
  const { data, isPending, isError } = useGifts();

  if (isPending) {
    return <p className="text-mute">Carregando a lista...</p>;
  }

  if (isError || !data) {
    return <p className="text-clay">Não foi possível carregar os presentes.</p>;
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {data.results.map((gift) => (
        <GiftCard key={gift.id} gift={gift} />
      ))}
    </div>
  );
}
