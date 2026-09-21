import { profile } from "@/data/profile";

export function FooterContact() {
  return (
    <footer id="contacto" className="border-t border-line bg-panel/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <p className="font-mono text-sm text-ink-faint">{">"} abierto a propuestas laborales</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">Hablemos de tu stack.</h2>
          <p className="mt-3 leading-relaxed text-ink-dim">
            Si buscas un full-stack que también piensa en infraestructura y calidad, este es el
            canal.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="text-shadow-neon mt-5 inline-block font-mono text-xl text-neon transition-colors hover:brightness-110"
          >
            {profile.email}
          </a>
          <a
            href="/cv.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-neon px-5 py-3 font-mono text-sm font-medium text-bg transition-all hover:brightness-110"
          >
            ↓ descargar CV
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6 font-mono text-sm">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-ink-faint">redes</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-dim transition-colors hover:text-neon"
                >
                  github ↗
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-dim transition-colors hover:text-neon"
                >
                  linkedin ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-ink-faint">comandos</p>
            <ul className="space-y-2 text-ink-dim">
              <li>#proyectos</li>
              <li>#agentes</li>
              <li>#stack</li>
              <li>#trayectoria</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line-soft py-5">
        <p className="mx-auto max-w-6xl px-6 font-mono text-xs text-ink-faint sm:px-10">
          {profile.handle} · diseñado como sistema de agentes desde .opencode · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}