import { Gift } from "@/service/gifts";

const gifts: Gift[] = [
  {
    id: "jantar",
    title: "Jogo de jantar",
    description: "Doze lugares em faiança branca, para as noites longas.",
    priceCents: 189000,
    category: "Casa",
    status: "available",
  },
  {
    id: "linens",
    title: "Enxoval de linho",
    description: "Lençóis, toalhas e guardanapos em linho cru.",
    priceCents: 96000,
    category: "Casa",
    status: "available",
  },
  {
    id: "pottery",
    title: "Conjunto de cerâmica",
    description: "Tigelas e jarras feitas em oficina de Ouro Preto.",
    priceCents: 42000,
    category: "Mesa",
    status: "claimed",
  },
  {
    id: "honeymoon",
    title: "Noite em Paraty",
    description: "Uma diária na lua de mel, para quem prefere experiências.",
    priceCents: 150000,
    category: "Lua de mel",
    status: "available",
  },
  {
    id: "coffee",
    title: "Kit de café",
    description: "Moinho, prensa e grãos de uma torrefação mineira.",
    priceCents: 28000,
    category: "Cozinha",
    status: "available",
  },
  {
    id: "records",
    title: "Disco de vinil",
    description: "O primeiro disco da coleção da casa nova.",
    priceCents: 18000,
    category: "Casa",
    status: "available",
  },
];

export function listGifts() {
  return gifts.map((gift) => ({ ...gift }));
}

export function claimStoredGift(id: string) {
  const gift = gifts.find((item) => item.id === id);

  if (!gift) {
    return null;
  }

  if (gift.status === "claimed") {
    return gift;
  }

  gift.status = "claimed";
  return { ...gift };
}
