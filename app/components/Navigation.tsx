"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { label: "INICIO", href: "/" },
    { label: "SERVICIOS", href: "/servicios" },
    { label: "DORMITORIOS", href: "/dormitorios" },
    { label: "LOCALIZACIÓN", href: "/localizacion" },
    { label: "CONTACTO", href: "/contacto" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif font-bold text-stone-800"
          >
            Alojamiento Rural - San Rafael
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
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
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-stone-800" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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
      </div>
    </nav>
  );
}
