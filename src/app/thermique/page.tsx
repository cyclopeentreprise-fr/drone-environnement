import { ArrowLeft, Thermometer, CheckCircle, Clock, Map, Camera } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ThermiquePage() {
  return (
    <main className="min-h-dvh bg-black text-slate-100">
      <section className="border-b border-white/10 px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Retour accueil
            </Link>
          </div>
          <h1 className="text-3xl font-bold md:text-5xl">Détection thermique des espèces</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Fenêtres d’activité, protocole adapté, cartographie des zones sensibles et reporting.
          </p>
        </div>
      </section>

      {/* Protocole + Livrables + CTA */}
    </main>
  );
}
