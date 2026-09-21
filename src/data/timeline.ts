export interface TimelineEntry {
  id: string;
  kind: "proyecto" | "educación" | "sistema";
  period: string;
  title: string;
  subtitle: string;
  details: string[];
}

export const timeline: TimelineEntry[] = [
  {
    id: "gym-tracker",
    kind: "proyecto",
    period: "2026",
    title: "Gym Tracker",
    subtitle: "Producción",
    details: ["PWA de entrenamiento con modo offline y Supabase", "coordinado por frontend, backend, infra y qa"],
  },
  {
    id: "evolift",
    kind: "proyecto",
    period: "2026",
    title: "Evolift",
    subtitle: "Producción",
    details: ["Gestión de entrenamientos con API NestJS + Redis", "frontend React con TanStack Query e i18n"],
  },
  {
    id: "red-centinela",
    kind: "proyecto",
    period: "2026",
    title: "Red Centinela",
    subtitle: "Producción",
    details: ["Mapa de emergencias con fuentes oficiales en NestJS + Redis", "visualización con react-map-gl y backend cacheado"],
  },
  {
    id: "postulatrack",
    kind: "proyecto",
    period: "2026",
    title: "PostulaTrack",
    subtitle: "Producción",
    details: ["Backend NestJS + Prisma/Neon y frontend Angular", "seguimiento de postulaciones con OAuth Google"],
  },
  {
    id: "tienda-confecciones",
    kind: "proyecto",
    period: "2026",
    title: "Tienda Confecciones",
    subtitle: "Producción",
    details: ["Catálogo público, panel admin y ventas en Supabase + Cloudinary", "dominio propio en producción"],
  },
  {
    id: "zipek",
    kind: "proyecto",
    period: "2026",
    title: "Zipek",
    subtitle: "Producción",
    details: ["Landing institucional con SEO técnico en dominio propio", "deployed en Vercel con sitemap y robots"],
  },
  {
    id: "perfil-real",
    kind: "proyecto",
    period: "2026",
    title: "Perfil Real",
    subtitle: "En desarrollo",
    details: ["Analizador GitHub con scoring propio y cache Supabase", "aún sin despliegue: en carpeta de desarrollo"],
  },
  {
    id: "caja",
    kind: "proyecto",
    period: "2026",
    title: "Caja Simple",
    subtitle: "En desarrollo",
    details: ["App full-stack con transacciones atómicas y validación estricta"],
  },
  {
    id: "inacap",
    kind: "educación",
    period: "2014",
    title: "INACAP",
    subtitle: "Educación",
    details: ["Formación tecnológica"],
  },
];