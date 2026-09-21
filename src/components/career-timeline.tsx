import { timeline } from "@/data/timeline";

const KIND_STYLE = {
  experiencia: { color: "#34d399", label: "experiencia" },
  proyecto: { color: "#60a5fa", label: "proyecto" },
  educación: { color: "#93c5fd", label: "educación" },
  sistema: { color: "#22d3ee", label: "sistema" },
} as const;

export function CareerTimeline() {
  return (
    <div className="relative ml-3 border-l border-line pl-8">
      {timeline.map((entry) => {
        const style = KIND_STYLE[entry.kind];
        return (
          <div key={entry.id} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[2.35rem] top-1 size-4 rounded-full border-2"
              style={{
                backgroundColor: "#05070f",
                borderColor: style.color,
                boxShadow: `0 0 12px ${style.color}66`,
              }}
              aria-hidden
            />
            <p className="font-mono text-xs text-ink-faint">
              {entry.period} · {style.label}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-ink">{entry.title}</h3>
            <p className="font-mono text-sm text-ink-dim">{entry.subtitle}</p>
            <ul className="mt-3 space-y-1.5">
              {entry.details.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-ink-dim">
                  <span className="text-neon">›</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}