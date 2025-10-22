"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Camera, Thermometer, Wrench, Shield, BadgeCheck, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function IntroDrone({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => { setVisible(false); onDone(); }, 2600);
    return () => clearTimeout(t);
  }, [onDone]);

  const Rotor = ({ className = "" }) => (
    <motion.circle
      cx="0" cy="0" r="10" stroke="currentColor" strokeWidth="2" fill="transparent"
      className={className}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: 0.6 }}
    />
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
          <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }} className="text-slate-100">
            <motion.svg width="220" height="160" viewBox="-110 -80 220 160"
              className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <motion.rect x="-28" y="-12" width="56" height="24" rx="8"
                className="fill-slate-200/10 stroke-slate-200" strokeWidth="2"
                initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }} />
              <motion.circle cx="0" cy="14" r="6" className="fill-slate-200/10 stroke-slate-200"
                strokeWidth="2" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }} />
              {([{ x: 60, y: -40, rot: 25 }, { x: -60, y: -40, rot: -25 },
                 { x: 60, y: 40, rot: -25 }, { x: -60, y: 40, rot: 25 }] as const).map((b, i) => (
                <motion.g key={i}
                  initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
                  animate={{ x: b.x, y: b.y, rotate: b.rot, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: "easeOut" }}>
                  <rect x="-20" y="-2" width="40" height="4" rx="2" className="fill-slate-200/20" />
                  <g transform="translate(20,0)"><Rotor className="text-slate-200" /></g>
                </motion.g>
              ))}
            </motion.svg>
            <motion.div className="mt-4 text-center text-sm tracking-wider text-slate-300"
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
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
      {!introDone && <IntroDrone onDone={() => setIntroDone(true)} />}

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

      {/* Hero + Prestations + Tech + Méthode + Contact + Footer */}
      {/* (identique à la version précédente dans le canvas) */}
    </main>
  );
}
