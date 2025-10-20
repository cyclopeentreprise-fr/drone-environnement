import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drone Environnement – Orthophoto, thermique, inspection",
  description:
    "Pilote de drone spécialisé : orthophotographie & topographie, détection thermique d’espèces, inspection d’ouvrages (13 & 84)."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="header">
          <div className="container nav">
            <a href="/" className="brand">Drone Environnement</a>
            <nav className="menu">
              <a href="#services">Services</a>
              <a href="#method">Méthode</a>
              <a href="#projects">Réalisations</a>
              <a href="#certifs">Certifications</a>
              <a href="#contact" className="btn btn-primary">Devis</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container footer__inner">
            <p>© {new Date().getFullYear()} Drone Environnement — 13 & 84</p>
            <div className="footer__links">
              <a href="#contact">Contact</a>
              <a href="#">Mentions légales</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
