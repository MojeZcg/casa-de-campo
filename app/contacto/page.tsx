"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import Link from "next/link";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          mensaje: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        // Asegurarse de que el error sea una cadena de texto
        const errorMessage =
          typeof data.error === "string"
            ? data.error
            : data.error?.message || "Error al enviar el mensaje";
        setError(errorMessage);
      }
    } catch (err) {
      console.error("Error en contacto:", err);
      setError("Error de conexión. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
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
      <section className="bg-linear-to-br from-stone-100 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4 sm:mb-6">
            Contacto
          </h1>
          <p className="text-lg sm:text-xl text-stone-600">
            Estamos aquí para ayudarte. Escríbenos o visítanos
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Formulario */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-4 sm:mb-6">
                Envíanos un mensaje
              </h2>

              {success && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-6 text-green-800">
                  ¡Mensaje enviado exitosamente! Te responderemos pronto.
                </div>
              )}

              {error && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-6 text-red-800">
                  {error}
                </div>
              )}

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
                  disabled={loading}
                  className="w-full px-6 py-4 text-lg font-semibold text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl disabled:bg-stone-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-4 sm:mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-stone-800 mb-1">
                      Dirección
                    </h3>
                    <p className="text-sm sm:text-base text-stone-600">
                      Calle Andreoni s/n
                    </p>
                    <p className="text-sm sm:text-base text-stone-600">
                      Colonia Elena - Cuadro Nacional
                    </p>
                    <p className="text-sm sm:text-base text-stone-600">
                      San Rafael, Mendoza
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-stone-800 mb-1">
                      Teléfono
                    </h3>
                    <p className="text-sm sm:text-base text-stone-600">
                      2615064907
                    </p>
                    <p className="text-sm sm:text-base text-stone-600">
                      2616951981
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-stone-800 mb-1">
                      Email
                    </h3>
                    <p className="text-sm sm:text-base text-stone-600 break-all">
                      alojamientorural11@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-stone-800 mb-1">
                      Horario
                    </h3>
                    <p className="text-sm sm:text-base text-stone-600">
                      Atención{" "}
                      <span className="text-amber-500 font-semibold">24/7</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Mapa de Google Maps */}
              <div className="mt-6 sm:mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg h-48 sm:h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.7!2d-68.098789!3d-34.575202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzMwLjciUyA2OMKwMDUnNTUuNiJX!5e0!3m2!1ses!2sar!4v1234567890!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Casa Campo Jorge"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <Link
                    href="https://maps.app.goo.gl/oUqvt1vqWDKqEeWGA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-base font-semibold text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Cómo llegar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
