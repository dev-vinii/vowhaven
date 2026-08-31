export type RsvpAnswer = "yes" | "no";

export interface Rsvp {
  id: string;
  guestName: string;
  companions: number;
  answer: RsvpAnswer;
  note?: string;
}

export interface CreateRsvpInput {
  guestName: string;
  companions: number;
  answer: RsvpAnswer;
  note?: string;
}

export async function createRsvp(input: CreateRsvpInput): Promise<Rsvp> {
  const response = await fetch("/api/rsvp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(payload?.error ?? "Falha ao confirmar presença");
  }

  return response.json();
}
