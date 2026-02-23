"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "INICIO", href: "/" },
    { label: "SERVICIOS", href: "/servicios" },
    { label: "DORMITORIOS", href: "/dormitorios" },
    { label: "LOCALIZACIÓN", href: "/localizacion" },
    { label: "CONTACTO", href: "/contacto" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className=" relative px-4 sm:px-6 py-1">
        <Link
          href="/"
          className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 font-bold text-stone-800 leading-tight tracking-wide transition-opacity hover:opacity-80"
        >
          <span className="hidden sm:inline text-base md:text-xl">
            <span className="block">Virgen de Lourdes</span>
            <span className="block text-sm md:text-lg font-semibold text-stone-700">
              Alojamiento Rural
            </span>
          </span>
          <span className="sm:hidden text-base font-semibold">
            Alojamiento Rural
          </span>
        </Link>
        <div className="flex justify-center items-center h-16 sm:h-20">
          {/* Logo */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 lg:px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  pathname === item.href
                    ? "bg-stone-800 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-stone-800" />
            ) : (
              <Menu className="w-6 h-6 text-stone-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-stone-200 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all mb-1 ${
                  pathname === item.href
                    ? "bg-stone-800 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
