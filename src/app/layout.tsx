import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro · Desarrollador Full-stack & DevOps",
  description:
    "Portafolio interactivo de un desarrollador full-stack: frontend con Next.js 16, backends NestJS, infraestructura Docker/Kubernetes y pipelines CI/CD.",
  keywords: ["Next.js", "NestJS", "Kubernetes", "Docker", "CI/CD", "React", "Portafolio"],
  openGraph: {
    title: "Pedro · Desarrollador Full-stack & DevOps",
    description:
      "Portafolio interactivo de un desarrollador full-stack: frontend con Next.js 16, backends NestJS, infraestructura Docker/Kubernetes y pipelines CI/CD.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="scanlines min-h-full flex flex-col bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}