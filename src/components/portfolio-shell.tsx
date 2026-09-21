"use client";

import { useEffect, useState } from "react";
import type { AgentId } from "@/data/agents";
import { agents } from "@/data/agents";
import { projects } from "@/data/projects";
import { Nav } from "@/components/nav";
import { TerminalBoot } from "@/components/terminal-boot";
import { OrbitalHub } from "@/components/orbital-hub";
import { ProjectGrid } from "@/components/project-grid";
import { SystemModules } from "@/components/system-modules";
import { CareerTimeline } from "@/components/career-timeline";
import { FooterContact } from "@/components/footer-contact";
import { CommandPalette, type PaletteItem } from "@/components/command-palette";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function PortfolioShell() {
  const [selected, setSelected] = useState<AgentId>("core");
  const [filter, setFilter] = useState<AgentId | "all">("all");
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const runAgent = (id: AgentId) => {
    setSelected(id);
    setFilter(id);
    scrollTo("proyectos");
  };

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.agents.includes(filter));

  const paletteItems: PaletteItem[] = [
    { id: "top", label: "inicio", hint: "ir al hero de arranque", run: () => scrollTo("top") },
    { id: "sec-proyectos", label: "proyectos", hint: "ver grilla completa", run: () => scrollTo("proyectos") },
    { id: "sec-agentes", label: "agentes", hint: "inspeccionar constelación", run: () => scrollTo("agentes") },
    { id: "sec-stack", label: "stack", hint: "módulos del sistema", run: () => scrollTo("stack") },
    { id: "sec-trayectoria", label: "trayectoria", hint: "línea de tiempo", run: () => scrollTo("trayectoria") },
    { id: "sec-contacto", label: "contacto", hint: "email y redes", run: () => scrollTo("contacto") },
    ...agents.map((a) => ({
      id: `ag-${a.id}`,
      label: `agente ${a.codename}`,
      hint: a.tagline,
      run: () => {
        setSelected(a.id);
        scrollTo("agentes");
      },
    })),
    ...projects.map((p) => ({
      id: `p-${p.id}`,
      label: `proyecto ${p.name}`,
      hint: `${p.year} · ${p.status}`,
      run: () => {
        setSelected(p.agents[0] ?? "core");
        setFilter(p.agents[0] ?? "all");
        scrollTo("proyectos");
      },
    })),
  ];

  return (
    <>
      <Nav onOpenPalette={() => setPaletteOpen(true)} />

      <main>
        <section id="top">
          <TerminalBoot />
        </section>

        <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-10">
          <p className="font-mono text-sm text-ink-faint">{">"} /proyectos</p>
          <h2 className="text-shadow-neon mt-2 text-4xl font-semibold tracking-tight">
            Trabajo real, verificado
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-dim">
            Cada proyecto declara qué agentes participan en él — como un manifiesto de
            dependencias. Filtra por agente para explorar por competencia.
          </p>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos por agente">
            <button
              type="button"
              id="proyectos-todos"
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                filter === "all"
                  ? "border-neon bg-neon/15 text-neon"
                  : "border-line text-ink-dim hover:border-neon/50 hover:text-ink"
              }`}
            >
              * todo el stack
            </button>
            {agents
              .filter((a) => a.id !== "core")
              .map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setFilter(a.id)}
                  aria-pressed={filter === a.id}
                  className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                    filter === a.id
                      ? "border-neon bg-neon/15 text-neon"
                      : "border-line text-ink-dim hover:border-neon/50 hover:text-ink"
                  }`}
                >
                  {a.codename}
                </button>
              ))}
          </div>

          <div className="mt-8">
            <ProjectGrid
              projects={filteredProjects}
              active={filter}
              onReset={() => setFilter("all")}
            />
          </div>
        </section>

        <section id="agentes" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-10">
          <p className="font-mono text-sm text-ink-faint">{">"} /agentes</p>
          <h2 className="text-shadow-neon mt-2 text-4xl font-semibold tracking-tight">
            Un equipo, no un CV
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-dim">
            Esta página se piensa como un sistema operativo de mi carrera. Cada agente representa
            un dominio que domino y actúa dentro de la interfaz: inspección de proyectos,
            exploración no lineal y navegación por intención.
          </p>
          <div className="mt-12">
            <OrbitalHub
              selectedId={selected}
              onSelect={(id) => setSelected(id)}
              onRun={runAgent}
            />
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-10">
          <p className="font-mono text-sm text-ink-faint">{">"} /stack</p>
          <h2 className="text-shadow-neon mt-2 text-4xl font-semibold tracking-tight">
            Módulos del sistema cargados
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-dim">
            Estas son las skills registradas como agentes de conocimiento en mi entorno de
            desarrollo. Cada una responde a un dominio específico y se activa cuando la tarea lo
            requiere.
          </p>
          <div className="mt-10">
            <SystemModules />
          </div>
        </section>

        <section id="trayectoria" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-10">
          <p className="font-mono text-sm text-ink-faint">{">"} /trayectoria</p>
          <h2 className="text-shadow-neon mt-2 text-4xl font-semibold tracking-tight">
            Línea de tiempo
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-dim">
            Experiencia profesional, proyectos propios y formación, de lo más reciente a lo más antiguo.
          </p>
          <div className="mt-10 max-w-2xl">
            <CareerTimeline />
          </div>
        </section>
      </main>

      <FooterContact />

      {paletteOpen && (
        <CommandPalette items={paletteItems} onClose={() => setPaletteOpen(false)} />
      )}
    </>
  );
}