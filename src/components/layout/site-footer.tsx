import { wedding } from "@/service/wedding";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-mute">
      <p className="font-mono uppercase tracking-[0.2em]">
        {wedding.partnerOne} · {wedding.partnerTwo}
      </p>
      <p className="mt-2">{wedding.city}</p>
    </footer>
  );
}
