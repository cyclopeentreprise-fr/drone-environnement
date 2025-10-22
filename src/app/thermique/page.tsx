import { ArrowLeft, Thermometer, CheckCircle, Clock, Map, FileText, Camera } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function ThermiquePage() {
return (
<main className="min-h-dvh bg-black text-slate-100">
<section className="border-b border-white/10 px-6 py-12 md:px-8 md:py-16">
<div className="mx-auto max-w-6xl">
<div className="mb-6">
<Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><ArrowLeft className="h-4 w-4"/> Retour accueil</Link>
</div>
<h1 className="text-3xl font-bold md:text-5xl">Détection thermique des espèces</h1>
<p className="mt-3 max-w-2xl text-white/70">Fenêtres d’activité, protocole adapté, cartographie des zones sensibles et reporting au format attendu par vos écologues.</p>
<div className="mt-6 flex flex-wrap gap-3">
<Button asChild className="bg-white text-black hover:bg-white/90"><a href="#contact">Planifier une campagne</a></Button>
<Button asChild className="border-white/20 text-white hover:bg-white/10"><a href="#protocole">Voir le protocole</a></Button>
</div>
</div>
</section>


<section id="protocole" className="px-6 py-14 md:px-8 md:py-20">
<div className="mx-auto max-w-6xl">
<h2 className="text-2xl font-semibold md:text-3xl">Protocole d’intervention</h2>
<div className="mt-8 grid gap-6 md:grid-cols-3">
<Card className="border-white/10 bg-white/5"><CardContent className="p-6"><div className="flex items-center gap-3"><Clock className="h-5 w-5"/><h3 className="font-semibold">Fenêtres d’activité</h3></div><p className="mt-2 text-sm text-white/80">Programmation horaires/saisons selon espèces cibles (crépuscule/aube), températures contrastées.</p></CardContent></Card>
<Card className="border-white/10 bg-white/5"><CardContent className="p-6"><div className="flex items-center gap-3"><Camera className="h-5 w-5"/><h3 className="font-semibold">Acquisition thermique</h3></div><p className="mt-2 text-sm text-white/80">Paramétrage palettes, iso-thermes, altitude & recouvrement adaptés, double enregistrement RGB si besoin.</p></CardContent></Card>
<Card className="border-white/10 bg-white/5"><CardContent className="p-6"><div className="flex items-center gap-3"><Map className="h-5 w-5"/><h3 className="font-semibold">Cartographie & livrables</h3></div><p className="mt-2 text-sm text-white/80">Localisation occurrences, heatmaps, polygones de sensibilité, exports SIG et rapport PDF.</p></CardContent></Card>
</div>
</div>
</section>


<section className="bg-white/[0.02] px-6 py-14 md:px-8 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-2xl font-semibold md:text-3xl">Livrables</h2><ul className="mt-4 grid gap-3 text-sm text.white/80 md:grid-cols-2"><li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Points/aires détectées (SHP/GeoJSON)</li><li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Cartes thématiques (PDF/PNG)</li><li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Rapport d’intervention (PDF)</li><li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Vidéos/frames thermiques (sur demande)</li></ul></div></section>


<section id="contact" className="px-6 py-14 md:px-8 md:py-20"><div className="mx-auto max-w-3xl text-center"><h2 className="text-2xl font-semibold md:text-3xl">Démarrons votre campagne thermique</h2><p className="mt-2 text-white/70">Dites-moi l’espèce ciblée, la zone, la période, et le format de sortie attendu.</p><div className="mt-6 flex justify-center"><Button asChild className="bg-white text-black hover:bg-white/90"><a href="/#contact">Demander un devis</a></Button></div></div></section>
</main>
);
}
