import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { POST } from "./route";

function createRequest(body: unknown) {
  return new NextRequest("http://localhost/api/rsvp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/rsvp", () => {
  it("creates an rsvp", async () => {
    const response = await POST(
      createRequest({
        guestName: "Helena Costa",
        companions: 1,
        answer: "yes",
      })
    );
    const body = await response.json();

    expect(response.status).toBe(201);
    expect(body.guestName).toBe("Helena Costa");
    expect(body.companions).toBe(1);
    expect(body.answer).toBe("yes");
  });

  it("rejects a missing guest name", async () => {
    const response = await POST(
      createRequest({ companions: 0, answer: "yes" })
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Informe o nome do convidado");
  });
});
