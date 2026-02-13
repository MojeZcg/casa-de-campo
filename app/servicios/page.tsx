import { Wifi, MapPin, Tv, Flame, RefreshCw, Waves } from "lucide-react";

export default function ServiciosPage() {
  const servicios = [
    {
      titulo: "WiFi Gratis",
      descripcion: "Internet en todas las áreas",
      icono: <Wifi size={42} />,
    },
    {
      titulo: "Estacionamiento",
      descripcion: "Amplio estacionamiento privado y seguro",
      icono: <MapPin size={42} />,
    },
    {
      titulo: "Pileta",
      descripcion: "Pileta para disfrutar y relajarse",
      icono: <Waves size={42} />,
    },
    {
      titulo: "TV",
      descripcion:
        "Televisión con canales nacionales e internacionales. Directv incluido.",
      icono: <Tv size={42} />,
    },
    {
      titulo: "Parrilla",
      descripcion: "Zona de parrilla para disfrutar al aire libre",
      icono: <Flame size={42} />,
    },
    {
      titulo: "Servicio de Lavandería",
      descripcion: "Se puede solicitar el Servicio de lavandería.",
      icono: <RefreshCw size={42} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-stone-100 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 font-serif">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-stone-600">
            Todo lo que necesitas para una estadía perfecta
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className=" px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-white border-2 border-stone-200 rounded-lg p-8 hover:shadow-xl transition-all hover:border-stone-400"
              >
                <div className="w-16 h-16 mb-3 text-stone-700">
                  {servicio.icono}
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">
                  {servicio.titulo}
                </h3>
                <p className="text-stone-600">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 font-serif">
            ¿Listo para tu escapada rural?
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Reserva ahora y disfruta de todos nuestros servicios
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
