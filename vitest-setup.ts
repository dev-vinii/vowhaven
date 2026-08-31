import "@testing-library/jest-dom/vitest";
import { createElement, type ReactNode } from "react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    sizes?: string;
  }) => createElement("img", { src, alt, className }),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    className,
  }: {
    href: string;
    children: ReactNode;
    className?: string;
  }) => createElement("a", { href, className }, children),
}));
