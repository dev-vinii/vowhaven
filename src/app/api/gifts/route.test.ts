import { describe, expect, it } from "vitest";
import { GET } from "./route";

describe("GET /api/gifts", () => {
  it("returns the gift list", async () => {
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.results.length).toBeGreaterThan(0);
    expect(body.results[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        priceCents: expect.any(Number),
        status: expect.stringMatching(/available|claimed/),
      })
    );
  });
});
