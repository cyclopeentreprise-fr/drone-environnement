export default function Page() {
  return (
    <main>
      <section className="container hero">
        <div className="hero__grid">
          <div>
            <h1 className="h1">Imagerie drone pour l’environnement & l’ingénierie</h1>
            <p className="muted">
              Orthophotographie & topographie · Détection thermique d’espèces · Inspection d’ouvrages.
              Des livrables clairs, précis et exploitables.
            </p>
            <div className="actions">
              <a href="#contact" className="btn btn-primary">Obtenir un devis</a>
              <a href="#services" className="btn btn-ghost">Voir les services</a>
            </div>
          </div>
          <div className="card hero__media">
            <div className="media-placeholder">Espace visuel (photo/vidéo/3D)</div>
          </div>
        </div>
      </section>

      <section id="services" className="container section">
        <p className="kicker">Compétences</p>
        <h2 className="h2">Services principaux</h2>
        <div className="grid3">
          <article className="card p">
            <h3 className="h3">Orthophotographie & topographie</h3>
            <p className="muted">Carto haute résolution, MNT/DSM, courbes, cubatures.</p>
            <ul className="list">
              <li>Orthos géoréférencées</li>
              <li>MNT/DSM/Isolignes</li>
              <li>Rapports PDF & exports SIG</li>
            </ul>
          </article>
          <article className="card p">
            <h3 className="h3">Détection thermique d’espèces</h3>
            <p className="muted">Prospections crépusculaires/nocturnes, suivi d’espèces sensibles.</p>
            <ul className="list">
              <li>Thermique haute sensibilité</li>
              <li>Protocoles naturalistes</li>
              <li>Traces & vidéos horodatées</li>
            </ul>
          </article>
          <article className="card p">
            <h3 className="h3">Inspection d’ouvrages</h3>
            <p className="muted">Contrôle visuel détaillé, détection d’anomalies, rapports exploitables.</p>
            <ul className="list">
              <li>Façades & toitures</li>
              <li>Ouvrages d’art & industriels</li>
              <li>Rapports avec priorisation</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="method" className="container section">
        <p className="kicker">Process</p>
        <h2 className="h2">Méthode claire, livrables exploitables</h2>
        <ol className="steps">
          {[
            ["Brief & cadre", "Objectifs, périmètre, cadre réglementaire, zone, calendrier."],
            ["Acquisition", "Plan de vol, sécurité, captation photo/vidéo/thermique adaptée."],
            ["Traitements", "Photogrammétrie, géoréférencement, analyses & contrôles qualité."],
            ["Livrables", "Orthos, MNT/DSM, rapports PDF, exports SIG, vidéo/galerie web."]
          ].map(([t, d], i) => (
            <li className="card p step" key={t}>
              <div className="step__num">{i + 1}</div>
              <div>
                <div className="h4">{t}</div>
                <div className="muted">{d}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="projects" className="container section">
        <p className="kicker">Réalisations</p>
        <h2 className="h2">Quelques cas d’usage</h2>
        <div className="grid3">
          {["Orthophoto carrière", "Thermique faune", "Inspection toiture"].map((t) => (
            <article key={t} className="card project">
              <div className="project__media" />
              <div className="p">
                <h3 className="h4">{t}</h3>
                <p className="muted small">Remplace par ton image et un court descriptif.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="certifs" className="container section">
        <p className="kicker">Conformité</p>
        <h2 className="h2">Certifications & assurances</h2>
        <ul className="card p list">
          <li>Télépilote certifié (DGAC) – scénarios adaptés (ex. STS-01).</li>
          <li>Assurance RC pro drone.</li>
          <li>Procédures sécurité & respect du cadre réglementaire en vigueur.</li>
          <li>Respect biodiversité & confidentialité des données.</li>
        </ul>
      </section>

      <section id="contact" className="container section">
        <p className="kicker">Contact</p>
        <h2 className="h2">Devis & prise de contact</h2>
        <form className="card p form" method="POST" action="https://formsubmit.co/TON_EMAIL">
          {/* Remplace TON_EMAIL par ton email (ex: contact@ton-domaine.fr) */}
          <input type="hidden" name="_next" value="/merci" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="field"><label>Nom</label><input name="nom" required /></div>
          <div className="field"><label>Email</label><input type="email" name="email" required /></div>
          <div className="field"><label>Téléphone</label><input name="telephone" /></div>
          <div className="field"><label>Projet</label><textarea name="message" rows={5} required /></div>
          <button className="btn btn-primary" type="submit">Envoyer</button>
        </form>
      </section>
    </main>
  );
}
