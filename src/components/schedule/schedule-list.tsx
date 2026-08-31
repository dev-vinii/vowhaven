import { schedule } from "@/service/schedule";

export function ScheduleList() {
  return (
    <ol className="divide-y divide-line border border-line bg-surface">
      {schedule.map((item) => (
        <li
          key={item.id}
          className="grid grid-cols-[6.5rem_1fr] gap-4 px-5 py-5 sm:grid-cols-[8rem_1fr]"
        >
          <time className="font-mono text-sm uppercase tracking-[0.16em] text-cobalt">
            {item.time}
          </time>
          <div>
            <p className="font-display text-2xl text-tile">{item.title}</p>
            <p className="mt-1 text-sm text-mute">{item.place}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
