import { faker } from "@faker-js/faker";
import { Gift } from "@/service/gifts";

export function buildGift(overrides: Partial<Gift> = {}): Gift {
  return {
    id: faker.string.alphanumeric(8),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    priceCents: faker.number.int({ min: 15000, max: 250000 }),
    category: faker.commerce.department(),
    status: "available",
    ...overrides,
  };
}
