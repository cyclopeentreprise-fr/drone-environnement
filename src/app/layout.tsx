import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Environnement",
  description: "Orthophotographie, thermique, inspections | Provence",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-slate-100 antialiased">{children}</body>
    </html>
  );
}
