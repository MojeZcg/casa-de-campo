import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

export default function LocalizacionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-stone-100 to-white pt-12 pb-8 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4 sm:mb-6">
            Localización
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-3 sm:mb-4">
            Estamos ubicados en las afueras de la ciudad
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 p-4 sm:p-6 pb-3 sm:pb-4">
            Mapa y Ubicación
          </h2>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.7!2d-68.098789!3d-34.575202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzMwLjciUyA2OMKwMDUnNTUuNiJX!5e0!3m2!1ses!2sar!4v1234567890!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Casa Campo Jorge - San Rafael, Mendoza"
            ></iframe>
          </div>
          <div className="p-4 sm:p-6 bg-stone-50">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-stone-700 mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-stone-800 text-sm sm:text-base">
                  Dirección exacta:
                </p>
                <p className="text-stone-600 text-sm sm:text-base">
                  Calle Andreoni s/n, Colonia Elena - Cuadro Nacional
                </p>
                <p className="text-stone-600 text-sm sm:text-base">
                  San Rafael, Mendoza
                </p>
                <p className="text-xs sm:text-sm text-stone-500 mt-2">
                  Coordenadas: -34.575202, -68.098789
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="https://maps.app.goo.gl/oUqvt1vqWDKqEeWGA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-base font-semibold text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Cómo llegar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
