import Link from "next/link";
import { Home as HomeIcon, Sun, Smile } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-linear-to-br from-stone-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-stone-800 mb-6 font-serif">
            Casa Campo Jorge
          </h1>
          <p className="text-2xl md:text-3xl text-stone-600 mb-8 italic">
            Alojamiento Rural
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
    </div>
  );
}
