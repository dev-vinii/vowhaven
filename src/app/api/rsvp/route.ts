import { NextRequest, NextResponse } from "next/server";
import { addRsvp } from "@/lib/rsvp-store";
import { RsvpAnswer } from "@/service/rsvp";

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as {
    guestName?: string;
    companions?: number;
    answer?: RsvpAnswer;
    note?: string;
  } | null;

  const guestName = body?.guestName?.trim();
  const companions = Number(body?.companions ?? 0);
  const answer = body?.answer;

  if (!guestName) {
    return NextResponse.json(
      { error: "Informe o nome do convidado" },
      { status: 400 }
    );
  }

  if (answer !== "yes" && answer !== "no") {
    return NextResponse.json(
      { error: "Confirme se vai ou não comparecer" },
      { status: 400 }
    );
  }

  if (!Number.isInteger(companions) || companions < 0 || companions > 8) {
    return NextResponse.json(
      { error: "Número de acompanhantes inválido" },
      { status: 400 }
    );
  }

  const rsvp = addRsvp({
    guestName,
    companions,
    answer,
    note: body?.note,
  });

  return NextResponse.json(rsvp, { status: 201 });
}
