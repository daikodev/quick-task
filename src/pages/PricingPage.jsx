import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingCard from "../components/pricing/PricingCard";
import FaqSection from "../components/pricing/FaqSection";

const pricingPlans = [
  {
    name: "Gratis",
    price: "€0",
    period: "para siempre",
    description: "Perfecto para uso personal",
    features: [
      "Hasta 5 listas de tareas",
      "Recordatorios básicos",
      "Acceso móvil",
      "Sincronización básica",
    ],
    buttonText: "Comenzar gratis",
  },
  {
    name: "Pro",
    price: "€9",
    period: "por mes",
    description: "Para profesionales y equipos pequeños",
    features: [
      "Tareas y listas ilimitadas",
      "Recordatorios avanzados",
      "Sincronización completa",
      "Etiquetas y filtros",
      "Temporizador Pomodoro",
      "Reportes de productividad",
    ],
    buttonText: "Suscribirse a Pro",
  },
  {
    name: "Empresas",
    price: "€19",
    period: "por usuario/mes",
    description: "Para equipos y organizaciones",
    features: [
      "Todo lo incluido en Pro",
      "Tareas compartidas",
      "Administración de equipos",
      "Integraciones avanzadas",
      "Soporte prioritario",
      "Análisis empresarial",
    ],
    buttonText: "Contactar ventas",
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
                  Planes simples y transparentes
                </h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Elige el plan que mejor se adapte a tus necesidades. Todos los
                  planes incluyen soporte 24/7.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} isPopular={index === 1} />
              ))}
            </div>

            <FaqSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
