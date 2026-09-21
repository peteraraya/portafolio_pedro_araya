"use client";

import { useRef, useState } from "react";
import { profile } from "@/data/profile";
import { agents } from "@/data/agents";

const bootLines = [
  "$ npm run deploy:pedro",
  "> pedro-portfolio@boot 0.1.0",
  "› cargando agentes desde .opencode/",
  "  ✓ orchestrator · tech lead        [online]",
  "  ✓ frontend     · next-16 react-19  [online]",
  "  ✓ backend      · nestjs zod        [online]",
  "  ✓ infra        · docker k8s        [online]",
  "  ✓ data         · nivo plotly leaflet [idle]",
  "  ✓ qa           · vitest playwright [compiling]",
  "6 agentes listos · 0 errores · estático por defecto",
  "escribe 'help' o toca un atajo abajo ↓",
];

const COMMANDS: Record<string, string> = {
  help: "proyectos · agentes · stack · trayectoria · contacto · cv · inicio · clear",
  proyectos: "grilla de proyectos → #proyectos",
  agentes: "inspector de agentes → #agentes",
  stack: "módulos del sistema → #stack",
  trayectoria: "línea de tiempo → #trayectoria",
  contacto: "email y redes → #contacto",
  inicio: "volver al arranque → #top",
};

const QUICK_COMMANDS = ["proyectos", "agentes", "stack", "trayectoria", "contacto", "cv"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function triggerCvDownload() {
  const a = document.createElement("a");
  a.href = "/cv.pdf";
  a.download = "";
  a.click();
}

export function TerminalBoot() {
  const [fast, setFast] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [cmdLog, setCmdLog] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (cmd === "") return;
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    if (cmd === "cv") {
      setHistory((h) => [...h, `$ ${raw}`, "  › descargando cv.pdf…"]);
      triggerCvDownload();
      return;
    }
    const output = COMMANDS[cmd];
    if (output) {
      setHistory((h) => [...h, `$ ${raw}`, `  › ${output}`]);
      if (cmd !== "help") {
        scrollTo(output.includes("#") ? output.split("#")[1] : "");
      }
    } else {
      setHistory((h) => [...h, `$ ${raw}`, `  › comando desconocido: '${raw}' (usa help)`]);
    }
  };

  const runQuickCommand = (cmd: string) => {
    runCommand(cmd);
    setFast(true);
    inputRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value;
      runCommand(value);
      if (value.trim()) {
        setCmdLog((log) => [...log, value.trim()]);
      }
      setLogIndex(null);
      e.currentTarget.value = "";
      return;
    }
    if (e.key === "ArrowUp") {
      if (cmdLog.length === 0) return;
      e.preventDefault();
      const nextIndex = logIndex === null ? cmdLog.length - 1 : Math.max(0, logIndex - 1);
      setLogIndex(nextIndex);
      e.currentTarget.value = cmdLog[nextIndex];
      return;
    }
    if (e.key === "ArrowDown") {
      if (logIndex === null) return;
      e.preventDefault();
      const nextIndex = logIndex + 1;
      if (nextIndex >= cmdLog.length) {
        setLogIndex(null);
        e.currentTarget.value = "";
      } else {
        setLogIndex(nextIndex);
        e.currentTarget.value = cmdLog[nextIndex];
      }
    }
  };

  const renderLine = (line: string) => {
    if (line.startsWith("$ ")) {
      return (
        <span>
          <span className="text-neon">$</span>{" "}
          <span className="text-ink">{line.slice(2)}</span>
        </span>
      );
    }
    if (line.indexOf("✓") >= 0) {
      return (
        <span>
          {line.slice(0, line.indexOf("✓"))}
          <span className="text-ok">✓</span>
          <span className="text-ink">{line.slice(line.indexOf("✓") + 1)}</span>
        </span>
      );
    }
    if (line.startsWith("6 agentes")) {
      return <span className="text-ok">{line}</span>;
    }
    return <span className="text-ink-faint">{line}</span>;
  };

  return (
    <div className="relative min-h-svh w-full overflow-hidden bg-bg bg-grid">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.14),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-10">
        <div
          className={`animate-rise w-full max-w-2xl rounded-xl border border-line bg-panel/80 backdrop-blur-sm ${
            fast ? "terminal-fast" : ""
          }`}
          role="log"
          aria-live="polite"
        >
          <div className="flex items-center gap-2 border-b border-line-soft px-4 py-3">
            <span className="size-2.5 rounded-full bg-warn/70" />
            <span className="size-2.5 rounded-full bg-ok/70" />
            <span className="size-2.5 rounded-full bg-danger/70" />
            <span className="ml-2 font-mono text-xs text-ink-faint">
              pedro@portfolio: ~/.opencode (zsh)
            </span>
          </div>
          <div
            className="min-h-[19rem] cursor-text px-4 py-4 font-mono text-[0.8rem] leading-6 sm:text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {bootLines.map((line, i) => (
              <p
                key={line}
                className="terminal-line whitespace-pre-wrap text-ink-dim"
                style={{ animationDelay: `${i * 140}ms` }}
              >
                {renderLine(line)}
              </p>
            ))}
            {history.map((line, i) => (
              <p key={`h-${i}`} className="whitespace-pre-wrap text-ink-dim">
                {renderLine(line)}
              </p>
            ))}
            <div className="mt-1 flex items-center gap-0">
              <span className="text-neon">$</span>
              <input
                ref={inputRef}
                type="text"
                autoComplete="off"
                spellCheck={false}
                aria-label="Comando de la terminal"
                onKeyDown={onKeyDown}
                className="ml-2 w-full bg-transparent text-ink outline-none placeholder:text-ink-faint"
                placeholder="escribe un comando… (↑ para repetir el anterior)"
              />
              <span className="inline-block h-4 w-2 bg-neon terminal-caret" aria-hidden />
            </div>

            <div
              className="mt-4 flex flex-wrap gap-1.5 border-t border-line-soft pt-3"
              role="group"
              aria-label="Atajos de navegación de la terminal"
            >
              {QUICK_COMMANDS.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    runQuickCommand(cmd);
                  }}
                  className="rounded-md border border-line px-2.5 py-1 text-[0.7rem] text-ink-dim transition-colors hover:border-neon/60 hover:text-neon"
                >
                  {cmd}
                </button>
              ))}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFast(true);
                  inputRef.current?.focus();
                }}
                className="ml-auto rounded-md px-2.5 py-1 text-[0.7rem] text-ink-faint transition-colors hover:text-ink"
              >
                saltar animación ⏭
              </button>
            </div>
          </div>
        </div>

        <div className="animate-rise mt-12 max-w-2xl" style={{ animationDelay: "120ms" }}>
          <p className="font-mono text-sm text-ink-faint">{">"} hola, soy</p>
          <h1 className="text-shadow-neon mt-2 text-5xl font-semibold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-dim">
            {profile.headline}. Coordino un{" "}
            <span className="text-neon">equipo de agentes</span> — cada tecnología que domino
            se despliega como un especialista dentro de esta interfaz.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-dim">{profile.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
            {profile.roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-line bg-panel-2 px-3 py-1 text-ink-dim"
              >
                <span className="mr-1.5 inline-block size-1.5 rounded-full bg-neon" aria-hidden />{" "}
                {role.toLowerCase()}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/cv.pdf"
              download
              className="rounded-lg bg-neon px-5 py-3 text-sm font-medium text-bg transition-all hover:brightness-110"
            >
              ↓ Descargar CV
            </a>
            <a
              href="#proyectos"
              className="rounded-lg border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-neon/60 hover:text-neon"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-lg border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-neon/60 hover:text-neon"
            >
              Contacto
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-6 font-mono text-xs text-ink-faint lg:flex">
          {agents.map((a) => (
            <span key={a.id} className="flex items-center gap-1.5">
              <span
                className="inline-block size-1.5 rounded-full animate-pulse-node"
                style={{ backgroundColor: a.color }}
              />
              {a.codename}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}