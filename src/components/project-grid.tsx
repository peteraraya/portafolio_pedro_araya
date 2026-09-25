import type { AgentId } from "@/data/agents";
import { agents } from "@/data/agents";
import type { Project } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
  active: AgentId | "all";
  onReset?: () => void;
}

export function ProjectGrid({ projects, active, onReset }: ProjectGridProps) {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="card-tilt group flex flex-col rounded-2xl border border-line bg-panel/70 p-6 backdrop-blur-sm hover:border-neon/50"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-ink-faint">
                  {project.year} · {project.status}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-ink">{project.name}</h3>
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-neon/40 px-3 py-1 font-mono text-xs text-neon transition-colors hover:border-neon hover:bg-neon/10"
                  >
                    demo ↗
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-line px-3 py-1 font-mono text-xs text-ink-dim transition-colors hover:border-neon/60 hover:text-neon"
                  >
                    repo ↗
                  </a>
                )}
              </div>
            </div>

            <p className="mt-2 font-mono text-sm text-neon">{project.tagline}</p>

            <dl className="mt-3 space-y-2 text-sm leading-relaxed">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-ink-faint">Reto</dt>
                <dd className="text-ink-dim">{project.challenge}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-ink-faint">Solución</dt>
                <dd className="text-ink-dim">{project.solution}</dd>
              </div>
            </dl>

            <ul className="mt-4 space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-ink-dim">
                  <span className="text-neon">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.agents.map((id) => {
                const a = agents.find((x) => x.id === id);
                if (!a) return null;
                return (
                  <span
                    key={id}
                    className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.7rem]"
                    style={{
                      borderColor: `${a.color}44`,
                      color: a.color,
                      backgroundColor: `${a.color}0d`,
                    }}
                  >
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: a.color }}
                      aria-hidden
                    />
                    {a.codename}
                  </span>
                );
              })}
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-line-soft bg-panel-2 px-2 py-0.5 font-mono text-[0.68rem] text-ink-faint"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="rounded-2xl border border-line bg-panel/60 p-10 text-center">
          <p className="font-mono text-lg text-ink-dim">&lt;empty_state&gt;</p>
          <p className="mt-2 text-sm text-ink-faint">
            Ningún proyecto registrado para este agente. Prueba con otro filtro.
          </p>
          {active !== "all" && onReset && (
            <button
              type="button"
              onClick={onReset}
              className="mt-4 rounded-lg border border-line px-4 py-2 font-mono text-sm text-ink-dim transition-colors hover:border-neon/50 hover:text-neon"
            >
              ver todos
            </button>
          )}
        </div>
      )}
    </div>
  );
}