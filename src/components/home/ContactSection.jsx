import React from "react";
import ContactForm from "../contact/ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
              Contáctanos
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.
              Completa el formulario y te responderemos lo antes posible.
            </p>
          </div>
          <div className="w-full max-w-md mx-auto mt-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
                Envíanos un mensaje
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
