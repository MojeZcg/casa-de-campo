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

      {/* Tabs Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white border-2 border-stone-200 rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b border-stone-200">
            <button
              onClick={() => setActiveTab("es")}
              className={`flex-1 py-4 px-6 text-lg font-semibold transition-all ${
                activeTab === "es"
                  ? "bg-stone-800 text-white"
                  : "bg-white text-stone-600 hover:bg-stone-50"
              }`}
            >
              CÓMO LLEGAR
            </button>
            <button
              onClick={() => setActiveTab("en")}
              className={`flex-1 py-4 px-6 text-lg font-semibold transition-all ${
                activeTab === "en"
                  ? "bg-stone-800 text-white"
                  : "bg-white text-stone-600 hover:bg-stone-50"
              }`}
            >
              HOW TO GET
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12">
            {activeTab === "es" ? (
              <div className="space-y-12">
                {/* Opción 1: Micro */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-full bg-stone-800 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      01
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-stone-800 mb-3">
                      Por Micro
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      Desde la terminal se puede dirigir al complejo abordando
                      el bus 146 del grupo Iselin. El recorrido dura
                      aproximadamente 35 minutos y te deja a solo 5 minutos
                      caminando de nuestro alojamiento rural.
                    </p>
                  </div>
                </div>

                {/* Opción 2: Taxi */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-full bg-stone-800 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      02
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-stone-800 mb-3">
                      En Taxi
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      Puedes tomar un taxi desde cualquier punto de la ciudad.
                      El viaje desde el centro dura aproximadamente 25 minutos.
                      Te recomendamos acordar el precio antes de partir. El
                      costo promedio es de $2000-2500 pesos.
                    </p>
                  </div>
                </div>

                {/* Opción 3: Bicicleta */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-full bg-stone-800 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      03
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-stone-800 mb-3">
                      En Bicicleta
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      Si te gusta el ciclismo, hay una hermosa ruta de 12 km
                      desde el centro de la ciudad. El camino es mayormente
                      llano con algunos tramos panorámicos. Contamos con un
                      espacio seguro para guardar bicicletas.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-12">
                {/* Option 1: Bus */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-full bg-stone-800 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      01
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-stone-800 mb-3">
                      By Bus
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      From the terminal you can reach our location by taking bus
                      146 from the Iselin group. The journey takes approximately
                      35 minutes and leaves you just a 5-minute walk from our
                      rural accommodation.
                    </p>
                  </div>
                </div>

                {/* Option 2: Taxi */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-full bg-stone-800 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      02
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-stone-800 mb-3">
                      By Taxi
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      You can take a taxi from anywhere in the city. The trip
                      from downtown takes approximately 25 minutes. We recommend
                      agreeing on the price before departing. The average cost
                      is $2000-2500 pesos.
                    </p>
                  </div>
                </div>

                {/* Option 3: Bicycle */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-full bg-stone-800 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      03
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-stone-800 mb-3">
                      By Bicycle
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      If you enjoy cycling, there&apos;s a beautiful 12 km route
                      from the city center. The path is mostly flat with some
                      scenic stretches. We have a secure space for storing
                      bicycles.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
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
