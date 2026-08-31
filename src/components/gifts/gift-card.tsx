"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { claimGift, Gift } from "@/service/gifts";

export function GiftCard({ gift }: { gift: Gift }) {
  const queryClient = useQueryClient();
  const claim = useMutation({
    mutationFn: () => claimGift(gift.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gifts"] });
    },
  });

  const claimed = gift.status === "claimed";

  return (
    <Card>
      <CardHeader>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt">
          {gift.category}
        </p>
        <CardTitle>{gift.title}</CardTitle>
        <CardDescription>{gift.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-mono text-sm text-ink">
          {formatCurrency(gift.priceCents)}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          variant={claimed ? "secondary" : "clay"}
          disabled={claimed || claim.isPending}
          onClick={() => claim.mutate()}
        >
          {claimed ? "Já reservado" : "Presentear"}
        </Button>
      </CardFooter>
    </Card>
  );
}
