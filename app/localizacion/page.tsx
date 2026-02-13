"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocalizacionPage() {
  const [activeTab, setActiveTab] = useState<"es" | "en">("es");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-stone-100 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 font-serif">
            Localización
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-4">
            Estamos ubicados en las afueras de la ciudad
          </p>
          <p className="text-lg text-stone-500 italic">
            Es fácil encontrarnos pero difícil dejarnos
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-stone-800 p-6 pb-4 font-serif">
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
          <div className="p-6 bg-stone-50">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-stone-700 mt-1" />
              <div>
                <p className="font-semibold text-stone-800">
                  Dirección exacta:
                </p>
                <p className="text-stone-600">
                  Calle Andreoni s/n, Colonia Elena - Cuadro Nacional
                </p>
                <p className="text-stone-600">San Rafael, Mendoza</p>
                <p className="text-sm text-stone-500 mt-2">
                  Coordenadas: -34.575202, -68.098789
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
