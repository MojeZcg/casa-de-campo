"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface ReservaModalProps {
  isOpen: boolean;
  onClose: () => void;
  habitacion: string;
}

export default function ReservaModal({
  isOpen,
  onClose,
  habitacion,
}: ReservaModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fechaEntrada: "",
    fechaSalida: "",
    huespedes: "1",
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
      const response = await fetch("/api/reserva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          habitacion,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setFormData({
            nombre: "",
            email: "",
            telefono: "",
            fechaEntrada: "",
            fechaSalida: "",
            huespedes: "1",
            mensaje: "",
          });
        }, 3000);
      } else {
        // Asegurarse de que el error sea una cadena de texto
        const errorMessage =
          typeof data.error === "string"
            ? data.error
            : data.error?.message || "Error al enviar la reserva";
        setError(errorMessage);
      }
    } catch (err) {
      console.error("Error en reserva:", err);
      setError("Error de conexión. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-stone-200 p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl flex justify-between items-start sm:items-center gap-3 z-10">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 leading-tight">
              Reservar {habitacion}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Completa el formulario para solicitar tu reserva
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-800 transition-colors p-1.5 sm:p-2 hover:bg-stone-100 rounded-full shrink-0"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          {success ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-green-800 text-base sm:text-lg font-semibold mb-2">
                ¡Reserva enviada exitosamente!
              </p>
              <p className="text-sm sm:text-base text-green-700">
                Te hemos enviado un correo de confirmación. Nos pondremos en
                contacto contigo pronto.
              </p>
            </div>
          ) : (
            <>
              {error && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-3 sm:p-4 text-sm sm:text-base text-red-800">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-300 rounded-lg focus:border-stone-800 focus:outline-none focus:bg-white transition-all text-stone-800 placeholder:text-stone-400"
                    placeholder="Juan Pérez"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-300 rounded-lg focus:border-stone-800 focus:outline-none focus:bg-white transition-all text-stone-800 placeholder:text-stone-400"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-300 rounded-lg focus:border-stone-800 focus:outline-none focus:bg-white transition-all text-stone-800 placeholder:text-stone-400"
                    placeholder="2615064907"
                  />
                </div>

                <div>
                  <label
                    htmlFor="huespedes"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Número de huéspedes *
                  </label>
                  <select
                    id="huespedes"
                    name="huespedes"
                    value={formData.huespedes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-300 rounded-lg focus:border-stone-800 focus:outline-none focus:bg-white transition-all text-stone-800"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fechaEntrada"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Fecha de entrada *
                  </label>
                  <input
                    type="date"
                    id="fechaEntrada"
                    name="fechaEntrada"
                    value={formData.fechaEntrada}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-300 rounded-lg focus:border-stone-800 focus:outline-none focus:bg-white transition-all text-stone-800"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="fechaSalida"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Fecha de salida *
                  </label>
                  <input
                    type="date"
                    id="fechaSalida"
                    name="fechaSalida"
                    value={formData.fechaSalida}
                    onChange={handleChange}
                    min={
                      formData.fechaEntrada ||
                      new Date().toISOString().split("T")[0]
                    }
                    className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-300 rounded-lg focus:border-stone-800 focus:outline-none focus:bg-white transition-all text-stone-800"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Mensaje o solicitudes especiales
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-300 rounded-lg focus:border-stone-800 focus:outline-none focus:bg-white resize-none transition-all text-stone-800 placeholder:text-stone-400"
                  placeholder="Ej: Llegada tarde, necesito cuna para bebé, etc."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border-2 border-stone-300 text-stone-700 rounded-lg hover:bg-stone-100 transition-all font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-6 py-3 text-white bg-stone-800 rounded-lg hover:bg-stone-700 transition-all font-semibold disabled:bg-stone-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {loading ? "Enviando..." : "Enviar Reserva"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
