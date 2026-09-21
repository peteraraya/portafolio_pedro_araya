"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export interface PaletteItem {
  id: string;
  label: string;
  hint: string;
  run: () => void;
}

interface CommandPaletteProps {
  items: PaletteItem[];
  onClose: () => void;
}

export function CommandPalette({ items, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => `${i.label} ${i.hint}`.toLowerCase().includes(q));
  }, [items, query]);

  const activeIndex = Math.min(index, Math.max(0, results.length - 1));

  useEffect(() => {
    if (results.length === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        results[activeIndex]?.run();
        onClose();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [results, activeIndex, onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-black/60 px-4 pt-[16vh] backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Paleta de comandos"
        className="w-full max-w-xl overflow-hidden rounded-xl border border-line bg-panel shadow-[0_0_60px_rgba(59,130,246,0.25)]"
      >
        <div className="flex items-center gap-3 border-b border-line-soft px-4 py-3">
          <span className="font-mono text-lg text-neon" aria-hidden>
            ⌘
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="buscar agente, proyecto o comando…"
            aria-label="Buscar comando"
            className="w-full bg-transparent font-mono text-sm text-ink outline-none placeholder:text-ink-faint"
          />
        </div>
        <ul className="max-h-[45vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-4 py-6 text-center font-mono text-sm text-ink-faint">
              sin resultados para &quot;{query}&quot;
            </li>
          )}
          {results.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onMouseEnter={() => setIndex(i)}
                onClick={() => {
                  item.run();
                  onClose();
                }}
                className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left font-mono text-sm transition-colors ${
                  i === activeIndex ? "bg-neon/15 text-neon" : "text-ink-dim"
                }`}
              >
                <span className="min-w-0 truncate">
                  <span className="text-ink-faint">/</span>
                  {item.label}
                </span>
                <span className="truncate text-xs text-ink-faint">{item.hint}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="border-t border-line-soft px-4 py-2.5 font-mono text-[0.7rem] text-ink-faint">
          ↑↓ navegar · ↵ ejecutar · esc cerrar
        </div>
      </div>
    </div>
  );
}