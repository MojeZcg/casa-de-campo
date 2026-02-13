"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Home as HomeIcon, Sun, Smile, Calendar } from "lucide-react";
import ReservaModal from "./components/ReservaModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-linear-to-br from-stone-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-stone-800 mb-6 font-serif">
            Alojamiento Rural
          </h1>
          <p className="text-2xl md:text-3xl text-stone-600 mb-8 italic">
            Ubicado en San Rafael, Mendoza, Argentina.
          </p>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Descubre la tranquilidad del campo en nuestro acogedor alojamiento
            rural. Un lugar donde el tiempo se detiene y la naturaleza te
            abraza.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/dormitorios"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Ver Dormitorios
            </Link>

            <Link
              href="/servicios"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-stone-800 bg-white border-2 border-stone-800 rounded-lg hover:bg-stone-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Nuestros Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Galería de la Propiedad */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 text-center mb-4 font-serif">
            Conoce Nuestra Propiedad
          </h2>
          <p className="text-xl text-stone-600 text-center mb-12">
            Un espacio único para disfrutar de la tranquilidad del campo
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Foto Principal - Foto 1 */}
            <div className="md:row-span-2 relative h-125 md:h-full overflow-hidden rounded-2xl shadow-2xl group">
              <Image
                src="/1.jpeg"
                alt="Vista principal de la casa de campo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl font-semibold">
                  Vista Exterior
                </p>
              </div>
            </div>

            {/* Foto 2 */}
            <div className="relative h-60 overflow-hidden rounded-2xl shadow-xl group">
              <Image
                src="/2.jpeg"
                alt="Interior acogedor de la casa rural"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-lg font-semibold">
                  Interior Acogedor
                </p>
              </div>
            </div>

            {/* Foto 4 */}
            <div className="relative h-60 overflow-hidden rounded-2xl shadow-xl group">
              <Image
                src="/4.jpeg"
                alt="Espacios de la casa de campo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-lg font-semibold">
                  Espacios Únicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserva Section */}
      <section className="py-20 px-6 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Reserva tu Estadía
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-stone-200">
            Alojamiento completo • 2 Habitaciones • Hasta 6 personas
          </p>
          <div className="mb-8">
            <p className="text-5xl font-bold mb-4">$110,000/noche</p>
            <p className="text-lg text-stone-300">
              Incluye todas las comodidades y servicios
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-stone-800 bg-white rounded-lg hover:bg-stone-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            <Calendar className="w-6 h-6 mr-3" />
            Reservar Ahora
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 text-center mb-16 font-serif">
            Experiencia Rural Auténtica
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 text-stone-700 flex items-center justify-center">
                <HomeIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">
                Comodidad Rural
              </h3>
              <p className="text-stone-600">
                Habitaciones acogedoras con todas las comodidades modernas en un
                entorno tradicional.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 text-stone-700 flex items-center justify-center">
                <Sun className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">
                Naturaleza Pura
              </h3>
              <p className="text-stone-600">
                Rodeado de campos verdes y aire fresco, perfecto para
                desconectar de la ciudad.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 text-stone-700 flex items-center justify-center">
                <Smile className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">
                Atención Personalizada
              </h3>
              <p className="text-stone-600">
                Servicio cálido y familiar que te hará sentir como en casa.
              </p>
            </div>
          </div>
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
