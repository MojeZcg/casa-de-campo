import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto  py-12">
        <div className="grid md:grid-cols-3 gap-20">
          {/* Sobre Nosotros */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Alojamiento Rural - San Rafael
            </h3>
            <p className="text-stone-300 mb-4 leading-relaxed">
              Alojamiento rural en el corazón de Mendoza. Experimenta la
              tranquilidad del campo con todas las comodidades modernas.
            </p>
            <p className="text-stone-400 text-sm">
              Un lugar donde el tiempo se detiene y la naturaleza te abraza.
            </p>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-stone-400 shrink-0 mt-1" />
                <div>
                  <p className="text-stone-300">Calle Andreoni s/n</p>
                  <p className="text-stone-300">San Rafael, Mendoza</p>
                  <p className="text-stone-400 text-sm">Argentina</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-stone-400 shrink-0" />
                <div>
                  <a
                    href="tel:+542615064907"
                    className="text-stone-300 hover:text-white transition"
                  >
                    2615064907
                  </a>
                  <span className="text-stone-500 mx-2">•</span>
                  <a
                    href="tel:+542604595311"
                    className="text-stone-300 hover:text-white transition"
                  >
                    2604595311
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-stone-400 shrink-0" />
                <a
                  href="mailto:alojamientorural11@gmail.com"
                  className="text-stone-300 hover:text-white transition"
                >
                  alojamientorural11@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-stone-400    shrink-0" />
                <div className="text-stone-300">
                  Atención{" "}
                  <span className="text-amber-400 font-semibold">24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-stone-300 hover:text-white transition"
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="block text-stone-300 hover:text-white transition"
              >
                Servicios
              </Link>
              <Link
                href="/dormitorios"
                className="block text-stone-300 hover:text-white transition"
              >
                Dormitorios
              </Link>
              <Link
                href="/localizacion"
                className="block text-stone-300 hover:text-white transition"
              >
                Localización
              </Link>
              <Link
                href="/contacto"
                className="block text-stone-300 hover:text-white transition"
              >
                Contacto
              </Link>
            </nav>

            <div className="mt-6">
              <p className="text-stone-400 text-sm mb-2">Ubicación</p>
              <p className="text-stone-300 text-sm">
                Coordenadas GPS:
                <br />
                <span className="text-stone-400">-34.575202, -68.098789</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Alojamiento Rural. Todos los derechos
              reservados.
            </p>
            <p className="text-[11.5px] text-gray-400">
              Diseñada y Desarrollada por{" "}
              <Link
                title="Desarrollador de DelRio Internet Walter J. Montenegro"
                target="_blank"
                href="https://www.linkedin.com/in/montenegrowalter/"
                className="text-white"
              >
                Walter J. Montenegro
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
