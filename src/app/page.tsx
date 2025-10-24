"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, Mail, ShieldCheck, ArrowRight, Play, Star, CheckCircle2, MapPin, Send, Leaf, Camera, ThermometerSun, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// 👉 Placez vos médias dans /public :
// - /public/hero.mp4 (vidéo courte 10–20s, 1920x1080, H.264)
// - /public/logo-provence-drone-immo.png (ou votre logo environnement)
// - /public/portfolio/1.jpg ... /public/portfolio/8.jpg (photos projets)
// - /public/clients/{1..5}.png (logos clients/partenaires)

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <TopBar />
      <Hero />
      <TrustBar />
      <Services />
      <CTACompact />
      <Portfolio />
      <Process />
      <Certifications />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <SiteFooter />
    </main>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Image src="/logo-provence-drone-immo.png" alt="Logo" width={40} height={40} className="rounded" />
          <div>
            <p className="font-semibold leading-tight">Provence Drone Environnement</p>
            <p className="text-xs text-gray-500 leading-tight">Orthophoto · Thermique · Inspection</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#services" className="hover:text-gray-700">Services</Link>
          <Link href="#portfolio" className="hover:text-gray-700">Réalisations</Link>
          <Link href="#process" className="hover:text-gray-700">Méthode</Link>
          <Link href="#tarifs" className="hover:text-gray-700">Tarifs</Link>
          <Link href="#contact" className="hover:text-gray-700">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="tel:+33600000000"><PhoneCall className="mr-2 h-4 w-4" /> Appeler</Link>
          </Button>
          <Button asChild>
            <Link href="#contact">Devis gratuit <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-[60vh] md:h-[70vh] object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/portfolio/1.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
      </div>
      <Container className="pt-16 md:pt-24">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <Badge className="mb-4">Pilote drone certifié – 13 & 84</Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Des données aériennes <span className="text-gray-700">fiables</span> pour des décisions <span className="text-gray-700">plus rapides</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Orthophotographies centimétriques, détection thermique d’espèces, inspection d’ouvrages et intégration paysagère. 
            Nous livrons des résultats exploitables, clairs et actionnables pour vos études et chantiers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link href="#contact">Demander un devis</Link></Button>
            <Button asChild variant="outline" size="lg"><Link href="#portfolio"><Play className="mr-2 h-4 w-4" />Voir nos projets</Link></Button>
          </div>
          <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-600">
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Assuré RC Pro</li>
            <li className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Respect faune & milieux</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Délais courts</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bouches‑du‑Rhône & Vaucluse</li>
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-8 border-b bg-gray-50">
      <Container className="flex flex-wrap items-center justify-center gap-6 opacity-80">
        {[1,2,3,4,5].map(i => (
          <Image key={i} src={`/clients/${i}.png`} alt={`Client ${i}`} width={120} height={48} className="object-contain" />
        ))}
      </Container>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: <Camera className="h-6 w-6" />, title: "Orthophotographie & Topographie", 
      text: "Cartes géoréférencées à haute résolution (GSD ≤ 1,5 cm), MNT/MNS, courbes de niveau, cubatures, emprises et métrés. Export SIG (GeoTIFF, DXF)."
    },
    {
      icon: <ThermometerSun className="h-6 w-6" />, title: "Détection thermique d’espèces", 
      text: "Repérage et comptage nocturnes/aurore des espèces sensibles (zones de nidification, corridors), rapports documentés et géolocalisés."
    },
    {
      icon: <Building2 className="h-6 w-6" />, title: "Inspection d’ouvrages", 
      text: "Ponts, toitures, panneaux solaires, falaises : photos/vidéos 4K, ortho façades, observations de défauts, livrables clairs pour la maintenance."
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Nos spécialités</h2>
          <p className="mt-2 text-gray-600">Des prestations pensées pour les bureaux d’étude, collectivités et entreprises.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s, idx) => (
            <Card key={idx} className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="p-2 rounded-xl bg-gray-100">{s.icon}</span> {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{s.text}</p>
                <ul className="mt-4 text-sm text-gray-600 space-y-1">
                  {idx===0 && (
                    <>
                      <li>• GCP/RTK selon besoin</li>
                      <li>• Formats: GeoTIFF, DXF, DWG, SHP</li>
                      <li>• Rapport PDF illustré</li>
                    </>
                  )}
                  {idx===1 && (
                    <>
                      <li>• Captations aux heures adaptées</li>
                      <li>• Cartes de chaleur & exports SIG</li>
                      <li>• Recommandations d’atténuation</li>
                    </>
                  )}
                  {idx===2 && (
                    <>
                      <li>• Détails 48MP & vidéo 4K</li>
                      <li>• Points d’anomalie géolocalisés</li>
                      <li>• Priorisation des actions</li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTACompact() {
  return (
    <section className="py-8 bg-gray-900 text-white">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-lg font-medium">Un besoin urgent ? Obtenez un devis et un délai sous 24h ouvrées.</p>
        <div className="flex gap-3">
          <Button asChild variant="secondary"><Link href="#contact"><Send className="mr-2 h-4 w-4" /> Demander un devis</Link></Button>
          <Button asChild variant="outline" className="text-white"><Link href="tel:+33600000000"><PhoneCall className="mr-2 h-4 w-4" /> Appeler</Link></Button>
        </div>
      </Container>
    </section>
  );
}

function Portfolio() {
  const items = Array.from({ length: 8 }).map((_, i) => `/portfolio/${i+1}.jpg`);
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Réalisations</h2>
          <p className="mt-2 text-gray-600">Un aperçu de nos missions : orthophotos, inspections, détection thermique.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((src, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <button className="group relative overflow-hidden rounded-2xl shadow-sm">
                  <Image src={src} alt={`Projet ${idx+1}`} width={800} height={600} className="object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-2 left-2 text-white text-sm font-medium flex items-center gap-1">Voir <ArrowRight className="h-4 w-4" /></span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <Image src={src} alt={`Projet ${idx+1} grand`} width={1600} height={1200} className="w-full h-auto" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const steps = [
    { title: "Brief & cadrage", text: "Objectifs, contraintes, zones sensibles, livrables attendus, protocole sécurité." },
    { title: "Plan de vol & autorisations", text: "Évaluation réglementaire, NOTAM, DFCI, contact mairie/gestionnaires si besoin." },
    { title: "Acquisition terrain", text: "Vols calibrés (RTK/GCP), respect faune & riverains, journal des vols." },
    { title: "Traitement & contrôle", text: "Chaîne photogrammétrie/SIG, QA, restitution claire des résultats." },
  ];
  return (
    <section id="process" className="py-16 md:py-24">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Notre méthode</h2>
          <p className="mt-2 text-gray-600">Transparente, rigoureuse et orientée résultats.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">Étape {i+1}</Badge>
                <CardTitle className="mt-2">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{s.text}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Certifications() {
  return (
    <section className="py-12 border-y bg-white">
      <Container className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold">Assurances & conformité</h3>
          <ul className="mt-3 text-gray-700 space-y-1">
            <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" />Assuré RC Pro, procédures sécurité chantier</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" />Conformité réglementation européenne (Ouverte/Spécifique)</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" />Déclarations et évaluations de risques documentées</li>
          </ul>
        </div>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Zones d’intervention</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            Bouches‑du‑Rhône (13) & Vaucluse (84). Déplacements au‑delà sur devis.
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Agence Terralis", text: "Livrables impeccables et exploitables directement dans notre SIG. Délai tenu malgré une fenêtre météo serrée.", rating: 5 },
    { name: "Bureau d’étude Atlas", text: "La thermographie a permis d’identifier des zones sensibles — rapport clair et chiffré.", rating: 5 },
    { name: "Commune de Luberis", text: "Intervention sécurisée et respectueuse des riverains. Communication parfaite.", rating: 5 },
  ];
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ils nous font confiance</h2>
          <p className="mt-2 text-gray-600">Extraits de retours clients récents.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Card key={i} className="rounded-2xl h-full">
              <CardContent className="p-6">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (<Star key={i} className="h-4 w-4" />))}
                </div>
                <p className="mt-3 text-gray-700">“{t.text}”</p>
                <p className="mt-4 text-sm text-gray-500">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
  return (
    <section id="tarifs" className="py-16 md:py-24">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Packs & tarifs</h2>
          <p className="mt-2 text-gray-600">Des offres claires. Facturation au forfait ou sur devis selon la complexité.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Essentiel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">149€ <span className="text-sm text-gray-500">HT</span></p>
              <ul className="mt-4 text-gray-600 space-y-1 text-sm">
                <li>• Prise de vues pro</li>
                <li>• 20 photos retouchées</li>
                <li>• Livraison 48h</li>
              </ul>
              <Button asChild className="mt-4 w-full"><Link href="#contact">Choisir</Link></Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-gray-900 border-2">
            <CardHeader>
              <Badge className="w-fit">Le plus demandé</Badge>
              <CardTitle>Visibilité+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">279€ <span className="text-sm text-gray-500">HT</span></p>
              <ul className="mt-4 text-gray-600 space-y-1 text-sm">
                <li>• Photos + vidéo 4K</li>
                <li>• Montage court (30–60s)</li>
                <li>• Retouches avancées</li>
              </ul>
              <Button asChild className="mt-4 w-full"><Link href="#contact">Choisir</Link></Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Premium Dossier</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">499€ <span className="text-sm text-gray-500">HT</span></p>
              <ul className="mt-4 text-gray-600 space-y-1 text-sm">
                <li>• Orthophoto & exports SIG</li>
                <li>• Rapport PDF illustré</li>
                <li>• Réunion de restitution</li>
              </ul>
              <Button asChild className="mt-4 w-full"><Link href="#contact">Choisir</Link></Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Combien de temps pour les livrables ?", a: "Entre 24h et 5 jours ouvrés selon la complexité et la météo. Les urgences sont possibles." },
    { q: "Pouvez‑vous intervenir en zone urbaine ?", a: "Oui, selon la réglementation et après étude du site. Nous gérons les démarches nécessaires." },
    { q: "Quels formats livrez‑vous ?", a: "Photos (JPG/TIFF), vidéos 4K, GeoTIFF, DXF/DWG, SHP, PDF de synthèse, exports web si besoin." },
  ];
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
          <p className="mt-2 text-gray-600">Les réponses aux questions les plus courantes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{f.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{f.a}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Parlez‑nous de votre projet</h2>
            <p className="mt-2 text-gray-600">Un devis détaillé et des délais sous 24h ouvrées.</p>
            <ul className="mt-6 text-gray-700 space-y-1 text-sm">
              <li className="flex items-center gap-2"><PhoneCall className="h-4 w-4" /> +33 6 00 00 00 00</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@provence-drone-immo.fr</li>
            </ul>
          </div>
          <form action="https://formsubmit.co/contact@provence-drone-immo.fr" method="POST" className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
            {/* FormSubmit config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nouveau devis – Drone Environnement" />
            <input type="hidden" name="_next" value="/merci" />

            <div className="grid grid-cols-1 gap-4">
              <Input name="nom" placeholder="Nom / Société" required />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="tel" name="telephone" placeholder="Téléphone" />
              </div>
              <Input name="lieu" placeholder="Lieu d’intervention (commune, département)" />
              <Textarea name="besoin" placeholder="Décrivez votre besoin (orthophoto, thermique, inspection…)" className="min-h-[120px]" />
              <Button type="submit" className="w-full">Envoyer la demande</Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="py-10 border-t bg-white">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Provence Drone Environnement — Tous droits réservés.</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="#">Mentions légales</Link>
          <Link href="#">Politique de confidentialité</Link>
        </div>
      </Container>
    </footer>
  );
}
