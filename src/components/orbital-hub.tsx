"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import { agents, type Agent, type AgentId } from "@/data/agents";
import { projects } from "@/data/projects";

const STATUS_COLOR: Record<Agent["status"], string> = {
  online: "#34d399",
  idle: "#93c5fd",
  compiling: "#fbbf24",
};

const STATUS_LABEL: Record<Agent["status"], string> = {
  online: "online",
  idle: "idle",
  compiling: "compiling",
};

interface OrbitalHubProps {
  selectedId: AgentId;
  onSelect: (id: AgentId) => void;
  onRun: (id: AgentId) => void;
}

const SAT_COUNT = 5;
const CX = 500;
const CY = 350;
const SAT_R = 64;
const ORBIT_R = 255;
const CORE_R = 84;

function polar(index: number, count: number, radius: number, centerX: number, centerY: number) {
  const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
  return {
    x: centerX + Math.cos(angle) * radius,
    y: centerY + Math.sin(angle) * radius,
  };
}

export function OrbitalHub({ selectedId, onSelect, onRun }: OrbitalHubProps) {
  const [hoverId, setHoverId] = useState<AgentId | null>(null);
  const selected = agents.find((a) => a.id === selectedId) ?? agents[0];
  const satellites = agents.filter((a) => a.id !== "core");

  const positions = satellites.map((a, i) => ({
    agent: a,
    ...polar(i, SAT_COUNT, ORBIT_R, CX, CY),
  }));

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center">
      <div>
        <svg
          viewBox="0 0 1000 700"
          className="w-full"
          role="img"
          aria-label="Constelación de agentes. El orquestador (Pedro) al centro y los agentes especializados en órbita."
        >
          <defs>
            <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(96,130,255,0.35)" />
              <stop offset="100%" stopColor="rgba(96,130,255,0)" />
            </radialGradient>
          </defs>

          <circle cx={CX} cy={CY} r={ORBIT_R + 60} fill="url(#hub-glow)" />

          <circle
            cx={CX}
            cy={CY}
            r={ORBIT_R}
            fill="none"
            stroke="rgba(96,130,255,0.14)"
            strokeWidth={1}
            strokeDasharray="2 10"
          />

          {positions.map(({ agent: a, x, y }) => {
            const active = selectedId === a.id || hoverId === a.id;
            const lineColor = a.color;
            return (
              <line
                key={a.id}
                x1={CX}
                y1={CY}
                x2={x}
                y2={y}
                stroke={lineColor}
                strokeOpacity={active ? 0.9 : 0.28}
                strokeWidth={active ? 2 : 1}
                className={active ? "node-flow" : undefined}
              />
            );
          })}

          <g
            role="button"
            tabIndex={0}
            aria-label={`Agente central: ${selected.name}`}
            onClick={() => onSelect("core")}
            onMouseEnter={() => setHoverId("core")}
            onMouseLeave={() => setHoverId(null)}
            onKeyDown={(e: KeyboardEvent<SVGGElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect("core");
              }
            }}
            className="cursor-pointer outline-none focus-visible:opacity-90"
          >
            <circle
              cx={CX}
              cy={CY}
              r={CORE_R}
              fill="rgba(10,15,30,0.95)"
              stroke="#60a5fa"
              strokeWidth={2}
              className={selectedId === "core" || hoverId === "core" ? "glow-neon" : undefined}
            />
            <circle
              cx={CX}
              cy={CY}
              r={CORE_R + 8}
              fill="none"
              stroke="rgba(96,130,255,0.35)"
              strokeWidth={1}
              strokeDasharray="3 6"
              className="animate-spin-slow"
            />
            <text
              x={CX}
              y={CY - 6}
              textAnchor="middle"
              className="fill-ink font-mono text-2xl"
              fontSize="22"
              fontWeight="600"
            >
              yo
            </text>
            <text
              x={CX}
              y={CY + 18}
              textAnchor="middle"
              className="fill-ink-dim font-mono"
              fontSize="12"
            >
              orchestrator
            </text>
          </g>

          {positions.map(({ agent: a, x, y }) => {
            const active = selectedId === a.id || hoverId === a.id;
            const isSel = selectedId === a.id;
            return (
              <g
                key={a.id}
                role="button"
                tabIndex={0}
                aria-label={`Agente ${a.name}: ${a.tagline}`}
                aria-pressed={isSel}
                onClick={() => onSelect(a.id)}
                onMouseEnter={() => setHoverId(a.id)}
                onMouseLeave={() => setHoverId(null)}
                onKeyDown={(e: KeyboardEvent<SVGGElement>) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(a.id);
                  }
                }}
                className="cursor-pointer outline-none"
                transform={`translate(${x}, ${y})`}
              >
                <circle
                  r={SAT_R}
                  fill={active ? "rgba(15,24,54,0.98)" : "rgba(10,15,30,0.9)"}
                  stroke={a.color}
                  strokeWidth={active ? 2.5 : 1.2}
                  strokeOpacity={active ? 1 : 0.55}
                  className={active ? "glow-neon transition-all" : "transition-all"}
                />
                <text dx={0} dy={-4} textAnchor="middle" className="fill-ink font-mono" fontSize="16" fontWeight="600">
                  {a.codename}
                </text>
                <text dx={0} dy={14} textAnchor="middle" className="fill-ink-dim font-mono" fontSize="10">
                  {a.name}
                </text>
                <circle
                  cx={SAT_R - 12}
                  cy={-SAT_R + 12}
                  r={5}
                  fill={STATUS_COLOR[a.status]}
                />
                <circle
                  cx={SAT_R - 12}
                  cy={-SAT_R + 12}
                  r={8}
                  fill="none"
                  stroke={STATUS_COLOR[a.status]}
                  strokeOpacity={0.3}
                  className="animate-pulse-node"
                />
              </g>
            );
          })}
        </svg>
        <p className="mt-3 text-center font-mono text-xs text-ink-faint lg:text-left">
          {">"} haz clic en un agente para inspeccionarlo · doble clic para ejecutarlo sobre los proyectos
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-panel/70 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-ink-faint">{selected.codename} · agente</p>
            <h3 className="mt-1 text-2xl font-semibold text-ink">{selected.name}</h3>
          </div>
          <span
            className="rounded-full border px-3 py-1 font-mono text-xs"
            style={{ borderColor: `${STATUS_COLOR[selected.status]}55`, color: STATUS_COLOR[selected.status] }}
          >
            {STATUS_LABEL[selected.status]}
          </span>
        </div>

        <p className="mt-4 leading-relaxed text-ink-dim">{selected.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-dim">{selected.description}</p>

        <div className="mt-5">
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-faint">
            /skills del sistema
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {selected.skills.slice(0, 6).map((s) => (
              <span key={s} className="rounded-md border border-line bg-panel-2 px-2.5 py-1 font-mono text-xs text-ink-dim">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-faint">
            stack
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {selected.stack.map((s) => (
              <span key={s} className="rounded-full border border-line-soft px-3 py-1 text-xs text-ink">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-faint">
            proyectos en los que participa
          </p>
          <ul className="mt-2 space-y-1.5">
            {projects
              .filter((p) => p.agents.includes(selected.id))
              .map((p) => (
                <li key={p.id} className="font-mono text-sm text-ink-dim">
                  <span className="text-warn">↳</span> {p.name} · {p.status}
                </li>
              ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => onRun(selected.id)}
          className="mt-6 w-full rounded-lg border border-neon/50 bg-neon/10 px-4 py-3 font-mono text-sm text-neon transition-all hover:bg-neon/20"
        >
          <span className="text-ink-faint">$</span> ejecutar {selected.codename} --proyectos
        </button>
      </div>
    </div>
  );
}