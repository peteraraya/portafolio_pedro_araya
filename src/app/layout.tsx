import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";
const title = `${profile.name} · Desarrollador Full-stack & DevOps`;
const description = profile.summary;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: ["Next.js", "NestJS", "Kubernetes", "Docker", "CI/CD", "React", "Portafolio", profile.name],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: `${profile.name} · Portafolio`,
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.headline,
  email: profile.email,
  address: { "@type": "PostalAddress", addressCountry: profile.location },
  url: siteUrl,
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="scanlines min-h-full flex flex-col bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}