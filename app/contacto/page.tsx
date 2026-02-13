"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Map } from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-stone-100 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 font-serif">
            Contacto
          </h1>
          <p className="text-xl text-stone-600">
            Estamos aquí para ayudarte. Escríbenos o visítanos
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-stone-800 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-stone-800 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-stone-800 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-stone-800 focus:outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 text-lg font-semibold text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <MapPin className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">
                      Dirección
                    </h3>
                    <p className="text-stone-600">Calle Andreoni s/n</p>
                    <p className="text-stone-600">
                      Colonia Elena - Cuadro Nacional
                    </p>
                    <p className="text-stone-600">San Rafael, Mendoza</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <Phone className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">
                      Teléfono
                    </h3>
                    <p className="text-stone-600">2615064907</p>
                    <p className="text-stone-600">2604595311</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <Mail className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Email</h3>
                    <p className="text-stone-600">
                      alojamientorural11@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <Clock className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">
                      Horario
                    </h3>
                    <p className="text-stone-600">Lunes a Domingo</p>
                    <p className="text-stone-600">9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Mapa placeholder */}
              <div className="mt-8 bg-stone-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <Map className="w-16 h-16 mx-auto mb-2 text-stone-400" />
                  <p className="text-stone-600 text-sm">Mapa de ubicación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
