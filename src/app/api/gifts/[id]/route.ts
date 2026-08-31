import { NextResponse } from "next/server";
import { claimStoredGift } from "@/lib/gift-store";

export async function PATCH(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const gift = claimStoredGift(id);

  if (!gift) {
    return NextResponse.json({ error: "Presente não encontrado" }, { status: 404 });
  }

  return NextResponse.json(gift);
}
