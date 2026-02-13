import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    url: "https://www.alojamientoruralsanrafael.com",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
