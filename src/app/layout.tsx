// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Environnement",
  description:
    "Orthophotographie & topographie, détection thermique des espèces, inspections d’ouvrages — Provence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased text-slate-900 bg-white">{children}</body>
    </html>
  );
}
