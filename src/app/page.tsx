import { useState } from "react";

export default function Landing() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gray-900 text-white grid place-items-center font-semibold">D</div>
              <div className="leading-tight">
                <p className="font-semibold tracking-tight">Drone Environnement</p>
                <p className="text-xs text-gray-500">Orthophoto • Thermique • Inspection</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#services" className="hover:text-gray-700">Services</a>
              <a href="#process" className="hover:text-gray-700">Méthode</a>
              <a href="#portfolio" className="hover:text-gray-700">Réalisations</a>
              <a href="#certifs" className="hover:text-gray-700">Certifications</a>
              <a href="#contact" className="hover:text-gray-700">Contact</a>
            </nav>
            <a href="#contact" className="inline-flex items-center rounded-2xl border border-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition">Demander un devis</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Pilote de drone spécialisé en environnement
              </h1>
              <p className="mt-5 text-lg text-gray-600 max-w-prose">
                Orthophotographie haute précision, topographie & modélisation 3D. Détection et comptage optique/thermique des espèces. Inspection d’habitats, d’ouvrages et de structures pour des décisions rapides, fiables et conformes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-xs rounded-full bg-gray-900 text-white px-3 py-1">DGAC – Télépilote certifié</span>
                <span className="text-xs rounded-full bg-gray-100 px-3 py-1">Plans de vol & assurances</span>
                <span className="text-xs rounded-full bg-gray-100 px-3 py-1">Livrables SIG & BIM</span>
                <span className="text-xs rounded-full bg-gray-100 px-3 py-1">Conformité RGPD & faune</span>
              </div>
              <div className="mt-10 flex gap-3">
                <a href="#contact" className="rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">Obtenir un devis</a>
                <a href="#services" className="rounded-2xl border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50">Voir les services</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a7?q=80&w=1600&auto=format&fit=crop"
                  alt="Cartographie par drone au-dessus d’un paysage naturel"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-2xl shadow p-4">
                <p className="text-sm font-medium">Précision centimétrique</p>
                <p className="text-xs text-gray-600">RTK/PPK • GCP • Contrôle qualité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Spécialités</h2>
          <p className="mt-2 text-gray-600 max-w-prose">Des prestations conçues pour les bureaux d’études, collectivités, gestionnaires d’infrastructures et naturalistes.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-3xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-gray-900 text-white grid place-items-center font-semibold">01</div>
              <h3 className="mt-5 font-semibold">Orthophotographie, topographie & modélisation 3D</h3>
              <p className="mt-2 text-sm text-gray-600">Acquisitions obliques & nadir. Orthos géoréférencées, MNT/MNS, nuages de points denses, maillages texturés. Contrôle qualité et rapports de précision.</p>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Format SIG: GeoTIFF, LAS/LAZ, SHP, DXF</li>
                <li>Livrables BIM/DAO: OBJ/FBX, DWG, IFC</li>
                <li>Tolérances au besoin (cm)</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="rounded-3xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-gray-900 text-white grid place-items-center font-semibold">02</div>
              <h3 className="mt-5 font-semibold">Détection & comptage optique/thermique des espèces</h3>
              <p className="mt-2 text-sm text-gray-600">Protocoles adaptés Outarde, Castor, campagnol amphibie, loutre… Détection multi-spectrale et thermique, relevés synchronisés au lever/coucher, réduction des dérangements.</p>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Caméras RGB & thermiques (radiométrique)</li>
                <li>Analyse assistée par IA (post-traitement)</li>
                <li>Traçabilité & métadonnées horodatées</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="rounded-3xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-gray-900 text-white grid place-items-center font-semibold">03</div>
              <h3 className="mt-5 font-semibold">Inspection des habitats, ouvrages & structures</h3>
              <p className="mt-2 text-sm text-gray-600">Ponts, tunnels, bâtiments, arbres remarquables, berges. Plans de vol sécurisés, zoom optique & thermique pour déceler pathologies, fissures, zones d’humidité.</p>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Rapports illustrés & géoréférencés</li>
                <li>Comparatifs Avant/Après pour suivi</li>
                <li>Export PDF + données brutes sur demande</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Une méthode claire, des livrables exploitables</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {["Cadrage & conformité","Acquisition terrain","Traitement & QA","Livraison & support"].map((step, i) => (
              <div key={i} className="rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
                <div className="text-4xl font-semibold">{String(i+1).padStart(2,'0')}</div>
                <h3 className="mt-3 font-semibold">{step}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {i===0 && "Analyse du besoin, zone & réglementation. Dossier d’intervention, évaluation des risques, assurances, autorisations."}
                  {i===1 && "Plans de vol optimisés (RTK/GCP). Sécurité, respect faune/flore, traçabilité des conditions météorologiques."}
                  {i===2 && "Photogrammétrie, segmentation, classification. Contrôle de précision, journal des traitements."}
                  {i===3 && "Remise des jeux de données, orthos, modèles, rapports PDF. Accompagnement à l’intégration SIG/BIM."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Réalisations</h2>
              <p className="mt-2 text-gray-600 max-w-prose">Exemples de livrables et d’applications concrètes. Ajoutez ici vos cas d’usage, images Avant/Après, exports SIG, etc.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex rounded-2xl border border-gray-300 px-4 py-2 text-sm hover:bg-white">Discuter d’un projet</a>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((k) => (
              <figure key={k} className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <img
                  src={`https://images.unsplash.com/photo-15${k}880181-56a44cf4a9a7?q=80&w=1200&auto=format&fit=crop`}
                  alt="Exemple portfolio drone environnement"
                  className="aspect-[4/3] w-full object-cover"
                  onError={(e)=>{(e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop";}}
                />
                <figcaption className="p-4 text-sm">
                  <p className="font-medium">Projet #{k}</p>
                  <p className="text-gray-600">Orthophoto / Thermique / Inspection</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications / Confiance */}
      <section id="certifs" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Sécurité, conformité & engagements</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {title:"Télépilote certifié DGAC",text:"Procédures STS/PDRA selon mission, évaluation des risques, NOTAM si nécessaire."},
              {title:"Assurance RC pro & dossiers",text:"Gestion administrative (déclarations, autorisations), cartographie des zones d’exclusion."},
              {title:"Éthique environnementale",text:"Encadrement des survols de faune, créneaux adaptés, réduction des dérangements."},
            ].map((b,i)=>(
              <div key={i} className="rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Parlons de votre projet</h2>
            <p className="mt-2 text-gray-600">Réponse sous 24h. Déplacements régionaux et nationaux selon devis.</p>
          </div>
          {!sent ? (
            <form
              className="mt-8 grid gap-4"
              onSubmit={(e)=>{e.preventDefault(); setSent(true);}}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Nom" className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                <input required type="email" placeholder="Email" className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
              </div>
              <input placeholder="Société / organisme" className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
              <textarea required placeholder="Décrivez votre besoin (lieu, dates, livrables souhaités)" className="min-h-[140px] w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
              <div className="flex items-center justify-between gap-4">
                <label className="text-xs text-gray-600 flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" required />
                  J’accepte d’être contacté·e et le traitement de mes données pour répondre à ma demande.
                </label>
                <button type="submit" className="rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">Envoyer</button>
              </div>
            </form>
          ) : (
            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 text-sm">
              Merci, votre demande a été prise en compte. Nous revenons vers vous rapidement.
            </div>
          )}
          <p className="mt-6 text-xs text-gray-500 text-center">Vous pourrez connecter ce formulaire à votre outil (FormSubmit, Make, Zapier, CRM…).</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Drone Environnement — Tous droits réservés.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-gray-800">Mentions légales</a>
              <a href="#" className="hover:text-gray-800">Politique de confidentialité</a>
              <a href="#" className="hover:text-gray-800">Plan du site</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
