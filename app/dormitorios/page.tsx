import { Check, Image as ImageIcon, Sparkles } from "lucide-react";

export default function DormitoriosPage() {
  const dormitorios = [
    {
      nombre: "Habitación Standard",
      capacidad: "2 personas",
      precio: "$8,000/noche",
      caracteristicas: [
        "Cama matrimonial",
        "Baño privado",
        "TV por cable",
        "WiFi gratis",
        "Aire acondicionado",
      ],
      serviciosIncluidos: [
        "Desayuno continental",
        "WiFi de alta velocidad",
        "Limpieza diaria",
        "Estacionamiento gratuito",
      ],
    },
    {
      nombre: "Habitación Familiar",
      capacidad: "4 personas",
      precio: "$12,000/noche",
      caracteristicas: [
        "Cama matrimonial + 2 individuales",
        "Baño privado",
        "TV por cable",
        "WiFi gratis",
        "Aire acondicionado",
        "Pequeña cocina",
      ],
      serviciosIncluidos: [
        "Desayuno buffet para 4 personas",
        "WiFi de alta velocidad",
        "Limpieza diaria",
        "Estacionamiento gratuito",
        "Kit de bienvenida para niños",
      ],
    },
    {
      nombre: "Suite Deluxe",
      capacidad: "2 personas",
      precio: "$15,000/noche",
      caracteristicas: [
        "Cama king size",
        "Baño con hidromasaje",
        "TV Smart",
        "WiFi premium",
        "Aire acondicionado",
        "Balcón privado",
        "Minibar",
      ],
      serviciosIncluidos: [
        "Desayuno gourmet en habitación",
        "WiFi premium de alta velocidad",
        "Limpieza diaria premium",
        "Estacionamiento valet",
        "Servicio de concierge",
        "Late check-out sin cargo",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-stone-100 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 font-serif">
            Nuestros Dormitorios
          </h1>
          <p className="text-xl text-stone-600">
            Espacios diseñados para tu comodidad y descanso
          </p>
        </div>
      </section>

      {/* Habitaciones */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {dormitorios.map((habitacion, index) => (
            <div
              key={index}
              className="bg-white border-2 border-stone-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="md:flex">
                {/* Imagen placeholder */}
                <div className="md:w-1/2 bg-linear-to-br from-stone-200 to-stone-100 h-64 md:h-auto flex items-center justify-center">
                  <ImageIcon className="w-24 h-24 text-stone-400" />
                </div>

                {/* Contenido */}
                <div className="md:w-1/2 p-8">
                  <h2 className="text-3xl font-bold text-stone-800 mb-2 font-serif">
                    {habitacion.nombre}
                  </h2>
                  <p className="text-lg text-stone-600 mb-4">
                    Capacidad: {habitacion.capacidad}
                  </p>
                  <p className="text-2xl font-bold text-stone-800 mb-6">
                    {habitacion.precio}
                  </p>

                  <h3 className="text-lg font-semibold text-stone-800 mb-3">
                    Características:
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {habitacion.caracteristicas.map((car, i) => (
                      <li key={i} className="flex items-center text-stone-600">
                        <Check className="w-5 h-5 mr-2 text-stone-700" />
                        {car}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-stone-200 pt-4 mb-6">
                    <h3 className="text-lg font-semibold text-stone-800 mb-3">
                      Servicios Incluidos:
                    </h3>
                    <ul className="space-y-2">
                      {habitacion.serviciosIncluidos.map((servicio, i) => (
                        <li
                          key={i}
                          className="flex items-center text-stone-600"
                        >
                          <Sparkles className="w-5 h-5 mr-2 text-stone-700" />
                          {servicio}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/contacto"
                    className="inline-block px-6 py-3 text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all font-semibold"
                  >
                    Reservar Ahora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nota importante */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 font-serif">
            Política de Servicios
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Todos los servicios están incluidos en el precio de la habitación.
            No vendemos servicios por separado, cada dormitorio cuenta con su
            paquete completo de amenidades según la categoría seleccionada.
          </p>
        </div>
      </section>
    </div>
  );
}
