export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 min-h-screen bg-stone-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/1.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <p className="text-white/90 text-sm sm:text-base tracking-[0.25em] uppercase mb-3">
            San Rafael · Mendoza
          </p>
          <h1 className="text-white text-3xl sm:text-5xl font-bold leading-tight">
            Alojamiento Rural
          </h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg">
            Cargando experiencia...
          </p>
        </div>
      </div>
    </div>
  );
}
