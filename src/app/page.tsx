<Button asChild size="sm" className="bg-white text-black hover:bg-white/90"><a href="#contact">Devis</a></Button>
</nav>
</div>
</header>


<section className="relative overflow-hidden px-6 py-16 md:px-8 md:py-24">
<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
<div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
<div>
<div className="flex flex-wrap gap-2">
<Badge className="gap-1 bg-white/10 text-white"><Shield className="h-3.5 w-3.5"/> Pilote certifié</Badge>
<Badge className="gap-1 bg-white/10 text-white"><BadgeCheck className="h-3.5 w-3.5"/> RC Pro</Badge>
<Badge className="gap-1 bg-white/10 text-white"><Map className="h-3.5 w-3.5"/> 13 & 84</Badge>
</div>
<h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">Données aériennes <span className="text-white/70">fiables</span> pour décisions <span className="text-white/70">rapides</span></h1>
<p className="mt-4 max-w-xl text-white/70">Orthophotographie, relevés topo, détection thermique d'espèces et inspections d’ouvrages. Livrables exploitables (SIG/DAO) avec contrôle qualité.</p>
<div className="mt-6 flex flex-wrap gap-3">
<Button asChild className="bg-white text-black hover:bg-white/90"><a href="#prestations" className="gap-2">Choisir une prestation <ArrowRight className="h-4 w-4"/></a></Button>
<Button asChild className="border-white/20 text-white hover:bg-white/10" ><a href="#tech">Voir les capacités</a></Button>
</div>
</div>
<div>
<Card className="overflow-hidden border-white/10 bg-white/5"><CardContent className="p-0">
<div className="aspect-video w-full bg-gradient-to-br from-white/10 to-white/0" />
<div className="space-y-2 p-5"><div className="text-sm font-medium">Exemple — Orthophoto haute résolution</div><p className="text-sm text-white/70">Mosaïque ortho + MNS/MNT, vectorisation et métrés conformes.</p></div>
</CardContent></Card>
</div>
</div>
</section>


<section id="prestations" className="px-6 py-16 md:px-8 md:py-20">
<div className="mx-auto max-w-6xl">
<h2 className="text-2xl font-semibold md:text-3xl">Choisissez votre besoin</h2>
<p className="mt-2 max-w-2xl text-white/70">Trois parcours dédiés. Cliquez pour accéder au détail, aux livrables, exemples et demande de devis.</p>
<div className="mt-8 grid gap-6 md:grid-cols-3">
<a href="/orthophotographie" className="group"><Card className="overflow-hidden border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] transition-transform duration-300 group-hover:-translate-y-1"><CardContent className="p-6"><div className="flex items-center gap-3"><Camera className="h-5 w-5"/><h3 className="font-semibold">Orthophotographie & Topographie</h3></div><p className="mt-2 text-sm text-white/70">Orthos, MNS/MNT, courbes, volumes, exports GeoTIFF/DXF/SHP/CSV.</p><div className="mt-4 h-28 w-full rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" /></CardContent></Card></a>
<a href="/thermique" className="group"><Card className="overflow-hidden border-white/10 bg-gradient-to-b from-[#ff7a00]/20 to-transparent transition-transform duration-300 group-hover:-translate-y-1"><CardContent className="p-6"><div className="flex items-center gap-3"><Thermometer className="h-5 w-5"/><h3 className="font-semibold">Détection thermique des espèces</h3></div><p className="mt-2 text-sm text-white/80">Fenêtres d’activité, cartographie zones sensibles, reporting adapté.</p><div className="mt-4 h-28 w-full rounded-lg bg-[radial-gradient(circle_at_70%_40%,rgba(255,122,0,0.35),transparent_60%)]" /></CardContent></Card></a>
<a href="/inspections" className="group"><Card className="overflow-hidden border-white/10 bg-gradient-to-b from-[#00d1ff]/20 to-transparent transition-transform duration-300 group-hover:-translate-y-1"><CardContent className="p-6"><div className="flex items-center gap-3"><Wrench className="h-5 w-5"/><h3 className="font-semibold">Inspections d’ouvrages</h3></div><p className="mt-2 text-sm text-white/80">Toitures, ouvrages d’art, PV. Photos/vidéos, annotations, priorisation.</p><div className="mt-4 h-28 w-full rounded-lg bg-[radial-gradient(circle_at_60%_30%,rgba(0,209,255,0.35),transparent_60%)]" /></CardContent></Card></a>
</div>
</div>
</section>


<section id="tech" className="bg-white/[0.02] px-6 py-16 md:px-8 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-2xl font-semibold md:text-3xl">Capacités techniques</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{"RTK + GCP/CHK,GSD ≤ 1.5–2.5 cm,Exports SIG/DAO".split(",").map((t,i)=>(<Card key={i} className="border-white/10 bg-white/5"><CardContent className="p-6 text-white/80">{t}</CardContent></Card>))}</div></div></section>


<section id="method" className="px-6 py-16 md:px-8 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-2xl font-semibold md:text-3xl">Méthode</h2><ol className="mt-6 grid list-decimal gap-4 pl-6 text-white/80 md:grid-cols-4"><li>Brief & cadrage</li><li>Préparation réglementaire</li><li>Acquisition terrain</li><li>Traitements & livraison</li></ol></div></section>


<section id="contact" className="border-t border-white/10 bg-white/[0.02] px-6 py-16 md:px-8 md:py-20"><div className="mx-auto max-w-3xl"><h2 className="text-2xl font-semibold md:text-3xl">Contact & devis</h2><p className="mt-2 text-white/70">Expliquez votre projet (site, métriques, délais). Réponse rapide.</p><form className="mt-8 grid gap-4" action="https://formsubmit.co/contact@provence-drone-immo.fr" method="POST"><input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_subject" value="Demande de devis — Drone Environnement" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_next" value="https://votre-domaine/merci" /><div className="grid gap-2"><label className="text-sm font-medium">Nom</label><input name="nom" required className="h-11 rounded-xl border border-white/20 bg-transparent px-3 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-white/20" placeholder="Ex. Martin" /></div><div className="grid gap-2"><label className="text-sm font-medium">Email</label><input type="email" name="email" required className="h-11 rounded-xl border border-white/20 bg-transparent px-3 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-white/20" placeholder="vous@exemple.fr" /></div><div className="grid gap-2"><label className="text-sm font-medium">Message</label><textarea name="message" required rows={5} className="rounded-xl border border-white/20 bg-transparent px-3 py-2 text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-white/20" placeholder="Décrivez votre besoin…" /></div><Button type="submit" className="mt-2 w-fit bg-white text-black hover:bg-white/90">Envoyer</Button></form></div></section>


<footer className="border-t border-white/10 bg-black"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-white/70 md:flex-row md:px-8"><div>© {new Date().getFullYear()} Drone Environnement — Tous droits réservés.</div><div className="flex items-center gap-4"><a href="#" className="hover:text-white/90">Mentions légales</a><a href="#" className="hover:text-white/90">Confidentialité</a></div></div></footer>
</main>
);
}
