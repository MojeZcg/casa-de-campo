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
      <section className="relative pt-24 pb-12 flex items-center justify-center px-4 sm:px-6 bg-linear-to-br from-stone-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4 sm:mb-6 font-serif">
            Alojamiento Rural
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-stone-600 mb-6 sm:mb-8 italic">
            Ubicado en San Rafael, Mendoza, Argentina.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Descubre la tranquilidad del campo en nuestro acogedor alojamiento
            rural. Un lugar donde el tiempo se detiene y la naturaleza te
            abraza.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link
              href="/dormitorios"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Ver Dormitorios
            </Link>

            <Link
              href="/servicios"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-stone-800 bg-white border-2 border-stone-800 rounded-lg hover:bg-stone-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Nuestros Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Galería de la Propiedad */}
      <section className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 text-center mb-3 sm:mb-4 font-serif">
            Conoce Nuestra Propiedad
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 text-center mb-8 sm:mb-12 px-4">
            Un espacio único para disfrutar de la tranquilidad del campo
          </p>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Foto Principal - Foto 1 */}
            <div className="md:row-span-2 relative h-[400px] sm:h-[500px] md:h-full overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl group">
              <Image
                src="/1.jpeg"
                alt="Vista principal de la casa de campo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4 sm:p-6">
                <p className="text-white text-lg sm:text-xl font-semibold">
                  Vista Exterior
                </p>
              </div>
            </div>

            {/* Foto 2 */}
            <div className="relative h-[180px] sm:h-[240px] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl group">
              <Image
                src="/2.jpeg"
                alt="Interior acogedor de la casa rural"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3 sm:p-4">
                <p className="text-white text-base sm:text-lg font-semibold">
                  Interior Acogedor
                </p>
              </div>
            </div>

            {/* Foto 4 */}
            <div className="relative h-[180px] sm:h-[240px] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl group">
              <Image
                src="/4.jpeg"
                alt="Espacios de la casa de campo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3 sm:p-4">
                <p className="text-white text-base sm:text-lg font-semibold">
                  Espacios Únicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserva Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-serif">
            Reserva tu Estadía
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-stone-200 px-4">
            Alojamiento completo • 2 Habitaciones • Hasta 6 personas
          </p>
          <div className="mb-6 sm:mb-8">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              $110,000/noche
            </p>
            <p className="text-base sm:text-lg text-stone-300 px-4">
              Incluye todas las comodidades y servicios
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold text-stone-800 bg-white rounded-lg hover:bg-stone-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
            Reservar Ahora
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 text-center mb-10 sm:mb-12 md:mb-16 font-serif">
            Experiencia Rural Auténtica
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-5 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-stone-700 flex items-center justify-center">
                <HomeIcon className="w-14 h-14 sm:w-16 sm:h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2 sm:mb-3">
                Comodidad Rural
              </h3>
              <p className="text-sm sm:text-base text-stone-600">
                Habitaciones acogedoras con todas las comodidades modernas en un
                entorno tradicional.
              </p>
            </div>

            <div className="text-center p-5 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-stone-700 flex items-center justify-center">
                <Sun className="w-14 h-14 sm:w-16 sm:h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2 sm:mb-3">
                Naturaleza Pura
              </h3>
              <p className="text-sm sm:text-base text-stone-600">
                Rodeado de campos verdes y aire fresco, perfecto para
                desconectar de la ciudad.
              </p>
            </div>

            <div className="text-center p-5 sm:p-6 bg-white rounded-lg shadow-md sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-stone-700 flex items-center justify-center">
                <Smile className="w-14 h-14 sm:w-16 sm:h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2 sm:mb-3">
                Atención Personalizada
              </h3>
              <p className="text-sm sm:text-base text-stone-600">
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
