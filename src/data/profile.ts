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
  headline: "Full Stack Developer · React, TypeScript, Node.js, Next.js · +8 años",
  location: "Quillota, Chile",
  email: "piteraraya@gmail.com",
  github: "https://github.com/peteraraya",
  linkedin: "https://linkedin.com/in/pedro-araya-galvez",
  roles: ["Orquestador", "Frontend Senior", "Backend", "DevOps / Infra", "Data Viz", "QA / Calidad"],
  summary:
    "Full Stack Developer con más de 8 años construyendo aplicaciones web escalables. Reduzco tiempos de entrega, resuelvo vulnerabilidades críticas de seguridad y migro stacks legacy hacia arquitecturas modernas con React, Next.js, Node.js y NestJS.",
};