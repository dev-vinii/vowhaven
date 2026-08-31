import { faker } from "@faker-js/faker";
import { Rsvp } from "@/service/rsvp";

export function buildRsvp(overrides: Partial<Rsvp> = {}): Rsvp {
  return {
    id: faker.string.uuid(),
    guestName: faker.person.fullName(),
    companions: faker.number.int({ min: 0, max: 4 }),
    answer: "yes",
    ...overrides,
  };
}
