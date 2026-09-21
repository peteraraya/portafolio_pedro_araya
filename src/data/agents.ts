export type AgentId = "core" | "frontend" | "backend" | "infra" | "data" | "qa";

export interface Agent {
  id: AgentId;
  name: string;
  codename: string;
  tagline: string;
  description: string;
  skills: string[];
  stack: string[];
  projects: string[];
  status: "online" | "idle" | "compiling";
  color: string;
  grid: string;
}

export const agents: Agent[] = [
  {
    id: "core",
    name: "Orquestador",
    codename: "orchestrator",
    tagline: "El perfil que coordina todo el sistema.",
    description:
      "Clasifica solicitudes, secuencia el trabajo entre agentes, gestiona los traspasos entre ellos y mantiene la coherencia del resultado final. Como un tech lead que nunca resuelve solo: enruta, prioriza y decide.",
    skills: ["orquestación", "gestión de dependencias", "traspasos explícitos", "planificación multi-agente"],
    stack: ["TypeScript", "Git", "GitHub", "Arquitectura"],
    projects: ["gym-tracker", "evolift", "red-centinela", "postulatrack"],
    status: "online",
    color: "#60a5fa",
    grid: "row-start-1 col-start-3 md:col-start-3",
  },
  {
    id: "frontend",
    name: "Frontend",
    codename: "frontend",
    tagline: "React 19, Next.js 16 y experiencia de usuario.",
    description:
      "Componentes React con Server Components y estado cliente bien delimitado. TanStack Router, Query y Form para datos y estado de interfaz. Rendimiento de carga y renderizado como prioridad desde el diseño, no como ajuste posterior.",
    skills: ["nextjs-2026-best-practices", "vite-tanstack-tailwind", "ui-design-system", "frontend-design"],
    stack: ["Next.js 16", "React 19", "TanStack Router", "TanStack Query", "Tailwind 4", "Vite", "Zustand"],
    projects: ["gym-tracker", "evolift", "tienda-confecciones", "zipek", "perfil-real", "caja-simple", "gym-ai-app"],
    status: "online",
    color: "#38bdf8",
    grid: "row-start-2 col-start-2",
  },
  {
    id: "backend",
    name: "Backend",
    codename: "backend",
    tagline: "NestJS seguro, APIs validadas con Zod.",
    description:
      "Backends de nivel producción: módulos por feature, DTOs validados con whitelist estricta, JWT de vida corta con refresh tokens rotados, rate limiting en endpoints sensibles y manejo de errores sin fugas de información.",
    skills: ["nestjs-secure-backend", "supabase-zod", "api-contract"],
    stack: ["NestJS", "Zod 4", "Supabase", "PostgreSQL", "OAuth", "RBAC"],
    projects: ["evolift", "red-centinela", "postulatrack", "jobsearch", "taskflow-pro", "portal-desempleo"],
    status: "online",
    color: "#6366f1",
    grid: "row-start-2 col-start-4",
  },
  {
    id: "infra",
    name: "Infra / DevOps",
    codename: "infra",
    tagline: "Docker, Kubernetes y pipelines que dicen la verdad.",
    description:
      "Imágenes Docker multi-stage con usuario no-root, Deployments con probes y límites de recursos, GitOps con ArgoCD y pipelines de CI/CD que se ejecutan en menos de 5 minutos con quality gates reales.",
    skills: ["devops-docker-kubernetes", "cicd-expert-pipelines", "github-actions"],
    stack: ["Docker", "Kubernetes", "GitHub Actions", "ArgoCD", "OIDC", "Helm"],
    projects: ["gym-tracker", "evolift", "red-centinela", "postulatrack", "zipek"],
    status: "online",
    color: "#22d3ee",
    grid: "row-start-3 col-start-2",
  },
  {
    id: "data",
    name: "Data Viz",
    codename: "data-viz",
    tagline: "Gráficos y mapas que cuentan historias.",
    description:
      "Visualización profesional con Nivo, Plotly y Leaflet: dashboards, gráficos accesibles con tema y contraste WCAG AA, y mapas interactivos robustos contra SSR.",
    skills: ["nivo-professional-charts", "plotly-expert-charts", "leaflet-maps-integration", "recharts-charts"],
    stack: ["Nivo", "Plotly", "Leaflet", "Recharts", "react-github-calendar"],
    projects: ["red-centinela", "gym-ai-app", "jobsearch", "portal-desempleo"],
    status: "idle",
    color: "#818cf8",
    grid: "row-start-3 col-start-4",
  },
  {
    id: "qa",
    name: "QA / Calidad",
    codename: "qa-tester",
    tagline: "La pruebas son parte del producto, no un paso aparte.",
    description:
      "Pirámide de testing completa: Vitest + React Testing Library, MSW para red, Playwright para E2E y Supertest para la API. Los tests flaky se tratan como bugs: se corrige la causa, no se reejecutan a ciegas.",
    skills: ["qa-qc-react-nestjs", "testing-strategy", "visual-regression"],
    stack: ["Vitest", "RTL", "MSW", "Playwright", "Supertest", "Coverage"],
    projects: ["gym-tracker", "tienda-confecciones", "perfil-real", "caja-simple", "postulatrack"],
    status: "compiling",
    color: "#93c5fd",
    grid: "row-start-4 col-start-3",
  },
];