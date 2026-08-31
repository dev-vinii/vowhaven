import { CreateRsvpInput, Rsvp } from "@/service/rsvp";

const rsvps: Rsvp[] = [];

export function addRsvp(input: CreateRsvpInput): Rsvp {
  const rsvp: Rsvp = {
    id: crypto.randomUUID(),
    guestName: input.guestName.trim(),
    companions: input.companions,
    answer: input.answer,
    note: input.note?.trim() || undefined,
  };

  rsvps.push(rsvp);
  return rsvp;
}
