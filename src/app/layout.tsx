// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
metadataBase: new URL("https://drone-environnement.vercel.app"),
title: {
default: "CYCLOPE — Drone au service de l'étude environnementale",
template: "%s · CYCLOPE",
},
description:
"Pilote de drone certifié & ingénieur écologue. Thermographie faune, orthophotographie, inspections, topographie RTK. Livrables clairs, exploitables et intégrables au SIG.",
openGraph: {
type: "website",
url: "/",
title: "CYCLOPE — Drone au service de l'étude environnementale",
description:
"Thermographie d'espèces, orthophotographies centimétriques, inspections et topographie RTK. Prestations pour bureaux d'étude et collectivités.",
siteName: "CYCLOPE",
images: [
{
url: "/og-image.jpg",
width: 1200,
height: 630,
alt: "CYCLOPE — Drone & écologie",
},
],
locale: "fr_FR",
},
twitter: {
card: "summary_large_image",
title: "CYCLOPE — Drone au service de l'étude environnementale",
description:
"Thermographie, orthophoto, inspection, topographie RTK. Données fiables, livrables exploitables.",
images: ["/og-image.jpg"],
},
icons: {
icon: "/favicon.ico",
shortcut: "/icon.png",
apple: "/apple-touch-icon.png",
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="fr">
<body>{children}</body>
</html>
);
}
