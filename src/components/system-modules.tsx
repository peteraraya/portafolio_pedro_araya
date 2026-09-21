import { skills, type Skill } from "@/data/skills";
import { agents } from "@/data/agents";

const LEVEL_META: Record<Skill["level"], { label: string; filled: number }> = {
  experto: { label: "experto", filled: 3 },
  listo: { label: "listo", filled: 2 },
  afinando: { label: "afinando", filled: 1 },
};

export function SystemModules() {
  const groups = agents
    .filter((a) => a.id !== "core")
    .map((agent) => ({ agent, items: skills.filter((s) => s.agent === agent.id) }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="space-y-12">
      {groups.map(({ agent, items }) => (
        <div key={agent.id}>
          <div className="flex items-center gap-2.5">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: agent.color, boxShadow: `0 0 8px ${agent.color}aa` }}
              aria-hidden
            />
            <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
              {agent.codename} · {agent.name}
            </p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((skill) => {
              const level = LEVEL_META[skill.level];
              return (
                <div
                  key={skill.id}
                  className="card-tilt flex flex-col rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-sm hover:border-neon/50"
                  style={{ borderLeftColor: agent.color, borderLeftWidth: 3 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-sm text-neon">{skill.name}</p>
                    <span
                      className="flex items-center gap-1"
                      role="img"
                      aria-label={`nivel de dominio: ${level.label}`}
                    >
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="size-1.5 rounded-full"
                          style={{
                            backgroundColor: i < level.filled ? agent.color : "var(--color-line)",
                          }}
                          aria-hidden
                        />
                      ))}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[0.7rem] text-ink-faint">{skill.filename}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-dim">
                    {skill.description}
                  </p>
                  <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-widest text-ink-faint">
                    {level.label} · {skill.domain}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
