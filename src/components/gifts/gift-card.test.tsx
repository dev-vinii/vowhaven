import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it } from "vitest";

import { GiftCard } from "./gift-card";
import { buildGift } from "@/test/factories/gift";

function renderGift(gift = buildGift({ title: "Jogo de jantar", status: "available" })) {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={client}>
      <GiftCard gift={gift} />
    </QueryClientProvider>
  );
}

describe("GiftCard", () => {
  it("lets the guest claim an available gift", () => {
    renderGift();

    expect(screen.getByText("Jogo de jantar")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Presentear" })).toBeEnabled();
  });

  it("disables the action when the gift is claimed", () => {
    renderGift(buildGift({ title: "Cerâmica", status: "claimed" }));

    expect(screen.getByRole("button", { name: "Já reservado" })).toBeDisabled();
  });
});
