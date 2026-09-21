import { skills } from "@/data/skills";

export function SystemModules() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="card-tilt flex flex-col rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-sm hover:border-neon/50"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-sm text-neon">{skill.name}</p>
            <span
              className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.65rem] text-ink-faint"
            >
              {skill.level}
            </span>
          </div>
          <p className="mt-1 font-mono text-[0.7rem] text-ink-faint">{skill.filename}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-dim">{skill.description}</p>
          <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-widest text-ink-faint">
            dominio · {skill.domain}
          </p>
        </div>
      ))}
    </div>
  );
}