# Portafolio · sistema de agentes

Portafolio interactivo construido con **Next.js 16** (App Router, Turbopack, Tailwind 4, React 19). La interfaz se diseña como un *sistema operativo de carrera*: los agentes definidos en `.opencode/` (orchestrator, frontend, backend, infra, data-viz, qa) se convierten en nodos de navegación interactivos, y cada skill/técnica del stack (Next.js, NestJS, Docker/K8s, CI/CD, Nivo/Plotly/Leaflet, QA) queda registrada como un módulo del sistema.

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # root layout, metadata, tema
│   ├── page.tsx            # renderiza PortfolioShell
│   └── globals.css         # tokens de diseño + animaciones
├── components/
│   ├── portfolio-shell.tsx # orquesta estado (cliente)
│   ├── terminal-boot.tsx   # hero de arranque tipo consola
│   ├── orbital-hub.tsx     # constelación de agentes (sección clave)
│   ├── command-palette.tsx # búsqueda ⌘K (navegación no lineal)
│   ├── project-grid.tsx    # proyectos con dependencias de agentes
│   ├── system-modules.tsx  # skills del sistema
│   ├── career-timeline.tsx # trayectoria
│   ├── nav.tsx             # navegación fija + ⌘K
│   └── footer-contact.tsx  # contacto
└── data/
    ├── profile.ts          # datos personales (editar)
    ├── agents.ts           # los 6 agentes del sistema
    ├── projects.ts         # proyectos con manifiesto de agentes
    ├── skills.ts           # módulos de conocimiento (.skill)
    └── timeline.ts         # hitos de trayectoria
```

## Scripts

```bash
npm run dev        # desarrollo
npm run build      # build de producción (verificado)
npm run start      # sirve el build
npm run lint       # ESLint
```

## Datos a personalizar

`src/data/profile.ts` tiene el nombre, email y redes como placeholder. `src/data/projects.ts` ya usa los proyectos reales de `F:\proyectos_personales\mvps`: los de `Produccion/` están marcados como **producción** con sus URLs reales (`demo`), y los de `Desarrollo/` como **en desarrollo** (sin `demo`). Revisá los campos `repo` (hay algunos sin remote configurado, quedaron vacíos) y completá la trayectoria en `src/data/timeline.ts` con tu historial laboral.