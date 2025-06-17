"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckSquare } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Características", href: "/features" },
    { name: "Precios", href: "/pricing" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <CheckSquare className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">QuickStart</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
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
      </div>
    </header>
  );
}
