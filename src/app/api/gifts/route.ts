import { NextResponse } from "next/server";
import { listGifts } from "@/lib/gift-store";

export async function GET() {
  return NextResponse.json({ results: listGifts() });
}
