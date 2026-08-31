import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Invitation } from "./invitation";
import { wedding } from "@/service/wedding";

describe("Invitation", () => {
  it("shows the couple names and primary actions", () => {
    render(<Invitation />);

    expect(screen.getByRole("heading", { name: wedding.partnerOne })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: wedding.partnerTwo })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Confirmar presença" })).toHaveAttribute(
      "href",
      "/rsvp"
    );
    expect(
      screen.getByRole("link", { name: "Ver lista de presentes" })
    ).toHaveAttribute("href", "/gifts");
  });
});
