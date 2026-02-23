import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const font = Roboto_Condensed({
  weight: ["300", "700"],
  variable: "--font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alojamientorural.com.ar"),
  title: "Alojamiento Rural | San Rafael, Mendoza",
  description:
    "Descubre la tranquilidad del campo en nuestro acogedor alojamiento rural. Un lugar donde el tiempo se detiene y la naturaleza te abraza.",
  keywords: [
    "alojamiento rural",
    "san rafael",
    "mendoza",
    "casa de campo",
    "alquiler de casas rurales",
    "vacaciones en el campo",
    "turismo rural",
    "alojamiento con pileta",
    "alojamiento con wifi",
  ],
  openGraph: {
    title: "Alojamiento Rural | San Rafael, Mendoza",
    description:
      "Descubre la tranquilidad del campo en nuestro acogedor alojamiento rural. Un lugar donde el tiempo se detiene y la naturaleza te abraza.",
    url: "https://www.alojamientorural.com.ar",
    siteName: "Alojamiento Rural San Rafael",
    images: [
      {
        url: "/og.png",
        width: 1500,
        height: 787,
        alt: "Alojamiento Rural San Rafael - Vista Exterior",
      },
    ],
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es_AR">
      <body className={`${font.className} antialiased bg-white`}>
        <Navigation />
        {children}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
