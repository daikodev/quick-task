import React from "react";
const faqs = [
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer:
      "Sí, puedes actualizar o degradar tu plan en cualquier momento desde tu panel de control.",
  },
  {
    question: "¿Hay descuentos para pagos anuales?",
    answer:
      "Sí, ofrecemos un 20% de descuento en todos los planes cuando pagas anualmente.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos todas las tarjetas de crédito principales, PayPal y transferencias bancarias para planes empresariales.",
  },
];

export default function FaqSection() {
  return (
    <div className="mx-auto max-w-3xl mt-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">
        Preguntas frecuentes
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
