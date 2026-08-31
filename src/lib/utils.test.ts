import { describe, expect, it } from "vitest";

import { cn, formatCurrency, formatWeddingDate } from "./utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("px-2", "py-1", "px-4")).toBe("py-1 px-4");
  });
});

describe("formatCurrency", () => {
  it("formats cents as BRL", () => {
    expect(formatCurrency(24900)).toBe("R$ 249,00");
  });
});

describe("formatWeddingDate", () => {
  it("formats an ISO date in Portuguese", () => {
    expect(formatWeddingDate("2026-11-15")).toBe("15 de novembro de 2026");
  });
});
