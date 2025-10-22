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
<Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><ArrowLeft className="h-4 w-4"/> Retour accueil</Link>
</div>
<h1 className="text-3xl font-bold md:text-5xl">Orthophotographie & Topographie</h1>
<p className="mt-3 max-w-2xl text-white/70">Orthos haute résolution, MNS/MNT, courbes de niveau, surfaces/volumes et exports compatibles SIG/DAO. Rapport qualité et contrôles indépendants.</p>
<div className="mt-6 flex flex-wrap gap-3">
<Button asChild className="bg-white text-black hover:bg-white/90"><a href="#contact">Demander un devis</a></Button>
<Button asChild className="border-white/20 text-white hover:bg-white/10"><a href="#livrables">Voir les livrables</a></Button>
</div>
</div>
</section>


<section id="livrables" className="px-6 py-14 md:px-8 md:py-20">
<div className="mx-auto max-w-6xl">
<h2 className="text-2xl font-semibold md:text-3xl">Livrables & formats</h2>
<div className="mt-8 grid gap-6 md:grid-cols-3">
<Card className="border-white/10 bg.white/5"><CardContent className="p-6">
<div className="flex items-center gap-3"><Layers className="h-5 w-5"/><h3 className="font-semibold">Raster</h3></div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Orthophoto GeoTIFF (RGB)</li>
<li className="flex gap-2"><CheckCircle className="h-4 w-4"/> MNS/MNT (GeoTIFF)</li>
<li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Tuiles web (XYZ/WMTS sur demande)</li>
</ul>
</CardContent></Card>
<Card className="border-white/10 bg-white/5"><CardContent className="p-6">
<div className="flex items-center gap-3"><Ruler className="h-5 w-5"/><h3 className="font-semibold">Vecteurs & métrés</h3></div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Courbes de niveau (DXF/SHP)</li>
<li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Polylignes/Polygones (parcelles, emprises)</li>
<li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Tableaux surfaces/volumes (CSV)</li>
</ul>
</CardContent></Card>
<Card className="border-white/10 bg-white/5"><CardContent className="p-6">
<div className="flex items-center gap-3"><FileText className="h-5 w-5"/><h3 className="font-semibold">Dossier qualité</h3></div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Rapport d’erreurs & GCP/CHK</li>
<li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Paramètres de calibration</li>
<li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Fiche de production PDF</li>
</ul>
</CardContent></Card>
</div>
</div>
</section>


<section id="contact" className="px-6 py-14 md:px-8 md:py-20">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-2xl font-semibold md:text-3xl">Parlons de votre site et de vos métrés</h2>
<p className="mt-2 text-white/70">Envoyez l’adresse, la surface, l’objectif (orthos, volumes, courbes) et vos délais.</p>
<div className="mt-6 flex justify-center">
<Button asChild className="bg.white text-black hover:bg-white/90"><a href="/#contact" className="gap-2"><Download className="h-4 w-4"/> Demander un devis</a></Button>
</div>
</div>
</section>
</main>
);
}
