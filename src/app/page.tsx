"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Mail, MapPin, CheckCircle2, Play } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <TopBar />
      <Hero />
      <SectionMissionDrone />
      <SectionPrestations />

      {/* BLOCS D'EXEMPLES EN FOND BLANC */}
      <SectionServicesTech />
      <SectionAvantApres />
      <SectionExampleFalaise />
      <SectionSousOuvrage />
      <SectionTopoGrandeEchelle />

      {/* RETOUR NOIR */}
      <SectionIngenieurEcologue />

      {/* SECTIONS EN BLANC */}
      <SectionZonesActivite />
      <SectionPourquoiCyclope />
      <SectionExperiences />

      {/* FIN EN NOIR */}
      <SectionRAndD />
      <SectionContact />
      <Footer />
    </main>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 text-center ${className}`}>{children}</div>;
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-black/60 backdrop-blur border-b border-white/10">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Image src="/cyclope/logo.png" alt="CYCLOPE" width={40} height={40} />
          <div className="leading-tight text-left">
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

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Vidéo intégrée directement */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-[80vh] object-cover"
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
      <Container className="py-20 md:py-28">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mt-6 text-6xl md:text-7xl font-extrabold tracking-tight">LE DRONE</h1>
          <p className="mt-3 text-2xl md:text-3xl text-white/80">
            au service de l'étude environnementale
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#prestations" className="inline-flex items-center gap-2 bg-white text-black rounded-xl px-5 py-3 hover:bg-white/90">Voir les prestations</a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-white/40 rounded-xl px-5 py-3 hover:bg-white/10"><Play className="h-4 w-4" />Nous contacter</a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return <h2 id={id} className="text-3xl md:text-4xl font-bold">{children}</h2>;
}

function SectionMissionDrone() {
  return (
    <section className="py-14">
      <Container>
        <H2>La mission drone</H2>
        <p className="mt-3 text-white/80">
          Optimiser l'étude d'impact de la concertation au rendu final : cadrage des besoins,
          protocole adapté, acquisitions maîtrisées et livrables exploitables.
        </p>
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
    { title: "Inspection d'ouvrages", text: "Falaises, sous-ouvrages, toitures, solaire : photos/vidéos UHD." },
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

function SectionServicesTech() {
  const cards = [
    { title: "Captation optique", subtitle: "UHD / 5K", img: "/cyclope/optique.jpg", bullets: ["Photos/vidéos UHD", "Angles difficiles accessibles", "Livrables clairs"] },
    { title: "Captation thermique", subtitle: "Détection fine", img: "/cyclope/thermique.jpg", bullets: ["Repérage d'espèces", "Créneaux nocturnes/aurore", "Rapport géolocalisé"] },
    { title: "Orthophotographie", subtitle: "SIG prêt à l'emploi", img: "/cyclope/ortho.jpg", bullets: ["GeoTIFF / DXF", "Analyse des fonctionnalités", "Suivi multi-années"] },
  ];
  return (
    <section className="py-14 bg-white text-gray-900">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold">Exemples de prestations</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
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

function SectionAvantApres() {
  const [pos, setPos] = useState(50); // %
  return (
    <section className="py-14 bg-white text-gray-900">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold">Orthophoto — Avant / Après</h2>
        <p className="mt-2 text-gray-700">Montre concrètement l'impact d'un aménagement, d'une phase chantier ou d'une restauration.</p>
        <div className="mt-6 relative w-full max-w-4xl mx-auto select-none">
          <div className="relative overflow-hidden rounded-2xl border shadow">
            <Image src="/cyclope/avant.jpg" alt="Avant" width={1600} height={900} className="w-full h-auto block" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <Image src="/cyclope/apres.jpg" alt="Après" width={1600} height={900} className="w-full h-auto block" />
            </div>
            <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
              <div className="w-0.5 h-full bg.black/60" />
            </div>
          </div>
          <input
            aria-label="Comparateur avant/après"
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(parseInt(e.target.value))}
            className="mt-3 w-full"
          />
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>Avant</span>
            <span>Après</span>
          </div>
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
        <p className="mt-3 text-gray-700">Photogrammétrie UHD, accessibilité élargie, modèle 3D et spatialisation des mesures.</p>
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
        <p className="mt-3 text-gray-700">RTK au centimètre, intégration SIG directe, lisibilité optimale des courbes de niveau.</p>
        <div className="mt-4 relative h-56 rounded-2xl overflow-hidden border">
          <Image src="/cyclope/topo.jpg" alt="Topographie" fill className="object-cover" />
        </div>
      </Container>
    </section>
  );
}

function SectionIngenieurEcologue() {
  return (
    <section className="py-14">
      <Container>
        <H2>La mission ingénieur écologue</H2>
        <p className="mt-3 text-white/80">Correction et analyse réglementaire des études d'impact, participation aux concertations, rédaction et optimisation des rapports.</p>
      </Container>
    </section>
  );
}

function SectionZonesActivite() {
  return (
    <section id="zones" className="py-14 bg-white text-gray-9
