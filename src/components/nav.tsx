"use client";

interface NavProps {
  onOpenPalette: () => void;
}

const links = [
  { href: "#proyectos", label: "proyectos" },
  { href: "#agentes", label: "agentes" },
  { href: "#stack", label: "stack" },
  { href: "#trayectoria", label: "trayectoria" },
];

export function Nav({ onOpenPalette }: NavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-soft bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-mono text-sm text-ink">
          <span className="text-neon">pedro@portfolio</span>
          <span className="text-ink-faint">:~$</span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-ink-dim transition-colors hover:text-neon"
            >
              /{l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenPalette}
            className="flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 font-mono text-xs text-ink-dim transition-colors hover:border-neon/60 hover:text-neon"
          >
            <span aria-hidden>⌘</span>
            <span className="hidden sm:inline">K</span>
            <span className="hidden text-ink-faint sm:inline">· comando</span>
          </button>
          <a
            href="#contacto"
            className="hidden rounded-lg border border-line px-3 py-1.5 font-mono text-xs text-ink-dim transition-colors hover:border-neon/60 hover:text-neon sm:inline-block"
          >
            contactar
          </a>
          <a
            href="/cv.pdf"
            download
            className="rounded-lg bg-neon px-3 py-1.5 font-mono text-xs font-medium text-bg transition-all hover:brightness-110"
          >
            ↓ descargar CV
          </a>
        </div>
      </div>
    </header>
  );
}