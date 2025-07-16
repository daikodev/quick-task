import React from "react";
import { Button } from "../ui/button";

export default function ContactForm() {
  return (
    <div className="w-full max-w-md mx-auto">
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Teléfono <span className="text-gray-500 text-xs">(opcional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="+34 600 000 000"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Asunto
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Asunto de tu mensaje"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="¿En qué podemos ayudarte?"
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700"
          aria-label="Enviar mensaje de contacto"
        >
          Enviar mensaje
        </Button>

        <p className="text-xs text-gray-500 text-center mt-2">
          Al enviar este formulario, aceptas nuestra{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Política de privacidad
          </a>
          .
        </p>
      </form>
    </div>
  );
}
