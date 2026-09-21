export interface Skill {
  id: string;
  name: string;
  filename: string;
  domain: string;
  description: string;
  agent: string;
  level: "listo" | "experto" | "afinando";
}

export const skills: Skill[] = [
  {
    id: "nextjs",
    name: "Next.js 16",
    filename: "nextjs-2026-best-practices.skill",
    domain: "Frontend / Full-stack",
    description:
      "App Router, Cache Components con 'use cache', Turbopack, proxy.ts y Server Actions validadas con Zod.",
    agent: "frontend",
    level: "experto",
  },
  {
    id: "nestjs",
    name: "NestJS",
    filename: "nestjs-secure-backend.skill",
    domain: "Backend",
    description:
      "Módulos por feature, clean code, OWASP, rate limiting, JWT + refresh rotado, RBAC y resiliencia.",
    agent: "backend",
    level: "experto",
  },
  {
    id: "devops",
    name: "Docker + Kubernetes",
    filename: "devops-docker-kubernetes.skill",
    domain: "Infraestructura",
    description:
      "Imágenes multi-stage no-root, Deployments con probes y limits, Pod Security restricted y GitOps.",
    agent: "infra",
    level: "experto",
  },
  {
    id: "cicd",
    name: "CI/CD",
    filename: "cicd-expert-pipelines.skill",
    domain: "Infraestructura",
    description:
      "GitHub Actions rápidos y confiables, OIDC, gates de aprobación, matrix y escaneo Trivy.",
    agent: "infra",
    level: "experto",
  },
  {
    id: "nivo",
    name: "Nivo",
    filename: "nivo-professional-charts.skill",
    domain: "Data Viz",
    description: "Gráficos profesionales con tema, accesibilidad y estados de carga en dashboards.",
    agent: "data",
    level: "listo",
  },
  {
    id: "plotly",
    name: "Plotly",
    filename: "plotly-expert-charts.skill",
    domain: "Data Viz",
    description: "Gráficos interactivos para análisis de datos densos y exploración visual.",
    agent: "data",
    level: "listo",
  },
  {
    id: "leaflet",
    name: "Leaflet",
    filename: "leaflet-maps-integration.skill",
    domain: "Data Viz / Mapas",
    description: "Mapas robustos contra SSR, clustering de markers y espera GeoJSON performante.",
    agent: "data",
    level: "listo",
  },
  {
    id: "qa",
    name: "QA / QC",
    filename: "qa-qc-react-nestjs.skill",
    domain: "Calidad",
    description: "Pirámide de testing, Vitest, MSW, Playwright, Supertest y gates de calidad en CI.",
    agent: "qa",
    level: "experto",
  },
];