import { CheckCircle, ArrowLeft, Ruler, Layers, FileText, Download } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OrthoTopoPage() {
  return (
    <main className="min-h-dvh bg-black text-slate-100">
      <section className="border-b border-white/10 px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Retour accueil
            </Link>
          </div>
          <h1 className="text-3xl font-bold md:text-5xl">Orthophotographie & Topographie</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Orthos haute résolution, MNS/MNT, courbes de niveau, surfaces/volumes et exports compatibles SIG/DAO.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-white text-black hover:bg-white/90"><a href="#contact">Demander un devis</a></Button>
            <Button asChild className="border-white/20 text-white hover:bg-white/10"><a href="#livrables">Voir les livrables</a></Button>
          </div>
        </div>
      </section>

      {/* Livrables + CTA (comme donné plus haut) */}
    </main>
  );
}
