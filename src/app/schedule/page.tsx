import type { Metadata } from "next";

import { ScheduleList } from "@/components/schedule/schedule-list";

export const metadata: Metadata = {
  title: "Programa",
};

export default function SchedulePage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-cobalt">
        O dia
      </p>
      <h1 className="mt-3 font-display text-5xl text-tile">Programa</h1>
      <p className="mt-4 text-mute">
        Cerimônia na igreja, retratos no adro e jantar na recepção.
      </p>
      <div className="mt-8">
        <ScheduleList />
      </div>
    </section>
  );
}
