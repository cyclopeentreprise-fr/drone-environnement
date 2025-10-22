import { ArrowLeft, Wrench, CheckCircle, ClipboardList, Camera, Shield } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function InspectionsPage() {
return (
<main className="min-h-dvh bg-black text-slate-100">
<section className="border-b border-white/10 px-6 py-12 md:px-8 md:py-16">
<div className="mx-auto max-w-6xl">
<div className="mb-6">
<Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><ArrowLeft className="h-4 w-4"/> Retour accueil</Link>
</div>
<h1 className="text-3xl font-bold md:text-5xl">Inspections d’ouvrages</h1>
<p className="mt-3 max-w-2xl text-white/70">Toitures, ouvrages d’art, installations PV : relevés visuels/thermiques, annotations et priorisation des interventions, avec conformité sécurité.</p>
<div className="mt-6 flex flex-wrap gap-3">
<Button asChild className="bg-white text-black hover:bg-white/90"><a href="#contact">Obtenir un rapport</a></Button>
<Button asChild className="border-white/20 text-white hover:bg-white/10"><a href="#contenu">Voir le contenu de rapport</a></Button>
</div>
</div>
</section>


<section id="contenu" className="px-6 py-14 md:px-8 md:py-20">
<div className="mx-auto max-w-6xl">
<h2 className="text-2xl font-semibold md:text-3xl">Contenu du rapport</h2>
<div className="mt-8 grid gap-6 md:grid-cols-3">
<Card className="border-white/10 bg-white/5"><CardContent className="p-6"><div className="flex items-center gap-3"><Camera className="h-5 w-5"/><h3 className="font-semibold">Imagerie</h3></div><p className="mt-2 text-sm text-white/80">Photos haute résolution, vidéos, vues détaillées des zones critiques, thermique si requis.</p></CardContent></Card>
<Card className="border-white/10 bg-white/5"><CardContent className="p-6"><div className="flex items-center gap-3"><ClipboardList className="h-5 w-5"/><h3 className="font-semibold">Observations & scoring</h3></div><p className="mt-2 text-sm text-white/80">Liste des anomalies, criticité, recommandations et ordre de priorité.</p></CardContent></Card>
<Card className="border-white/10 bg-white/5"><CardContent className="p-6"><div className="flex items-center gap-3"><Shield className="h-5 w-5"/><h3 className="font-semibold">Sécurité & conformité</h3></div><p className="mt-2 text-sm text-white/80">Mesures de sécurité mises en place, plan de vol, traçabilité et conformité réglementaire.</p></CardContent></Card>
</div>
</div>
</section>


<section className="bg-white/[0.02] px-6 py-14 md:px-8 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-2xl font-semibold md:text-3xl">Livrables</h2><ul className="mt-4 grid gap-3 text-sm text-white/80 md:grid-cols-2"><li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Rapport illustré (PDF)</li><li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Dossier photo/vidéo (organisé)</li><li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Table des remarques/priorités (CSV)</li><li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Export plan d’implantation (DXF/SHP si besoin)</li></ul></div></section>


<section id="contact" className="px-6 py-14 md:px-8 md:py-20"><div className="mx-auto max-w-3xl text-center"><h2 className="text-2xl font-semibold md:text-3xl">Recevez un rapport clair et actionnable</h2><p className="mt-2 text-white/70">Partagez l’ouvrage concerné, le contexte (diagnostic/maintenance), et vos délais.</p><div className="mt-6 flex justify-center"><Button asChild className="bg-white text-black hover:bg-white/90"><a href="/#contact">Obtenir un devis</a></Button></div></div></section>
</main>
);
}
