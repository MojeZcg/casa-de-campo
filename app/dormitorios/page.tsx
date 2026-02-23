"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import ReservaModal from "../components/ReservaModal";

export default function DormitoriosPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const precioTotal = "$110,000/noche";
  const capacidadTotal = "Hasta 6 personas";

  const habitaciones = [
    {
      nombre: "Habitación Matrimonial",
      capacidad: "2 personas",
      caracteristicas: [
        "1 Cama matrimonial",
        "TV por cable",
        "WiFi gratis",
        "Aire acondicionado",
        "Armario espacioso",
      ],
      imagen: "/5.jpeg",
    },
    {
      nombre: "Habitación Familiar",
      capacidad: "4 personas",
      caracteristicas: [
        "4 Camas individuales",
        "TV por cable",
        "WiFi gratis",
        "Ventilador de techo",
        "Espacio amplio",
      ],
      imagen: "/3.jpeg",
    },
  ];

  const serviciosIncluidos = [
    "WiFi Gratis",
    "Pileta al aire libre",
    "Limpieza garantizada",
    "Estacionamiento gratuito",
    "Ropa de cama y toallas",
    "Servicio de atención 24/7",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-stone-100 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4 sm:mb-6">
            Nuestras Habitaciones
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 mb-4">
            Alojamiento completo con dos habitaciones confortables
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2 sm:gap-3">
            <p className="text-2xl sm:text-3xl font-bold text-stone-800">
              {precioTotal}
            </p>
            <p className="text-base sm:text-lg text-stone-600">
              {capacidadTotal}
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-3 sm:mt-4 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all shadow-lg"
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Descripción de las habitaciones */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-8 sm:mb-12 text-center">
            Distribución de las Habitaciones
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {habitaciones.map((habitacion, index) => (
              <div
                key={index}
                className="bg-white border-2 border-stone-200 rounded-lg overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Imagen */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={habitacion.imagen || "/habitacion-placeholder.jpg"}
                    alt={habitacion.nombre}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">
                    {habitacion.nombre}
                  </h3>
                  <p className="text-lg text-stone-600 mb-4">
                    Capacidad: {habitacion.capacidad}
                  </p>

                  <h4 className="text-lg font-semibold text-stone-800 mb-3">
                    Características:
                  </h4>
                  <ul className="space-y-2">
                    {habitacion.caracteristicas.map((car, i) => (
                      <li key={i} className="flex items-center text-stone-600">
                        <Check className="w-5 h-5 mr-2 text-stone-700" />
                        {car}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="py-12 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center">
            Servicios Incluidos en el Precio
          </h2>
          <div className="bg-white border-2 border-stone-200 rounded-lg p-5 sm:p-8">
            <ul className="grid md:grid-cols-2 gap-4">
              {serviciosIncluidos.map((servicio, i) => (
                <li key={i} className="flex items-center text-stone-600">
                  <Sparkles className="w-5 h-5 mr-3 text-stone-700" />
                  {servicio}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-stone-200 text-center">
              <p className="text-2xl font-bold text-stone-800 mb-2">
                {precioTotal}
              </p>
              <p className="text-lg text-stone-600 mb-6">
                Alojamiento completo para {capacidadTotal.toLowerCase()}
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all shadow-lg"
              >
                Reservar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Política */}
      <section className="pt-8 sm:pt-10 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-4 sm:mb-6">
            Información Importante
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            El precio incluye el alojamiento completo con acceso a ambas
            habitaciones. Todos los servicios mencionados están incluidos sin
            costo adicional. Ideal para familias o grupos de hasta 6 personas.
          </p>
        </div>
      </section>

      {/* Modal de Reserva */}
      <ReservaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        habitacion="Alojamiento Rural - Completo"
      />
    </div>
  );
}
