"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Mail, MapPin, CheckCircle2, Play } from "lucide-react";

/**
 * Clone structurel de la page Wix, version DARK THEME.
 * - Fond global NOIR (site entier)
 * - Vidéo HERO plein écran qui démarre immédiatement (autoplay, muted, loop)
 * - Sections "exemples de prestations" en FOND BLANC pour créer le contraste demandé
 * - Zéro dépendance UI (HTML + Tailwind + lucide-react)
 *
 * 📂 Médias à placer (via GitHub) dans /public/cyclope/
 * - hero.mp4 (vidéo drone 10–20 s, H.264, 1920×1080) — utilisé au HERO et dans l'overlay d'intro
 * - hero.jpg (poster de fallback)
 * - logo.png (logo entête)
 * - optique.jpg, thermique.jpg, ortho.jpg (cartes services)
 * - sous-ouvrage-1.jpg, sous-ouvrage-2.jpg (galerie sous ouvrage)
 * - topo.jpg (topographie)
 * - france-zones.png (carte France avec zones)
 * - logo-naturalia.png, logo-dept13.png, logo-dept84.png, logo-dept05.png (logos références)
 */

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <IntroVideoOnce />
      <TopBar />
      <Hero />
      <SectionMissionDrone />
      <SectionPrestations />
      {/* EXEMPLES de prestations en FOND BLANC */}
      <SectionServicesTech />
      <SectionExampleFalaise />
      <SectionSousOuvrage />
      <SectionTopoGrandeEchelle />
      {/* Retour au fond noir */}
      <SectionIngenieurEcologue />
      <SectionAutresPrestations />
      <SectionZonesActivite />
      <SectionPourquoiCyclope />
      <SectionExperiences />
      <SectionRAndD />
      <SectionContact />
      <Footer />
    </main>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-black/60 backdrop-blur border-b border-white/10">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Image src="/cyclope/logo.png" alt="CYCLOPE" width={40} height={40} />
          <div className="leading-tight">
            <p className="font-semibold">CYCLOPE</p>
            <p className="text-xs text-white/60">Pilote de drone · Ingénieur écologue</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#prestations" className="hover:text-white/80">Prestations</a>
          <a href="#zones" className="hover:text-white/80">Zones</a>
          <a href="#pourquoi" className="hover:text-white/80">Pourquoi nous</a>
          <a href="#contact" className="hover:text-white/80">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black rounded-xl px-4 py-2 text-sm hover:bg-white/90">Devis <ArrowRight className="h-4 w-4" /></a>
      </Container>
    </header>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full bg-white text-black px-3 py-1 text-xs">{children}</span>;
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Vidéo de fond plein écran */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-[70vh] md:h-[80vh] object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/cyclope/hero.jpg"
        >
          <source src="/cyclope/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>
      <Container className="py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <Badge>Le drone au service de l'expertise écologique</Badge>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">Technologie aérienne & méthode écologue<br className="hidden md:block" /> au service de l'étude d'impact</h1>
          <p className="mt-4 text-lg text-white/80">Captation, analyse et restitution de données fiables pour vos études : thermographie faune, orthophotographie, inspections, topographie et intégration SIG.</p>
          <div className="mt-6 flex gap-3">
            <a href="#prestations" className="inline-flex items-center gap-2 bg-white text-black rounded-xl px-5 py-3 hover:bg-white/90">Voir les prestations</a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-white/40 rounded-xl px-5 py-3 hover:bg-white/10"><Play className="h-4 w-4" />Nous contacter</a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/**
 * Overlay vidéo qui s'ouvre AUTOMATIQUEMENT à la première visite (comme sur Wix),
 * puis ne s'affiche plus grâce à localStorage (clé: introVideoSeen=true).
 * Autoplay fonctionne car la vidéo est MUTED (exigence navigateurs).
 */
function IntroVideoOnce() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      const seen = localStorage.getItem("introVideoSeen");
      if (!seen) {
        setOpen(true);
        localStorage.setItem("introVideoSeen", "true");
      }
    } catch (e) {
      setOpen(true); // si localStorage indispo, on ouvre quand même
    }
  }, []);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full pt-[56.25%] overflow-hidden rounded-2xl border border-white/20 shadow-xl">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted playsInline controls>
            <source src="/cyclope/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <button className="mt-3 w-full rounded-xl bg-white text-black px-4 py-2" onClick={() => setOpen(false)}>Fermer</button>
      </div>
    </div>
  );
}

function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-3xl md:text-4xl font-bold">{children}</h2>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1 text-xs">{children}</span>;
}

function SectionMissionDrone() {
  return (
    <section className="py-14">
      <Container>
        <H2>La mission drone</H2>
        <p className="mt-3 text-white/80">Optimiser l'étude d'impact de la concertation au rendu final : cadrage des besoins, protocole adapté, acquisitions maîtrisées et livrables exploitables.</p>
      </Container>
    </section>
  );
}

function CardDark({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-white/10 bg-white/5 shadow-sm ${className}`}>{children}</div>;
}

function SectionPrestations() {
  const items = [
    { title: "Orthophotographie", text: "Cartes géoréférencées, MNT/MNS, courbes de niveau, exports SIG." },
    { title: "Thermographie faune", text: "Détection/confirmation d'espèces, zones sensibles, comptages ciblés." },
    { title: "Inspection d'ouvrages", text: "Falaises, sous‑ouvrages, toitures, solaire : photos/vidéos UHD." },
    { title: "Topographie", text: "RTK/GCP, emprises, cubatures, métrés fiables au centimètre." },
  ];
  return (
    <section id="prestations" className="py-14">
      <Container>
        <H2>Les prestations</H2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((s, i) => (
            <CardDark key={i} className="p-5">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.text}</p>
            </CardDark>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** SECTIONS D'EXEMPLES — FOND BLANC **/
function SectionServicesTech() {
  const cards = [
    { title: "Captation optique", subtitle: "UHD / 5K", img: "/cyclope/optique.jpg", bullets: ["Photos/vidéos UHD", "Angles difficiles accessibles", "Livrables clairs"] },
    { title: "Captation thermique", subtitle: "Détection fine", img: "/cyclope/thermique.jpg", bullets: ["Repérage d'espèces", "Créneaux nocturnes/aurore", "Rapport géolocalisé"] },
    { title: "Orthophotographie", subtitle: "SIG prêt à l'emploi", img: "/cyclope/ortho.jpg", bullets: ["GeoTIFF / DXF", "Analyse des fonctionnalités", "Suivi multi‑années"] },
  ];
  return (
    <section className="py-14 bg-white text-gray-900">
      <Container>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border shadow-sm bg-white">
              <div className="relative h-44"><Image src={c.img} alt={c.title} fill className="object-cover" /></div>
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-900 px-3 py-1 text-xs">{c.subtitle}</span>
                <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
                <ul className="mt-3 text-sm text-gray-700 space-y-1">
                  {c.bullets.map((b, k) => (<li key={k}>• {b}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SectionExampleFalaise() {
  return (
    <section className="py-14 bg-white text-gray-900">
      <Container>
        <H2>Exemple de mission · Cartographie de falaise</H2>
        <p className="mt-3 text-gray-700">Photogrammétrie UHD, accessibilité élargie, modèle 3D et spatialisation des mesures. Gains : détection globale, réduction des risques humains, démarches allégées.</p>
      </Container>
    </section>
  );
}

function SectionSousOuvrage() {
  return (
    <section className="py-14 bg-white text-gray-900">
      <Container>
        <H2>Captation sous ouvrage</H2>
        <p className="mt-3 text-gray-700">Photos/vidéos UHD, inspection optique et thermique, accès depuis la berge, détection d'activité et de traces de présence.</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <Image src="/cyclope/sous-ouvrage-1.jpg" alt="Sous ouvrage 1" width={1000} height={700} className="rounded-2xl object-cover w-full" />
          <Image src="/cyclope/sous-ouvrage-2.jpg" alt="Sous ouvrage 2" width={1000} height={700} className="rounded-2xl object-cover w-full" />
        </div>
      </Container>
    </section>
  );
}

function SectionTopoGrandeEchelle() {
  return (
    <section className="py-14 bg-white text-gray-900">
      <Container>
        <H2>Topographie grande échelle</H2>
        <p className="mt-3 text-gray-700">RTK au centimètre, intégration SIG directe, lisibilité optimale des courbes de niveau. Rapidité et précision pour grands périmètres.</p>
        <div className="mt-4 relative h-56 rounded-2xl overflow-hidden border">
          <Image src="/cyclope/topo.jpg" alt="Topographie" fill className="object-cover" />
        </div>
      </Container>
    </section>
  );
}

/** RETOUR FOND NOIR **/
function SectionIngenieurEcologue() {
  return (
    <section className="py-14">
      <Container>
        <H2>La mission ingénieur écologue</H2>
        <p className="mt-3 text-white/80">Correction et analyse réglementaire des études d'impact, participation aux concertations, rédaction et optimisation des rapports (DIAG, VNEI, CNPN, EVI...).</p>
      </Container>
    </section>
  );
}

function SectionAutresPrestations() {
  const blocks = [
    { n: "1", title: "Prises de vue spécifiques", text: "Missions adaptées aux besoins du projet, faisabilité rapide, protocole validé et conformité réglementaire." },
    { n: "2", title: "Correction / rédaction de rapports", text: "Analyse réglementaire, synthèses fonctionnelles, rédaction optimisée (DIAG, VNEI, CNPN, EVI…)." },
    { n: "3", title: "Montages vidéos", text: "Suivi et valorisation des mesures ERC, présentations de projets, d'équipes et d'entreprises." },
  ];
  return (
    <section className="py-14">
      <Container>
        <H2>Autres prestations</H2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {blocks.map((b, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-white text-black text-sm">{b.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/80">{b.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SectionZonesActivite() {
  return (
    <section id="zones" className="py-14">
      <Container>
        <H2>Zone d'activité</H2>
        <p className="mt-3 text-white/80">Zone principale 13·84 incluse dans les forfaits. Zone étendue France entière sur devis.</p>
        <div className="mt-6 relative h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <Image src="/cyclope/france-zones.png" alt="France zones" fill className="object-contain" />
        </div>
      </Container>
    </section>
  );
}

function SectionPourquoiCyclope() {
  return (
    <section id="pourquoi" className="py-14">
      <Container>
        <H2>Pourquoi CYCLOPE</H2>
        <p className="mt-3 text-white/80">Méthodologie optimisée pour le bureau d'étude : interface drone ↔ besoins projet, gains de temps et de qualité, communication facilitée à chaque étape.</p>
      </Container>
    </section>
  );
}

function SectionExperiences() {
  const logos = [
    { src: "/cyclope/logo-naturalia.png", name: "Naturalia Environnement" },
    { src: "/cyclope/logo-dept13.png", name: "Département 13" },
    { src: "/cyclope/logo-dept84.png", name: "Département 84" },
    { src: "/cyclope/logo-dept05.png", name: "Département 05" },
  ];
  return (
    <section className="py-14">
      <Container>
        <H2>Nos expériences</H2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center opacity-90">
          {logos.map((l, i) => (
            <Image key={i} src={l.src} alt={l.name} width={160} height={80} className="object-contain" />
          ))}
        </div>
      </Container>
    </section>
  );
}

function SectionRAndD() {
  return (
    <section className="py-14">
      <Container>
        <H2>En développement R&D</H2>
        <div className="mt-3 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Détection automatisée d'espèces (colorimétrie)</h3>
            <p className="mt-2 text-sm text-white/80">Méthode par classes de couleurs pour repérer des espèces végétales. Ciblage précis, opérationnel, export SIG.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Détection automatisée d'espèces (pixélisation)</h3>
            <p className="mt-2 text-sm text-white/80">Approche par segmentation/pixels pour cartographier la présence sur de grandes surfaces. Intégration au workflow.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SectionContact() {
  return (
    <section id="contact" className="py-14 bg-white text-gray-900">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <H2>Contact</H2>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><PhoneCall className="h-4 w-4" /> (+33) 06 65 54 11 07</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> cyclope.entreprise@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 3 Rue de Belle Aureille — 05000 GAP</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> DGAC — Pilote drone pro</li>
            </ul>
          </div>
          <form action="https://formsubmit.co/cyclope.entreprise@gmail.com" method="POST" className="bg-gray-50 text-gray-900 p-6 rounded-2xl border shadow-sm">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/merci" />
            <div className="grid grid-cols-1 gap-4">
              <input name="nom" placeholder="Nom / Société" required className="w-full rounded-xl border px-3 py-2" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" name="email" placeholder="Email" required className="w-full rounded-xl border px-3 py-2" />
                <input type="tel" name="telephone" placeholder="Téléphone" className="w-full rounded-xl border px-3 py-2" />
              </div>
              <textarea name="message" placeholder="Votre besoin (thermique, orthophoto, inspection, topographie…)" className="min-h-[120px] w-full rounded-xl border px-3 py-2" />
              <button type="submit" className="w-full inline-flex justify-center items-center bg-black text-white rounded-xl px-4 py-3">Envoyer</button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-black">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} CYCLOPE — Tous droits réservés.</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="#">Mentions légales</Link>
          <Link href="#">Confidentialité</Link>
        </div>
      </Container>
    </footer>
  );
}
