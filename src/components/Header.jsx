"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckSquare, Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Manejar tecla Escape para cerrar el menú
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const navigation = [
    { name: "Inicio", href: "/", id: "inicio" },
    { name: "Características", href: "/features", id: "caracteristics-link" },
    { name: "Precios", href: "/pricing", id: "precio" },
    { name: "Nosotros", href: "/about", id: "nosotros" },
    { name: "Contacto", href: "/contact", id: "contacto" },
  ];

  return (
    <header
      className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      role="banner"
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <CheckSquare className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">QuickStart</span>
        </Link>

        <nav
          className="hidden md:flex gap-6"
          role="navigation"
          aria-label="Menú principal"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              id={item.id}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === item.href
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex items-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6 text-blue-600" />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white border-t shadow-lg px-6 py-4 absolute w-full left-0 top-16 z-50 animate-fade-in"
          role="navigation"
          aria-label="Menú principal móvil"
        >
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  id={item.id}
                  className={`block text-base font-medium transition-colors py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 ${
                    location.pathname === item.href
                      ? "text-blue-600 font-bold"
                      : "text-gray-700"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
