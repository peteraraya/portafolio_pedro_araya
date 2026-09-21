export interface Profile {
  name: string;
  handle: string;
  headline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  roles: string[];
  summary: string;
}

export const profile: Profile = {
  name: "Pedro Araya Gálvez",
  handle: "pedro-dev",
  headline: "Desarrollador Full-stack - Arquitectura y DevOps",
  location: "Chile",
  email: "piteraraya@gmail.com",
  github: "https://github.com/peteraraya",
  linkedin: "https://linkedin.com/in/pedro-araya-galvez",
  roles: ["Orquestador", "Frontend Senior", "Backend", "DevOps / Infra", "Data Viz", "QA / Calidad"],
  summary:
    "Diseño, implemento y despliego productos completos: desde interfaces React de alto rendimiento hasta backends NestJS seguros y clusters Kubernetes.", 
};