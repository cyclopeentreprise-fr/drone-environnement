// app/merci/page.tsx
export default function MerciPage() {
return (
<main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-6">
<div className="max-w-xl text-center">
<div className="mx-auto mb-4 h-14 w-14 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl">✓</div>
<h1 className="text-3xl md:text-4xl font-bold">Merci, votre demande a été envoyée</h1>
<p className="mt-3 text-gray-600">Nous revenons vers vous sous 24h ouvrées avec un devis détaillé et un délai d'intervention.</p>
<div className="mt-6 flex justify-center gap-3">
<a href="/" className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-xl px-5 py-3 hover:bg-black">Retour à l'accueil</a>
<a href="/#prestations" className="inline-flex items-center gap-2 border rounded-xl px-5 py-3 hover:bg-gray-50">Voir les prestations</a>
</div>
</div>
</main>
);
}
