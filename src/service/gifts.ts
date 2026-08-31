export type GiftStatus = "available" | "claimed";

export interface Gift {
  id: string;
  title: string;
  description: string;
  priceCents: number;
  category: string;
  status: GiftStatus;
}

export interface GiftList {
  results: Gift[];
}

export async function getGifts(): Promise<GiftList> {
  const response = await fetch("/api/gifts");

  if (!response.ok) {
    throw new Error("Falha ao buscar presentes");
  }

  return response.json();
}

export async function claimGift(id: string): Promise<Gift> {
  const response = await fetch(`/api/gifts/${id}`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Falha ao reservar presente");
  }

  return response.json();
}
