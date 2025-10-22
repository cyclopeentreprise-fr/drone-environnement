// src/app/page.tsx — version dark + intro drone + 3 prestations cliquables
// Dépendances: Tailwind + framer-motion + lucide-react + shadcn/ui
// Installez (une seule fois): npm i framer-motion lucide-react

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Camera, Thermometer, Wrench, Shield, BadgeCheck, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// --- Mini composant d'intro : drone animé sur fond noir ---
function IntroDrone({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 2600); // durée totale intro
    return () => clearTimeout(t);
  }, [onDone]);

  // Drone SVG simplifié (corps + 4 bras + hélices)
  const Rotor = ({ className = "" }) => (
    <motion.circle
      className={className}
      cx="0"
      cy="0"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      fill="transparent"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: 0.6 }}
    />
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-slate-100"
          >
            <motion.svg
              width="220"
              height="160"
              viewBox="-110 -80 220 160"
              className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              {/* Corps */}
              <motion.rect
                x="-28"
                y="-12"
                width="56"
                height="24"
                rx="8"
                className="fill-slate-200/10 stroke-slate-200"
                strokeWidth="2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
              {/* Caméra gimbal */}
              <motion.circle
                cx="0"
                cy="14"
                r="6"
                className="fill-slate-200/10 stroke-slate-200"
                strokeWidth="2"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              />
              {/* Bras qui s'ouvrent */}
              {([
                { x: 60, y: -40, rot: 25 },
                { x: -60, y: -40, rot: -25 },
                { x: 60, y: 40, rot: -25 },
                { x: -60, y: 40, rot: 25 },
              ] as const).map((b, i) => (
                <motion.g
                  key={i}
                  initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
                  animate={{ x: b.x, y: b.y, rotate: b.rot, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                >
                  <rect x="-20" y="-2" width="40" height="4" rx="2" className="fill-slate-200/20" />
                  <g transform="translate(20,0)">
                    <Rotor className="text-slate-200" />
                  </g>
                </motion.g>
              ))}
            </motion.svg>
            <motion.div
              className="mt-4 text-center text-sm tracking-wider text-slate-300"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Drone Environnement — préparation de la mission…
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="min-h-dvh bg-black text-slate-100">
      {/* Intro overlay */}
      {!introDone && <IntroDrone onDone={() => setIntroDone(true)} />}

      {/* Header minimal */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-white" />
            <span className="text-sm font-semibold tracking-wide">Drone Environnement</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#prestations" className="hover:text-white/80">Prestations</a>
            <a href="#tech" className="hover:text-white/80">Technique</a>
            <a href="#method" className="hover:text-white/80">Méthode</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
            <Button asChild size="sm" className="bg-white text-black hover:bg-white/90"> 
              <a href="#contact">Devis</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* HERO sombre */}
      <section className="relative overflow-hidden px-6 py-16 md:px-8 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1 bg-white/10 text-white"><Shield className="h-3.5 w-3.5"/> Pilote certifié</Badge>
              <Badge variant="secondary" className="gap-1 bg-white/10 text-white"><BadgeCheck className="h-3.5 w-3.5"/> RC Pro</Badge>
              <Badge variant="secondary" className="gap-1 bg-white/10 text-white"><Map className="h-3.5 w-3.5"/> 13 & 84</Badge>
            </div>
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              Données aériennes <span className="text-white/70">fiables</span> pour décisions <span className="text-white/70">rapides</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/70">
              Orthophotographie, relevés topo, détection thermique d'espèces et inspections d’ouvrages. Livrables exploitables (SIG/DAO) avec contrôle qualité.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <a href="#prestations" className="gap-2">Choisir une prestation <ArrowRight className="h-4 w-4"/></a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a href="#tech">Voir les capacités</a>
              </Button>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-gradient-to-br from-white/10 to-white/0" />
                <div className="space-y-2 p-5">
                  <div className="text-sm font-medium">Exemple — Orthophoto haute résolution</div>
                  <p className="text-sm text-white/70">Mosaïque ortho + MNS/MNT, vectorisation et métrés conformes.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PRESTATIONS — 3 cartes très distinctes et cliquables */}
      <section id="prestations" className="px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold md:text-3xl">Choisissez votre besoin</h2>
          <p className="mt-2 max-w-2xl text-white/70">Trois parcours dédiés. Cliquez pour accéder au détail, aux livrables, exemples et demande de devis.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* ORTHO/TOPO */}
            <a href="/orthophotographie" className="group">
              <Card className="overflow-hidden border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] transition-transform duration-300 group-hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Camera className="h-5 w-5"/>
                    <h3 className="font-semibold">Orthophotographie & Topographie</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/70">Orthos, MNS/MNT, courbes, volumes, exports GeoTIFF/DXF/SHP/CSV.</p>
                  <div className="mt-4 h-28 w-full rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
                </CardContent>
              </Card>
            </a>

            {/* THERMIQUE */}
            <a href="/thermique" className="group">
              <Card className="overflow-hidden border-white/10 bg-gradient-to-b from-[#ff7a00]/20 to-transparent transition-transform duration-300 group-hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Thermometer className="h-5 w-5"/>
                    <h3 className="font-semibold">Détection thermique des espèces</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/80">Fenêtres d’activité, cartographie zones sensibles, reporting adapté.</p>
                  <div className="mt-4 h-28 w-full rounded-lg bg-[radial-gradient(circle_at_70%_40%,rgba(255,122,0,0.35),transparent_60%)]" />
                </CardContent>
              </Card>
            </a>

            {/* INSPECTIONS */}
            <a href="/inspections" className="group">
              <Card className="overflow-hidden border-white/10 bg-gradient-to-b from-[#00d1ff]/20 to-transparent transition-transform duration-300 group-hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Wrench className="h-5 w-5"/>
                    <h3 className="font-semibold">Inspections d’ouvrages</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/80">Toitures, ouvrages d’art, PV. Photos/vidéos, annotations, priorisation.</p>
                  <div className="mt-4 h-28 w-full rounded-lg bg-[radial-gradient(circle_at_60%_30%,rgba(0,209,255,0.35),transparent_60%)]" />
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* CAPACITÉS TECH */}
      <section id="tech" className="bg-white/[0.02] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold md:text-3xl">Capacités techniques</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["RTK + GCP/CHK","GSD ≤ 1.5–2.5 cm","Exports SIG/DAO"].map((t, i) => (
              <Card key={i} className="border-white/10 bg-white/5">
                <CardContent className="p-6 text-white/80">{t}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section id="method" className="px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold md:text-3xl">Méthode</h2>
          <ol className="mt-6 grid list-decimal gap-4 pl-6 text-white/80 md:grid-cols-4">
            <li>Brief & cadrage</li>
            <li>Préparation réglementaire</li>
            <li>Acquisition terrain</li>
            <li>Traitements & livraison</li>
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 bg-white/[0.02] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold md:text-3xl">Contact & devis</h2>
          <p className="mt-2 text-white/70">Expliquez votre projet (site, métriques, délais). Réponse rapide.</p>
          <form
            className="mt-8 grid gap-4"
            action="https://formsubmit.co/contact@provence-drone-immo.fr"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Demande de devis — Drone Environnement" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://votre-domaine/merci" />

            <div className="grid gap-2">
              <label className="text-sm font-medium">Nom</label>
              <input
                name="nom"
                required
                className="h-11 rounded-xl border border-white/20 bg-transparent px-3 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-white/20"
                placeholder="Ex. Martin"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="h-11 rounded-xl border border-white/20 bg-transparent px-3 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-white/20"
                placeholder="vous@exemple.fr"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="rounded-xl border border-white/20 bg-transparent px-3 py-2 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-white/20"
                placeholder="Décrivez votre besoin…"
              />
            </div>

            <Button type="submit" className="mt-2 w-fit bg-white text-black hover:bg-white/90">Envoyer</Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-white/70 md:flex-row md:px-8">
          <div>© {new Date().getFullYear()} Drone Environnement — Tous droits réservés.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/90">Mentions légales</a>
            <a href="#" className="hover:text-white/90">Confidentialité</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
