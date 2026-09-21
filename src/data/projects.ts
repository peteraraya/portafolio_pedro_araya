import type { AgentId } from "./agents";

export interface Project {
  id: string;
  name: string;
  year: string;
  tagline: string;
  description: string;
  agents: AgentId[];
  stack: string[];
  highlights: string[];
  demo: string;
  repo: string;
  status: "producción" | "en desarrollo" | "concepto";
}

export const projects: Project[] = [
  {
    id: "gym-tracker",
    name: "Gym Tracker",
    year: "2026",
    tagline: "App PWA de entrenamiento con modo offline y base Supabase.",
    description:
      "Progresión de ejercicios, rutinas, seguimiento de sesiones e IA integrada. Funciona como PWA instalable con modo offline real, sincronización con Supabase y build móvil con Capacitor empujado a Android.",
    agents: ["core", "frontend", "backend", "infra", "qa"],
    stack: ["Next.js 16", "React 19", "TypeScript 5", "Tailwind 4", "Supabase", "Capacitor", "PWA"],
    highlights: [
      "PWA instalable con push notifications y modo offline",
      "Export estático (out/) con API en modo offline por feature flag",
      "Suite completa: Vitest + RTL + Playwright + coverage",
      "CI en GitHub Actions y build móvil con Capacitor",
    ],
    demo: "https://gym-tracker-eta-amber.vercel.app",
    repo: "https://github.com/peteraraya/gym-tracker",
    status: "producción",
  },
  {
    id: "evolift",
    name: "Evolift",
    year: "2026",
    tagline: "Gestión de entrenamiento y planes para equipos de fuerza.",
    description:
      "Aplicación de gestión de entrenamientos con API NestJS cacheada en Redis, autenticación OAuth (Google/GitHub) y frontend React con TanStack Query e i18n. SSR del API sobre Vercel con CORS restringido a origen de producción.",
    agents: ["core", "frontend", "backend", "infra"],
    stack: ["NestJS", "Redis", "React", "Vite", "TanStack Query", "OAuth", "i18next"],
    highlights: [
      "API NestJS con Swagger, cache-manager y Redis",
      "OAuth Google y GitHub con callbacks de producción",
      "Frontend con virtualización, i18n y React Hook Form",
      "Orígenes CORS acotados y secrets por entorno",
    ],
    demo: "https://evolift.vercel.app",
    repo: "https://github.com/peteraraya/Training_Management_API",
    status: "producción",
  },
  {
    id: "red-centinela",
    name: "Red Centinela",
    year: "2026",
    tagline: "Mapa de emergencias con datos oficiales y alertas en vivo.",
    description:
      "Sistema de monitoreo de emergencias que cruza datos públicos (SENAPRED, aluviones, clima) con un mapa interactivo. Backend NestJS con scraping agendado, throttling y caché en Upstash Redis; frontend con react-map-gl e i18n.",
    agents: ["core", "backend", "data", "frontend", "infra"],
    stack: ["NestJS", "Upstash Redis", "react-map-gl", "TanStack Query", "i18next"],
    highlights: [
      "Scraping agendado de fuentes oficiales con cache Redis",
      "Ratios de petición con @nestjs/throttler y CORS acotado",
      "Mapa interactivo (react-map-gl) con capas de emergencias",
      "Backend y frontend desplegados por separado en Vercel",
    ],
    demo: "https://red-centinela.vercel.app",
    repo: "https://github.com/peteraraya/centinela-backend",
    status: "producción",
  },
  {
    id: "postulatrack",
    name: "PostulaTrack",
    year: "2026",
    tagline: "Seguimiento de postulaciones laborales con pipeline real.",
    description:
      "Gestor de postulaciones a empleos con tablero por estado, backend NestJS con Prisma sobre PostgreSQL en Neon, OAuth Google y frontend Angular servido por el propio backend. Configuración de producción en .env.production con URLs de callbacks reales.",
    agents: ["core", "backend", "frontend", "infra", "qa"],
    stack: ["NestJS", "Angular", "Prisma", "PostgreSQL (Neon)", "OAuth", "JWT"],
    highlights: [
      "Pipeline de postulaciones con estados y métricas",
      "Prisma + Neon PostgreSQL con pooler en producción",
      "OAuth Google con callback verificado en Vercel",
      "Swagger documentado y schedules backend (Nest Schedule)",
    ],
    demo: "https://postulatrack-frontend.vercel.app",
    repo: "https://github.com/peteraraya/postulatrack-backend",
    status: "producción",
  },
  {
    id: "tienda-confecciones",
    name: "Tienda Confecciones",
    year: "2026",
    tagline: "Catálogo público + panel admin para tienda de confecciones.",
    description:
      "Sistema de inventario multi-tenant con catálogo público, variantes por talla y color, control de stock por combinación, ventas POS y galería Cloudinary. Auth de Supabase, panel admin oculto en la raíz y esquema SQL versionado en 12 migraciones.",
    agents: ["core", "frontend", "backend", "data", "qa"],
    stack: ["Next.js 16", "React 19", "Supabase", "MUI", "Cloudinary", "Tailwind 4"],
    highlights: [
      "Variantes talla+color con stock individual por combinación",
      "Esquema Supabase versionado (01..12) con seed de datos",
      "Galería e imágenes gestionadas con Cloudinary",
      "Producción publicada en dominio propio",
    ],
    demo: "https://www.confeccionesangus.cl",
    repo: "https://github.com/peteraraya/tienda-angus",
    status: "producción",
  },
  {
    id: "zipek",
    name: "Zipek",
    year: "2026",
    tagline: "Landing institucional para marca con SEO técnico completo.",
    description:
      "Sitio institucional de Zipek con Next.js, Tailwind 4, sitemap generado con next-sitemap y metadatos optimizados. Desplegado en Vercel con dominio propio y robots.txt publicado.",
    agents: ["core", "frontend", "infra"],
    stack: ["Next.js", "Tailwind 4", "next-sitemap", "Vercel"],
    highlights: [
      "Sitemap dinámico a partir de SITE_URL",
      "SEO técnico: metadata, robots.txt y OG image",
      "Dominio propio en producción (zipek.com)",
      "Configuración por entorno lista para Vercel",
    ],
    demo: "https://zipek.com",
    repo: "https://github.com/peteraraya/zipek-landing",
    status: "producción",
  },
  {
    id: "perfil-real",
    name: "Perfil Real",
    year: "2026",
    tagline: "Analizador de GitHub que convierte actividad real en perfil técnico.",
    description:
      "Motor de scoring sin LLM basado en la API pública de GitHub, cache en Supabase y validación Zod de punta a punta. Aún sin despliegue: el motor y la UI avanzan en Desarrollo.",
    agents: ["core", "frontend", "backend", "data", "qa"],
    stack: ["Next.js 16", "Supabase", "Zod", "TanStack Query", "GitHub API", "Tailwind"],
    highlights: [
      "Scoring 100% basado en datos y reglas, sin LLM",
      "Cache de análisis por usuario (7 días) en PostgreSQL",
      "Auth con GitHub OAuth y Server Actions con Zod",
      "Cobertura Vitest + MSW y E2E con Playwright",
    ],
    demo: "",
    repo: "",
    status: "en desarrollo",
  },
  {
    id: "caja-simple",
    name: "Caja Simple",
    year: "2026",
    tagline: "Gestión de caja minimalista y segura para el día a día.",
    description:
      "App full-stack sobre Next.js y Supabase con operaciones atómicas, validación estricta de entrada, indexado local con Dexie y estados de error diseñados antes que el flujo feliz.",
    agents: ["core", "frontend", "backend", "qa"],
    stack: ["Next.js", "Supabase", "Dexie", "Zod", "Zustand", "Tailwind"],
    highlights: [
      "Transacciones atómicas para operaciones multi-paso",
      "Persistencia local híbrida con Dexie (offline-first)",
      "DTOs con whitelist estricta y límites de longitud",
      "Casos negativos cubiertos en la suite de pruebas",
    ],
    demo: "",
    repo: "",
    status: "en desarrollo",
  },
  {
    id: "gym-ai-app",
    name: "Gym AI App",
    year: "2026",
    tagline: "Asistente de rutinas en el gimnasio con detección de pose.",
    description:
      "App móvil Expo/React Native con cámara para corrección de técnica: pose detection en tiempo real con Vision Camera, navegación por stacks y almacenamiento local. En fases tempranas de desarrollo.",
    agents: ["core", "frontend", "data", "qa"],
    stack: ["Expo", "React Native", "Vision Camera", "Pose Detection", "AsyncStorage"],
    highlights: [
      "Detección de pose en tiempo real desde la cámara",
      "Navegación nativa con React Navigation",
      "Dev client con build de desarrollo configurado",
      "Persistencia local con AsyncStorage",
    ],
    demo: "",
    repo: "https://github.com/peteraraya/VYU",
    status: "en desarrollo",
  },
  {
    id: "taskflow-pro",
    name: "Taskflow Pro",
    year: "2026",
    tagline: "API NestJS + web Next para gestión de tareas y equipos.",
    description:
      "Sistema de tareas con API NestJS y frontend Next.js. Backend modular con autenticación JWT y arquitectura por feature; el frontend consume la API con contratos tipados. En desarrollo en el directorio Desarrollo.",
    agents: ["core", "backend", "frontend", "qa"],
    stack: ["NestJS", "Next.js", "JWT", "PostgreSQL"],
    highlights: [
      "API NestJS modular con arquitectura por feature",
      "Web Next.js tipada contra el contrato de la API",
      "Autenticación JWT y RBAC en preparación",
      "Organizado como monorepo api + web",
    ],
    demo: "",
    repo: "https://github.com/peteraraya/base_full_stack",
    status: "en desarrollo",
  },
  {
    id: "jobsearch",
    name: "Jobsearch",
    year: "2026",
    tagline: "Backend NestJS de búsqueda de empleo con colas y Prisma.",
    description:
      "API de ofertas y candidatos con NestJS, Prisma y PostgreSQL, colas de procesamiento con BullMQ sobre Redis, job scheduling y documentación Swagger. En desarrollo.",
    agents: ["core", "backend", "data", "infra"],
    stack: ["NestJS", "Prisma", "PostgreSQL", "BullMQ", "Redis", "Swagger"],
    highlights: [
      "Jobs asíncronos con BullMQ e ioredis",
      "Scheduling con @nestjs/schedule para tareas recurrentes",
      "Prisma como capa de datos con contratos tipados",
      "API documentada con Swagger",
    ],
    demo: "",
    repo: "",
    status: "en desarrollo",
  },
  {
    id: "portal-desempleo",
    name: "Portal Desempleo",
    year: "2026",
    tagline: "Plataforma de apoyo a cesantes con ofertas y beneficios.",
    description:
      "Portal que centraliza ofertas laborales, beneficios y recursos para personas en búsqueda de empleo. Backend NestJS y frontend Next.js en cartera de desarrollo.",
    agents: ["core", "backend", "frontend", "data"],
    stack: ["NestJS", "Next.js", "PostgreSQL"],
    highlights: [
      "Backend NestJS con módulos por dominio",
      "Frontend Next.js orientado a accesibilidad",
      "Modelo de datos para ofertas y beneficios",
      "Etapa de desarrollo: aún sin despliegue",
    ],
    demo: "",
    repo: "",
    status: "en desarrollo",
  },
];