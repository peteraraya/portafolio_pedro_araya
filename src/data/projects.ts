import type { AgentId } from "./agents";

export interface Project {
  id: string;
  name: string;
  year: string;
  tagline: string;
  challenge: string;
  solution: string;
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
    challenge: "Quienes entrenan pierden el registro cuando el gimnasio no tiene buena señal.",
    solution:
      "PWA instalable con modo offline real, sincronización con Supabase y build móvil vía Capacitor.",
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
    tagline: "Gestión de entrenamientos y planes para atletas de fuerza.",
    challenge:
      "Los equipos de fuerza necesitaban centralizar planes sin exponer credenciales ni abrir CORS a cualquier origen.",
    solution:
      "API NestJS cacheada en Redis con OAuth Google/GitHub y CORS restringido al dominio de producción.",
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
    challenge:
      "Los datos de emergencia oficiales (SENAPRED, clima) están dispersos y sin una capa de alertas accesible.",
    solution:
      "Scraping agendado con cache en Redis y mapa interactivo que unifica las fuentes en tiempo real.",
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
    challenge:
      "Seguir decenas de postulaciones laborales en hojas de cálculo pierde contexto y estados a los pocos días.",
    solution:
      "Tablero por estado con backend NestJS + Prisma sobre PostgreSQL y OAuth Google verificado en producción.",
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
    challenge:
      "El negocio necesitaba controlar stock por talla y color sin perder trazabilidad en ventas físicas.",
    solution:
      "Esquema Supabase versionado en 12 migraciones con stock por combinación y panel POS integrado.",
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
    challenge: "La marca necesitaba presencia institucional indexable, no solo una landing visual.",
    solution:
      "Next.js con sitemap dinámico, metadatos optimizados y SEO técnico completo desplegado en dominio propio.",
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
    challenge:
      "Los perfiles de GitHub no reflejan el nivel técnico real de una persona sin depender de la opinión subjetiva de un LLM.",
    solution:
      "Motor de scoring 100% basado en datos públicos de la API de GitHub, con cache y validación Zod de punta a punta.",
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
    challenge: "Los errores en operaciones de caja multi-paso son costosos si no son atómicos.",
    solution:
      "Transacciones atómicas, validación estricta con Zod y persistencia offline-first con Dexie.",
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
    challenge:
      "Corregir la técnica en el gimnasio sin un entrenador presente es difícil de validar visualmente.",
    solution: "App Expo/React Native con detección de pose en tiempo real vía Vision Camera.",
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
    challenge: "Equipos pequeños necesitan gestión de tareas sin comprar una herramienta SaaS cerrada.",
    solution:
      "API NestJS modular por feature más frontend Next.js tipado contra el contrato de la API.",
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
    challenge: "Procesar postulaciones y ofertas a gran volumen sin bloquear la API.",
    solution:
      "Colas asíncronas con BullMQ sobre Redis y scheduling recurrente documentado con Swagger.",
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
    challenge:
      "Centralizar beneficios y ofertas para cesantes suele quedar disperso entre organismos.",
    solution:
      "Backend NestJS por dominio y frontend Next.js orientado a accesibilidad para consolidar la información.",
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